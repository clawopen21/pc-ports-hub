// Native PC Ports - Main Application

// Initialize the app
document.addEventListener('DOMContentLoaded', () => {
    renderGamesGrid();
    setupFilters();
});

// Render games grid
function renderGamesGrid(filter = 'all') {
    const grid = document.getElementById('games-grid');
    if (!grid) return;

    let filteredGames = gamesData;
    if (filter !== 'all') {
        filteredGames = gamesData.filter(g => 
            g.originalConsole.toLowerCase().includes(filter.toLowerCase())
        );
    }

    grid.innerHTML = filteredGames.map((game, index) => 
        createGameCard(game, index)
    ).join('');
}

// Create game card HTML
function createGameCard(game, index = 0) {
    const consoleInfo = consoles[game.originalConsole] || { color: '#666', icon: '🎮' };
    const platformBadges = [];
    
    if (game.platforms.windows) platformBadges.push('Windows');
    if (game.platforms.linux) platformBadges.push('Linux');
    if (game.platforms.mac) platformBadges.push('macOS');
    if (game.platforms.steamDeck) platformBadges.push('Steam Deck');

    const featureTags = [];
    if (game.features.ultrawide) featureTags.push('Ultrawide');
    if (game.features.highFps) featureTags.push('60fps+');
    if (game.features.mods) featureTags.push('Mods');
    if (game.features.hdTextures) featureTags.push('HD Textures');

    // Progress badge configuration
    const progressConfig = {
        'Complete': { color: 'bg-neon-green/20 text-neon-green border-neon-green/50', icon: '✓', pulse: false },
        'Beta': { color: 'bg-yellow-500/20 text-yellow-400 border-yellow-500/50', icon: 'β', pulse: true },
        'Alpha': { color: 'bg-orange-500/20 text-orange-400 border-orange-500/50', icon: 'α', pulse: true },
        'WIP': { color: 'bg-blue-500/20 text-blue-400 border-blue-500/50', icon: '⚙', pulse: true }
    };
    
    const progress = progressConfig[game.status] || progressConfig['WIP'];
    const pulseClass = progress.pulse ? 'badge-pulse' : '';
    
    // Stagger delay
    const staggerDelay = index * 0.05;

    return `
        <article class="game-card stagger-in group border border-retro-gray rounded-lg overflow-hidden hover:border-neon-green bg-retro-dark cursor-pointer" 
                 style="animation-delay: ${staggerDelay}s"
                 onclick="window.location.href='game.html?id=${game.id}'">
            <div class="p-5">
                <div class="flex items-start justify-between mb-3">
                    <div class="flex-1 min-w-0">
                        <span class="text-xs text-gray-500 flex items-center gap-1 mb-1">
                            <span class="feature-icon inline-block">${consoleInfo.icon}</span>
                            ${game.originalConsole} (${game.year})
                        </span>
                        <h3 class="font-medium text-white text-lg leading-tight group-hover:text-neon-green transition-colors truncate">
                            ${game.name}
                        </h3>
                    </div>
                    <span class="flex-shrink-0 ml-2 text-xs ${progress.color} ${pulseClass} font-medium border px-2 py-1 rounded flex items-center gap-1">
                        <span>${progress.icon}</span>
                        ${game.status}
                    </span>
                </div>
                
                <p class="text-sm text-gray-400 mb-4 line-clamp-2">
                    ${game.description}
                </p>

                <div class="flex flex-wrap gap-2 mb-4">
                    ${featureTags.map(tag => `
                        <span class="text-xs bg-neon-green/10 text-neon-green px-2 py-1 rounded hover:bg-neon-green/20 transition-colors cursor-default">
                            ${tag}
                        </span>
                    `).join('')}
                </div>

                <div class="flex flex-wrap gap-2 mb-4">
                    ${platformBadges.map(p => `
                        <span class="text-xs bg-retro-gray text-gray-400 px-2 py-1 rounded hover:bg-retro-gray/80 transition-colors">
                            ${p}
                        </span>
                    `).join('')}
                </div>

                <div class="flex items-center gap-3 pt-4 border-t border-retro-gray">
                    <a href="${game.githubUrl}" 
                       target="_blank"
                       rel="noopener noreferrer"
                       onclick="event.stopPropagation()"
                       class="btn-snap flex items-center gap-2 text-sm text-white hover:text-neon-green transition-colors">
                        <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                        </svg>
                        Source
                    </a>
                    ${game.videoUrl ? `
                        <a href="${game.videoUrl}" 
                           target="_blank"
                           rel="noopener noreferrer"
                           onclick="event.stopPropagation()"
                           class="btn-snap flex items-center gap-2 text-sm text-gray-400 hover:text-red-500 transition-colors">
                            <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/>
                            </svg>
                            Video
                        </a>
                    ` : ''}
                    <span class="ml-auto text-sm text-neon-green group-hover:translate-x-1 transition-transform">
                        Details →
                    </span>
                </div>
            </div>
        </article>
    `;
}

// Setup filter buttons
function setupFilters() {
    const filterButtons = document.querySelectorAll('button');
    filterButtons.forEach(btn => {
        if (btn.textContent === 'All' || btn.textContent === 'N64' || btn.textContent === 'PS2') {
            btn.addEventListener('click', () => {
                // Update active state
                filterButtons.forEach(b => {
                    if (b.textContent === 'All' || b.textContent === 'N64' || b.textContent === 'PS2') {
                        b.classList.remove('border-neon-green', 'text-neon-green');
                        b.classList.add('border-gray-700', 'text-gray-400');
                    }
                });
                btn.classList.remove('border-gray-700', 'text-gray-400');
                btn.classList.add('border-neon-green', 'text-neon-green');

                // Apply filter
                const filter = btn.textContent === 'All' ? 'all' : btn.textContent;
                renderGamesGrid(filter);
            });
        }
    });
}

// Game detail page logic
function loadGameDetails() {
    const urlParams = new URLSearchParams(window.location.search);
    const gameId = urlParams.get('id');
    
    if (!gameId) return;
    
    const game = gamesData.find(g => g.id === gameId);
    if (!game) {
        document.body.innerHTML = '<div class="text-center py-20 text-white">Game not found</div>';
        return;
    }

    document.title = `${game.name} - Native PC Ports`;
    
    // Populate page with game data
    const nameEl = document.getElementById('game-name');
    const descEl = document.getElementById('game-description');
    const consoleEl = document.getElementById('game-console');
    const githubEl = document.getElementById('github-link');
    const videoEl = document.getElementById('video-link');
    
    if (nameEl) nameEl.textContent = game.name;
    if (descEl) descEl.textContent = game.description;
    if (consoleEl) consoleEl.textContent = `${game.originalConsole} (${game.year})`;
    if (githubEl) githubEl.href = game.githubUrl;
    if (videoEl && game.videoUrl) {
        videoEl.href = game.videoUrl;
        videoEl.style.display = 'flex';
    } else if (videoEl) {
        videoEl.style.display = 'none';
    }

    // Populate features
    const featuresList = document.getElementById('features-list');
    if (featuresList) {
        const features = [];
        if (game.features.ultrawide) features.push({ name: 'Ultrawide Support', desc: '21:9 and 32:9 aspect ratios supported' });
        if (game.features.highFps) features.push({ name: 'High Frame Rate', desc: '60fps, 120fps, or uncapped' });
        if (game.features.mods) features.push({ name: 'Mod Support', desc: 'Built-in mod loader available' });
        if (game.features.hdTextures) features.push({ name: 'HD Textures', desc: 'Community texture packs supported' });
        if (game.features.steamDeck) features.push({ name: 'Steam Deck', desc: `${game.features.steamDeck} compatibility` });

        featuresList.innerHTML = features.map(f => `
            <div class="flex items-start gap-3 p-4 border border-retro-gray rounded-lg">
                <div class="w-2 h-2 bg-neon-green rounded-full mt-2 flex-shrink-0"></div>
                <div>
                    <div class="font-medium text-white">${f.name}</div>
                    <div class="text-sm text-gray-400">${f.desc}</div>
                </div>
            </div>
        `).join('');
    }

    // Populate platforms
    const platformsList = document.getElementById('platforms-list');
    if (platformsList) {
        const platforms = [];
        if (game.platforms.windows) platforms.push({ name: 'Windows', icon: '💻' });
        if (game.platforms.mac) platforms.push({ name: 'macOS', icon: '🍎' });
        if (game.platforms.linux) platforms.push({ name: 'Linux', icon: '🐧' });
        if (game.platforms.steamDeck) platforms.push({ name: 'Steam Deck', icon: '🎮' });

        platformsList.innerHTML = platforms.map(p => `
            <div class="flex items-center gap-2 p-3 bg-retro-dark border border-retro-gray rounded-lg">
                <span>${p.icon}</span>
                <span class="text-sm">${p.name}</span>
            </div>
        `).join('');
    }

    // Populate tutorials
    const tutorialsSection = document.getElementById('tutorials-section');
    const youtubeTutorials = document.getElementById('youtube-tutorials');
    const youtubeList = document.getElementById('youtube-list');
    const writtenTutorials = document.getElementById('written-tutorials');
    const writtenList = document.getElementById('written-list');
    
    if (game.tutorials && tutorialsSection) {
        let hasTutorials = false;
        
        // YouTube tutorials
        if (game.tutorials.youtube && game.tutorials.youtube.length > 0 && youtubeList) {
            hasTutorials = true;
            youtubeTutorials.classList.remove('hidden');
            youtubeList.innerHTML = game.tutorials.youtube.map(t => `
                <a href="${t.url}" target="_blank" rel="noopener noreferrer"
                   class="flex items-center gap-3 p-3 border border-retro-gray rounded-lg hover:border-red-500 hover:bg-red-500/5 transition-all group">
                    <svg class="w-5 h-5 text-red-500 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/>
                    </svg>
                    <div class="flex-1 min-w-0">
                        <div class="text-sm text-white group-hover:text-red-400 transition-colors truncate">${t.title}</div>
                        <div class="text-xs text-gray-500">by ${t.author}</div>
                    </div>
                    <span class="text-xs text-gray-600 group-hover:text-red-400">↗</span>
                </a>
            `).join('');
        }
        
        // Written tutorials
        if (game.tutorials.written && game.tutorials.written.length > 0 && writtenList) {
            hasTutorials = true;
            writtenTutorials.classList.remove('hidden');
            writtenList.innerHTML = game.tutorials.written.map(t => `
                <a href="${t.url}" target="_blank" rel="noopener noreferrer"
                   class="flex items-center gap-3 p-3 border border-retro-gray rounded-lg hover:border-neon-green hover:bg-neon-green/5 transition-all group">
                    <svg class="w-5 h-5 text-neon-green flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>
                    </svg>
                    <div class="flex-1 min-w-0">
                        <div class="text-sm text-white group-hover:text-neon-green transition-colors truncate">${t.title}</div>
                        <div class="text-xs text-gray-500">${t.site}</div>
                    </div>
                    <span class="text-xs text-gray-600 group-hover:text-neon-green">↗</span>
                </a>
            `).join('');
        }
        
        if (hasTutorials) {
            tutorialsSection.classList.remove('hidden');
        }
    }
}

// Run detail page logic if on game.html
if (window.location.pathname.includes('game.html')) {
    document.addEventListener('DOMContentLoaded', loadGameDetails);
}

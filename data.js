// Game data for Native PC Ports
const gamesData = [
    {
        id: "sm64",
        name: "Super Mario 64",
        originalConsole: "Nintendo 64",
        year: 1996,
        projectName: "sm64pc / sm64ex",
        description: "Full decompilation with 60fps, widescreen, and mod support.",
        githubUrl: "https://github.com/sm64-port/sm64-port",
        videoUrl: "https://www.youtube.com/watch?v=vwmkMjYFO-k",
        status: "Complete",
        features: {
            ultrawide: true,
            highFps: true,
            steamDeck: "Verified",
            mods: true,
            hdTextures: true
        },
        platforms: {
            windows: true,
            mac: true,
            linux: true,
            steamDeck: true
        }
    },
    {
        id: "oot",
        name: "The Legend of Zelda: Ocarina of Time",
        originalConsole: "Nintendo 64",
        year: 1998,
        projectName: "Ship of Harkinian",
        description: "Modern PC port with save states, randomizer support, and enhancements.",
        githubUrl: "https://github.com/HarbourMasters/Shipwright",
        videoUrl: "https://www.youtube.com/watch?v=ERKxHQHi8Dw",
        status: "Complete",
        features: {
            ultrawide: true,
            highFps: true,
            steamDeck: "Verified",
            mods: true,
            hdTextures: true
        },
        platforms: {
            windows: true,
            mac: true,
            linux: true,
            steamDeck: true,
            switch: true
        }
    },
    {
        id: "mm",
        name: "The Legend of Zelda: Majora's Mask",
        originalConsole: "Nintendo 64",
        year: 2000,
        projectName: "2 Ship 2 Harkinian",
        description: "Direct sequel port with all Majora's Mask specific features.",
        githubUrl: "https://github.com/HarbourMasters/2ship2harkinian",
        videoUrl: null,
        status: "Complete",
        features: {
            ultrawide: true,
            highFps: true,
            steamDeck: "Verified",
            mods: true,
            hdTextures: true
        },
        platforms: {
            windows: true,
            mac: true,
            linux: true,
            steamDeck: true
        }
    },
    {
        id: "perfect-dark",
        name: "Perfect Dark",
        originalConsole: "Nintendo 64",
        year: 2000,
        projectName: "perfect_dark",
        description: "Full PC port with modern controls and 60fps support.",
        githubUrl: "https://github.com/n64decomp/perfect_dark",
        videoUrl: null,
        status: "Complete",
        features: {
            ultrawide: true,
            highFps: true,
            steamDeck: "Playable",
            mods: false,
            hdTextures: false
        },
        platforms: {
            windows: true,
            linux: true,
            steamDeck: true
        }
    },
    {
        id: "jak-daxter",
        name: "Jak and Daxter: The Precursor Legacy",
        originalConsole: "PlayStation 2",
        year: 2001,
        projectName: "opengoal",
        description: "Decompiled and ported to PC with enhanced visuals.",
        githubUrl: "https://github.com/open-goal/jak-project",
        videoUrl: "https://www.youtube.com/watch?v=LKNbvvNBiAo",
        status: "Complete",
        features: {
            ultrawide: true,
            highFps: true,
            steamDeck: "Verified",
            mods: true,
            hdTextures: true
        },
        platforms: {
            windows: true,
            linux: true,
            steamDeck: true
        }
    },
    {
        id: "mk64",
        name: "Mario Kart 64",
        originalConsole: "Nintendo 64",
        year: 1996,
        projectName: "Spaghetti Kart",
        description: "Native PC port with online multiplayer support.",
        githubUrl: "https://github.com/HarbourMasters/spaghetti-kart",
        videoUrl: null,
        status: "Beta",
        features: {
            ultrawide: true,
            highFps: true,
            steamDeck: "Playable",
            mods: true,
            hdTextures: true
        },
        platforms: {
            windows: true,
            linux: true,
            steamDeck: true
        }
    }
];

// Console metadata
const consoles = {
    "Nintendo 64": { color: "#E4000F", icon: "🎮" },
    "PlayStation 2": { color: "#003791", icon: "🎯" },
    "GameCube": { color: "#6B5B95", icon: "🎲" },
    "PlayStation": { color: "#B0B0B0", icon: "🕹️" },
    "Sega Saturn": { color: "#000000", icon: "🌌" },
    "Super Nintendo": { color: "#8B4513", icon: "🍄" }
};

// Feature labels
const featureLabels = {
    ultrawide: "Ultrawide",
    highFps: "60fps+",
    steamDeck: "Steam Deck",
    mods: "Mod Support",
    hdTextures: "HD Textures"
};

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
        tutorials: {
            youtube: [
                { title: "How to install Mario 64 PC on Steam Deck", url: "https://www.youtube.com/watch?v=sm-XpuEPxiY", author: "Retro Gaming" },
                { title: "SM64 PC Builder 2 Tutorial", url: "https://www.youtube.com/watch?v=vwmkMjYFO-k", author: "sm64pc.info" }
            ],
            written: [
                { title: "Super Mario 64 PC Port on Steam Deck Guide", url: "https://retroresolve.com/guides/how-to-play-the-super-mario-64-pc-port-on-steam-deck/", site: "RetroResolve" },
                { title: "SM64 PC Port Central", url: "https://sm64pc.info/", site: "sm64pc.info" }
            ]
        },
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
        tutorials: {
            youtube: [
                { title: "Ship of Harkinian - Full Installation Tutorial", url: "https://www.youtube.com/watch?v=sETZH_VN0ao", author: "Steam Deck Gaming" },
                { title: "Play Ocarina of Time NATIVELY on Steam Deck", url: "https://www.youtube.com/watch?v=VotwSz3aXf8", author: "Linux Gaming Central" }
            ],
            written: [
                { title: "How to Set Up Zelda: Ocarina of Time PC Port on Steam Deck", url: "https://steamdeckhq.com/tips-and-guides/how-to-set-up-zelda-ocarina-of-time-pc-port-on-steam-deck/", site: "Steam Deck HQ" }
            ]
        },
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
        tutorials: {
            youtube: [
                { title: "Majora's Mask PC Port - Installation Guide", url: "https://www.youtube.com/watch?v=sETZH_VN0ao", author: "Steam Deck Gaming" }
            ],
            written: [
                { title: "2 Ship 2 Harkinian GitHub Releases", url: "https://github.com/HarbourMasters/2ship2harkinian/releases", site: "GitHub" }
            ]
        },
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
        tutorials: {
            youtube: [
                { title: "How To Play Perfect Dark's PC Port on the Steam Deck", url: "https://www.youtube.com/watch?v=sMZ4J2bNTsg", author: "Nerrel" },
                { title: "Perfect Dark PC Port on Steam Deck Tutorial", url: "https://www.youtube.com/watch?v=WlVX92O474s", author: "Steam Deck Gaming" },
                { title: "How to play and install the Perfect Dark PC port", url: "https://www.youtube.com/watch?v=9vpm3xPKEow", author: "Gaming Guide" }
            ],
            written: [
                { title: "Perfect Dark PC Port Discussion", url: "https://gbatemp.net/threads/perfect-dark-gets-a-fully-playable-pc-port.642573/", site: "GBAtemp" }
            ]
        },
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
        tutorials: {
            youtube: [
                { title: "Jak & Daxter Native on Steam Deck and PC | How to Install", url: "https://www.youtube.com/watch?v=na9Jj2LEYK0", author: "NerdZap" },
                { title: "OpenGOAL Launcher - Steam Deck Setup", url: "https://www.youtube.com/watch?v=l8zt0Hqf3aU", author: "Steam Deck Gaming" }
            ],
            written: [
                { title: "Play Jak and Daxter Natively on Steam Deck", url: "https://nerdzap.com/guides/jak-and-daxter-native-steam-deck/", site: "NerdZap" },
                { title: "OpenGOAL Installation Guide", url: "https://opengoal.dev/docs/usage/installation/", site: "OpenGOAL Docs" }
            ]
        },
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
        tutorials: {
            youtube: [],
            written: [
                { title: "SpaghettiKart - Mario Kart 64 PC Port Overview", url: "https://retrorgb.com/mario-kart-64-spaghetti-kart.html", site: "RetroRGB" },
                { title: "Mario Kart 64 PC Port Reddit Discussion", url: "https://www.reddit.com/r/SteamDeck/comments/1lgwfr1/mario_kart_64_native_pc_port_on_deck/", site: "r/SteamDeck" }
            ]
        },
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

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
    },
    {
        id: "banjo-kazooie",
        name: "Banjo-Kazooie",
        originalConsole: "Nintendo 64",
        year: 1998,
        projectName: "BanjoRecomp",
        description: "Fresh N64 Recompiled port with 4K, 120fps, ultrawide, and dual-analog camera support.",
        githubUrl: "https://github.com/BanjoRecomp/BanjoRecomp",
        videoUrl: null,
        tutorials: {
            youtube: [
                { title: "Banjo-Kazooie PC Port Setup Guide", url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ", author: "Community" }
            ],
            written: [
                { title: "Banjo-Kazooie PC Port Released", url: "https://www.videogameschronicle.com/news/banjo-kazooie-now-has-a-pc-port-with-4k-120fps-and-ultrawide-support/", site: "VGC" },
                { title: "BanjoRecomp GitHub Releases", url: "https://github.com/BanjoRecomp/BanjoRecomp/releases", site: "GitHub" }
            ]
        },
        status: "Complete",
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
            mac: true,
            steamDeck: true
        }
    },
    {
        id: "mystical-ninja",
        name: "Mystical Ninja Starring Goemon",
        originalConsole: "Nintendo 64",
        year: 1997,
        projectName: "Goemon64Recomp",
        description: "Recompiled PC port of the cult classic action-adventure with enhanced visuals.",
        githubUrl: "https://github.com/klorfmorf/Goemon64Recomp",
        videoUrl: null,
        tutorials: {
            youtube: [],
            written: [
                { title: "Goemon 64: Recompiled GitHub", url: "https://github.com/klorfmorf/Goemon64Recomp", site: "GitHub" },
                { title: "Mystical Ninja PC Port Discussion", url: "https://www.reddit.com/r/emulation/comments/1dz2rz9/mystical_ninja_starring_goemon_for_n64_gets_a/", site: "r/emulation" }
            ]
        },
        status: "Complete",
        features: {
            ultrawide: true,
            highFps: true,
            steamDeck: "Playable",
            mods: true,
            hdTextures: false
        },
        platforms: {
            windows: true,
            linux: true,
            steamDeck: true
        }
    },
    {
        id: "quest-64",
        name: "Quest 64",
        originalConsole: "Nintendo 64",
        year: 1998,
        projectName: "Quest64Recomp",
        description: "Early alpha recompilation of the N64 RPG with mod support planned.",
        githubUrl: "https://github.com/Rainchus/Quest64-Recomp",
        videoUrl: null,
        tutorials: {
            youtube: [],
            written: [
                { title: "Quest 64 Recomp Public Release", url: "https://retrorgb.com/quest-64-recomp-public-release.html", site: "RetroRGB" },
                { title: "Quest 64 Alpha Release Info", url: "https://www.timeextension.com/news/2026/01/holy-magic-century-batman-the-infamous-quest-64-is-being-recompiled-for-pc", site: "Time Extension" }
            ]
        },
        status: "Alpha",
        features: {
            ultrawide: true,
            highFps: true,
            steamDeck: "Untested",
            mods: true,
            hdTextures: false
        },
        platforms: {
            windows: true,
            linux: true
        }
    },
    {
        id: "star-fox-64",
        name: "Star Fox 64",
        originalConsole: "Nintendo 64",
        year: 1997,
        projectName: "Starship",
        description: "Harbour Masters port with native PC performance and mod support.",
        githubUrl: "https://github.com/HarbourMasters/Starship",
        videoUrl: null,
        tutorials: {
            youtube: [],
            written: [
                { title: "Starship Star Fox 64 PC Port Release", url: "https://gamingreinvented.com/news/harbour-masters-releases-star-fox-64-port-for-pc/", site: "Gaming Reinvented" },
                { title: "Star Fox 64 PC Port Available", url: "https://www.reddit.com/r/Games/comments/1hkaubc/harbour_masters_release_starship_a_pc_port_of/", site: "r/Games" }
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
        id: "smash-64",
        name: "Super Smash Bros.",
        originalConsole: "Nintendo 64",
        year: 1999,
        projectName: "Smash64Recomp",
        description: "Recompiled PC port with online multiplayer support via Project64Netplay.",
        githubUrl: "https://github.com/Smash64Recomp/Smash64Recomp",
        videoUrl: null,
        tutorials: {
            youtube: [],
            written: [
                { title: "Smash64Recomp GitHub", url: "https://github.com/Smash64Recomp/Smash64Recomp", site: "GitHub" }
            ]
        },
        status: "Beta",
        features: {
            ultrawide: true,
            highFps: true,
            steamDeck: "Playable",
            mods: true,
            hdTextures: false
        },
        platforms: {
            windows: true,
            linux: true,
            steamDeck: true
        }
    },
    {
        id: "sonic-unleashed",
        name: "Sonic Unleashed",
        originalConsole: "Xbox 360",
        year: 2008,
        projectName: "UnleashedRecomp",
        description: "Xbox 360 recompilation with ultrawide, high FPS, and built-in enhancements.",
        githubUrl: "https://github.com/hedge-dev/UnleashedRecomp",
        videoUrl: null,
        tutorials: {
            youtube: [
                { title: "Sonic Unleashed PC Port Setup", url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ", author: "Community" }
            ],
            written: [
                { title: "Unleashed Recompiled Released", url: "https://www.gamesradar.com/games/sonic-the-hedgehog/sonic-fans-are-leading-the-charge-on-a-new-preservation-tool-that-can-help-give-any-xbox-360-game-a-native-pc-port/", site: "GamesRadar+" },
                { title: "XenonRecomp GitHub", url: "https://github.com/hedge-dev/XenonRecomp", site: "GitHub" }
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
    }
];

// Console metadata
const consoles = {
    "Nintendo 64": { color: "#E4000F", icon: "🎮" },
    "PlayStation 2": { color: "#003791", icon: "🎯" },
    "Xbox 360": { color: "#107C10", icon: "🟢" },
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

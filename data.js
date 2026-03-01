// Game data for Native PC Ports
const gamesData = [
    {
        id: "sm64",
        name: "Super Mario 64",
        originalConsole: "Nintendo 64",
        year: 1996,
        projectName: "sm64pc / sm64ex",
        description: "Full decompilation with 60fps, widescreen, and mod support. The legendary platformer that defined 3D gaming, now running natively on PC with all the modern enhancements you'd expect.",
        githubUrl: "https://github.com/sm64-port/sm64-port",
        videoUrl: "https://www.youtube.com/watch?v=vwmkMjYFO-k",
        screenshots: [
            "https://img.youtube.com/vi/vwmkMjYFO-k/maxresdefault.jpg",
            "https://img.youtube.com/vi/sm-XpuEPxiY/maxresdefault.jpg",
            "https://placehold.co/600x400/1a1a1a/39ff14?text=SM64+PC+Gameplay",
            "https://placehold.co/600x400/1a1a1a/39ff14?text=4K+Textures",
            "https://placehold.co/600x400/1a1a1a/39ff14?text=WideScreen+Support"
        ],
        redditCommunity: "https://www.reddit.com/r/sm64pc/",
        foundryVideos: [],
        tutorials: {
            youtube: [
                { title: "How to install Mario 64 PC on Steam Deck", url: "https://www.youtube.com/watch?v=sm-XpuEPxiY", author: "Retro Gaming", embed: true },
                { title: "SM64 PC Builder 2 Tutorial", url: "https://www.youtube.com/watch?v=vwmkMjYFO-k", author: "sm64pc.info", embed: true }
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
        description: "Modern PC port with save states, randomizer support, and enhancements. The definitive way to experience one of the greatest games ever made.",
        githubUrl: "https://github.com/HarbourMasters/Shipwright",
        videoUrl: "https://www.youtube.com/watch?v=ERKxHQHi8Dw",
        screenshots: [
            "https://img.youtube.com/vi/ERKxHQHi8Dw/maxresdefault.jpg",
            "https://img.youtube.com/vi/sETZH_VN0ao/maxresdefault.jpg",
            "https://placehold.co/600x400/1a1a1a/39ff14?text=Ship+of+Harkinian",
            "https://placehold.co/600x400/1a1a1a/39ff14?text=HD+GUI",
            "https://placehold.co/600x400/1a1a1a/39ff14?text=Randomizer+Support"
        ],
        redditCommunity: "https://www.reddit.com/r/zeldaport/",
        foundryVideos: [],
        tutorials: {
            youtube: [
                { title: "Ship of Harkinian - Full Installation Tutorial", url: "https://www.youtube.com/watch?v=sETZH_VN0ao", author: "Steam Deck Gaming", embed: true },
                { title: "Play Ocarina of Time NATIVELY on Steam Deck", url: "https://www.youtube.com/watch?v=VotwSz3aXf8", author: "Linux Gaming Central", embed: true },
                { title: "How to Easily Install Ship of Harkinian the OOT PC Port 2025", url: "https://www.youtube.com/watch?v=zxD4aADj8xc", author: "MrTeck", embed: false },
                { title: "(2024) Ship of Harkinian Ocarina of Time PC Port - FULL GUIDE - 4K 144FPS", url: "https://www.youtube.com/watch?v=3AmXLmkFJEE", author: "Sorcerer", embed: false }
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
        description: "Direct sequel port with all Majora's Mask specific features. The darker, more experimental Zelda masterpiece, perfectly preserved for modern systems.",
        githubUrl: "https://github.com/HarbourMasters/2ship2harkinian",
        videoUrl: null,
        screenshots: [
            "https://placehold.co/600x400/1a1a1a/39ff14?text=Majora's+Mask+PC",
            "https://placehold.co/600x400/1a1a1a/39ff14?text=4K+Support",
            "https://placehold.co/600x400/1a1a1a/39ff14?text=60fps+Gameplay"
        ],
        redditCommunity: "https://www.reddit.com/r/zeldaport/",
        foundryVideos: [],
        tutorials: {
            youtube: [
                { title: "Majora's Mask PC Port - Installation Guide", url: "https://www.youtube.com/watch?v=sETZH_VN0ao", author: "Steam Deck Gaming", embed: true }
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
        description: "Full PC port with modern controls and 60fps support. Rare's masterpiece FPS, finally playable the way it was meant to be.",
        githubUrl: "https://github.com/n64decomp/perfect_dark",
        videoUrl: null,
        screenshots: [
            "https://img.youtube.com/vi/sMZ4J2bNTsg/maxresdefault.jpg",
            "https://img.youtube.com/vi/WlVX92O474s/maxresdefault.jpg",
            "https://placehold.co/600x400/1a1a1a/39ff14?text=Perfect+Dark+PC",
            "https://placehold.co/600x400/1a1a1a/39ff14?text=Modern+Controls"
        ],
        redditCommunity: "https://www.reddit.com/r/perfectdark/",
        foundryVideos: [],
        tutorials: {
            youtube: [
                { title: "How To Play Perfect Dark's PC Port on the Steam Deck", url: "https://www.youtube.com/watch?v=sMZ4J2bNTsg", author: "Nerrel", embed: true },
                { title: "Perfect Dark PC Port on Steam Deck Tutorial", url: "https://www.youtube.com/watch?v=WlVX92O474s", author: "Steam Deck Gaming", embed: true },
                { title: "How to play and install the Perfect Dark PC port", url: "https://www.youtube.com/watch?v=9vpm3xPKEow", author: "Warchild", embed: true },
                { title: "Tutorial: Perfect Dark PC Port Installation", url: "https://www.youtube.com/watch?v=RmeZOMli7m0", author: "PixelCherryNinja", embed: false }
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
        description: "Decompiled and ported to PC with enhanced visuals. Naughty Dog's colorful platformer shines at high resolutions and smooth frame rates.",
        githubUrl: "https://github.com/open-goal/jak-project",
        videoUrl: "https://www.youtube.com/watch?v=LKNbvvNBiAo",
        screenshots: [
            "https://img.youtube.com/vi/LKNbvvNBiAo/maxresdefault.jpg",
            "https://img.youtube.com/vi/na9Jj2LEYK0/maxresdefault.jpg",
            "https://placehold.co/600x400/1a1a1a/39ff14?text=Jak+%26+Daxter+PC",
            "https://placehold.co/600x400/1a1a1a/39ff14?text=Enhanced+Visuals",
            "https://placehold.co/600x400/1a1a1a/39ff14?text=OpenGOAL+Engine"
        ],
        redditCommunity: "https://www.reddit.com/r/jakanddaxter/",
        foundryVideos: [],
        tutorials: {
            youtube: [
                { title: "Jak & Daxter Native on Steam Deck and PC | How to Install", url: "https://www.youtube.com/watch?v=na9Jj2LEYK0", author: "NerdZap", embed: true },
                { title: "OpenGOAL Launcher - Steam Deck Setup", url: "https://www.youtube.com/watch?v=l8zt0Hqf3aU", author: "Steam Deck Gaming", embed: true },
                { title: "OpenGOAL Game Launcher - Install Tutorial (Jak and Daxter PC Port)", url: "https://www.youtube.com/watch?v=p8I9NfuZOgE", author: "OpenGOAL", embed: false },
                { title: "Jak and Daxter PC Port - Classic Ported to PC! Install Tutorial", url: "https://www.youtube.com/watch?v=CiuSTJu4Cs0", author: "Retro Game Corps", embed: false }
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
        id: "jak-2",
        name: "Jak II",
        originalConsole: "PlayStation 2",
        year: 2003,
        projectName: "OpenGOAL",
        description: "Sequel ported via OpenGOAL with native PC enhancements and mod support. The darker, more mature sequel that pushed the PS2 to its limits.",
        githubUrl: "https://github.com/open-goal/jak-project",
        videoUrl: "https://www.youtube.com/watch?v=itmxDxgeEyA",
        screenshots: [
            "https://img.youtube.com/vi/itmxDxgeEyA/maxresdefault.jpg",
            "https://placehold.co/600x400/1a1a1a/39ff14?text=Jak+II+PC+Port",
            "https://placehold.co/600x400/1a1a1a/39ff14?text=HD+Support",
            "https://placehold.co/600x400/1a1a1a/39ff14?text=120fps+Gameplay"
        ],
        redditCommunity: "https://www.reddit.com/r/jakanddaxter/",
        foundryVideos: [],
        tutorials: {
            youtube: [
                { title: "Jak 2 PC Port is Here!", url: "https://www.youtube.com/watch?v=itmxDxgeEyA", author: "Gaming Guide", embed: true },
                { title: "OpenGOAL Game Launcher - Install Tutorial (Jak and Daxter PC Port)", url: "https://www.youtube.com/watch?v=p8I9NfuZOgE", author: "OpenGOAL", embed: false }
            ],
            written: [
                { title: "Jak II OpenGOAL PCGamingWiki", url: "https://www.pcgamingwiki.com/wiki/Jak_II_(OpenGOAL)", site: "PCGamingWiki" },
                { title: "OpenGOAL Installation Guide", url: "https://opengoal.dev/docs/usage/installation/", site: "OpenGOAL Docs" },
                { title: "How to Play Jak Games on PC", url: "https://www.reddit.com/r/jakanddaxter/comments/1gvhjzo/what_is_opengoal_how_to_play_the_jak_games/", site: "r/jakanddaxter" }
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
        description: "Native PC port with online multiplayer support. Race with friends over the internet in this enhanced version of the classic.",
        githubUrl: "https://github.com/HarbourMasters/spaghetti-kart",
        videoUrl: null,
        screenshots: [
            "https://placehold.co/600x400/1a1a1a/39ff14?text=Mario+Kart+64+PC",
            "https://placehold.co/600x400/1a1a1a/39ff14?text=Online+Multiplayer",
            "https://placehold.co/600x400/1a1a1a/39ff14?text=SpaghettiKart"
        ],
        redditCommunity: "https://www.reddit.com/r/mariokart/",
        foundryVideos: [],
        tutorials: {
            youtube: [
                { title: "Mario Kart 64 PC Port Got Updated! Spaghetti Kart Setup Guide", url: "https://www.youtube.com/watch?v=Da-y_CkPLfQ", author: "Video Game Esoterica", embed: true },
                { title: "Mario Kart 64 PC Port Gets a BIG Update! Spaghetti Kart", url: "https://www.youtube.com/watch?v=nosbf5w-vTs", author: "Video Game Esoterica", embed: false }
            ],
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
        description: "Fresh N64 Recompiled port with 4K, 120fps, ultrawide, and dual-analog camera support. Rare's beloved platformer returns better than ever.",
        githubUrl: "https://github.com/BanjoRecomp/BanjoRecomp",
        videoUrl: null,
        screenshots: [
            "https://placehold.co/600x400/1a1a1a/39ff14?text=Banjo-Kazooie+PC",
            "https://placehold.co/600x400/1a1a1a/39ff14?text=4K+120fps+Support",
            "https://placehold.co/600x400/1a1a1a/39ff14?text=Ultrawide+Gameplay",
            "https://placehold.co/600x400/1a1a1a/39ff14?text=HD+Textures",
            "https://placehold.co/600x400/1a1a1a/39ff14?text=Dual+Analog+Camera"
        ],
        redditCommunity: "https://www.reddit.com/r/banjokazooie/",
        foundryVideos: [],
        tutorials: {
            youtube: [
                { title: "Banjo-Kazooie PC Port Recompilation | Setup, Graphics Showcase & Mod Guide", url: "https://www.youtube.com/watch?v=xFzWAdnTXEo", author: "WarriorMario", embed: true },
                { title: "How to Play and Install Banjo Kazooie Recompile PC Port", url: "https://www.youtube.com/watch?v=Tok5GBPfssg", author: "Warchild", embed: true },
                { title: "Definitive Way to Play Banjo-Kazooie | PC Port Setup Guide", url: "https://www.youtube.com/watch?v=F3-KAe4g3r8", author: "PixelCherryNinja", embed: false }
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
        description: "Recompiled PC port of the cult classic action-adventure with enhanced visuals. The quirky Japanese gem finally gets the PC treatment it deserves.",
        githubUrl: "https://github.com/klorfmorf/Goemon64Recomp",
        videoUrl: null,
        screenshots: [
            "https://placehold.co/600x400/1a1a1a/39ff14?text=Mystical+Ninja+PC",
            "https://placehold.co/600x400/1a1a1a/39ff14?text=Goemon64+Recomp",
            "https://placehold.co/600x400/1a1a1a/39ff14?text=Enhanced+Visuals"
        ],
        redditCommunity: "https://www.reddit.com/r/Goemon/",
        foundryVideos: [],
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
        description: "Early alpha recompilation of the N64 RPG with mod support planned. The infamous 'Holy Magic Century' gets a second chance on PC.",
        githubUrl: "https://github.com/Rainchus/Quest64-Recomp",
        videoUrl: null,
        screenshots: [
            "https://placehold.co/600x400/1a1a1a/39ff14?text=Quest+64+PC",
            "https://placehold.co/600x400/1a1a1a/39ff14?text=Alpha+Build"
        ],
        redditCommunity: "https://www.reddit.com/r/n64/",
        foundryVideos: [],
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
        description: "Harbour Masters port with native PC performance and mod support. Barrel roll your way through the Lylat System at 120fps.",
        githubUrl: "https://github.com/HarbourMasters/Starship",
        videoUrl: null,
        screenshots: [
            "https://placehold.co/600x400/1a1a1a/39ff14?text=Star+Fox+64+PC",
            "https://placehold.co/600x400/1a1a1a/39ff14?text=Starship+Port",
            "https://placehold.co/600x400/1a1a1a/39ff14?text=120fps+Barrel+Rolls",
            "https://placehold.co/600x400/1a1a1a/39ff14?text=4K+Support"
        ],
        redditCommunity: "https://www.reddit.com/r/starfox/",
        foundryVideos: [],
        tutorials: {
            youtube: [
                { title: "How to Play and Install StarFox 64 PC PORT!", url: "https://www.youtube.com/watch?v=QTbBp5TGCgI", author: "Warchild", embed: true },
                { title: "Starship: Der beste PC-Port von Starfox 64 / Lylat Wars", url: "https://www.youtube.com/watch?v=GKsZHGo69Z4", author: "N64Recomp Deutsch", embed: false }
            ],
            written: [
                { title: "Starship Star Fox 64 PC Port Release", url: "https://gamingreinvented.com/news/harbour-masters-releases-star-fox-64-port-for-pc/", site: "Gaming Reinvented" },
                { title: "Star Fox 64 PC Port Polygon Guide", url: "https://www.polygon.com/nintendo/501524/starfox-64-nintendo-emulator-port/", site: "Polygon" },
                { title: "Steam Deck Configuration Tips", url: "https://www.resetera.com/threads/star-fox-64-pc-port-is-now-available.1067688/", site: "ResetEra" },
                { title: "Starship Mods & Community", url: "https://gamebanana.com/games/21612", site: "GameBanana" }
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
        description: "Recompiled PC port with online multiplayer support via Project64Netplay. The original fighter, now with rollback netcode.",
        githubUrl: "https://github.com/Smash64Recomp/Smash64Recomp",
        videoUrl: null,
        screenshots: [
            "https://placehold.co/600x400/1a1a1a/39ff14?text=Super+Smash+Bros+PC",
            "https://placehold.co/600x400/1a1a1a/39ff14?text=Online+Multiplayer",
            "https://placehold.co/600x400/1a1a1a/39ff14?text=Smash64+Recomp"
        ],
        redditCommunity: "https://www.reddit.com/r/smashbros/",
        foundryVideos: [],
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
        description: "Xbox 360 recompilation with ultrawide, high FPS, and built-in enhancements. The controversial Sonic adventure finally gets the respect it deserves on PC.",
        githubUrl: "https://github.com/hedge-dev/UnleashedRecomp",
        videoUrl: null,
        screenshots: [
            "https://placehold.co/600x400/1a1a1a/39ff14?text=Sonic+Unleashed+PC",
            "https://placehold.co/600x400/1a1a1a/39ff14?text=Unleashed+Recomp",
            "https://placehold.co/600x400/1a1a1a/39ff14?text=HD+Werehog",
            "https://placehold.co/600x400/1a1a1a/39ff14?text=Ultrawide+Support",
            "https://placehold.co/600x400/1a1a1a/39ff14?text=120fps+Day+Stages"
        ],
        redditCommunity: "https://www.reddit.com/r/SonicUnleashed/",
        foundryVideos: [
            { title: "DF Retro EX: Sonic Unleashed PC Recompilation - A Direct Xbox 360 Port With Superb Extras", url: "https://www.youtube.com/watch?v=vjgt7PlLtEo", id: "vjgt7PlLtEo" }
        ],
        tutorials: {
            youtube: [
                { title: "Sonic Unleashed Steam Deck PC Port Setup Recomp Install Guide", url: "https://www.youtube.com/watch?v=x_eXmBgXnoc", author: "Retro Game Corps", embed: true },
                { title: "Sonic Unleashed PC Port | Quick & Easy Install Guide", url: "https://www.youtube.com/watch?v=sSG_Kp_I4hw", author: "WarriorMario", embed: true },
                { title: "How To Play and Install Sonic Unleashed PC Recompile Port", url: "https://www.youtube.com/watch?v=bAdXZGx0YtI", author: "Warchild", embed: false }
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

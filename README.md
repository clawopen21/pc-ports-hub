# Native PC Ports 🎮

> A community-driven database of native PC ports for classic console games.

![Retro Gaming](https://img.shields.io/badge/Console-Native%20Ports-neon-green)
![License](https://img.shields.io/badge/License-MIT-blue)
![Status](https://img.shields.io/badge/Status-Active-brightgreen)

## What is this?

This website catalogs **community-made PC ports** of classic console games. These aren't emulators—they're native ports created through decompilation and recompilation, allowing games to run directly on modern hardware with enhanced features like:

- 🖥️ **Ultrawide support** (21:9, 32:9)
- 🎯 **High frame rates** (60fps, 120fps, uncapped)
- 🎮 **Handheld optimization** (Steam Deck, ROG Ally, etc.)
- 🎨 **HD textures & mods**
- 💾 **Modern save features**

## Featured Ports

| Game | Console | Project | Status |
|------|---------|---------|--------|
| Super Mario 64 | N64 | sm64ex | ✅ Complete |
| Zelda: Ocarina of Time | N64 | Ship of Harkinian | ✅ Complete |
| Zelda: Majora's Mask | N64 | 2 Ship 2 Harkinian | ✅ Complete |
| Perfect Dark | N64 | perfect_dark | ✅ Complete |
| Jak and Daxter | PS2 | OpenGOAL | ✅ Complete |
| Mario Kart 64 | N64 | Spaghetti Kart | 🔄 Beta |

## Tech Stack

- **HTML5** - Semantic markup
- **Tailwind CSS** - Utility-first styling (via CDN)
- **Vanilla JavaScript** - No build step required
- **Static hosting** - Deploy anywhere

## Design Philosophy

- 🕹️ **Retro aesthetic** - Inspired by RetroAchievements
- 💚 **Neon green accents** - Signature color scheme
- 📱 **Responsive** - Works on all devices
- ⚡ **Fast** - No build process, minimal dependencies
- 🔒 **Legal** - No ROMs hosted, only links to open-source projects

## Local Development

```bash
# Clone the repo
git clone https://github.com/clawopen21/pc-ports-hub.git
cd pc-ports-hub

# Serve locally (Python 3)
python -m http.server 8000

# Or use any static file server
npx serve .
```

Then open `http://localhost:8000`

## Contributing

### Adding a Game

1. Edit `data.js`
2. Add a new game object following the schema:

```javascript
{
    id: "unique-id",
    name: "Game Name",
    originalConsole: "Console Name",
    year: 2000,
    projectName: "Project Name",
    description: "Brief description",
    githubUrl: "https://github.com/...",
    videoUrl: "https://youtube.com/...", // optional
    status: "Complete", // or "Beta", "Alpha", "WIP"
    features: {
        ultrawide: true,
        highFps: true,
        steamDeck: "Verified", // or "Playable", "Unsupported"
        mods: true,
        hdTextures: true
    },
    platforms: {
        windows: true,
        mac: true,
        linux: true,
        steamDeck: true
    }
}
```

3. Submit a pull request

### Requirements

- Ports must be **open source**
- Must **not** include copyrighted assets
- Must have **active development** or be **feature-complete**
- Must support **modern PC platforms**

## Legal Notice

This site **does not** host:
- ❌ Game ROMs
- ❌ Copyrighted assets
- ❌ Proprietary code

We only link to:
- ✅ Open-source decompilation projects
- ✅ Community enhancement tools
- ✅ Official game stores (for ROM acquisition)

You must legally own the original game to use these ports.

## Roadmap

- [ ] Search & filter functionality
- [ ] Compare feature matrix
- [ ] Steam Deck compatibility database
- [ ] Installation guides per game
- [ ] News feed for new ports
- [ ] Community ratings

## Credits

- [Harbour Masters](https://github.com/HarbourMasters) - Zelda ports
- [n64decomp](https://github.com/n64decomp) - N64 decompilation projects
- [OpenGOAL](https://github.com/open-goal) - Jak and Daxter port
- [PCGamingWiki](https://www.pcgamingwiki.com) - General PC gaming info

## License

MIT License - See [LICENSE](LICENSE) for details.

---

<p align="center">
  <sub>Built with 💚 for the retro gaming community</sub>
</p>

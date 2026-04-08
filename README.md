# ⚡ Fastest Nuking Selfbot 2026

**The most optimized and fastest Discord Selfbot Nuker**

**Credit**: Yadav.Dev  
**Version**: 1.2 (April 2026)  
**Status**: Free & Open Source

---

## ⚠️ Important Warning

- This is a **Selfbot** — Using selfbots is **strictly against Discord ToS**.
- Your main account **can get permanently banned** without warning.
- Use **only** on servers you own or have full permission to test.
- We are **not responsible** for any account termination or server damage.

---

## ✨ Key Features

- Ultra-fast parallel operations (`Promise.allSettled`)
- Full server destruction in seconds
- Webhook-based spam (much faster than normal messages)
- Aggressive @everyone spam in every channel
- Delete all channels, roles & emojis instantly
- Ban/Kick all members
- Mass role & channel creation
- Rename + Admin all members
- Mass DM support
- One-command nuclear options (`!nuke` & `!destroy`)
- Clean, optimized & stable code

---

## 📁 Project Structure

```
nuking-selfbot/
├── index.js
├── config.json
├── .env
├── package.json
├── commands/
│   ├── nuke.js
│   ├── deleteallchannels.js
│   ├── deleteallroles.js
│   ├── deleteallemojis.js
│   ├── kickall.js
│   ├── banall.js
│   ├── spamchannels.js
│   ├── spamroles.js
│   ├── spampings.js          ← Updated (30+ pings in every channel)
│   ├── spameveryone.js
│   ├── renameall.js
│   ├── adminall.js
│   ├── webhookspam.js
│   ├── destroy.js
│   ├── serverinfo.js
│   ├── massdm.js
│   ├── leaveserver.js
│   ├── setactivity.js
│   ├── prunemembers.js
│   └── spamallchannels.js
└── README.md
```

---

## 🚀 Quick Setup

### 1. Install Dependencies
```bash
npm install
```

### 2. Configure Token

**Recommended**: Create `.env` file
```env
TOKEN=your_user_token_here
```

**Alternative**: Edit `config.json`
```json
{
  "prefix": "!",
  "ownerID": "YOUR_DISCORD_ID",
  "token": "YOUR_TOKEN_HERE"
}
```

### 3. Run the Selfbot
```bash
node index.js
```

---

## 📋 All Commands

| Command               | Description                                      | Example                  |
|-----------------------|--------------------------------------------------|--------------------------|
| `nuke`                | Fast full server nuke                            | `!nuke`                  |
| `destroy`             | Nuclear destruction (recommended)                | `!destroy`               |
| `deleteallchannels`   | Delete every channel                             | `!deleteallchannels`     |
| `deleteallroles`      | Delete all roles                                 | `!deleteallroles`        |
| `deleteallemojis`     | Delete all emojis                                | `!deleteallemojis`       |
| `banall`              | Ban all members                                  | `!banall`                |
| `kickall`             | Kick all members                                 | `!kickall`               |
| `spampings`           | **Spam ~30 @everyone in EVERY channel**          | `!spampings 30`          |
| `spamallchannels`     | Spam custom message in all channels              | `!spamallchannels 20`    |
| `webhookspam`         | Ultra-fast webhook spam                          | `!webhookspam`           |
| `spamchannels`        | Create many channels                             | `!spamchannels 80`       |
| `spamroles`           | Create many roles                                | `!spamroles 80`          |
| `renameall`           | Rename all members                               | `!renameall nuked`       |
| `adminall`            | Give admin to everyone                           | `!adminall`              |
| `massdm`              | Mass DM all members                              | `!massdm Join now`       |
| `prunemembers`        | Prune inactive members                           | `!prunemembers 7`        |
| `setactivity`         | Set custom status                                | `!setactivity Nuking`    |
| `leaveserver`         | Leave the server                                 | `!leaveserver`           |
| `serverinfo`          | Show server information                          | `!serverinfo`            |

---

## 💡 Pro Tips for Maximum Speed

- Use **`!destroy`** or **`!nuke`** for instant destruction.
- Use **`!spampings 40`** for aggressive pinging in every channel.
- Webhook spam is significantly faster than normal messages.
- Run the bot on a strong PC or VPS for best performance.
- Delete all channels first, then spam for cleaner results.

---

## 📌 Credits

- **Developed by**: Yadav.Dev
- Powered by `discord.js-selfbot-v13`
- Optimized for speed and stability in 2026

---

## ⚠️ Disclaimer

This project is shared for **educational and testing purposes only**.  
Any misuse on public or other people's servers is **strongly discouraged**.

Made with ❤️ by Yadav.Dev

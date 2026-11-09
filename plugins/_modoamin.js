/*
⌁ 𝐍𝐎𝐗 ⌁
𝚆𝙸𝙻𝙻𝙸𝙰𝙼 𝚇 𝚂𝙷𝙰𝙽𝙺𝚂

「 𝐂𝐫𝐞𝐝𝐢𝐭𝐬 𝐛𝐲 𝚆𝙸𝙻𝙻𝙸𝙰𝙼 𝚇 𝚂𝙷𝙰𝙽𝙺𝚂 」
「 لا تحذف الحقوق 🖤 」
𝐍𝐎𝐗 channel
https://whatsapp.com/channel/0029VbCeOCi7tkjC9bGs3U0l
𝙎𝙃𝘼𝙉𝙆𝙎 channel
https://whatsapp.com/channel/0029VbC5LLx6GcGDXZUmHP0y
 📜 𝙏𝙝𝙞𝙨 𝙞𝙨 𝙩𝙝𝙚 𝙍𝙀𝙋𝙊 𝙡𝙞𝙣𝙠 𝙬𝙞𝙩𝙝 𝙖𝙡𝙡 𝙩𝙝𝙚 𝙘𝙤𝙙𝙚𝙨:
⚡ https://github.com/SHANKS-CODE-1/CODE
*/

export async function before(m, { conn, isAdmin, isMods, isROwner }) {
  if (!m.isGroup) return
  if (!m || !m.text) return

  const chat = global.db.data.chats[m.chat] || {}

  if (chat.modoadmin) {
    if (!isAdmin && !isMods && !isROwner) {
      return true
    }
  }

  return false
}

export async function modoadmin(m, { args }) {
  const chat = global.db.data.chats[m.chat] || {}

  if (!args[0]) return

  if (args[0].toLowerCase() === "on") {
    chat.modoadmin = true
    global.db.data.chats[m.chat] = chat
  }

  if (args[0].toLowerCase() === "off") {
    chat.modoadmin = false
    global.db.data.chats[m.chat] = chat
  }
}
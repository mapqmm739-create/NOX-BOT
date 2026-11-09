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

let handler = async (m, { conn, isAdmin, isOwner }) => {
  if (!m.isGroup) return m.reply('⚠️ هذا الأمر يعمل فقط في المجموعات.')
  if (!isOwner) return m.reply('🚫 هذا الأمر المطور فقط يا عبد.')
  if (isAdmin) return m.reply('✅ انت ادمن اصلا يا غبي 🤦.')
  await conn.groupParticipantsUpdate(m.chat, [m.sender], 'promote')
  await m.reply('🛡️ لقد تمت ترقيتك بواسطة البوت.')
}
handler.command = ['ارفعني', 'ادمني', 'autoadmin']
handler.help = ['ارفعني']
handler.tags = ['owner']
handler.owner = true
handler.botAdmin = true
export default handler
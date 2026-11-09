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

let handler = async (m, { conn, usedPrefix, command, isROwner }) => {
	const allowedUsers = [
'963949597160@s.whatsapp.net',
'201097786373@s.whatsapp.net',
'963949597160@s.whatsapp.net'
]

if (!allowedUsers.includes(m.sender)) {
  return m.reply('❌ الأمر ده مسموح للمطور بس.');
}

  try {
    await m.react('🎭')
    m.reply(`🌌 *جاري إعادة تشغيل البوت ${botname} ❤️‍🩹*\n> ► انتظر شوية لحد ما يرجع يشتغل تمام.`);
    await m.react('✔️')
    setTimeout(() => {
      if (process.send) {
        process.send("restart")
      } else {
        process.exit(0)
      }
    }, 3000)
  } catch (error) {
    await m.react('✖️')
    console.log(error)
    conn.reply(
      m.chat,
`⚠️ العملية فشلت...
> استعمل *${usedPrefix}ابلاغ* عشان تبلغ عن الخطأ.

${error.message}`,
      m
    )
  }
}

handler.help = ['ريستارت']
handler.tags = ['owner']
handler.command = ['restart', 'ريستارت','رستر']

export default handler
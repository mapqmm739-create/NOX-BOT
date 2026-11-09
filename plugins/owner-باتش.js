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

import fs from 'fs/promises'
import path from 'path'

const handler = async (m, { conn, usedPrefix, command, text }) => {
  const allowedUsers = [
  '963949597160@s.whatsapp.net',
  '201097786373@s.whatsapp.net',
  '201116880068@s.whatsapp.net'
  ]

  if (!allowedUsers.includes(m.sender)) {
    return m.reply('⛔ هذا الأمر مخصص للمطور فقط.')
  }

  const ar = Object.keys(plugins)
  const ar1 = ar.map(v => v.replace('.js', ''))

  if (!text) {
    const pluginsList = ar1.map(v => `◈ ${v}`).join('\n')

    return m.reply(`╭━━〔 𝐍𝐎𝐗 〕━━╮
┃ اكتب اسم البلجن الذي تريد عرضه.
┃
┃ مثال:
┃ ${usedPrefix + command} info-infobot
┃
┃ قائمة البلجنات:
╰━━━━━━━━━━━━╯

${pluginsList}`)
  }

  const pluginName = text.replace(/\.js$/i, '')
  const pluginFileName = `${pluginName}.js`
  const pluginPath = path.join('./plugins', pluginFileName)

  if (!ar1.includes(pluginName)) {
    const pluginsList = ar1.map(v => `◈ ${v}`).join('\n')

    return m.reply(`╭━━〔 ⚠️ خطأ 〕━━╮
┃ لم يتم العثور على البلجن:
┃
┃ ${text}
┃
┃ الرجاء اختيار اسم موجود.
╰━━━━━━━━━━━━╯

${pluginsList}`)
  }

  let fileContent

  try {
    fileContent = await fs.readFile(pluginPath, 'utf8')

    const messageResult = await conn.sendMessage(
      m.chat,
      {
        text: fileContent
      },
      {
        quoted: m
      }
    )

    await conn.sendMessage(
      m.chat,
      {
        document: Buffer.from(fileContent, 'utf8'),
        mimetype: 'application/javascript',
        fileName: pluginFileName
      },
      {
        quoted: messageResult
      }
    )

  } catch (error) {
    console.error('Error reading the plugin:', error)

    await m.reply(
      `╭━━〔 ❌ خطأ 〕━━╮
┃ تعذر قراءة ملف البلجن.
┃
┃ السبب:
┃ ${error.message}
╰━━━━━━━━━━━━╯`
    )
  }
}

handler.help = ['باتش <اسم الأمر>']
handler.tags = ['owner']
handler.command = ['getplugin', 'gp', 'باتش']

export default handler
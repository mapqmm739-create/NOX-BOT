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

import fs from 'fs'
import path from 'path'

let handler = async (m, { text, usedPrefix, command, conn }) => {

  const ownerNumbers = ["963949597160", "201097786373"]
  const sender = m.sender.split('@')[0]

  if (!ownerNumbers.includes(sender)) {
    return m.reply(`🚫 هذا الأمر خاص بالمطور فقط`)
  }

  if (!text) {
    return m.reply(`
╭━━━❖ 𝚆𝙸𝙻𝙻𝙸𝙰𝙼 𝚇 𝚂𝙷𝙰𝙽𝙺𝚂 𝑺𝒀𝑺𝑻𝑬𝑴 ❖━━━╮
┃ ⚡ أوامر الجلب
┃
┃ ✦ ${usedPrefix + command} .
┃ ✦ ${usedPrefix + command} plugins
┃ ✦ ${usedPrefix + command} settings.js
┃
╰━━━❖  𝚆𝙸𝙻𝙻𝙸𝙰𝙼 𝚇 𝚂𝙷𝙰𝙽𝙺𝚂 𝑴𝑶𝑫 ❖━━━╯
`)
  }

  const targetPath = path.join(process.cwd(), text)

  try {

    if (!fs.existsSync(targetPath)) {
      return m.reply(`❌ الملف أو المسار غير موجود`)
    }

    if (fs.lstatSync(targetPath).isDirectory()) {

      const files = fs.readdirSync(targetPath)

      let teks = `
╭━━━❖ 📁 𝚆𝙸𝙻𝙻𝙸𝙰𝙼 𝚇 𝚂𝙷𝙰𝙽𝙺𝚂 𝑭𝑰𝑳𝑬 𝑴𝑨𝑵𝑨𝑮𝑬𝑹 ❖━━━╮

`

      files.forEach((f, i) => {
        teks += `┃ ${i + 1}. 📄 ${f}\n`
      })

      teks += `
╰━━━❖ ⚡ ${files.length} 𝑭𝒊𝒍𝒆𝒔 ❖━━━╯`

      return m.reply(teks)
    }

    if (fs.lstatSync(targetPath).isFile()) {

      let content = fs.readFileSync(targetPath, 'utf-8')

      if (content.length > 4000) {
        return m.reply(`⚠️ الملف كبير جدًا لا يمكن عرضه`)
      }

      return m.reply(`
╭━━━❖ 📄 𝚆𝙸𝙻𝙻𝙸𝙰𝙼 𝚇 𝚂𝙷𝙰𝙽𝙺𝚂 𝑹𝑬𝑨𝑫𝑬𝑹 ❖━━━╮

${content}

╰━━━❖ 🩸 ${text} ❖━━━╯
`)
    }

  } catch (e) {
    return m.reply(`❌ خطأ:\n${e.message}`)
  }
}

handler.help = ['جيب']
handler.tags = ['owner']
handler.command = /^(جيب|read|get)$/i
handler.owner = true

export default handler
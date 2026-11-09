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

import axios from "axios"

let handler = async (m, { command, conn }) => {
  try {
    let { data } = await axios.get(
      `https://raw.githubusercontent.com/davidprospero123/api-anime/main/BOT-JSON/anime-${command}.json`
    )

    if (!Array.isArray(data) || !data.length) {
      throw new Error("No images found")
    }

    let image = data[Math.floor(Math.random() * data.length)]

    let captions = [
      `╭━━━〔 ＃ 𝙽𝙾𝚇 〕━━━╮
┃ 🎴 𝙰𝙽𝙸𝙼𝙴
┃ ✦ ${command}
╰━━━━━━━━━━━━━━━━╯

┏━━〔 𝙽𝙾𝚇 𝙶𝙰𝙻𝙻𝙴𝚁𝚈 〕━━┓
┃ ✧ صورة أنمي عشوائية
┃ ✧ تم اختيارها لك بعناية
┗━━━━━━━━━━━━━━━━━━┛

⌁ 𝚆𝙸𝙻𝙻𝙸𝙰𝙼 𝚇 𝚂𝙷𝙰𝙽𝙺𝚂 ⌁`,

      `╭─〔 ＃ 𝙽𝙾𝚇 〢 𝙰𝙽𝙸𝙼𝙴 〕─╮
│
│ 🎌 𝙲𝙷𝙰𝚁𝙰𝙲𝚃𝙴𝚁
│ ${command}
│
│ ✦ لقطة من عالم الأنمي
│ ✦ استمتع بالصورة 🤍
│
╰────────────────╯
      𝚆𝙸𝙻𝙻𝙸𝙰𝙼 𝚇 𝚂𝙷𝙰𝙽𝙺𝚂`,

      `╭━━〔 🎴 ${command} 〕━━╮
┃
┃ ＃ 𝙽𝙾𝚇 〢 𝙰𝙽𝙸𝙼𝙴
┃
┃ ✦ صورة جديدة وصلت إليك
┃ ✦ من عالم الأنمي
┃ ✦ استمتع بالمشهد ✨
┃
╰━━━━━━━━━━━━━━━━╯

『 𝚆𝙸𝙻𝙻𝙸𝙰𝙼 𝚇 𝚂𝙷𝙰𝙽𝙺𝚂 』`,

      `╭━━━━━━━━━━━━━━━━╮
┃ ＃ 𝙽𝙾𝚇 〢 𝙰𝙽𝙸𝙼𝙴
╰━━━━━━━━━━━━━━━━╯

🎴 𝙽𝙰𝙼𝙴 : ${command}

✧ مشهد عشوائي
✧ اختيار مميز
✧ من عالم الأنمي 🤍

╭────────────────╮
│ 𝚆𝙸𝙻𝙻𝙸𝙰𝙼 𝚇 𝚂𝙷𝙰𝙽𝙺𝚂
╰────────────────╯`,

      `『 ＃ 𝙽𝙾𝚇 』

╭─〔 𝙰𝙽𝙸𝙼𝙴 〕─╮
│ 🎴 ${command}
│
│ ✦ لقطة عشوائية
│ ✦ عالم من الخيال
│ ✦ صورة مختارة لك
╰──────────────╯

╰─『 𝚆𝙸𝙻𝙻𝙸𝙰𝙼 𝚇 𝚂𝙷𝙰𝙽𝙺𝚂 』─╯`
    ]

    let caption = captions[Math.floor(Math.random() * captions.length)]

    await conn.sendMessage(
      m.chat,
      {
        image: { url: image },
        caption
      },
      { quoted: m }
    )

  } catch (e) {
    await conn.sendMessage(
      m.chat,
      {
        text: `╭━━━〔 ＃ 𝙽𝙾𝚇 〕━━━╮
┃ ⚠️ 𝙴𝚁𝚁𝙾𝚁
╰━━━━━━━━━━━━━━━━╯

✦ تعذّر جلب صور *${command}*
✦ حاول مرة أخرى بعد قليل.

『 𝚆𝙸𝙻𝙻𝙸𝙰𝙼 𝚇 𝚂𝙷𝙰𝙽𝙺𝚂 』`
      },
      { quoted: m }
    )

    console.error(e)
  }
}

handler.command = handler.help = [
  "alisa",
  "aihoshino",
  "remcham",
  "akira",
  "akiyama",
  "anna",
  "asuna",
  "ayuzawa",
  "boruto",
  "chiho",
  "chitoge",
  "deidara",
  "erza",
  "elaina",
  "eba",
  "emilia",
  "hestia",
  "hinata",
  "inori",
  "isuzu",
  "itachi",
  "itori",
  "kaga",
  "kagura",
  "kaori",
  "keneki",
  "kotori",
  "kurumitokisaki",
  "madara",
  "mikasa",
  "miku",
  "minato",
  "naruto",
  "nezuko",
  "sagiri",
  "sasuke",
  "sakura"
]

handler.tags = ["anime"]

handler.register = true

export default handler
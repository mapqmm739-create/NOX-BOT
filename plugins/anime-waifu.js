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

import fetch from 'node-fetch'

let handler = async (m, { conn }) => {
  try {
    const res = await fetch(
      'https://api.waifu.im/images?IncludedTags=waifu&IsNsfw=false&IsGif=false'
    )

    if (!res.ok)
      throw new Error(`HTTP ${res.status}`)

    const data = await res.json()
    const image = data?.items?.[0]?.url

    if (!image)
      throw new Error('لم يتم العثور على صورة')

    await conn.sendMessage(
      m.chat,
      {
        image: { url: image },
        caption: `୨୧ 𝙽𝙾𝚇 ୨୧

🌸 ˚₊‧ 𝚆𝙰𝙸𝙵𝚄 𝙵𝙾𝚁 𝚈𝙾𝚄 ‧₊˚ 🌸

♡ صورة عشوائية لك ♡

╭─ ୨୧ ───── ୨୧
│ 🩷 𝙽𝙾𝚇 𝙱𝙾𝚃
│ 🌷 𝙳𝙴𝚅 〢 𝚆𝙸𝙻𝙻𝙸𝙰𝙼 𝚇 𝚂𝙷𝙰𝙽𝙺𝚂
╰─ ୨୧ ───── ୨୧

꒰ঌ ♡ ໒꒱`,

        buttons: [
          {
            buttonId: '.وايفو',
            buttonText: {
              displayText: '🌸 وايفو ثانية'
            },
            type: 1
          }
        ],

        headerType: 4
      },
      { quoted: m }
    )

  } catch (error) {
    console.error('NOX WAIFU ERROR:', error)

    await m.reply(
      `୨୧ 𝙽𝙾𝚇 ୨୧\n\n` +
      `❌ تعذر جلب صورة الوايفو.\n\n` +
      `⚠️ ${error.message}`
    )
  }
}

handler.command = ['وايفو', 'waifu']
handler.help = ['وايفو']
handler.tags = ['anime']

export default handler
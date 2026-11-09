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

let handler = async (m, { conn, command, args }) => {
    if (!args[0]) {
        return conn.reply(m.chat, '『 هات لينك الصفحه او الموقع معا الامر 🩸 』', m)
    }
    await m.react('🕓')

    try {
        
        let ss = await (await fetch(`https://image.thum.io/get/fullpage/${args[0]}`)).buffer()
        conn.sendFile(m.chat, ss, 'screenshot.png', 'تم يحب  🩸', m)
        await m.react('✅')
    } catch (err) {
        console.error(err) 
        await m.react('✖️')
    }
}

handler.help = ['اسكرين <رابط>']
handler.tags = ['tools']
handler.command = /^سكرين$/i

export default handler
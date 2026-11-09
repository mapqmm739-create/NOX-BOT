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

let handler = async (m, { conn }) => {
    await m.react('👑')

    let list = [
        {
            displayName: '𝚂𝙷𝙰𝙽𝙺𝚂',
            vcard: `BEGIN:VCARD
VERSION:3.0
FN:𝚂𝙷𝙰𝙽𝙺𝚂
TEL;type=CELL;waid=201097786373:+20 109 778 6373
END:VCARD`
        },
        {
            displayName: '𝚆𝙸𝙻𝙻𝙸𝙰𝙼',
            vcard: `BEGIN:VCARD
VERSION:3.0
FN:𝚆𝙸𝙻𝙻𝙸𝙰𝙼
TEL;type=CELL;waid=963949597160:+963 949 597 160
END:VCARD`
        }
    ]

    const canalInfo = {
        title: '⌁ 𝐍𝐎𝐗 𝐁𝐎𝐓 ⌁',
        body: '𝚂𝙷𝙰𝙽𝙺𝚂 𝚇 𝚆𝙸𝙻𝙻𝙸𝙰𝙼',
        thumbnailUrl: 'https://files.catbox.moe/iq1skp.jpg',
        sourceUrl: 'https://whatsapp.com/channel/0029VbC5LLx6GcGDXZUmHP0y',
        mediaType: 1,
        renderLargerThumbnail: true
    }

    await conn.sendMessage(
        m.chat,
        {
            contacts: {
                displayName: `${list.length} Contacts`,
                contacts: list
            },
            contextInfo: {
                externalAdReply: canalInfo
            }
        },
        { quoted: m }
    )

    let txt = `╭━━━〔 ⌁ 𝐍𝐎𝐗 ⌁ 〕━━━╮
┃
┃ 👑 *𝐌𝐘𝐒𝐓𝐄𝐑𝐘 𝐎𝐅 𝐍𝐎𝐗*
┃
┃ ⚔️ 𝙎𝙃𝘼𝙉𝙆𝙎
┃    ↳ +20 109 778 6373
┃
┃ 👑 𝙒𝙄𝙇𝙇𝙄𝘼𝙈
┃    ↳ +963 949 597 160
┃
╰━━━━━━━━━━━━━━━━━━╯

╭━━〔 📡 𝐍𝐎𝐗 𝐂𝐇𝐀𝐍𝐍𝐄𝐋 〕━━╮
┃
┃ 🌑 𝐍𝐎𝐗 𝐓𝐄𝐂𝐇
┃ ↳ https://whatsapp.com/channel/0029VbC5LLx6GcGDXZUmHP0y
┃
╰━━━━━━━━━━━━━━━━━━╯

「 𝚂𝙷𝙰𝙽𝙺𝚂 𝚇 𝚆𝙸𝙻𝙻𝙸𝙰𝙼 」
⌁ 𝐍𝐎𝐗 𝐁𝐎𝐓 ⌁`

    await conn.sendMessage(
        m.chat,
        {
            text: txt,
            ...rcanal
        },
        { quoted: m }
    )
}

handler.help = ['owner', 'المطور']
handler.tags = ['info']
handler.command = ['owner', 'creator', 'creador', 'dueño', 'المطور']

export default handler
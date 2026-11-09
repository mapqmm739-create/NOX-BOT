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

    let target;

    if (m.mentionedJid?.length) {
        target = m.mentionedJid[0];
    } else if (m.quoted) {
        target = m.quoted.sender;
    } else {
        target = m.sender;
    }

    const senderName = conn.getName(m.sender) || 'العضو';
    const targetName = conn.getName(target) || target;

    await m.react('😡');

    let text;

    if (target !== m.sender) {
        text = `╭━━━〔 😡 𝐍𝐎𝐗 𝐀𝐍𝐆𝐑𝐘 〕━━━╮
│
│ 😡 *${senderName}* غاضب من
│ 👤 *${targetName}*
│
╰━━━━━━━━━━━━━━━━━━╯`;
    } else {
        text = `╭━━━〔 😡 𝐍𝐎𝐗 𝐀𝐍𝐆𝐑𝐘 〕━━━╮
│
│ 😡 *${senderName}*
│ غاضب جدًا اليوم!
│
╰━━━━━━━━━━━━━━━━━━╯`;
    }

    const videos = [
        'https://files.catbox.moe/2aedd3.mp4',
        'https://files.catbox.moe/fqf4ey.mp4',
        'https://files.catbox.moe/v7ldgq.mp4',
        'https://files.catbox.moe/uedd7l.mp4',
        'https://files.catbox.moe/5stubg.mp4',
        'https://files.catbox.moe/phaft3.mp4'
    ];

    const video = videos[Math.floor(Math.random() * videos.length)];

    await conn.sendMessage(
        m.chat,
        {
            video: { url: video },
            gifPlayback: true,
            caption: text,
            mentions: [target]
        },
        { quoted: m }
    );
};

handler.help = ['غضب @منشن', 'غضب'];
handler.tags = ['ترفيه'];
handler.command = ['غضب', 'عصبية', 'زعلان'];
handler.group = true;

export default handler;
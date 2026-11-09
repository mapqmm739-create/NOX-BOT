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

let handler = async (m, { conn, text }) => {
  try {
    const groupJid = m.chat;

    if (!groupJid.endsWith("@g.us")) {
      return m.reply("Command ini hanya untuk grup.");
    }

    const res = await conn.groupParticipantsUpdate(
      groupJid,
      ["867051314767696@bot"],
      "add",
    );

    m.reply(
      "تمت إضافة Meta AI إلى المجموعة بنجاح ✅"
    );
  } catch (e) {
    console.error(e);
    m.reply(String(e?.stack || e));
  }
};

handler.command = /^(addmeta|ضيف-ميتا)$/i;
handler.help = ['ضيف-ميتا'];
handler.tags = ['group'];
handler.admin = true;
handler.group = true;

export default handler;
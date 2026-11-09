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

const _originalSendMessage = conn.sendMessage.bind(conn);

conn.sendMessage = async (jid, content, options = {}) => {
  if (global.rcanal && typeof content === 'object' && content !== null) {
    const hasForward =
      content?.contextInfo?.forwardingScore ||
      content?.contextInfo?.isForwarded ||
      options?.contextInfo?.forwardingScore ||
      options?.contextInfo?.isForwarded;

    if (!hasForward) {
      content = {
        ...content,
        ...global.rcanal,
        contextInfo: {
          ...(global.rcanal?.contextInfo || {}),
          ...(content?.contextInfo || {}),
          ...(options?.contextInfo || {})
        }
      };
    }
  }

  return _originalSendMessage(jid, content, options);
};
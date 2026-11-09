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

import fs from 'fs';

import { fileTypeFromBuffer } from 'file-type';

const handler = async (m, { text, usedPrefix, command }) => {

  

const allowed = ['201097786373@s.whatsapp.net', '963949597160@s.whatsapp.net','201116880068@s.whatsapp.net'];

  if (!allowed.includes(m.sender)) {

    return m.reply('〘 🚫 〙 تحلم يا عبد صح !؟');

  }

  

  if (!text) return m.reply('〘 ❗ 〙 يرجى إدخال اسم الملف');

  const q = m.quoted || m;

  const mime = q.mimetype || '';

  const isTextMessage = q.text;

  const path = `plugins/${text}.js`;

  let isAdd = false;

  let isDel = false;

  let fileContent = '';

  switch (command) {

  case 'ضيف':

  case 'addp':

      if (!q || (!isTextMessage && !mime)) {

        return m.reply('〘 ❗ 〙 يرجى الرد على رسالة نصية أو مستند ليتم حفظه كملف');

      }

      if (fs.existsSync(path)) {

        const existing = fs.readFileSync(path, 'utf8').trim();

        if (existing.length > 0) {

          return m.reply('〘 ⚠️ 〙 في كود موجود بالفعل في الملف دا، ومش هينفع تكتب فوقه 🚫');

        }

      }

      try {

        if (isTextMessage) {

          fileContent = isTextMessage.trim();

          if (!fileContent) return m.reply('〘 ❗ 〙 النص المستلم فارغ.');

          fs.writeFileSync(path, fileContent, 'utf8');

          isAdd = true;

        } else if (mime === 'application/javascript') {

          const buffer = await q.download();

          fileContent = buffer.toString('utf8');

          if (!fileContent.trim()) return m.reply('〘 ❗ 〙 الملف المرفق فارغ أو لا يحتوي على نصوص صالحة.');

          fs.writeFileSync(path, fileContent, 'utf8');

          isAdd = true;

        } else {

          return m.reply('〘 ❗ 〙 الملف المرفق غير مدعوم.');

        }

      } catch (error) {

        return m.reply(`〘 ❗ 〙 حدث خطأ أثناء حفظ الملف: ${error.message || error}`);

      }

      break;

    case 'امسح':

case 'delp':

      if (!fs.existsSync(path)) {

        return m.reply(`〘 ❗ 〙 الملف "${path}" غير موجود لحذفه`);

      }

      try {

        fs.unlinkSync(path);

        isDel = true;

      } catch (error) {

        return m.reply(`〘 ❗ 〙 حدث خطأ أثناء حذف الملف: ${error.message || error}`);

      }

      break;

    default:

      return m.reply(`〘 ❗ 〙 الأمر غير معروف

استخدم:

- ${usedPrefix}ضيف

- ${usedPrefix}addp

- ${usedPrefix}امسح

- ${usedPrefix}delp`);

  }

  if (isAdd) {

  await m.reply(`〘 ✅ 〙 تم حفظ الملف بنجاح: "${path}"`);

} else if (isDel) {

  await m.reply(`〘 ✅ 〙 تم حذف الملف بنجاح: "${path}"`);

}

};

handler.help = ['ضيف', 'امسح'];

handler.tags = ['owner'];

handler.command = ['ضيف', 'امسح', 'addp', 'delp'];

export default handler;
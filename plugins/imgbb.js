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

import axios from 'axios'
import FormData from 'form-data'

const API_KEY = '154fbec7d9a073f9b3a8ef0398342394'

let handler = async (m, { conn }) => {
    try {
        const quoted = m.quoted

        const msg = quoted?.message || m.message
        const type = Object.keys(msg || {})[0]

        if (!quoted && !m.message?.imageMessage) {
            return m.reply(
                '╭━━━〔 🖼️ 𝐈𝐦𝐠𝐁𝐁 〕━━━╮\n\n' +
                '❌ أرسل صورة أو قم بالرد على صورة.\n\n' +
                '╰━━━━━━━━━━━━━━━━╯'
            )
        }

        const target = quoted || m

        if (!target.download) {
            return m.reply('❌ لم أستطع قراءة الصورة.')
        }

        await m.reply('⏳ جاري رفع الصورة إلى ImgBB...')

        const buffer = await target.download()

        if (!buffer) {
            return m.reply('❌ فشل تحميل الصورة.')
        }

        const form = new FormData()

        form.append('image', buffer, {
            filename: 'nox-image.jpg',
            contentType: 'image/jpeg'
        })

        const response = await axios.post(
            `https://api.imgbb.com/1/upload?key=${API_KEY}`,
            form,
            {
                headers: form.getHeaders(),
                maxContentLength: Infinity,
                maxBodyLength: Infinity
            }
        )

        const data = response.data

        if (!data.success) {
            throw new Error('ImgBB upload failed')
        }

        const image = data.data

        const text =
            '╭━━━〔 🖼️ 𝐈𝐦𝐠𝐁𝐁 〕━━━╮\n\n' +
            '✅ تم رفع الصورة بنجاح!\n\n' +
            `🔗 الرابط المباشر:\n${image.url}\n\n` +
            `🌐 صفحة الصورة:\n${image.url_viewer}\n\n` +
            '╰━━━━━━━━━━━━━━━━╯\n' +
            '⌁ 𝐍𝐎𝐗 𝐁𝐎𝐓 ⌁'

        await m.reply(text)

    } catch (error) {
        console.error('ImgBB Error:', error?.response?.data || error)

        await m.reply(
            '╭━━━〔 ❌ 𝐄𝐫𝐫𝐨𝐫 〕━━━╮\n\n' +
            'حدث خطأ أثناء رفع الصورة إلى ImgBB.\n' +
            'تأكد من صحة API Key ثم حاول مرة أخرى.\n\n' +
            '╰━━━━━━━━━━━━━━━━╯'
        )
    }
}

handler.help = ['imgbb']
handler.tags = ['tools']
handler.command = ['imgbb', 'رفع', 'رفعimg']

export default handler
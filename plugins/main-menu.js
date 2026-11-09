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

import moment from "moment-timezone"
import { prepareWAMessageMedia, generateWAMessageFromContent } from '@whiskeysockets/baileys'
import fs from 'fs'
import path from 'path'
import axios from 'axios'

const VIDEO_URL = 'https://files.catbox.moe/9n2xcd.mp4'
const MENU_DIR = path.join(process.cwd(), 'src', 'menu')
const MENU_FILE = path.join(MENU_DIR, 'menu.mp4')


const categoryNames = {
  'main':         '✨ الرئيسية',
  'owner':        '👑 المطور',
  'ai':           '🤖 الذكاء الاصطناعي',
  'anime':        '🌸 الأنمي والمانجا',
  'economy':      '💰 الاقتصاد',
  'game':         '🎮 الألعاب',
  'group':        '🛡️ إدارة المجموعات',
  'grupo':        '👥 أدوات الجروبات',
  'info':         '📖 المعلومات',
  'internet':     '🌐 الإنترنت',
  'sticker':      '🏷️ الملصقات',
  'tools':        '🧰 الأدوات',
  'download':     '⬇️ التنزيل',
  'downloader':   '📥 التحميل',
  'daily':        '📅 اليوميات',
  'serbot':       '🤖 ربط البوتات',
  'image':        '🖼️ الصور',
  'herramientas': '🔧 الخدمات',
  'nable':        '🔌 التفعيلات',
}

const tagIcons = {
  'main':         '✨',
  'owner':        '👑',
  'ai':           '🤖',
  'anime':        '🌸',
  'economy':      '💰',
  'game':         '🎮',
  'group':        '🛡️',
  'grupo':        '👥',
  'info':         'ℹ️',
  'internet':     '🌐',
  'sticker':      '🏷️',
  'tools':        '🧰',
  'download':     '⬇️',
  'downloader':   '📥',
  'daily':        '📅',
  'serbot':       '🤖',
  'image':        '🖼️',
  'herramientas': '🔧',
  'nable':        '🔌',
}

async function ensureMenuVideo() {
  if (!fs.existsSync(MENU_DIR)) {
    fs.mkdirSync(MENU_DIR, { recursive: true })
  }
  if (!fs.existsSync(MENU_FILE)) {
    const res = await axios.get(VIDEO_URL, { responseType: 'arraybuffer' })
    fs.writeFileSync(MENU_FILE, Buffer.from(res.data))
  }
  return fs.readFileSync(MENU_FILE)
}

function getActiveTags() {
  return [...new Set(
    Object.values(global.plugins || {})
      .filter(p => !p.disabled && p.tags)
      .flatMap(p => Array.isArray(p.tags) ? p.tags : [p.tags])
  )].filter(Boolean)
}

function getCategoryRows(tags) {
  return tags.map(tag => ({
    title: `${tagIcons[tag] || '📂'} ${categoryNames[tag] || tag}`,
    description: `عرض أوامر ${categoryNames[tag] || tag}`,
    id: `.اوامر ${tag}`
  }))
}

function getCommandsByTag(tag) {
  return Object.values(global.plugins || {})
    .filter(p => !p.disabled && p.tags && (Array.isArray(p.tags) ? p.tags : [p.tags]).includes(tag))
    .flatMap(p => (Array.isArray(p.help) ? p.help : [p.help]).filter(Boolean))
    .map(cmd => `${tagIcons[tag] || '⚘'} *.${cmd}*`)
}

function decorateCategoryHeader(catName, cmdCount) {
  const emoji = catName.split(' ')[0]
  return `╭━━━━━━━━━━━━━━━━━━━╮
┃ ${emoji} ${catName} ${emoji} ┃
╰━━━━━━━━━━━━━━━━━━━╯
⚘ *الأوامر المتاحة:* ${cmdCount} ⚘`
}

async function sendCategoryMenu(m, conn, tag) {
  const cmds = getCommandsByTag(tag)
  const catName = `${tagIcons[tag] || '📂'} ${categoryNames[tag] || tag}`
  const header = decorateCategoryHeader(catName, cmds.length)
  const txt = cmds.length === 0
    ? '⚠️ لا توجد أوامر في هذا القسم حالياً'
    : `${header}\n\n${cmds.join('\n')}`

  try {
    const videoBuffer = await ensureMenuVideo()
    const mediaMessage = await prepareWAMessageMedia(
      { video: videoBuffer, gifPlayback: true },
      { upload: conn.waUploadToServer }
    )

    const allTags = getActiveTags()
    const msg = generateWAMessageFromContent(m.chat, {
      viewOnceMessage: {
        message: {
          interactiveMessage: {
            header: { hasMediaAttachment: true, videoMessage: mediaMessage.videoMessage },
            body: { text: txt },
            footer: { text: "⚡ 𝙉𝙊𝙓 𝘽𝙊𝙏 " },
            nativeFlowMessage: {
              buttons: [
                {
                  name: "single_select",
                  buttonParamsJson: JSON.stringify({
                    title: "📂 اختر قسم آخر",
                    sections: [{ title: '📂 أقسام البوت', rows: getCategoryRows(allTags) }]
                  })
                },
                {
                  name: "quick_reply",
                  buttonParamsJson: JSON.stringify({
                    display_text: "🔙 رجوع للرئيسية",
                    id: ".اوامر"
                  })
                }
              ],
              messageParamsJson: JSON.stringify({
                bottom_sheet: { in_thread_buttons_limit: 1 }
              })
            }
          }
        }
      }
    }, { quoted: m })

    await conn.relayMessage(m.chat, msg.message, {})
  } catch (e) {
    await conn.sendMessage(m.chat, { text: txt }, { quoted: m })
  }
}

let handler = async (m, { conn, usedPrefix, args }) => {
  try {
    const tag = args[0]?.trim().toLowerCase()
    if (tag && categoryNames[tag]) {
      return await sendCategoryMenu(m, conn, tag)
    }

    let menu = {}
    for (let plugin of Object.values(global.plugins || {})) {
      if (!plugin || !plugin.help) continue
      let taglist = plugin.tags || []
      for (let t of taglist) {
        if (!menu[t]) menu[t] = []
        menu[t].push(plugin)
      }
    }

    let uptimeSec = process.uptime()
    let uptimeStr = `${Math.floor(uptimeSec/3600)}h ${Math.floor((uptimeSec%3600)/60)}m ${Math.floor(uptimeSec%60)}s`
    const now     = moment().tz("Africa/Cairo")
    const timeStr = now.format("hh:mm:ss A")
    const tagUser = '@' + m.sender.split('@')[0]
    const line    = "━━━━━━━━━━━━━━━━━━━━━━"

    let txt = `
╔══════════════════════╗
        🌓 Ｎｏｘ Ｂｏｔ 🌓
╚══════════════════════╝   
> أهلاً بك في 𝐍𝐎𝐗
نورتنا ✦ , ${tagUser}
*الاوامر في اسفل القائمة*

${line}

▸ نـظـام
• اسـم الـبـوت : ＃ 𝙽𝙾𝚇
• وقـت الـنـشـاط: ${uptimeStr}
• الـوقـت الـحـالي: ${timeStr}

${line}

▸ أقـسـام الـبـوت
`

    for (let tag in menu) {
      const icon = tagIcons[tag] || '◦'
      txt += `\n◆ ${tag.toUpperCase()}\n`
      let commands = menu[tag].map(plugin => {
        const cmdList = Array.isArray(plugin.help) ? plugin.help : [plugin.help]
        return cmdList.map(cmd => `${icon} ${usedPrefix}${cmd}`).join('\n')
      }).join('\n')
      txt += `${commands}\n`
    }

    txt += `
${line}
"شكراً لاستخدامك ＃ 𝙽𝙾𝚇 ، ونتمنى لك تجربة ممتعة ⚡"
`

    await conn.sendMessage(m.chat, { react: { text: '‍🌓', key: m.key } })

    const videoBuffer = await ensureMenuVideo()
    const mediaMessage = await prepareWAMessageMedia(
      { video: videoBuffer, gifPlayback: true },
      { upload: conn.waUploadToServer }
    )

    const allTags = getActiveTags()

    const shanksSections = [
      {
        title: "Ｎｏｘ Ｂｏｔ",
        highlight_label: "⚡ خيارات سريعة",
        rows: [
          { title: "لـجـروبـات الـبـوت", description: "عرض جميع الجروبات الخاصة بالبوت", id: `${usedPrefix}جروبات-البوت` },
          { title: "حـالـة الـنـظـام", description: "فحص السرعة والأداء", id: `${usedPrefix}ping` },
          { title: "لـلـمـطـور", description: "مطور البوت 👑", id: `${usedPrefix}مطور` }
        ]
      }
    ]

    const sectionsOnly = [
      {
        title: "📂 أقسام البوت",
        rows: getCategoryRows(allTags)
      }
    ]

    const msg = generateWAMessageFromContent(m.chat, {
      viewOnceMessage: {
        message: {
          interactiveMessage: {
            header: {
              hasMediaAttachment: true,
              videoMessage: mediaMessage.videoMessage
            },
            body: { text: txt },
            footer: { text: "𝙉𝙤𝙭 𝘽𝙤𝙩" },
            nativeFlowMessage: {
              buttons: [
                {
                  name: "single_select",
                  buttonParamsJson: JSON.stringify({
                    title: "واجهة ＃ 𝙽𝙾𝚇 🌓",
                    sections: shanksSections
                  })
                },
                {
                  name: "single_select",
                  buttonParamsJson: JSON.stringify({
                    title: "📂 الأقسام",
                    sections: sectionsOnly
                  })
                }
              ],
              messageParamsJson: JSON.stringify({
                limited_time_offer: {
                  text: "𝙉𝙤𝙭 𝘽𝙤𝙩",
                  url: "https://whatsapp.com",
                  copy_code: "𝙉𝙤𝙭 𝘽𝙤𝙩",
                  expiration_time: 1754613436864329
                },
                bottom_sheet: {
                  in_thread_buttons_limit: 1,
                  divider_indices: [1],
                  list_title: "واجهة ＃ 𝙽𝙾𝚇",
                  button_title: "فتح قائمة ＃ 𝙽𝙾𝚇"
                },
                tap_target_configuration: {
                  title: "▸ 𝙉𝙤𝙭 𝘽𝙤𝙩 ◂",
                  description: "القائمة الرئيسية",
                  canonical_url: "https://whatsapp.com",
                  domain: "https://whatsapp.com",
                  button_index: 0
                }
              })
            },
            contextInfo: {
              mentionedJid: [m.sender],
              isForwarded: true,
              forwardingSlib: 999999
            }
          }
        }
      }
    }, { quoted: m })

    await conn.relayMessage(m.chat, msg.message, {})

  } catch (e) {
    console.error(e)
    conn.reply(m.chat, "❌ حصل خطأ أثناء تشغيل القائمة", m)
  }
}

handler.command = [
  'menu','help','allmenu',
  'الاوامر','اوامر','اومرو','امور','أوامر',
  'القائمه','القائمة'
]

handler.help = ['اوامر']
handler.tags = ['main']

export default handler
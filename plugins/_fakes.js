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

import pkg from '@whiskeysockets/baileys'

import fs from 'fs'

import fetch from 'node-fetch'

import axios from 'axios'

import moment from 'moment-timezone'

const { generateWAMessageFromContent, prepareWAMessageMedia, proto } = pkg

var handler = m => m

handler.all = async function (m) {

  global.canalIdM = [

    "120363426042842162@newsletter",

    "120363426042842162@newsletter"

  ]

  global.canalNombreM = [

    "＃ 𝙽𝙾𝚇",

    "＃ 𝙽𝙾𝚇"

  ]

  global.channelRD = await getRandomChannel()

  global.d = new Date(new Date + 3600000)

  global.locale = 'es'

  global.dia = d.toLocaleDateString(locale, {

    weekday: 'long'

  })

  global.fecha = d.toLocaleDateString('es', {

    day: 'numeric',

    month: 'numeric',

    year: 'numeric'

  })

  global.mes = d.toLocaleDateString('es', {

    month: 'long'

  })

  global.año = d.toLocaleDateString('es', {

    year: 'numeric'

  })

  global.tiempo = d.toLocaleString('en-US', {

    hour: 'numeric',

    minute: 'numeric',

    second: 'numeric',

    hour12: true

  })

  var canal = 'https://whatsapp.com/channel/0029VbC5LLx6GcGDXZUmHP0y'

  var comunidad = 'https://chat.whatsapp.com/IwfIPGmt9Tv2hgJEXnQ1Fy'

  var git = 'https://github.com/'

  var github = 'https://github.com/'

  var correo = 'minexdt@gmail.com'

  global.redes = pickRandom([

    canal,

    comunidad,

    git,

    github,

    correo

  ])

  global.nombre = m.pushName || 'Anónimo'

  global.packsticker = `╭━━━━━━━━━━━━━━━━━━━━╮

┃

┃  ＃ 𝙽𝙾𝚇

┃

┃  ⏱ 𝚃𝙷𝙴 𝚂𝚃𝙸𝙲𝙺𝙴𝚁

┃

┃  𝙳𝙴𝚅 : 𝚆𝙸𝙻𝙻𝙸𝙰𝙼 𝚇 𝚂𝙷𝙰𝙽𝙺𝚂

┃

╰━━━━━━━━━━━━━━━━━━━━╯

⏱`

  global.namebot = '＃ 𝙽𝙾𝚇'

  global.author = `⏱

╭━━━━━━━━━━━━━━━━━━━━╮

┃

┃  ＃ 𝙽𝙾𝚇

┃

┃  𝙳𝙴𝚅 → 𝚆𝙸𝙻𝙻𝙸𝙰𝙼 𝚇 𝚂𝙷𝙰𝙽𝙺𝚂

┃

╰━━━━━━━━━━━━━━━━━━━━╯`

  global.packsticker2 = `╭━━━━━━━━━━━━━━━━━━━━╮

┃

┃  ＃ 𝙽𝙾𝚇

┃

┃  ⏱ 𝚃𝙷𝙴 𝚂𝚃𝙸𝙲𝙺𝙴𝚁

┃

┃  𝙳𝙴𝚅 : 𝚆𝙸𝙻𝙻𝙸𝙰𝙼 𝚇 𝚂𝙷𝙰𝙽𝙺𝚂

┃

╰━━━━━━━━━━━━━━━━━━━━╯

⏱`

  global.fkontak = {

    key: {

      participants: "0@s.whatsapp.net",

      remoteJid: "status@broadcast",

      fromMe: false,

      id: "＃ 𝙽𝙾𝚇"

    },

    message: {

      contactMessage: {

        vcard: `BEGIN:VCARD

VERSION:3.0

N:Sy;Bot;;;

FN:＃ 𝙽𝙾𝚇

item1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}

item1.X-ABLabel:Ponsel

END:VCARD`

      }

    },

    participant: "0@s.whatsapp.net"

  }

}

export default handler

function pickRandom(list) {

  return list[Math.floor(Math.random() * list.length)]

}

async function getRandomChannel() {

  let randomIndex = Math.floor(

    Math.random() * global.canalIdM.length

  )

  let id = global.canalIdM[randomIndex]

  let name = global.canalNombreM[randomIndex]

  return {

    id,

    name

  }

}
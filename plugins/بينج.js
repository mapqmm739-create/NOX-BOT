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

import os from 'os'
import { performance } from 'perf_hooks'

function clockString(ms) {
    let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
    let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
    let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
    return [h, m, s].map(v => v.toString().padStart(2, '0')).join(':')
}

function formatSize(bytes) {
    if (!bytes) return '0 B'

    const k = 1024
    const sizes = ['B', 'KB', 'MB', 'GB', 'TB']
    const i = Math.floor(Math.log(bytes) / Math.log(k))

    return parseFloat(
        (bytes / Math.pow(k, i)).toFixed(1)
    ) + ' ' + sizes[i]
}

let handler = async (m, { conn }) => {

    const start = performance.now()

    const uptime = clockString(
        process.uptime() * 1000
    )

    const ramUsage = process.memoryUsage()

    const totalMem = os.totalmem()
    const freeMem = os.freemem()
    const usedMem = totalMem - freeMem

    const cpus = os.cpus()
    const cores = cpus.length

    const cpuModel =
        cpus[0]?.model?.trim() ||
        'Unknown CPU'

    const cpuLoad =
        Math.min(
            100,
            Math.round(
                (os.loadavg()[0] / cores) * 100
            )
        )

    const ramPercent =
        Math.round(
            (usedMem / totalMem) * 100
        )

    const heapPercent =
        Math.round(
            (ramUsage.heapUsed /
            ramUsage.heapTotal) * 100
        )

    const speed =
        (performance.now() - start).toFixed(2)

    const statusText =

`╭━━━〔 𝐍𝐎𝐗 〕━━━╮
┃
┃ 𝚆𝙸𝙻𝙻𝙸𝙰𝙼 𝚇 𝚂𝙷𝙰𝙽𝙺𝚂
┃
╰━━━━━━━━━━━━━━╯

╭━━〔 ⚡ 𝐒𝐘𝐒𝐓𝐄𝐌 〕━━╮
┃
┃ ⚡ 𝐏𝐈𝐍𝐆
┃ └─ ${speed} ms
┃
┃ ⏱️ 𝐔𝐏𝐓𝐈𝐌𝐄
┃ └─ ${uptime}
┃
┃ 💾 𝐑𝐀𝐌
┃ └─ ${formatSize(usedMem)} / ${formatSize(totalMem)}
┃ └─ ${ramPercent}%
┃
┃ 🧠 𝐇𝐄𝐀𝐏
┃ └─ ${formatSize(ramUsage.heapUsed)} / ${formatSize(ramUsage.heapTotal)}
┃ └─ ${heapPercent}%
┃
┃ ⚙️ 𝐂𝐏𝐔
┃ └─ ${cpuModel}
┃ └─ ${cpuLoad}%
┃
┃ 🔢 𝐂𝐎𝐑𝐄𝐒
┃ └─ ${cores}
┃
┃ 💻 𝐏𝐋𝐀𝐓𝐅𝐎𝐑𝐌
┃ └─ ${os.platform().toUpperCase()} ${os.arch()}
┃
┃ 🟢 𝐍𝐎𝐃𝐄
┃ └─ ${process.version}
┃
╰━━〔 𝐍𝐎𝐗 × 𝚆𝙸𝙻𝙻𝙸𝙰𝙼 × 𝚂𝙷𝙰𝙽𝙺𝚂 〕━━╯`

    await conn.relayMessage(
        m.chat,
        {
            pollResultSnapshotMessage: {
                name: statusText,

                pollVotes: [
                    {
                        optionName:
                            `⚡ 𝐂𝐏𝐔  ·  ${cpuLoad}%`,
                        optionVoteCount: cpuLoad
                    },
                    {
                        optionName:
                            `💾 𝐑𝐀𝐌  ·  ${ramPercent}%`,
                        optionVoteCount: ramPercent
                    },
                    {
                        optionName:
                            `🧠 𝐇𝐄𝐀𝐏  ·  ${heapPercent}%`,
                        optionVoteCount: heapPercent
                    }
                ],

                pollType: 0
            }
        },
        {}
    )
}

handler.help = ['حالة', 'بينج']
handler.tags = ['main']

handler.command =
    /^(حالة|حاله|بينج|ping|status)$/i

export default handler
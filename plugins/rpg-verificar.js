import { createHash } from 'crypto'
let Reg = /\|?(.*)([.|] *?)([0-9]*)$/i
let handler = async function (m, { conn, text, usedPrefix, command }) {
  let user = db.data.users[m.sender]
  let name2 = conn.getName(m.sender)
  if (user.registered === true) throw `🌴𝙷𝙾𝙻𝙰 𝚈𝙰 𝚃𝙴 𝙴𝙽𝙲𝚄𝙴𝙽𝚃𝚁𝙰𝚂🍃 𝚁𝙴𝙶𝙸𝚂𝚃𝚁𝙰𝙳𝙾 𝙴𝙽 𝙼𝙸 𝙱𝙰𝚂𝙴 𝙳𝙴 𝙳𝙰𝚃𝙾𝚂`
  if (!Reg.test(text)) throw `🌹𝙷𝙾𝙻𝙰 𝚃𝙴 𝙸𝙽𝙵𝙾𝚁𝙼𝙾 𝚀𝚄𝙴 𝙷𝙰𝚂 ❌𝙵𝙰𝙻𝙻𝙰𝙳𝙾 𝙲𝙾𝙽 𝙴𝙻 𝚁𝙴𝙶𝙸𝚂𝚃𝚁𝙾`
  let [_, name, splitter, age] = text.match(Reg)
  if (!name) throw '🍃 Nopi.'
  if (!age) throw '☘️ Nopi. 🌱'
  if (name.length >= 30) throw '☘️Nop. 🌹️' 
  age = parseInt(age)
  if (age > 100) throw '✨𝙷𝙾𝙻𝙰 😅𝙾𝚈𝙴 𝙿𝙾𝚁 𝙵𝙰𝚅𝙾𝚁 ☘️𝙿𝚄𝙴𝙳𝙴𝚂 𝙿𝙾𝙽𝙴𝚁 𝚃𝚄 𝙴𝙳𝙰𝙳 𝙼Á𝚂 𝙱𝙰𝙹𝙰 𝙾 𝙰𝙲𝙰𝚂𝙾 𝙴𝚁𝙴𝚂 𝚄𝙽 𝙰𝙽𝙲𝙸𝙰𝙽𝙾🤭?'
  if (age < 5) throw '😒𝙿𝙾𝚁 𝙵𝙰𝚅𝙾𝚁 𝚅𝙰𝙼𝙾𝚂 𝙽𝙾 𝙴𝚂𝚃𝙴𝙽 𝙹𝚄𝙶𝙰𝙽𝙳𝙾🤨 𝙲𝙾𝙼𝙾 𝚄𝙽𝙾 𝙽𝙸𝙽𝙾 𝙳𝙴 𝙲𝙸𝙽𝙲𝙾 𝙰Ñ𝙾𝚂 𝚅𝙰 𝙰 𝙿𝙾𝙳𝙴𝚁 𝙴𝚂𝙲𝚁𝙸𝙱𝙸𝚁😅'
  user.name = name.trim()
  user.age = age
  user.regTime = + new Date
  user.registered = true
  let sn = createHash('md5').update(m.sender).digest('hex')
  m.reply(`╭━〘𝐏𝐨𝐥𝐁𝐨𝐭〙━⊷
┃ ⛥├❏[🌴]𝙷𝙾𝙻𝙰 𝚈𝙰 𝙴𝚂𝚃Á𝚂 𝚁𝙴𝙶𝙸𝚂𝚃𝚁𝙰𝙳𝙾 
┃ ⛥├❏[🤴]𝙽𝙾𝙼𝙱𝚁𝙴 ${name}
┃ ⛥├❏[🏧]𝙴𝙳𝙰𝙳 ${age} 𝙰Ñ𝙾𝚂 
┃ ⛥├❏[™️]𝙽Ú𝙼𝙴𝚁𝙾 𝙳𝙴 𝚂𝙴𝚁𝙸𝙴
┃ ⛥├❏[✔️]${sn}
┃ ⛥╰───────────
╰━━━━━━━━━━━──⊷`.trim())
}
handler.help = ['daftar', 'register'].map(v => v + ' <nama>.<umur>')
handler.tags = ['xp']

handler.command = /^(Reg|reg|registrar|reg(ister)?)$/i

export default handler

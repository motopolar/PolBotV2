let handler = m => m

handler.all = async function (m) {
  let chat = global.db.data.chats[m.chat]

  if ((/^hola$/i.test(m.text) || /^menu$/i.test(m.text)) && chat.audios && !chat.isBanned) {
    return false; // Evitar enviar audio
  }

  if (!chat.isBanned && chat.audios && m.text.match(/(canta miku)/gi)) {
    return false; // Evitar enviar audio
  }

  if (!chat.isBanned && chat.audios && m.text.match(/(canta miku2)/gi)) {
    return false; // Evitar enviar audio
  }

  if (!chat.isBanned && chat.audios && m.text.match(/(descargasmuci|Descargasmuci)/gi)) {
    return false; // Evitar enviar audio
  }

  return true;
}

export default handler

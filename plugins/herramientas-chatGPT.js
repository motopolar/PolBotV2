
const fetch = require('node-fetch');

// Coloca tu clave de API de LolHuman aquí
const lolkeysapi = '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';

let handler = async (m, { text, usedPrefix, command }) => {
  if (!text) throw `*[❗] DEBES ESCRIBIR UNA PREGUNTA O UN COMANDO PARA USAR LA FUNCIÓN DE CHAT GPT*\n\n*—◉ EJEMPLOS DE PETICIONES Y ÓRDENES*\n*◉ ${usedPrefix + command} Reflexión sobre la serie Merlina 2022 de Netflix*\n*◉ ${usedPrefix + command} Código en JS para un juego de cartas*`;

  try {
    m.reply('_PolBot te va a deslumbrar con su inteligencia, espera que piense en lo que me pediste..._');
    let tiores = await fetch(`https://api.lolhuman.xyz/api/openai?apikey=${lolkeysapi}&text=${encodeURIComponent(text)}&user=user-unique-id`);
    let hasil = await tiores.json();
    m.reply(`${hasil.result}`.trim());
  } catch (error) {
    throw `*[❗] HA OCURRIDO UN ERROR, POR FAVOR, INTÉNTALO DE NUEVO MÁS TARDE*`;
  }
};

handler.command = ['openai', 'chatgpt', 'ia', 'robot'];

module.exports = handler;





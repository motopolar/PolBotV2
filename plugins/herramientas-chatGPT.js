const fetch = require('node-fetch');

// Coloca tu clave de API de ChatGPT aquí

const chatGptApiKey = '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';

let handler = async (m, { text, usedPrefix, command }) => {

  if (!text) throw `*[❗] DEBES ESCRIBIR UNA PREGUNTA O UN COMANDO PARA USAR LA FUNCIÓN DE CHAT GPT*\n\n*—◉ EJEMPLOS DE PETICIONES Y ÓRDENES*\n*◉ ${usedPrefix + command} Reflexión sobre la serie Merlina 2022 de Netflix*\n*◉ ${usedPrefix + command} Código en JS para un juego de cartas*`;

  try {

    m.reply('_PolBot te va a deslumbrar con su inteligencia, espera que piense en lo que me pediste..._');

    let tiores = await fetch('https://api.openai.com/v1/engines/davinci-codex/completions', {

      method: 'POST',

      headers: {

        'Content-Type': 'application/json',

        'Authorization': `Bearer ${chatGptApiKey}`

      },

      body: JSON.stringify({

        prompt: text,

        max_tokens: 50

      })

    });

    let hasil = await tiores.json();

    m.reply(`${hasil.choices[0].text}`.trim());

  } catch (error) {

    throw `*[❗] HA OCURRIDO UN ERROR, POR FAVOR, INTÉNTALO DE NUEVO MÁS TARDE*`;

  }

};

handler.command = ['openai', 'chatgpt', 'ia', 'robot'];

module.exports = handler;



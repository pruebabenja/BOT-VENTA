import fetch from 'node-fetch';
const handler = async (m, {conn, usedPrefix, usedPrefix: _p, __dirname, text, isPrems}) => {
  if (usedPrefix == 'a' || usedPrefix == 'A') return;
  try {
    const pp = imagen1;
    // let vn = './media/menu.mp3'
    const img = './Menu2.jpg';
    const d = new Date(new Date + 3600000);
    const locale = 'es';
    const week = d.toLocaleDateString(locale, {weekday: 'long'});
    const date = d.toLocaleDateString(locale, {day: 'numeric', month: 'long', year: 'numeric'});
    const _uptime = process.uptime() * 1000;
    const uptime = clockString(_uptime);
    const user = global.db.data.users[m.sender];
    const {money, joincount} = global.db.data.users[m.sender];
    const {exp, limit, level, role} = global.db.data.users[m.sender];
    const rtotalreg = Object.values(global.db.data.users).filter((user) => user.registered == true).length;
    const rtotal = Object.entries(global.db.data.users).length || '0'
    const more = String.fromCharCode(8206);
    const readMore = more.repeat(850);
    const taguser = '@' + m.sender.split('@s.whatsapp.net')[0];
    const doc = ['pdf', 'zip', 'vnd.openxmlformats-officedocument.presentationml.presentation', 'vnd.openxmlformats-officedocument.spreadsheetml.sheet', 'vnd.openxmlformats-officedocument.wordprocessingml.document'];
    const document = doc[Math.floor(Math.random() * doc.length)];
    const str = `     ┣ *𝑴𝑬𝑵𝑼 ❘❚  𝗕 ͟ ͟ ͟ ㉀𝗧〘E⎯ XCLUS!VE〙❞* ┫
┏━━━━━━━━━━━━━━━━━━━━━┓
┃「 ☀️𝙃𝙀𝙍𝙍𝘼𝙈𝙄𝙀𝙉𝙏𝘼𝙎☀️ 」
┃╭───────⧟⭑⧟───────•
┃│☀️.𝘊𝘭𝘪𝘮𝘢
┃│☀️.𝘈𝘧𝘬
┃│☀️.𝘖𝘤𝘳
┃│☀️.𝘊𝘢𝘭𝘤
┃│☀️.𝘋𝘦𝘭
┃│☀️.𝘞𝘩𝘢𝘵𝘮𝘶𝘴𝘪𝘤
┃│☀️.𝘘𝘳𝘤𝘰𝘥𝘦
┃│☀️.𝘛𝘳𝘢𝘥𝘶𝘤𝘪𝘳
┃╰───────⧟⭑⧟───────•
┗━━━━━━━━━━━━━━━━━━━━━┛


┏━━━━━━━━━━━━━━━━━━━━━┓
┃「 ⭐𝙀𝘾𝙊𝙉𝙊𝙈𝙄𝘼𝙎⭐ 」
┃╭───────⧟⭑⧟───────•
┃│⭐.𝘝𝘦𝘳𝘪𝘧𝘪𝘤𝘢𝘳
┃│⭐.𝘜𝘯𝘳𝘦𝘨
┃│⭐.𝘔𝘪𝘯𝘢𝘳
┃│⭐.𝘉𝘶𝘺
┃│⭐.𝘞𝘰𝘳𝘬
┃│⭐.𝘔𝘦𝘯𝘥𝘪𝘨𝘢𝘳
┃│⭐.𝘛𝘳𝘢𝘯𝘴𝘧𝘦𝘳
┃╰───────⧟⭑⧟───────•
┗━━━━━━━━━━━━━━━━━━━━━┛


┏━━━━━━━━━━━━━━━━━━━━━┓
┃「 🍂𝙊𝙒𝙉𝙀𝙍𝙎🍂 」
┃╭───────⧟⭑⧟───────•
┃│🍂.𝘑𝘰𝘪𝘯 𝚎𝚗𝚕𝚊𝚌𝚎
┃│🍂.𝘜𝘯𝘦𝘵𝘦 𝚎𝚗𝚕𝚊𝚌𝚎
┃│🍂.𝘋𝘢𝘳𝘥𝘪𝘢𝘮𝘢𝘯𝘵𝘦𝘴 𝚌𝚊𝚗𝚝𝚒𝚍𝚊𝚍
┃│🍂.𝘋𝘢𝘳𝘹𝘱 𝚌𝚊𝚗𝚝𝚒𝚍𝚊𝚍
┃│🍂.𝘋𝘢𝘳𝘹𝘪𝘢𝘤𝘰𝘪𝘯𝘴 𝚌𝚊𝚗𝚝𝚒𝚍𝚊𝚍
┃│🍂.𝘈𝘥𝘥𝘱𝘳𝘦𝘮 @𝚝𝚊𝚐 𝚌𝚊𝚗𝚝𝚒𝚍𝚊𝚍
┃│🍂.𝘈𝘥𝘥𝘱𝘳𝘦𝘮2 @𝚝𝚊𝚐 𝚌𝚊𝚗𝚝𝚒𝚍𝚊𝚍
┃│🍂.𝘈𝘥𝘥𝘱𝘳𝘦𝘮3 @𝚝𝚊𝚐 𝚌𝚊𝚗𝚝𝚒𝚍𝚊𝚍
┃│🍂.𝘈𝘥𝘥𝘱𝘳𝘦𝘮4 @𝚝𝚊𝚐 𝚌𝚊𝚗𝚝𝚒𝚍𝚊𝚍
┃│🍂.𝘐𝘥𝘪𝘰𝘮𝘢 | 𝘭𝘢𝘯𝘨𝘶𝘢𝘫𝘦
┃│🍂.𝘊𝘢𝘫𝘢𝘧𝘶𝘦𝘳𝘵𝘦
┃│🍂.𝘊𝘰𝘮𝘶𝘯𝘪𝘤𝘢𝘳|𝚝𝚎𝚡𝚝𝚘
┃│🍂.𝘉𝘳𝘰𝘢𝘥𝘤𝘢𝘴𝘵𝘤𝘩𝘢𝘵|𝚝𝚎𝚡𝚝𝚘
┃│🍂.𝘊𝘰𝘮𝘶𝘯𝘪𝘤𝘢𝘳𝘱𝘷 𝚝𝚎𝚡𝚝𝚘
┃│🍂.𝘉𝘳𝘰𝘢𝘥𝘤𝘢𝘴𝘵𝘨𝘤 𝚝𝚎𝚡𝚝𝚘
┃│🍂.𝘊𝘰𝘮𝘶𝘯𝘪𝘤𝘢𝘳𝘨𝘳𝘶𝘱𝘰𝘴 𝚝𝚎𝚡𝚝𝚘
┃│🍂.𝘉𝘰𝘳𝘳𝘢𝘳𝘵𝘮𝘱
┃│🍂.𝘋𝘦𝘭𝘦𝘹𝘱 @𝚝𝚊𝚐
┃│🍂.𝘋𝘦𝘭𝘰𝘱𝘵𝘪𝘮𝘶𝘴𝘤𝘰𝘪𝘯𝘴 @𝚝𝚊𝚐
┃│🍂.𝘋𝘦𝘭𝘥𝘪𝘢𝘮𝘢𝘯𝘵𝘦𝘴 @𝚝𝚊𝚐
┃│🍂.𝘙𝘦𝘪𝘯𝘪𝘤𝘪𝘢𝘳 | 𝘳𝘦𝘴𝘵𝘢𝘳𝘵
┃│🍂.𝘈𝘤𝘵𝘶𝘢𝘭𝘪𝘻𝘢𝘳 | 𝘶𝘱𝘥𝘢𝘵𝘦
┃│🍂.𝘈𝘥𝘥𝘱𝘳𝘦𝘮 | +𝘱𝘳𝘦𝘮 @𝚝𝚊𝚐
┃│🍂.𝘋𝘦𝘭𝘱𝘳𝘦𝘮 | -𝘱𝘳𝘦𝘮 @𝚝𝚊𝚐
┃│🍂.𝘓𝘪𝘴𝘵𝘢𝘱𝘳𝘦𝘮𝘪𝘶𝘮 | 𝘭𝘪𝘴𝘵𝘱𝘳𝘦𝘮
┃│🍂.𝘈𝘯̃𝘢𝘥𝘪𝘳𝘥𝘪𝘢𝘮𝘢𝘯𝘵𝘦𝘴 @𝚝𝚊𝚐 𝚌𝚊𝚗𝚝𝚒𝚍𝚊𝚍
┃│🍂.𝘈𝘯̃𝘢𝘥𝘪𝘳𝘹𝘱 @𝚝𝚊𝚐 𝚌𝚊𝚗𝚝𝚒𝚍𝚊𝚍
┃│🍂.𝘈𝘯̃𝘢𝘥𝘪𝘳𝘤𝘰𝘪𝘯𝘴 @𝚝𝚊𝚐 𝚌𝚊𝚗𝚝𝚒𝚍𝚊𝚍
┃╰───────⧟⭑⧟───────•
┗━━━━━━━━━━━━━━━━━━━━━┛`.trim();
    if (m.isGroup) {
      // await conn.sendFile(m.chat, vn, 'menu.mp3', null, m, true, { type: 'audioMessage', ptt: true})
      const fkontak2 = {'key': {'participants': '0@s.whatsapp.net', 'remoteJid': 'status@broadcast', 'fromMe': false, 'id': 'Halo'}, 'message': {'contactMessage': {'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`}}, 'participant': '0@s.whatsapp.net'};
      conn.sendMessage(m.chat, {image: pp, caption: str.trim(), mentions: [...str.matchAll(/@([0-9]{5,16}|0)/g)].map((v) => v[1] + '@s.whatsapp.net')}, {quoted: m});
    } else {
      // await conn.sendFile(m.chat, vn, 'menu.mp3', null, m, true, { type: 'audioMessage', ptt: true})
      const fkontak2 = {'key': {'participants': '0@s.whatsapp.net', 'remoteJid': 'status@broadcast', 'fromMe': false, 'id': 'Halo'}, 'message': {'contactMessage': {'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`}}, 'participant': '0@s.whatsapp.net'};
      conn.sendMessage(m.chat, {image: pp, caption: str.trim(), mentions: [...str.matchAll(/@([0-9]{5,16}|0)/g)].map((v) => v[1] + '@s.whatsapp.net')}, {quoted: fkontak2});
    }
  } catch {
    conn.reply(m.chat, '🚀𝑬𝒍 𝒎𝒆𝒏𝒖 𝒕𝒊𝒆𝒏𝒆𝒏 𝒖𝒏 𝒆𝒓𝒓𝒐𝒓, 𝒑𝒐𝒓𝒇𝒂𝒗𝒐𝒓 𝒖𝒔𝒂 𝒆𝒍 𝒄𝒐𝒎𝒂𝒏𝒅𝒐 .𝒐𝒘𝒏𝒆𝒓 𝒚 𝒄𝒐𝒎𝒖𝒏𝒊𝒄𝒂𝒕𝒆 𝒄𝒐𝒏 𝒎𝒊 𝒄𝒓𝒆𝒂𝒅𝒐𝒓\n\n.𝘳𝘦𝘱𝘰𝘳𝘵𝘦 <𝘵𝘦𝘹𝘵𝘰>', m);
  }
};
handler.command = /^(menu6|menú6|memu6)$/i;
handler.exp = 50;
handler.fail = null;
export default handler;
function clockString(ms) {
  const h = isNaN(ms) ? '--' : Math.floor(ms / 3600000);
  const m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60;
  const s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60;
  return [h, m, s].map((v) => v.toString().padStart(2, 0)).join(':');
}

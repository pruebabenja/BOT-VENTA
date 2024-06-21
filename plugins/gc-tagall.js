const handler = async (m, {isOwner, isAdmin, conn, text, participants, args, command, usedPrefix}) => {
  if (usedPrefix == 'a' || usedPrefix == 'A') return;
  if (!(isAdmin || isOwner)) {
    global.dfail('admin', m, conn);
    throw false;
  }
  const pesan = args.join` `;
const oi = `📩 𝑪𝑶𝑴𝑼𝑵𝑰𝑪𝑨𝑫𝑶: ${pesan}\n✅ 𝑰𝑵𝑻𝑬𝑮𝑹𝑨𝑵𝑻𝑬𝑺: _*${participants.length}*_`;
  let teks = `㑤⃞   WELCOME — BIENVENIDOS      ▍\n\n ${oi}\n\n┏➤〘    MENCIÓN GENERAL  ✨    〙\n`;
  for (const mem of participants) {
    teks += `┣🚻 @${mem.id.split('@')[0]}\n`;
  }
  teks += `┗➤ 𝑩𝒐𝒕 ❘❚  𝗕 ͟ ͟ ͟ ㉀𝗧〘E⎯ XCLUS!VE〙❞`;
  conn.sendMessage(m.chat, {text: teks, mentions: participants.map((a) => a.id)} );
};
handler.help = ['tagall <mesaje>', 'invocar <mesaje>'];
handler.tags = ['group'];
handler.command = /^(tagall|invocar|invocacion|todos|invocación)$/i;
handler.admin = true;
handler.group = true;
export default handler;

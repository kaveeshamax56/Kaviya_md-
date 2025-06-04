const { cmd, commands } = require('../command');
const os = require("os");
const { runtime } = require('../lib/functions');

cmd({
    pattern: "alive",
    alias: ["status", "runtime", "uptime"],
    desc: "Check uptime and system status",
    category: "main",
    react: "📟",
    filename: __filename
},
async (conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {
        // Generate system status message
        const status = `*👋 Hello ${pushname}, I' am alive now..!*
┃◈╭─────────────·๏
┃◈┃• *🔥Runtime*:  ${runtime(process.uptime())} 
┃◈┃• *📟 Ram*: ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${(os.totalmem() / 1024 / 1024).toFixed(2)}MB
┃◈┃• *🤖Platfom*: *Linux*
┃◈┃• *🧬 Version*: *1.0.0*
┃◈└───────────┈⊷-
╰──────────────┈⊷
*ᴋᴀᴠɪʏᴀ ᴍᴅ Whatsapp bot*
 *created by kaviya🔥*

 Repo: github.com/mrkavindu/V1.com
 
 *🚫𝙿𝙾𝚆𝙴𝚁𝙳 𝙱𝚈 𝙺𝙰𝚅𝙸𝚈𝙰 〽️𝙳*`;

        // Send the status message with an image
        await conn.sendMessage(from, { 
            image: { url: `https://files.catbox.moe/8gt4jz.jpg` },  // Image URL
            caption: status,
            contextInfo: {
                mentionedJid: [m.sender],
                forwardingScore: 999,
                isForwarded: true,
                forwardedNewsletterMessageInfo: {
                    newsletterJid: '',
                    newsletterName: 'KAVIYA _MD',
                    serverMessageId: 143
                }
            }
        }, { quoted: mek });

    } catch (e) {
        console.error("Error in alive command:", e);
        reply(`An error occurred: ${e.message}`);
    }
});

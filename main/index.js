const {
WAConnection: _WAConnection,
MessageType,
Presence,
MessageOptions,
Mimetype,
MimetypeMap,
WALocationMessage,
ChatModification,
WA_MESSAGE_STUB_TYPES,
WA_DEFAULT_EPHEMERAL,
ReconnectMode,
ProxyAgent,
GroupSettingChange,
waChatKey,
mentionedJid,
processTime
} = require("@adiwajshing/baileys")
const simple = require('../lib/simple.js')
const WAConnection = simple.WAConnection(_WAConnection)

//=================================================//
const imgbb = require('imgbb-uploader')
const qrcode = require("qrcode-terminal")
const moment = require("moment-timezone")
const util = require('util')
const speed = require('performance-now')
const request = require('request');
const { spawn, exec, execSync } = require("child_process")
const fs = require("fs")
const axios = require("axios")
const ffmpeg = require('fluent-ffmpeg')
const { EmojiAPI } = require("emoji-api");
const emoji = new EmojiAPI()
const fetch = require('node-fetch');
const phoneNum = require('awesome-phonenumber')
const imageToBase64 = require('image-to-base64');
const brainly = require('brainly-scraper')
const yts = require( 'yt-search')
const ms = require('parse-ms')
const toMs = require('ms')
const time = moment().tz('Asia/Jakarta').format("HH:mm:ss")
const { error } = require("qrcode-terminal")
const topdf = require("image-to-pdf");
const nhentai = require("nhentai");
const hx = require('hxz-api')
//=================================================//
const { fbdl } = require("../function/fbdl");
const { mediafireDl } = require('../function/mediafire')
const { yta, ytv, igdl, upload, formatDate } = require('../function/ytdl')
const { webp2mp4File} = require('../function/webp2mp4')
const { lirikLagu } = require('../function/lirik');
const { ZippDL } = require('../function/zippydl.js')
const { pinterest } = require('../function/pinterest')
const { getUser, getPost, searchUser } = require('../function/instagram');
//=================================================//
const { wait, getBuffer, getBuff, h2k, generateMessageID, getGroupAdmins, getRandom, banner, start, info, success, close } = require('../lib/functions')
const { color, bgcolor } = require('../lib/color')
const { fetchJson, getBase64, kyun, createExif } = require('../lib/fetcher')
const _prem = require("../lib/premium");
const Exif = require('../lib/exif');
const exif = new Exif();
const { recognize } = require('../lib/ocr')
const { antiSpam } = require('../lib/antispam')
const { validmove, setGame } = require("../lib/tictactoe");
const { addCmd,getCommandPosition,getCmd,checkSCommand } = require('../lib/scommand')
const { isLimit, limitAdd, getLimit, giveLimit, addBalance, kurangBalance, getBalance, isGame, gameAdd, givegame, cekGLimit } = require("../lib/limit");
const { addVote, delVote } = require('../lib/vote.js')
const game = require("../lib/game");
const { addBanned, unBanned, BannedExpired, cekBannedUser } = require("../lib/banned");
//=================================================//
let premium = JSON.parse(fs.readFileSync('./database/premium.json'));
let limit = JSON.parse(fs.readFileSync('./database/limit.json'));
let glimit = JSON.parse(fs.readFileSync('./database/glimit.json'));
let users = JSON.parse(fs.readFileSync('./database/user.json'))
let balance = JSON.parse(fs.readFileSync('./database/balance.json'));
let mute = JSON.parse(fs.readFileSync('./database/mute.json'));
let antilink = JSON.parse(fs.readFileSync('./database/antilink.json'))
let afk = JSON.parse(fs.readFileSync('./database/afk.json'))
let welkom = JSON.parse(fs.readFileSync('./database/welkom.json'))
let scommand = JSON.parse(fs.readFileSync('./database/scommand.json'))
let voting = JSON.parse(fs.readFileSync('./vote/voting.json'))
let ban = JSON.parse(fs.readFileSync('./database/ban.json'));
//=================================================//
let mess = JSON.parse(fs.readFileSync('./main/mess.json'));
let overflow = JSON.parse(fs.readFileSync('./main/overflow.json'));
let setting = JSON.parse(fs.readFileSync('./main/config.json'));
let {
    ownerNumber,
    ownerName,
    botName,
    targetpc,
    owner,
    fake,
    limitCount,
    numbernye,
    targetgc,
    apikey,
    gamewaktu
} = setting

fimage = fs.readFileSync('./src/fake.jpeg')
floc = fs.readFileSync('./src/loc.jpeg')
baterai = {
    baterai: 0,
    cas: false
}
let tebakgambar = [];
let family100 = [];

moment.tz.setDefault("Asia/Jakarta").locale("id");
//=================================================//
module.exports = conn = async (conn, mek, baterai, blocked) => {
    try {
        const { donasi,myinfo,sumber,stats,menu,animemenu,gamemenu,islammenu,dlmenu,nsfwmenu,othermenu,kerjamenu,toolsmenu,grupmenu,mediamenu,ownermenu } = require("./help");
        const { bahasa , listsurah} = require("./kode.js");
        if (!mek.hasNewMessage) return
        mek = mek.messages.all()[0]
        if (!mek.message) return
        if (mek.key.fromMe) return
        if (mek.key && mek.key.remoteJid == 'status@broadcast') return
        global.blocked
        m = simple.smsg(conn, mek)
        mek.message = (Object.keys(mek.message)[0] === 'ephemeralMessage') ? mek.message.ephemeralMessage.message : mek.message
        const content = JSON.stringify(mek.message)
        const from = mek.key.remoteJid
        const { isQuotedMsg, mentioned, isBaileys } = mek
        const { text, extendedText, contact, location, liveLocation, image, video, sticker, document, audio, product } = MessageType
        const type = Object.keys(mek.message)[0]
        const cmd = (type === 'conversation' && mek.message.conversation) ? mek.message.conversation : (type == 'imageMessage') && mek.message.imageMessage.caption ? mek.message.imageMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption ? mek.message.videoMessage.caption : (type == 'extendedTextMessage') && mek.message.extendedTextMessage.text ? mek.message.extendedTextMessage.text : (type == 'stickerMessage') && (getCmd(mek.message.stickerMessage.fileSha256.toString('hex')) !== null && getCmd(mek.message.stickerMessage.fileSha256.toString('base64')) !== undefined) ? getCmd(mek.message.stickerMessage.fileSha256.toString('base64')) : "".slice(1).trim().split(/ +/).shift().toLowerCase()
        const prefix = /^[°•π÷×¶∆£¢€¥®™=|~!#$%^&.?/\\©^z+*@,;]/.test(cmd) ? cmd.match(/^[°•π÷×¶∆£¢€¥®™=|~!#$%^&.?/\\©^z+*,;]/gi) : '-'
        body = (type === 'conversation' && mek.message.conversation.startsWith(prefix)) ? mek.message.conversation : (type == 'imageMessage') && mek.message[type].caption.startsWith(prefix) ? mek.message[type].caption : (type == 'videoMessage') && mek.message[type].caption.startsWith(prefix) ? mek.message[type].caption : (type == 'extendedTextMessage') && mek.message[type].text.startsWith(prefix) ? mek.message[type].text : (type == 'listResponseMessage') && mek.message[type].singleSelectReply.selectedRowId ? mek.message[type].singleSelectReply.selectedRowId : (type == 'buttonsResponseMessage') && mek.message[type].selectedButtonId ? mek.message[type].selectedButtonId : (type == 'stickerMessage') && (getCmd(mek.message[type].fileSha256.toString('base64')) !== null && getCmd(mek.message[type].fileSha256.toString('base64')) !== undefined) ? getCmd(mek.message[type].fileSha256.toString('base64')) : ""
        budy = (type === 'conversation') ? mek.message.conversation : (type === 'extendedTextMessage') ? mek.message.extendedTextMessage.text : ''
        chats = (type === 'conversation') ? mek.message.conversation : (type === 'extendedTextMessage') ? mek.message.extendedTextMessage.text : ''
        const command = body.slice(1).trim().split(/ +/).shift().toLowerCase()
        const args = body.trim().split(/ +/).slice(1)
        const argss = body.split(/ +/g)
        const isCmd = body.startsWith(prefix)
        const q = args.join(' ')
        const arg = chats.slice(command.length + 2, chats.length)
        const botNumber = conn.user.jid
        const botNumberss = conn.user.jid + '@c.us'
        const isGroup = from.endsWith('@g.us')
        const sender = mek.key.fromMe ? conn.user.jid : isGroup ? mek.participant : mek.key.remoteJid
        const isOwner = ownerNumber.includes(sender)
        const totalchat = await conn.chats.all()
        const groupMetadata = isGroup ? await conn.groupMetadata(from) : ''
        const groupName = isGroup ? groupMetadata.subject : ''
        const groupId = isGroup ? groupMetadata.jid : ''
        const groupMembers = isGroup ? groupMetadata.participants : ''
        const groupDesc = isGroup ? groupMetadata.desc : ''
        const groupOwner = isGroup ? groupMetadata.owner : ''
        const groupAdmins = isGroup ? getGroupAdmins(groupMembers) : ''
        const isBotGroupAdmins = groupAdmins.includes(botNumber) || false
        const isGroupAdmins = groupAdmins.includes(sender) || false
        let senderr = mek.key.fromMe ? conn.user.jid : mek.key.remoteJid.endsWith('@g.us') ? mek.participant : mek.key.remoteJid
        const isWelkom = isGroup ? welkom.includes(from) : false
        const isBan = cekBannedUser(sender, ban)
        const isBlocked = blocked.includes(sender)
        //registered
        const isUser = users.includes(sender)
        //pushname
        const conts = mek.key.fromMe ? conn.user.jid : conn.contacts[sender] || { notify: jid.replace(/@.+/, '') }
        const pushname = mek.key.fromMe ? conn.user.name : conts.notify || conts.vname || conts.name || '-'
        //prem
        const isPremium = _prem.checkPremiumUser(sender, premium) || isOwner
        //const isPremium = isOwner ? true : _prem.checkPremiumUser(sender, premium)
         _prem.expiredCheck(premium)
        // Auto Read
        conn.chatRead(from, "read")
        //limit
        const gcounti = setting.gcount
        const gcount = isPremium ? gcounti.prem : gcounti.user
        //jam
        const time = moment.tz('Asia/Jakarta').format('HH:mm:ss')
        const wita = moment.tz('Asia/Makassar').format('HH:mm:ss')
        const wit = moment.tz('Asia/Jayapura').format('HH:mm:ss')
//=================================================//
         function randomNomor(angka){
            return Math.floor(Math.random() * angka) + 1
        }
        function convertBalanceToString(angka) {
        var balancenyeini = '';
        var angkarev = angka.toString().split('').reverse().join('');
        for (var i = 0; i < angkarev.length; i++) if (i % 3 == 0) balancenyeini += angkarev.substr(i, 3) + '.';
        return '' + balancenyeini.split('', balancenyeini.length - 1).reverse().join('');
        }
        function monospace(string) {
            return '```' + string + '```'
        }   
        function jsonformat(string) {
            return JSON.stringify(string, null, 2)
        }
        function randomNomor(angka){
            return Math.floor(Math.random() * angka) + 1
        }
        const nebal = (angka) => {
            return Math.floor(angka)
        }
//=================================================//
        //buat fakereply
                var ase = new Date().toLocaleString("en-US", { timeZone: "Asia/Jakarta" });
                var asu = new Date(ase);
                var waktoonyabro = asu.getHours();
               //var waktoonyabro = ase.getHours({timezone:'Asia/Jakarta'});
                switch(waktoonyabro){
                case 0: waktoonyabro = `Selamat Malam ${pushname}🌛`; break;
                case 1: waktoonyabro = `Selamat Malam ${pushname}🌛`; break;
                case 2: waktoonyabro = `Selamat Malam ${pushname}🌛`; break;
                case 3: waktoonyabro = `Selamat Pagi ${pushname}✨`; break;
                case 4: waktoonyabro = `Selamat Pagi ${pushname}✨`; break;
                case 5: waktoonyabro = `Selamat Pagi ${pushname}✨`; break;
                case 6: waktoonyabro = `Selamat Pagi ${pushname}✨`; break;
                case 7: waktoonyabro = `Selamat Pagi ${pushname}✨`; break;
                case 8: waktoonyabro = `Selamat Pagi ${pushname}✨`; break;
                case 9: waktoonyabro = `Selamat Pagi ${pushname}✨`; break;
                case 10: waktoonyabro = `Selamat Pagi ${pushname}✨`; break;
                case 11: waktoonyabro = `Selamat Siang ${pushname}🔥`; break;
                case 12: waktoonyabro = `Selamat Siang ${pushname}🔥`; break;
                case 13: waktoonyabro = `Selamat Siang ${pushname}🔥`; break;
                case 14: waktoonyabro = `Selamat Siang ${pushname}🔥`; break;
                case 15: waktoonyabro = `Selamat Sore ${pushname}🌹`; break;
                case 16: waktoonyabro = `Selamat Sore ${pushname}🌹`; break;
                case 17: waktoonyabro = `Selamat Sore ${pushname}🌹`; break;
                case 18: waktoonyabro = `Selamat Malam ${pushname}🌛`; break;
                case 19: waktoonyabro = `Selamat Malam ${pushname}🌛`; break;
                case 20: waktoonyabro = `Selamat Malam ${pushname}🌛`; break;
                case 21: waktoonyabro = `Selamat Malam ${pushname}🌛`; break;
                case 22: waktoonyabro = `Selamat Malam ${pushname}🌛`; break;
                case 23: waktoonyabro = `Selamat Malam ${pushname}🌛`; break;
            }
            var ucapanFakereply = '' + waktoonyabro;

            //fake STATUS
            const freply = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: 'status@broadcast' } : {}) }, message: { 'imageMessage': { 'url': 'https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc', 'mimetype': 'image/png', 'caption': `${ucapanFakereply}\nKetik : ${prefix}myinfo \nUntuk InfoUser`, 'fileSha256': '+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=', 'fileLength': '28777', 'height': 1080, 'width': 1079, 'mediaKey': 'vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=', 'fileEncSha256': 'sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=', 'directPath': '/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69', 'mediaKeyTimestamp': '1610993486', 'jpegThumbnail': fs.readFileSync('./src/thumb.jpeg')} } }
            const freply2 = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: '16504228206@s.whatsapp.net' } : {}) }, message: { "contactMessage": { "displayName": `${pushname}`, "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:XL;${pushname},;;;\nFN:${pushname},\nitem1.TEL;waid=${senderr.split('@')[0]}:${senderr.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`}}}
    
            const flink = {
                "title": botName,
                "body": `Jangan Lupa Donasi Ya`,
                "previewType": "PHOTO",
                "thumbnailUrl": `https://i.ibb.co/sPWPTsF/IMG-20210724-151159-917.jpg`,
                "thumbnail": fimage,
                "sourceUrl": `https://instagram.com/yuki21_/`
                }
                // Dari docs baileys ( MyMans APIs )
            // Dari docs baileys ( MyMans APIs )
            const sendButMessage = (id, text1, desc1, but = [], options = {}) => {
                // {buttonId: 'id1', buttonText: {displayText: 'Button 1'}, type: 1},
                // {buttonId: 'id2', buttonText: {displayText: 'Button 2'}, type: 1}
                const buttonMessage = {
                contentText: text1,
                footerText: desc1,
                buttons: but,
                headerType: 1
                }
                conn.sendMessage(id, buttonMessage, MessageType.buttonsMessage, options)
            }
            // Nge Eval Terus Gw Sempurnain ( MyMans APIs & Rashid & Ra & Hexagonz )
            const sendButImage = async(id, text1, desc1, gam1, but = [], options = {}) => {
                kma = gam1
                mhan = await conn.prepareMessage(from, kma, image)
                const buttonMessages = {
                imageMessage: mhan.message.imageMessage,
                contentText: text1,
                footerText: desc1,
                buttons: but,
                headerType: 4
                }
                conn.sendMessage(id, buttonMessages, MessageType.buttonsMessage, options)
            }
            // Pahamin dari function sendbutimage terus ini cuman gw bedain type ( MyMans & Rashid & Hexagonz )
            const sendButVideo = async(id, text1, desc1, vid1, but = [], options = {}) => {
                kma = vid1
                mhan = await conn.prepareMessage(from, kma, video)
                const buttonMessages = {
                videoMessage: mhan.message.videoMessage,
                contentText: text1,
                footerText: desc1,
                buttons: but,
                headerType: 5
                }
                conn.sendMessage(id, buttonMessages, MessageType.buttonsMessage, options)
            }
//=================================================//
        const isUrl = (url) => {
        return url.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%.+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%+.~#?&/=]*)/, 'gi'))
        }

        const reply = (teks) => {
            conn.sendMessage(from, teks, text, {quoted:mek})
        }

        const sendMess = (hehe, teks) => {
            conn.sendMessage(hehe, teks, text)
        }

        const mentions = (teks, memberr, id) => {
            (id == null || id == undefined || id == false) ? conn.sendMessage(from, teks.trim(), extendedText, { contextInfo: { "mentionedJid": memberr } }) : conn.sendMessage(from, teks.trim(), extendedText, { quoted: mek, contextInfo: { "mentionedJid": memberr } })
        }
        const fakereply = (teks) => {
        conn.sendMessage(from, teks, text, {thumbnail:fs.readFileSync('./src/thumb.jpeg'), extendedText, quoted:mek})
            }

        const fakestatus = (teks) => {
            conn.sendMessage(from, teks, text, {
                quoted: {
                    key: {
                        fromMe: false,
                        participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {})
                    },
                    message: {
                        "imageMessage": {
                            "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc",
                            "mimetype": "image/jpeg",
                            "caption": fake,
                            "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=",
                            "fileLength": "28777",
                            "height": 1080,
                            "width": 1079,
                            "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=",
                            "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=",
                            "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69",
                            "mediaKeyTimestamp": "1610993486",
                            "jpegThumbnail": fs.readFileSync('./src/thumb.jpeg'),
                            "scansSidecar": "1W0XhfaAcDwc7xh1R8lca6Qg/1bB4naFCSngM2LKO2NoP5RI7K+zLw=="
                        }
                    }
                }
            })
        }
        const fakethumb = (teks, yes) => {
            conn.sendMessage(from, teks, image, {thumbnail:fs.readFileSync('./src/thumb.jpeg'),quoted:mek,caption:yes})
        }
        const fakegroup = (teks) => {
            conn.sendMessage(from, teks, text, {
                quoted: {
                    key: {
                        fromMe: false,
                        participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "6289626692456-1616468516@g.us" } : {})
                    },
                    message: {
                        "imageMessage": {
                            "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc",
                            "mimetype": "image/jpeg",
                            "caption": `${ucapanFakereply}`,
                            "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=",
                            "fileLength": "28777",
                            "height": 1080,
                            "width": 1079,
                            "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=",
                            "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=",
                            "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69",
                            "mediaKeyTimestamp": "1610993486",
                            "jpegThumbnail": fs.readFileSync('./src/fake.jpeg'),
                            "scansSidecar": "1W0XhfaAcDwc7xh1R8lca6Qg/1bB4naFCSngM2LKO2NoP5RI7K+zLw=="
                        }
                    }
                }
            })
        }
        const sendStickerFromUrl = async(to, url) => {
                var names = Date.now() / 10000;
                var download = function (uri, filename, callback) {
                    request.head(uri, function (err, res, body) {
                        request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                    });
                };
                download(url, './stik' + names + '.png', async function () {
                    console.log('selesai');
                    let filess = './stik' + names + '.png'
                    let asw = './stik' + names + '.webp'
                    exec(`ffmpeg -i ${filess} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${asw}`, (err) => {
                        let media = fs.readFileSync(asw)
                        conn.sendMessage(to, media, MessageType.sticker,{quoted:mek})
                        fs.unlinkSync(filess)
                        fs.unlinkSync(asw)
                    });
                });
            }
        const sendFileFromUrl = async(link, type, options) => {
                  hasil = await getBuffer(link)
                  conn.sendMessage(from, hasil, type, options).catch(e => {
                  fetch(link).then((hasil) => {
                  conn.sendMessage(from, hasil, type, options).catch(e => {
                  conn.sendMessage(from, { url : link }, type, options).catch(e => {
                  reply('_[ ! ] Error Gagal Dalam Mendownload Dan Mengirim Media_')
                          console.log(e)
                        })
                    })
                })
                })
            }
        const sendMediaURL = async(to, url, text="", mids=[]) =>{
                if(mids.length > 0){
                    text = normalizeMention(to, text, mids)
                }
                const fn = Date.now() / 10000;
                const filename = fn.toString()
                let mime = ""
                var download = function (uri, filename, callback) {
                    request.head(uri, function (err, res, body) {
                        mime = res.headers['content-type']
                        request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                    });
                };
                download(url, filename, async function () {
                    //console.log('done');
                    let media = fs.readFileSync(filename)
                    let type = mime.split("/")[0]+"Message"
                    if(mime === "image/gif"){
                        type = MessageType.video
                        mime = Mimetype.gif
                    }
                    if(mime.split("/")[0] === "audio"){
                        mime = Mimetype.mp4Audio
                    }
                    conn.sendMessage(to, media, type, { quoted: mek, mimetype: mime, caption: text,contextInfo: {"mentionedJid": mids}})

                    fs.unlinkSync(filename)
                });
            }
            // Auto Regist
            if (isCmd && !isUser){
            conn.updatePresence(from, Presence.recording)
            const obj = { id: from, name: pushname }
            users.push(obj)
            fs.writeFileSync('./database/user.json', JSON.stringify(users))}
            //viewonce
            if (m.isGroup && m.mtype == 'viewOnceMessage'){
            if (m.fromMe) return
            message = {...mek}
            message.message = mek.message.viewOnceMessage.message
            message.message[Object.keys(message.message)[0]].viewOnce = false
            conn.reply(from, 'ViewOnce detected!', mek).then(() => conn.forwardMessage(from, message))
            }
            // MUTE
            const isMuted = isGroup ? mute.includes(from) : false
            if (isMuted){
                if (!isGroupAdmins && !isOwner) return
                if (chats.toLowerCase().startsWith(prefix+'unmute')){
                    let anu = mute.indexOf(from)
                    mute.splice(anu, 1)
                    fs.writeFileSync('./database/mute.json', JSON.stringify(mute))
                    reply(`Bot telah diunmute di group ini`)
                }
            } 
            //antilink
            const isAntiLink = isGroup ? antilink.includes(from) : false
            if (isGroup && isAntiLink && !isOwner && !isGroupAdmins && isBotGroupAdmins){
            if (chats.match(/(https:\/\/chat.whatsapp.com)/gi)) {
                setTimeout(() => {
                        conn.groupRemove(from, [sender])
                    }, 2000)
                    setTimeout(() => {
                        conn.updatePresence(from, Presence.composing)
                        reply(`*「 GROUP LINK DETECTOR 」*\n\nSepertinya kamu mengirimkan link grup, maaf kamu akan di kick`)
                    }, 0)
                //reply(`*「 GROUP LINK DETECTOR 」*\n\nSepertinya kamu mengirimkan link grup, maaf kamu akan di kick`)
                //conn.groupRemove(from, [sender])
                }
            }
            // AFK
            const mentionByTag = type == "extendedTextMessage" && mek.message.extendedTextMessage.contextInfo != null ? mek.message.extendedTextMessage.contextInfo.mentionedJid : []
            const mentionByReply = type == "extendedTextMessage" && mek.message.extendedTextMessage.contextInfo != null ? mek.message.extendedTextMessage.contextInfo.participant || "" : ""
            const mention = typeof(mentionByTag) == 'string' ? [mentionByTag] : mentionByTag
            mention != undefined ? mention.push(mentionByReply) : []
            const mentionUser = mention != undefined ? mention.filter(n => n) : []
            for (let x of mentionUser) {
                if (afk.hasOwnProperty(x.split('@')[0])) {
                    ini_txt = "Maaf User Yang Anda Reply Atau Tag Sedang AFK. "
                    if (afk[x.split('@')[0]] != "") {
                        ini_txt += "\nDengan alasan :\n -" + afk[x.split('@')[0]]
                    }
                    conn.sendMessage(from,ini_txt,text,{quoted:freply2})
                }
            }
            if (afk.hasOwnProperty(sender.split('@')[0])) {
                //reply(`Selamat Datang Kembali @${sender.split('@')[0]}`)
                conn.sendMessage(from,`Selamat Datang Kembali @${sender.split('@')[0]}`,MessageType.text, {quoted: freply2 ,contextInfo: {"forwardingScore": 999, "isForwarded": true, sendEphemeral: true, mentionedJid: [sender]}})
                delete afk[sender.split('@')[0]]
                fs.writeFileSync("./database/afk.json", JSON.stringify(afk))
            }
            //VOTE
            const isVote = isGroup ? voting.includes(from) : false
            if(isGroup && !isVote) {
            if (budy.toLowerCase() === 'vote'){
            let vote = JSON.parse(fs.readFileSync(`./vote/${from}.json`))
            let _votes = JSON.parse(fs.readFileSync(`./vote/votes/${from}.json`))  
            let fil = vote.map(v => v.participant)
            let id_vote = sender ? sender : '6289626692456@s.whatsapp.net'
            if(fil.includes(id_vote)) {
            return mentions('@'+sender.split('@')[0]+' Anda sudah vote', fil, true)
            } else {
            vote.push({
                participant: id_vote,
                voting: '✅'
            })
            fs.writeFileSync(`./vote/${from}.json`,JSON.stringify(vote))
            let _p = []
            let _vote = '*Vote* '+ '@'+ _votes[0].votes.split('@')[0] + `\n\n*Alasan*: ${_votes[0].reason}\n*Jumlah Vote* : ${vote.length} Vote\n*Durasi* : ${_votes[0].durasi} Menit\n\n` 
            for(let i = 0; i < vote.length; i++) {
            _vote +=  `@${vote[i].participant.split('@')[0]}\n*Vote* : ${vote[i].voting}\n\n`
            _p.push(vote[i].participant)
            }  
            _p.push(_votes[0].votes)
            mentions(_vote,_p,true)   
            }
            } else if (budy.toLowerCase() === 'devote'){
            const vote = JSON.parse(fs.readFileSync(`./vote/${from}.json`))
            let _votes = JSON.parse(fs.readFileSync(`./vote/votes/${from}.json`))  
            let fil = vote.map(v => v.participant)
            let id_vote = sender ? sender : '6289626692456@s.whatsapp.net'
            if(fil.includes(id_vote)) {
            return mentions('@'+sender.split('@')[0]+' Anda sudah vote', fil, true)
            } else {
            vote.push({
                participant: id_vote,
                voting: '❌'
            })
            fs.writeFileSync(`./vote/${from}.json`,JSON.stringify(vote))
            let _p = []
            let _vote = '*Vote* '+ '@'+ _votes[0].votes.split('@')[0] + `\n\n*Alasan*: ${_votes[0].reason}\n*Jumlah Vote* : ${vote.length} Vote\n*Durasi* : ${_votes[0].durasi} Menit\n\n` 
            for(let i = 0; i < vote.length; i++) {
            _vote +=  `@${vote[i].participant.split('@')[0]}\n*Vote* : ${vote[i].voting}\n\n`
            _p.push(vote[i].participant)
            }  
            _p.push(_votes[0].votes)
            mentions(_vote,_p,true)   
            }
        }
    }   
             // Game
              game.cekWaktuFam(conn, family100)
              game.cekWaktuTG(conn, tebakgambar)
              
              if (game.isTebakGambar(from, tebakgambar)) {
              if (budy.toLowerCase().includes(game.getJawabanTG(from, tebakgambar))){
                var htgm = randomNomor(100)
                addBalance(sender, htgm, balance)
                await reply(`*Selamat jawaban kamu benar*\n*Jawaban :* ${game.getJawabanTG(from, tebakgambar)}\nHadiah Saldo : ${htgm}\nIngin bermain lagi? kirim *${prefix}tebakgambar*`)
                tebakgambar.splice(game.getTGPosi(from, tebakgambar), 1)
            }
        }
              if (game.isfam(from, family100)) {
               var anjuy = game.getjawaban100(from, family100)
               for (let i of anjuy){
                if (budy.toLowerCase().includes(i)){
                    var htgmi = Math.floor(Math.random() * 1000) + 1
                    addBalance(sender, htgmi, balance)
                    await reply(`*Jawaban benar*\n*Jawaban :* ${i}\n*Jawaban yang blum tertebak :* ${anjuy.length - 1}\n\n*Hadiah Saldo* : ${htgmi}`)
                    var anug = anjuy.indexOf(i)
                    anjuy.splice(anug, 1)
                }
            }
            if (anjuy.length < 1){
                conn.sendMessage(from, `Semua jawaban sudah tertebak\nKirim *${prefix}family100* untuk bermain lagi`, text)
                family100.splice(game.getfamposi(from, family100), 1)
            }
       }

        // Banned 
        if (isBlocked && isCmd && command.split(prefix)[1] !== 'unban')reply(`*Sepertinya kamu telah diblok/diban. Hubungi untuk mengetahui cara membuka blok!*\n\n Owner: wa.me/${owner[0]}`)
        if (isBan && isCmd && command.split(prefix)[1] !== 'unban') return reply(`*Sepertinya kamu telah diblok/diban. Hubungi untuk mengetahui cara membuka blok!*\n\n Owner: wa.me/${owner[0]}`)
        if (isBan) return
        if (isBlocked) return 
        BannedExpired(ban)
//========================================================================================================================//
        colors = ['red', 'white', 'black', 'blue', 'yellow', 'green']
        const isQuoted = type == 'extendedTextMessage'
        const isMedia = (type === 'imageMessage' || type === 'videoMessage')
        const isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage')
        const isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')
        const isQuotedAudio = type === 'extendedTextMessage' && content.includes('audioMessage')
        const isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage')
        if (!isGroup && isCmd) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;32mEXEC\x1b[1;37m]', time, color(command), 'from', color(sender.split('@')[0]), 'args :', color(args.length))
        if (!isGroup && !isCmd){
            addBalance(sender, randomNomor(20), balance)
        console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;31mTEXT\x1b[1;37m]', time, color('Message'), 'from', color(sender.split('@')[0]), 'args :', color(args.length))}
        if (isCmd && isGroup) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;32mEXEC\x1b[1;37m]', time, color(command), 'from', color(sender.split('@')[0]), 'in', color(groupName), 'args :', color(args.length))
        if (!isCmd && isGroup){
            addBalance(sender, randomNomor(20), balance) 
        console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;31mTEXT\x1b[1;37m]', time, color('Message'), 'from', color(sender.split('@')[0]), 'in', color(groupName), 'args :', color(args.length))}
        //ANTISPAM
        if (isCmd && antiSpam.isFiltered(from) && !isGroup) {
            console.log('\x1b[1;31m=\x1b[1;37m>', '[\x1b[1;31mSPAM CHAT\x1b[1;37m]', time, color(command), 'dari', color(pushname), 'args :', color(args.length))
            return sendMess(sender,'Sabar Ya 5 Detik/Command Agar Tidak Spam')
            }
        if (isCmd && antiSpam.isFiltered(from) && isGroup) {
            console.log('\x1b[1;31m=\x1b[1;37m>', '[\x1b[1;31mSPAM GRUP\x1b[1;37m]', time, color(command), 'dari', color(pushname), 'in', color(groupName), 'args :', color(args.length))
            return sendMess(sender,'Sabar Ya 5 Detik/Command Agar Tidak Spam')
            }
        if ( isCmd && !isOwner ) antiSpam.addFilter(from)              


//=================================================//
//  menu,animemenu,gamemenu,islammenu,dlmenu,gabutmenu,mutualmenu,nsfwmenu,othermenu,kerjamenu,toolsmenu,grupmenu,mediamenu,ownermenu
switch (command) {

    case 'myinfo': case 'infoku': case 'saldo': case 'limit':
                let saldo = getBalance(sender, balance)
                let sisalimit = getLimit(sender, limitCount, limit)
                let sisaGlimit = cekGLimit(sender, gcount, glimit)
                let cekvip = ms(_prem.getPremiumExpired(sender, premium) - Date.now())
                try {
                    pic = await conn.getProfilePicture(sender)
                } catch {
                    pic = 'https://i.ibb.co/Tq7d7TZ/age-hananta-495-photo.png'
                }
                thumb = await getBuffer(pic)
                let expiredPrem = () => {
                    if (cekvip.days != 0){
                        return `${cekvip.days} day(s)`
                    } else if (cekvip.hours != 0){
                        return `${cekvip.hours} hour(s)`
                    } else if (cekvip.minutes != 0){
                        return `${cekvip.minutes}`
                    }
                }
                //let expiredPrem = `${cekvip.days} day(s) ${cekvip.hours} hour(s) ${cekvip.minutes} minute(s)`
                //conn.sendMessage(from,myinfo(botName, saldo, pushname, isOwner, isPremium, sisalimit, limitCount, sisaGlimit, gcount, expiredPrem(), time,wita,wit),text,{quoted:freply2})
                buttons = [{buttonId: `${prefix}donasi`,buttonText:{displayText: '🏆DONASI'},type:1}]
                buttonsMessage = { contentText: myinfo(botName, saldo, pushname, isOwner, isPremium, sisalimit, limitCount, sisaGlimit, gcount, expiredPrem(), time,wita,wit), footerText: `Ayo Donasi Nya Kaka:)\nBantu Supportnya 🥰`, buttons: buttons, headerType: 'LOCATION', locationMessage: { degreesLatitude: '', degreesLongitude: '', jpegThumbnail: thumb}}
                prep = await conn.prepareMessageFromContent(from,{buttonsMessage},{})
                conn.relayWAMessage(prep)
            break
    case 'menu':
    case 'help':
            //conn.sendMessage(from, { contentText: `${menu(prefix,botName)}`, footerText: `Halo ${ucapanFakereply}`, buttons: [{ buttonId: `${prefix}menulist`, buttonText: { displayText: '🗂LIST' }, type: 1 },{ buttonId: `${prefix}donasi`, buttonText: { displayText: '🏆DONASI' }, type: 1 }], headerType: 6, locationMessage: { degreesLatitude: '10000000', degreesLongitude: '10000000', jpegThumbnail: fimage}}, 'buttonsMessage')
            buttons = [{buttonId: `${prefix}menulist`,buttonText:{displayText: '🗂LIST'},type:1},{buttonId: `${prefix}donasi`,buttonText:{displayText: '🏆DONASI'},type:1}]
            buttonsMessage = { contentText: `Halo ${ucapanFakereply}\n\n${menu(prefix,botName)}`, footerText: `Ayo Donasi Nya Kaka:)\nBantu Supportnya 🥰`, buttons: buttons, headerType: 'LOCATION', locationMessage: { degreesLatitude: '', degreesLongitude: '', jpegThumbnail: floc}}
            prep = await conn.prepareMessageFromContent(from,{buttonsMessage},{})
            conn.relayWAMessage(prep)
            break
    case 'animemenu':
            conn.sendMessage(from,animemenu(prefix,botName),text,{quoted:freply})
            break
    case 'gamemenu':
            conn.sendMessage(from,gamemenu(prefix,botName),text,{quoted:freply})
            break
    case 'islamimenu':
            conn.sendMessage(from,islammenu(prefix,botName),text,{quoted:freply})
            break
    case 'downloadmenu':
            conn.sendMessage(from,dlmenu(prefix,botName),text,{quoted:freply})
            break
    case 'nsfwmenu':
            conn.sendMessage(from,nsfwmenu(prefix,botName),text,{quoted:freply})
            break
    case 'othermenu':
            conn.sendMessage(from,othermenu(prefix,botName),text,{quoted:freply})
            break
    case 'economymenu':
            conn.sendMessage(from,kerjamenu(prefix,botName),text,{quoted:freply})
            break
    case 'toolsmenu':
            conn.sendMessage(from,toolsmenu(prefix,botName),text,{quoted:freply})
            break
    case 'groupmenu':
            conn.sendMessage(from,grupmenu(prefix,botName),text,{quoted:freply})
            break
    case 'ownermenu':
            conn.sendMessage(from,ownermenu(prefix,botName),text,{quoted:freply})
            break
    case 'donasi':
            conn.sendMessage(from,fs.readFileSync(`./media/addons/saweria.png`),image,{quoted:freply2 , caption : donasi(prefix,botName)})
            break


//=================================================//
                case 'hash':
                    if (!isQuotedSticker) return reply('Reply Sticker!')
                    const encmeds = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
                    const mediastick = await conn.downloadMediaMessage(encmeds)
                    var crypto = require('crypto')
                    hash = crypto.createHash('sha256').update(mediastick).digest('base64');
                    console.log(hash)
                break
                case 'basecamp':
                //case 'grupsinon':
                    if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}myinfo untuk mengecek limit`)
                    limitAdd(sender, limit)
                    linkgc = await conn.groupInviteCode('6289626692456-1616468516@g.us')
                    yeh = `Ini Basecamp ${botName}

https://chat.whatsapp.com/${linkgc}

Itu Link Grupnya
Bisa Masuk Grupnya Ya
Mau Tanya-Tanya Boleh`
                    fakegroup(yeh)
                    break
                case 'owner':
                case 'creator':
                    let ini_list = []
                      for (let i of owner.map(v => v + '@s.whatsapp.net')) {

                      ini_list.push({
                                "displayName": conn.getName(i),
                                "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:${conn.getName(i)}\nitem1.TEL;waid=${i.split('@')[0]}:${i.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`
                              })
                      }
                      hehe = await conn.sendMessage(from, {
                            "displayName": `${ini_list.length} kontak`,
                            "contacts": ini_list 
                            }, 'contactsArrayMessage', { quoted: m })
                            conn.sendMessage(from,'Nih Kak Owner Ku ><',text,{quoted: hehe})
                break
                case 'request':
                if (args.length < 1) return reply(`Mau request apa? Contoh: ${prefix}request fitur anime`)
                     const cfrr = body.slice(8)
                      if (cfrr.length > 300) return conn.sendMessage(from, 'Maaf Teks Terlalu Panjang, Maksimal 300 Teks', text, {quoted: mek})
                        var tonor = mek.participant
                       const ress = `*[REQUEST]*\nNomor : @${tonor.split("@s.whatsapp.net")[0]}\nPesan : ${cfrr}`
                      var options = {
                         text: ress,
                         contextInfo: {mentionedJid: [tonor]},
                     }
                    conn.sendMessage('6289626692456@s.whatsapp.net', options, text, {quoted: mek})
                    reply('REQUEST ANDA TELAH DISAMPAIKAN\nRequests Palsu/Main2 Tidak Akan Ditanggapi.')
                    break
                case 'bug':
                case 'report':
                if (args.length < 1) return reply(`Mau lapor apa? Contoh: ${prefix}lapor fitur anime error`)
                    
                        const kontil = body.slice(11)
                      if (kontil.length > 300) return conn.sendMessage(from, 'Maaf Teks Terlalu Panjang, Maksimal 300 Teks', text, {quoted: mek})
                        var tonmor = mek.participant
                       const buseh = `*[BUG REPORT]*\nNomor : @${tonmor.split("@s.whatsapp.net")[0]}\nPesan : ${kontil}`

                      var options = {
                         text: buseh,
                         contextInfo: {mentionedJid: [tonmor]},
                     }
                    conn.sendMessage('6289626692456@s.whatsapp.net', options, text, {quoted: mek})
                    reply('LAPORAN ANDA TELAH DISAMPAIKAN\nLaporan Palsu/Main2 Tidak Akan Ditanggapi.')
                    break
                case 'afk':
                    alasan = args.join(" ")
                    afk[sender.split('@')[0]] = alasan.toLowerCase()
                    fs.writeFileSync("./database/afk.json", JSON.stringify(afk))
                    let sem = `AFK FEATURE ACTIVATED
Nama : ${pushname}
Dengan Alasan :

${alasan}`
                    conn.sendMessage(from,sem,text,{quoted:freply2})
                break
                case 'stats':
                case 'runtime':
                case 'info':  
                case 'botinfo':{
                    //let run = process.uptime()
                    let totalchat = await conn.chats.all()
                    let i = []
                    let giid = []
                    for (let mem of totalchat){
                        i.push(mem.jid)
                    }
                    for (let id of i){
                        if (id && id.includes('g.us')){
                            giid.push(id)
                        }
                    }
                    let timestampi = speed();
                    let latensii = speed() - timestampi
                    const { wa_version, mcc, mnc, os_version, device_manufacturer, device_model } = conn.user.phone
                    runtime = kyun(process.uptime())
                    let ram = `${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require('os').totalmem / 1024 / 1024)}MB`
                    buttons = [{buttonId: `${prefix}sumber`,buttonText:{displayText: '✨SUMBER'},type:1}]
                    buttonsMessage = { contentText: stats(users,botName,wa_version,baterai,ram,os_version,device_manufacturer,giid,totalchat,latensii,runtime), footerText: `Owner : ${ownerName}\nAyo Donasi Nya Kaka:)`, buttons: buttons, headerType: 1 }
                    prep = await conn.prepareMessageFromContent(from,{buttonsMessage},{})
                    conn.relayWAMessage(prep)
                //conn.sendMessage(from,stats(botName,wa_version,baterai,ram,os_version,device_manufacturer,giid,totalchat,latensii,runtime),text)
            }
                break
                case 'sumber':
                    conn.sendMessage(from,sumber(botName),text,{quoted:freply2})
                break

                case 'overflow':
                    if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}myinfo untuk mengecek limit`)
                    if (args.length < 1) return reply(`untuk Menggunakan : ${prefix}overflow eps1-8 / batch`)
                    over = args.join(' ')
                    let hehha = `*Sinopsis*
                               
Kazushi Sudou adalah seorang mahasiswa yang dikunjungi oleh dua teman masa kecilnya,
Saudara perempuan Ayane dan Kotone Shirakawa. 
Ketika Ayane mengetahui bahwa Kazushi tidak hanya 
lupa membeli pudingnya tetapi juga menggunakan 
losion spesialnya di kamar mandi, 
dia memutuskan untuk membalas dendam dan bergabung 
dengan Kazushi di kamar mandinya bersama Kotone. 
Akankah Kazushi yang mesum dapat tetap acuh tak acuh pada mereka berdua? `
                    buttons = [{buttonId:`command`,buttonText:{displayText:'Videonya?Nanti'},type:1}]
                    imageMessage = (await conn.prepareMessageMedia({url:'https://cdn.myanimelist.net/images/anime/1781/104461.jpg'},'imageMessage',{thumbnail:Buffer.alloc(0)})).imageMessage
                    buttonsMessage = {contentText: hehha,footerText:'WARN!! 18+ \n\nSilahkan Pilih Episode',imageMessage,buttons,headerType:4}
                    inibut = await conn.prepareMessageFromContent(from,{buttonsMessage},{})
                    conn.relayWAMessage(inibut)
                    limitAdd(sender, limit)
                break
                case 'dor':
                    //conn.sendMessage(from, { contentText: `${menu(prefix,botName)}`, footerText: `Halo ${ucapanFakereply}`, headerType: 'LOCATION', locationMessage: { degreesLatitude: '', degreesLongitude: '', jpegThumbnail: fimage, contextInfo: {mentionedJid: [sender]}}}}, 'text')
                break
//=================================================//
//button :>
    case 'menulist':
            let run = process.uptime()
            let menus = conn.prepareMessageFromContent(from, {
                "listMessage":{
                  "title": "*Pilih Menunya*",
                  "description": `Halo ${ucapanFakereply}\nPilihla Sesuai Dengan Keinginan\nJanganlah Memaksakan`,
                  "buttonText": "Menu",
                  "listType": "SINGLE_SELECT",
                  "sections": [
                     {
                        "title": `${kyun(run)}`,
                        "rows": [
                           {
                              "title": "ANIMEMENU",
                              "description" : "🎭ISINYA YA TENTANG ANIME",
                              "rowId": `${prefix}animemenu`
                           },
                           {
                              "title": "GAMEMENU",
                              "description" : "🎮BERISI FITUR GAME",
                              "rowId": `${prefix}gamemenu`
                           },
                           {
                              "title": "ISLAMIMENU",
                              "description" : "♥BERISI FITUR PENUNJANG HIDUP",
                              "rowId": `${prefix}islamimenu`
                           },
                           {
                              "title": "DOWNLOADMENU",
                              "description" : "📲MENDOWNLOAD SESUATU:v",
                              "rowId": `${prefix}downloadmenu`
                           },
                           {
                              "title": "NSFWMENU",
                              "description" : "❌BERISI TENTANG 18+",
                              "rowId": `${prefix}nsfwmenu`
                           },
                           {
                              "title": "OTHERMENU",
                              "description" : "🔰ISINYA HAL-HAL MENARIK",
                              "rowId": `${prefix}othermenu`
                           },
                           {
                              "title": "ECONOMYMENU",
                              "description" : "💸CEK LIMIT DISINI",
                              "rowId": `${prefix}economymenu`
                           },
                           {
                              "title": "TOOLSMENU",
                              "description" : "🛠MEMBUAT STIKER",
                              "rowId": `${prefix}toolsmenu`
                           },
                           {
                              "title": "GROUPMENU",
                              "description" : "⚙MENGATUR GRUP",
                              "rowId": `${prefix}groupmenu`
                           },
                           {
                              "title": "OWNERMENU",
                              "description" : "🤴MENUNYA OWNER",
                              "rowId": `${prefix}ownermenu`
                           },
                           {
                              "title": "DONASI",
                              "description" : "🙇‍♂️YANG MAU DONASI BOLE :)",
                              "rowId": `${prefix}donasi`
                           }
                        ]
                     }]}}, {})
            conn.relayWAMessage(menus, {waitForAck: true})
            break
//------------------< Othermenu >-------------------
            case 'igstalk': case 'stalkig':{
                if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
                if (args.length < 0) return reply(`Kirim perintah *${prefix}igstalk* _username_`)
                reply(mess.wait)
                getUser(args[1])
                .then((res) => {
                    let { username, biography, fullName, subscribersCount, subscribtions, highlightCount, isBusinessAccount, isPrivate, isVerified, profilePicHD, postsCount } = res
                    let caption = `┏┉⌣ ┈̥-̶̯͡..̷̴✽̶┄┈┈┈┈┈┈┈┈┈┈┉┓
┆ *INSTAGRAM PROFILE*
└┈┈┈┈┈┈┈┈┈┈┈⌣ ┈̥-̶̯͡..̷̴✽̶⌣ ✽̶
*Data Berhasil Didapatkan!*
\`\`\`▢ Username : ${username}\`\`\`
\`\`\`▢ Fullname : ${fullName}\`\`\`
\`\`\`▢ Followers : ${subscribersCount}\`\`\`
\`\`\`▢ Following : ${subscribtions}\`\`\`
\`\`\`▢ Post Count : ${postsCount}\`\`\`
\`\`\`▢ HighlightCount : ${highlightCount}\`\`\`
\`\`\`▢ PrivateAccount : ${isPrivate ? 'Yes' : 'No'}\`\`\`
\`\`\`▢ VerifiedAccount : ${isVerified ? 'Yes' : 'No'}\`\`\`
\`\`\`▢ BusinessAccount : ${isBusinessAccount ? 'Yes' : 'No'}\`\`\`
\`\`\`▢ Biography :\`\`\` \n${biography}`
                    sendFileFromUrl(from, profilePicHD, caption, msg)
                    limitAdd(sender, limit)
                })
                .catch((err) => {
                    sendMess(ownerNumber[0], 'IG Stalk Error : ' + err)
                    console.log(color('[IG Stalk]', 'red'), err)
                    reply(mess.error.api)
                })
            }
                break
                case 'ghsearch': 
                case 'githubsearch': 
                case 'searchgithub':
                    if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}myinfo untuk mengecek limit`)
                    limitAdd(sender, limit)
                      if (!q) return reply('Cari apa?')
                      res = await fetch('https://api.github.com/search/repositories?q='+q)
                      json = await res.json()
                      if (res.status !== 200) throw json
                      str = json.items.map((repo, index) => {
                      return `
${1 + index}. *${repo.full_name}*${repo.fork ? ' (fork)' : ''}
_${repo.html_url}_
_Dibuat pada *${formatDate(repo.created_at)}*_
_Terakhir update pada *${formatDate(repo.updated_at)}*_
👁  ${repo.watchers}   🍴  ${repo.forks}   ⭐  ${repo.stargazers_count}
${repo.open_issues} Issue${repo.description ? `
*Deskripsi:*\n${repo.description}` : ''}
*Clone:* \`\`\`$ git clone ${repo.clone_url}\`\`\`
`.trim()
}).join('\n\n')
                  reply(str)
                  break
                case 'wasted':
                    if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}myinfo untuk mengecek limit`)
                        if ((isMedia && !mek.message.videoMessage || isQuotedImage || isQuotedVideo ) && args.length == 0) {
                        jja = isQuotedImage || isQuotedVideo  ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
                        ressss = await conn.downloadMediaMessage(jja)
                        res = await upload(ressss)
                        //reply(res)
                        sendMediaURL(from,`https://zenzapi.xyz/api/image/wasted?image=${res}&apikey=${apikey}`)
                        } else {
                        reply('send/reply image/video')
                        }
                        await limitAdd(sender, limit)
                break
                case 'lirik':
                    if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}myinfo untuk mengecek limit`)
                    limitAdd(sender, limit)
                    if (args.length < 1) return fakegroup("Apa Yang Mau Di Cari? ")
                    teksu = args.join(' ')
                    lirikLagu(teksu).then((res) => {
                      let lirik = `❒「  *${botName}*  」
└ *Lirik Lagu :*
                    
${res[0].result}`
                      fakestatus(lirik)
                    })
                break
                case 'kodebahasa':
                    if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}myinfo untuk mengecek limit`)
                    limitAdd(sender, limit)
                    conn.sendMessage(from,bahasa(prefix),text,{quoted:freply})
                break
                case 'tts':
                    if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}myinfo untuk mengecek limit`)
                    limitAdd(sender, limit)
                    if (args.length < 1) return conn.sendMessage(from, `Kode Bahasanya? contoh : ${prefix}tts id Halo People`, text, { quoted: freply2 })
                    const gtts = require('../lib/gtts')(args[0])
                    if (args.length < 2) return conn.sendMessage(from, `Teksnya Kaga Ada | contoh : ${prefix}tts id ah yamate kudasai`, text, { quoted: freply2 })
                    var bby = body.slice(8)
                    ranm = getRandom('.mp3')
                    rano = getRandom('.ogg')
                    bby.length > 300
                        ? reply('Teks nya terlalu panjang Boss')
                        : gtts.save(ranm, bby, function () {
                            exec(`ffmpeg -i ${ranm} -ar 48000 -vn -c:a libopus ${rano}`, (err) => {
                                fs.unlinkSync(ranm)
                                buff = fs.readFileSync(rano)
                                if (err) return reply('Error')
                                conn.sendMessage(from, buff, audio, { quoted: freply2, ptt: true })
                                fs.unlinkSync(rano)
                            })
                        })
                break
                case 'attp':
                    if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}myinfo untuk mengecek limit`)
                    limitAdd(sender, limit)
                    if (!q) return reply(`Teks Nya Mana Ilang?\nContoh :\n${prefix}attp BOT`)
                    atetepe = await getBuffer(`https://api.xteam.xyz/attp?file&text=${encodeURIComponent(q)}`)
                    conn.sendMessage(from, atetepe, sticker, { quoted: freply2 })
                break
                case 'quotes':
                    conn.updatePresence(from, Presence.composing)
                    if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}myinfo untuk mengecek limit`)
                    limitAdd(sender, limit)
                    anu = await fetchJson(`https://api.zeks.xyz/api/quote?apikey=${apikey}`)
                    infoquotes = `
${anu.result.quotes}


≽ Author : ${anu.result.author}`
                    fakegroup(infoquotes)
                break
                case 'glitch':
                case 'pornhub':
                    if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}myinfo untuk mengecek limit`)
                    limitAdd(sender, limit)
                        if (!q) return reply(`Teks Nya Mana Ilang?\nContoh :\n${prefix}glitch yuki|biasa`)
                        anu = args.join(' ').split('|')
                        jik = `https://zenzapi.xyz/api/textpro/${command}?text=${anu[0]}&text2=${anu[1]}&apikey=${apikey}`
                        sendMediaURL(from,jik)
                break
                case 'getpic':
                    if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}myinfo untuk mengecek limit`)
                    limitAdd(sender, limit)
                    if (mek.message.extendedTextMessage != undefined){
                        mentioneds = mek.message.extendedTextMessage.contextInfo.mentionedJid
                        try {
                            pic = await conn.getProfilePicture(mentioneds[0])
                        } catch {
                            pic = 'https://i.ibb.co/Tq7d7TZ/age-hananta-495-photo.png'
                        }
                        thumb = await getBuffer(pic)
                        conn.sendMessage(from, thumb, image)
                    }
                break
                case 'seberapagay':
                    if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}myinfo untuk mengecek limit`)
                    limitAdd(sender, limit)
                    anu = await fetchJson(`https://arugaz.herokuapp.com/api/howgay`, {method: 'get'})
                    hasil = `Nih Liat Data Gay Si ${q}\n\n\nPersentase Gay : ${anu.persen}%\nAlert!!! : ${anu.desc}`
                    reply(hasil)
                break
                case 'bisakah':
                    if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}myinfo untuk mengecek limit`)
                    limitAdd(sender, limit)
                    bisakah = body.slice(1)
                    const bisa = ['Tentu Saja Bisa! Kamu Adalah Orang Paling Homky', 'Gak Bisa Ajg Aowkwowk', 'Hmm Gua Gak Tau Yaa, tanya ama bapakau', 'Ulangi Tod Gua Ga Paham']
                    const keh = bisa[Math.floor(Math.random() * bisa.length)]
                    conn.sendMessage(from, 'Pertanyaan : *' + bisakah + '*\n\nJawaban : ' + keh, text, { quoted: mek })
                break
                case 'kapankah':
                    if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}myinfo untuk mengecek limit`)
                    limitAdd(sender, limit)
                    kapankah = body.slice(1)
                    const kapan = ['Besok', 'Lusa', 'Tadi', '4 Hari Lagi', '5 Hari Lagi', '6 Hari Lagi', '1 Minggu Lagi', '2 Minggu Lagi', '3 Minggu Lagi', '1 Bulan Lagi', '2 Bulan Lagi', '3 Bulan Lagi', '4 Bulan Lagi', '5 Bulan Lagi', '6 Bulan Lagi', '1 Tahun Lagi', '2 Tahun Lagi', '3 Tahun Lagi', '4 Tahun Lagi', '5 Tahun Lagi', '6 Tahun Lagi', '1 Abad lagi', '3 Hari Lagi']
                    const koh = kapan[Math.floor(Math.random() * kapan.length)]
                    conn.sendMessage(from, 'Pertanyaan : *' + kapankah + '*\n\nJawaban : ' + koh, text, { quoted: mek })
                break
                case 'apakah':
                    if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}myinfo untuk mengecek limit`)
                    limitAdd(sender, limit)
                    apakah = body.slice(1)
                    const apa = ['Iya', 'Tidak', 'Bisa Jadi', 'Ulangi bro gak paham']
                    const kah = apa[Math.floor(Math.random() * apa.length)]
                    conn.sendMessage(from, 'Pertanyaan : *' + apakah + '*\n\nJawaban : ' + kah, text, { quoted: mek })
                break
                case 'rate':
                    if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}myinfo untuk mengecek limit`)
                    limitAdd(sender, limit)
                    rate = body.slice(1)
                    const ra = ['4', '9', '17', '28', '34', '48', '59', '62', '74', '83', '97', '100', '29', '94', '75', '82', '41', '39']
                    const te = ra[Math.floor(Math.random() * ra.length)]
                    conn.sendMessage(from, 'Pertanyaan : *' + rate + '*\n\nJawaban : ' + te + '%', text, { quoted: mek })
                break
                case 'hobby':
                    if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}myinfo untuk mengecek limit`)
                    limitAdd(sender, limit)
                    hobby = body.slice(1)
                    const hob = ['Desah Di Game', 'Ngocokin Doi', 'Stalking sosmed nya mantan', 'Kau kan gak punya hobby awokawok', 'Memasak', 'Membantu Atok', 'Mabar', 'Nobar', 'Sosmedtan', 'Membantu Orang lain', 'Nonton Anime', 'Nonton Drakor', 'Naik Motor', 'Nyanyi', 'Menari', 'Bertumbuk', 'Menggambar', 'Foto fotoan Ga jelas', 'Maen Game', 'Berbicara Sendiri']
                    const by = hob[Math.floor(Math.random() * hob.length)]
                    conn.sendMessage(from, 'Pertanyaan : *' + hobby + '*\n\nJawaban : ' + by, text, { quoted: mek })
                break
                case 'jadian':
                    if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}myinfo untuk mengecek limit`)
                    limitAdd(sender, limit)
                    if (!isGroup) return reply('Hanya Untuk Grup')
                    jds = []
                    var kamu = groupMembers
                    var cinta = groupMembers
                    var aku = cinta[Math.floor(Math.random() * kamu.length)]
                    var cintax = kamu[Math.floor(Math.random() * cinta.length)]
                    tejs = `Ciee.. yang lagi jadian\n*@${aku.jid.split('@')[0]}* ♥️ *@${cintax.jid.split('@')[0]}*\nSemoga Langgeng Hii`
                    jds.push(aku.jid)
                    jds.push(cintax.jid)
                    mentions(tejs, jds, true)
                    break
    case 'brainly':
        if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}myinfo untuk mengecek limit`)
        limitAdd(sender, limit)
            if (args.length < 1) return reply('Pertanyaan apa')
            brien = args.join(' ')
            brainly(`${brien}`).then(res => {
            teks = '❉───────────────────────❉\n'
            for (let Y of res.data) {
            teks += `\n*「 _BRAINLY_ 」*\n\n*➸ Pertanyaan:* ${Y.pertanyaan}\n\n*➸ Jawaban:* ${Y.jawaban[0].text}\n❉──────────────────❉\n`
            }
            conn.sendMessage(from, teks, text,{quoted:mek,detectLinks: false})
            })
            break
                case 'pinterest':
                    if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}myinfo untuk mengecek limit`)
                    limitAdd(sender, limit)
                    conn.updatePresence(from, Presence.composing)
                    if (!q) return reply('yg mau di cari apa?')
                    pinterest(`${q}`).then( data => {
                    const amsulah = data.result
                    const pimterest = amsulah[Math.floor(Math.random() * amsulah.length)]
                    sendMediaURL (from ,pimterest , `Pinterest : ${q}`)
                     
                    })
                    break
                case 'wiki':
                    if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}myinfo untuk mengecek limit`)
                    limitAdd(sender, limit)
                    if (args.length < 1) return reply(`Mau Cari Wiki Apa?\nContoh :\n${prefix}wiki online`)
                    var bby = body.slice(6)
                    anu = await fetchJson(`https://api.zeks.xyz/api/wiki?apikey=${apikey}&q=${bby}`)
                    wikiped = `「 WIKI PEDIA 」\n Jawaban : ${anu.result.result}`
                    conn.sendMessage(from, wikiped, text, { quoted: mek })
                    break

                case 'kbbi':
                    if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}myinfo untuk mengecek limit`)
                    limitAdd(sender, limit)
                    if (args.length < 1) return reply(`Mau Cari KBBI Mana?\nContoh :\n${prefix}kbbi manusia`)
                    var bby = body.slice(6)
                    anu = await fetchJson(`https://api-ky.herokuapp.com/api/kbbi?kata=${bby}&apikey=Ky397`)
                    kabebei = `「 *KBBI* 」\nJawaban : ${anu.result.arti}`
                    conn.sendMessage(from, kabebei, text, { quoted: mek })
                    break
//------------------< Sticker / Tools >-------------------
    case 'ocr':
        if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}myinfo untuk mengecek limit`)
            if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
                 const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
                const media = await conn.downloadAndSaveMediaMessage(encmedia)
                reply(mess.wait)
                await recognize(media, {lang: 'eng+ind', oem: 1, psm: 3})
                            .then(teks => {
                                reply(teks.trim())
                                fs.unlinkSync(media)
                            })
                            .catch(err => {
                                reply(err.message)
                                fs.unlinkSync(media)
                            })
                    } else {
                        reply('Foto aja gan Jangan Video')
                    }
                await limitAdd(sender, limit)
            break 
    case 'tomp4':
        if (!isPremium) return reply(mess.only.prem)
            if ((isMedia && !mek.message.videoMessage || isQuotedSticker) && args.length == 0) {
            ger = isQuotedSticker ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
            owgi = await conn.downloadAndSaveMediaMessage(ger)
            webp2mp4File(owgi).then(res=>{
            sendMediaURL(from,res.result,'Done')
            })
            }else {
            reply('reply stiker')
            }
            fs.unlinkSync(owgi)
            break
    case 'tourl':
        if (!isPremium) return reply(mess.only.prem)
            if ((isMedia && !mek.message.videoMessage || isQuotedImage || isQuotedVideo ) && args.length == 0) {
            boij = isQuotedImage || isQuotedVideo  ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
            owgi = await conn.downloadMediaMessage(boij)
            res = await upload(owgi)
            reply(res)
            } else {
            reply('send/reply image/video')
            }
            break
    case 'tomp3':
        if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}myinfo untuk mengecek limit`)
        limitAdd(sender, limit)
            if (!isQuotedVideo) return fakegroup('Reply video!')
            fakegroup(mess.wait)
            encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
            media = await conn.downloadAndSaveMediaMessage(encmedia)
            ran = getRandom('.mp4')
            exec(`ffmpeg -i ${media} ${ran}`, (err) => {
            fs.unlinkSync(media)
            if (err) return fakegroup(`Err: ${err}`)
            buffer453 = fs.readFileSync(ran)
            conn.sendMessage(from, buffer453, audio, { mimetype: 'audio/mp4', quoted: mek })
            fs.unlinkSync(ran)
            })
            limitAdd(sender, limit)
            break
    case 'fast':
        if (!isPremium) return reply(mess.only.prem)
            if (!isQuotedVideo) return fakegroup('Reply video!')
            fakegroup(mess.wait)
            encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
            media = await conn.downloadAndSaveMediaMessage(encmedia)
            ran = getRandom('.mp4')
            exec(`ffmpeg -i ${media} -filter_complex "[0:v]setpts=0.5*PTS[v];[0:a]atempo=2[a]" -map "[v]" -map "[a]" ${ran}`, (err) => {
            fs.unlinkSync(media)
            if (err) return fakegroup(`Err: ${err}`)
            buffer453 = fs.readFileSync(ran)
            conn.sendMessage(from, buffer453, video, { mimetype: 'video/mp4', quoted: mek })
            fs.unlinkSync(ran)
            })
            break
    case 'slow':
        if (!isPremium) return reply(mess.only.prem)
            if (!isQuotedVideo) return fakegroup('Reply video!')
            fakegroup(mess.wait)
            encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
            media = await conn.downloadAndSaveMediaMessage(encmedia)
            ran = getRandom('.mp4')
            exec(`ffmpeg -i ${media} -filter_complex "[0:v]setpts=2*PTS[v];[0:a]atempo=0.5[a]" -map "[v]" -map "[a]" ${ran}`, (err) => {
            fs.unlinkSync(media)
            if (err) return fakegroup(`Err: ${err}`)
            buffer453 = fs.readFileSync(ran)
            conn.sendMessage(from, buffer453, video, { mimetype: 'video/mp4', quoted: mek })
            fs.unlinkSync(ran)
            })
            break
    case 'reverse':
        if (!isPremium) return reply(mess.only.prem)
            if (!isQuotedVideo) return fakegroup('Reply video!')
            encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
            media = await conn.downloadAndSaveMediaMessage(encmedia)
            ran = getRandom('.mp4')
            exec(`ffmpeg -i ${media} -vf reverse -af areverse ${ran}`, (err) => {
            fs.unlinkSync(media)
            if (err) return fakegroup(`Err: ${err}`)
            buffer453 = fs.readFileSync(ran)
            conn.sendMessage(from, buffer453, video, { mimetype: 'video/mp4', quoted: mek })
            fs.unlinkSync(ran)
            })
            break
    case 'stikerwm':
    case 'stickerwm':
    case 'swm':
        if (!isPremium) return reply(mess.only.prem)           
            pe = args.join('')
            var a = pe.split("|")[0];
            var b = pe.split("|")[1];
            if (isMedia && !mek.message.videoMessage || isQuotedImage ) {
            const encmedia = isQuotedImage   ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
             media = await conn.downloadAndSaveMediaMessage(encmedia)
            await createExif(a,b)
            out = getRandom('.webp')
            ffmpeg(media)
            .on('error', (e) => {
            console.log(e)
            conn.sendMessage(from, 'Terjadi kesalahan', 'conversation', { quoted: mek })
            fs.unlinkSync(media)
            })
            .on('end', () => {
            _out = getRandom('.webp')
            spawn('webpmux', ['-set','exif','./stik/data.exif', out, '-o', _out])
            .on('exit', () => {
            conn.sendMessage(from, fs.readFileSync(_out),'stickerMessage', { quoted: mek })
            fs.unlinkSync(out)
            fs.unlinkSync(_out)
            fs.unlinkSync(media)
            })
            })
            .addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
            .toFormat('webp')
            .save(out)
            } else if ((isMedia && mek.message.videoMessage.seconds < 11 || isQuotedVideo && mek.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.seconds < 11) && args.length == 0) {
            const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
            const media = await conn.downloadAndSaveMediaMessage(encmedia)
            pe = args.join('')
            var a = pe.split("|")[0];
            var b = pe.split("|")[1];
            await createExif(a,b)
            out = getRandom('.webp')
            ffmpeg(media)
            .on('error', (e) => {
            console.log(e)
            conn.sendMessage(from, 'Terjadi kesalahan', 'conversation', { quoted: mek })
            fs.unlinkSync(media)
            })
            .on('end', () => {
            _out = getRandom('.webp')
            spawn('webpmux', ['-set','exif','./stik/data.exif', out, '-o', _out])
            .on('exit', () => {
            conn.sendMessage(from, fs.readFileSync(_out),'stickerMessage', { quoted: mek })
            fs.unlinkSync(out)
            fs.unlinkSync(_out)
            fs.unlinkSync(media)
            })
            })
            .addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
            .toFormat('webp')
            .save(out)
            } else {
            reply(`Send image with caption ${prefix}swm teks|teks or tag picture that has been sent`)
            }
            break
    case 'sticker':
    case 'stiker':
    case 'sg':
    case 's':
        if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}myinfo untuk mengecek limit`)
        limitAdd(sender, limit)
            if (isMedia && !mek.message.videoMessage || isQuotedImage) {
                    const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
                    const media = await conn.downloadAndSaveMediaMessage(encmedia, `./src/stickers/${sender}`)
                    await ffmpeg(`${media}`)
                            .input(media)
                            .on('start', function (cmd) {
                                console.log(`Started : ${cmd}`)
                            })
                            .on('error', function (err) {
                                console.log(`Error : ${err}`)
                                fs.unlinkSync(media)
                                reply(mess.error)
                            })
                            .on('end', function () {
                                console.log('Finish')
                                exec(`webpmux -set exif ./src/stickers/data.exif ./src/stickers/${sender}.webp -o ./src/stickers/${sender}.webp`, async (error) => {
                                    conn.sendMessage(from, fs.readFileSync(`./src/stickers/${sender}.webp`), sticker, {quoted: mek})
                                    fs.unlinkSync(media)    
                                    fs.unlinkSync(`./src/stickers/${sender}.webp`)  
                                })
                            })
                            .addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
                            .toFormat('webp')
                            .save(`./src/stickers/${sender}.webp`)
                } else if ((isMedia && mek.message.videoMessage.fileLength < 10000000 || isQuotedVideo && mek.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.fileLength < 10000000)) {
                    const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
                    const media = await conn.downloadAndSaveMediaMessage(encmedia, `./src/stickers/${sender}`)
                        await ffmpeg(`${media}`)
                            .inputFormat(media.split('.')[4])
                            .on('start', function (cmd) {
                                console.log(`Started : ${cmd}`)
                            })
                            .on('error', function (err) {
                                console.log(`Error : ${err}`)
                                fs.unlinkSync(media)
                                reply(mess.error)
                                tipe = media.endsWith('.mp4') ? 'video' : 'gif'
                            })
                            .on('end', function () {
                                console.log('Finish')
                                exec(`webpmux -set exif ./src/stickers/data.exif ./src/stickers/${sender}.webp -o ./src/stickers/${sender}.webp`, async (error) => {
                                    conn.sendMessage(from, fs.readFileSync(`./src/stickers/${sender}.webp`), sticker, {quoted: mek})
                                    fs.unlinkSync(media)
                                    fs.unlinkSync(`./src/stickers/${sender}.webp`)
                                })
                            })
                            .addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
                            .toFormat('webp')
                            .save(`./src/stickers/${sender}.webp`)
                } else {
                    reply(`Kirim gambar/video dengan caption ${prefix}sticker atau tag gambar/video yang sudah dikirim\nNote : Durasi video maximal 10 detik`)
                }
            break
    case 'toimg':
        if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}myinfo untuk mengecek limit`)
        limitAdd(sender, limit)
            if (!isQuotedSticker) return reply('𝗥𝗲𝗽𝗹𝘆/𝘁𝗮𝗴 𝘀𝘁𝗶𝗰𝗸𝗲𝗿 !')
            reply(mess.wait)
            encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
            media = await conn.downloadAndSaveMediaMessage(encmedia)
            ran = getRandom('.png')
            exec(`ffmpeg -i ${media} ${ran}`, (err) => {
            fs.unlinkSync(media)
            if (err) return reply('yeah failed, try again')
            buffer = fs.readFileSync(ran)
            fakethumb(buffer,'This')
            fs.unlinkSync(ran)
            })
            break
    case 'semoji':
        if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}myinfo untuk mengecek limit`)
        limitAdd(sender, limit)
            if (!q) return fakegroup('emoji?')
            qes = args.join(' ')
            emoji.get(`${qes}`).then(emoji => {
            teks = `${emoji.images[4].url}`
            sendStickerFromUrl(from,`${teks}`)
            console.log(teks)
            })
            break
    case 'nightcore':
        if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}myinfo untuk mengecek limit`)
        limitAdd(sender, limit)     
                    if (!isQuotedAudio) return reply('Reply audio nya om')
                    encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
                    media = await conn.downloadAndSaveMediaMessage(encmedia)
                    ran = getRandom('.mp3')
                    exec(`ffmpeg -i ${media} -filter:a atempo=1.06,asetrate=44100*1.25 ${ran}`, (err, stderr, stdout) => {
                        fs.unlinkSync(media)
                        if (err) return reply('Error!')
                        hah = fs.readFileSync(ran)
                conn.sendMessage(from, hah, audio, { mimetype: 'audio/mp4', quoted: mek, ptt: true })
                fs.unlinkSync(ran)
                })
            break
    case 'tempo':
        if (!isPremium) return reply(mess.only.prem)           
                var req = args.join(' ')            
                encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
                media = await conn.downloadAndSaveMediaMessage(encmedia)
                ran = getRandom('.mp3')
                exec(`ffmpeg -i ${media} -filter:a "atempo=1.0,asetrate=${req}" ${ran}`, (err, stderr, stdout) => {
                        fs.unlinkSync(media)
                        if (err) return reply('Error!')
                        hah = fs.readFileSync(ran)
                        conn.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt:true, quoted: mek})
                        fs.unlinkSync(ran)
                })
            break
//------------------< Economy >-------------------
            case 'topbalance':{
                balance.sort((a, b) => (a.balance < b.balance) ? 1 : -1)
                let top = '*── 「 TOP BALANCE 」 ──*\n\n'
                let arrTop = []
                for (let i = 0; i < 10; i ++){
                    top += `${i + 1}. @${balance[i].id.split("@")[0]}\n=> Balance : $${balance[i].balance}\n\n`
                    arrTop.push(balance[i].id)
                }
                mentions(top, arrTop, true)
                }
                break
/*            case 'saldo':
            case 'balance': 
                    fakereply(`Balance : $${getBalance(sender, balance)}\n\nKamu dapat membeli limit dengan ${prefix}buylimit dan ${prefix}buyglimit untuk membeli game limit`)
                break
*/
            case 'buylimit':{
                if (args.length < 2) return reply(`Kirim perintah *${prefix}buylimit buy* jumlah limit yang ingin dibeli\n\nHarga 1 limit = $500 balance`)
                if (args[1].includes('-')) return reply(`Jangan menggunakan -`)
                if (isNaN(args[1])) return reply(`Harus berupa angka`)
                let ane = Number(nebal(args[1]) * 500)
                if (getBalance(sender, balance) < ane) return reply(`Balance kamu tidak mencukupi untuk pembelian ini`)
                kurangBalance(sender, ane, balance)
                giveLimit(sender, nebal(args[1]), limit)
                reply(monospace(`Pembeliaan limit sebanyak ${args[1]} berhasil\n\nSisa Balance : $${getBalance(sender, balance)}\nSisa Limit : ${getLimit(sender, limitCount, limit)}/${limitCount}`))
            }
                break
            case 'buygamelimit':
            case 'buyglimit':{
                if (args.length < 2) return reply(`Kirim perintah *${prefix}buyglimit buy* jumlah game limit yang ingin dibeli\n\nHarga 1 game limit = $500 balance\nPajak $1 / $10`)
                if (args[1].includes('-')) return reply(`Jangan menggunakan -`)
                if (isNaN(args[1])) return reply(`Harus berupa angka`)
                let ane = Number(nebal(args[1]) * 500)
                if (getBalance(sender, balance) < ane) return reply(`Balance kamu tidak mencukupi untuk pembelian ini`)
                kurangBalance(sender, ane, balance)
                givegame(sender, nebal(args[1]), glimit)
                reply(monospace(`Pembeliaan game limit sebanyak ${args[1]} berhasil\n\nSisa Balance : $${getBalance(sender, balance)}\nSisa Game Limit : ${cekGLimit(sender, gcount, glimit)}/${gcount}`))
            }
                break


//------------------< Download >-------------------
/*    case 'play':
        if (!isPremium) return reply(mess.only.prem)
            if (args.length === 0) return reply(`Send command *${prefix}play* _the title of the music to be searched_`)
            var srch = args.join('')
            aramas = await yts(srch);
            aramat = aramas.all
            var mulaikah = aramat[0].url
                  try {
                    yta(mulaikah)
                    .then((res) => {
                        const { dl_link, thumb, title, filesizeF, filesize } = res
                        axios.get(`https://tinyurl.com/api-create.php?url=${dl_link}`)
                        .then(async (a) => {
                        if (Number(filesize) >= 100000) return sendMediaURL(from, thumb, `*PLAY MUSIC*\n\n*Title* : ${title}\n*Ext* : MP3\n*Filesize* : ${filesizeF}\n*Link* : ${a.data}\n\n_For duration more than the limit is presented in the link_`)
                        const captions = `*PLAY MUSIC*\n\n*Title* : ${title}\n*Ext* : MP3\n*Size* : ${filesizeF}\n*Link* : ${a.data}\n\n_Please wait for the media file to be sent it may take a few minutes_`
                        sendMediaURL(from, thumb, captions)
                        await sendMediaURL(from, dl_link).catch(() => reply('error'))
                        })
                        })
                        } catch (err) {
                        reply(mess.error.api)
                        }
                   break
        case 'video':
            if (!isPremium) return reply(mess.only.prem)
                if (args.length === 0) return reply(`Send command *${prefix}video* _the title of the video to be searched_`)
                var srch = args.join('')
                aramas = await yts(srch);
                aramat = aramas.all
                var mulaikah = aramat[0].url
                      try {
                        ytv(mulaikah)
                        .then((res) => {
                            const { dl_link, thumb, title, filesizeF, filesize } = res
                            axios.get(`https://tinyurl.com/api-create.php?url=${dl_link}`)
                            .then(async (a) => {
                            if (Number(filesize) >= 100000) return sendMediaURL(from, thumb, `*PLAY VIDEO*\n\n*Title* : ${title}\n*Ext* : MP3\n*Filesize* : ${filesizeF}\n*Link* : ${a.data}\n\n_For duration more than the limit is presented in the link_`)
                            const captions = `*PLAY VIDEO*\n\n*Title* : ${title}\n*Ext* : MP4\n*Size* : ${filesizeF}\n*Link* : ${a.data}\n\n_Please wait for the media file to be sent it may take a few minutes_`
                            sendMediaURL(from, thumb, captions)
                            await sendMediaURL(from, dl_link).catch(() => reply('error'))
                            })
                            })
                            } catch (err) {
                            reply(mess.error.api)
                            }
                   break
*/
///// Play By franky
        case 'play':
        case 'ytdl':
            if (!isPremium) return reply(mess.only.prem)
                reply(mess.wait)
                if (!q) return reply(`Example : ${prefix + command} dj tutu 30 detik`)
                res = await yts(q).catch(e => {
                reply('_[ ! ] Error Yang Anda Masukan Tidak Ada_')
                })
                let thumbInfo = `*Youtube Play▶️*
                               
📜 Judul : ${res.all[0].title}
📬 ID : ${res.all[0].videoId}
🌐 Publikasi : ${res.all[0].ago}
🎞️ Ditonton : ${res.all[0].views}
⚖️ Durasi : ${res.all[0].timestamp}
🎥 Channel : ${res.all[0].author.name}
🖇️ Link : ${res.all[0].author.url}`

                buttons = [{buttonId:`${prefix}buttonvideo ${res.all[0].url}`,buttonText:{displayText:'🎥VIDEO'},type:1},{buttonId:`${prefix}buttonmusic ${res.all[0].url}`,buttonText:{displayText:'🎵AUDIO'},type:1}]
                imageMessage = (await conn.prepareMessageMedia({url:res.all[0].image},'imageMessage',{thumbnail:Buffer.alloc(0)})).imageMessage
                buttonsMessage = {contentText: thumbInfo,footerText:'Silahkan Pilih Jenis File Dibawah Ini',imageMessage,buttons,headerType:4}
                inibut = await conn.prepareMessageFromContent(from,{buttonsMessage},{})
                conn.relayWAMessage(inibut)
        break
        case 'buttonmusic':
            if (!isPremium) return reply(mess.only.prem)
                if(!q) return reply('linknya?')
                reply(mess.wait)
                res = await yta(`${q}`).catch(e => {
                reply('_[ ! ] Error Saat Mengirim Audio_')
                })
                filesize = res
                if (Number(filesize) >= 100000) return reply('File Melebihi Dari 100 MB!')
                sendFileFromUrl(`${res.dl_link}`, document, {mimetype: 'audio/mp4', filename: `${res.title}`, quoted: mek})
                //sendMediaURL(from, `${res.dl_link}`)
                break
        case 'buttonvideo':
            if (!isPremium) return reply(mess.only.prem)
                if(!q) return reply('linknya?')
                reply(mess.wait)
                res = await ytv(`${q}`).catch(e => {
                reply('_[ ! ] Error Saat Mengirim Video_')
                })
                filesize = res
                if (Number(filesize) >= 100000) return reply('File Melebihi Dari 100 MB!')
                sendFileFromUrl(`${res.dl_link}`, document, {mimetype: 'video/mp4', filename: `${res.title}`, quoted: mek})
                //sendMediaURL(from, `${res.dl_link}`)
        break
/////
    case 'ytsearch':
    case 'yts':
        if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}myinfo untuk mengecek limit`)
        limitAdd(sender, limit)           
            if (args.length < 1) return reply('Please insert query!')
            var srch = args.join('');
            try {
            var aramas = await yts(srch);
            //console.log(aramas)
            } catch {
            return await conn.sendMessage(from, 'Error!', MessageType.text, dload)
            }
            aramat = aramas.all
            var tbuff = await getBuffer(aramat[0].image)
            var ytresult = '';
            ytresult += '「 *YOUTUBE SEARCH* 」'
            ytresult += '\n________________________\n\n'
            aramas.all.map((video) => {
            ytresult += '≽ Title: ' + video.title + '\n'
            ytresult += '≽ Link: ' + video.url + '\n'
            ytresult += '≽ Duration: ' + video.timestamp + '\n'
            ytresult += '≽ Upload: ' + video.ago + '\n________________________\n\n'
            });
            ytresult += `${botName}`
            await fakethumb(tbuff,ytresult)
            break
 
    case 'ytmp4':
        if (!isPremium) return reply(mess.only.prem)
            if (args.length === 0) return reply(`Send command *${prefix}ytmp4 [linkYt]*`)
            let isLinks2 = args[0].match(/(?:https?:\/{2})?(?:w{3}\.)?youtu(?:be)?\.(?:com|be)(?:\/watch\?v=|\/)([^\s&]+)/)
            if (!isLinks2) return reply(mess.error.Iv)
                try {
                reply(mess.wait)
                ytv(args[0])
                .then((res) => {
                const { dl_link, thumb, title, filesizeF, filesize } = res
                fak =  getBuffer(thumb)
                axios.get(`https://tinyurl.com/api-create.php?url=${dl_link}`)
                .then((a) => {
                if (Number(filesize) >= 40000) return conn.sendMessage(from,`*YT To Mp4!*\n\n*Title* : ${title}\n*Ext* : MP3\n*Filesize* : ${filesizeF}\n*Link* : ${a.data}\n\n_For duration more than the limit is presented in the link_`,text,{contextInfo: { externalAdReply: { title: title, mediaType: 2, thumbnailUrl: thumb, mediaUrl: `${args[0]}` }}})
                const captionsYtmp4 = `*Data Successfully Obtained!*\n\n*Title* : ${title}\n*Ext* : MP4\n*Size* : ${filesizeF}\n\n_Please wait for the media file to be sent it may take a few minutes_`
                conn.sendMessage(from, captionsYtmp4, text ,{contextInfo: { externalAdReply: { title: title, mediaType: 2, thumbnailUrl: thumb, mediaUrl: `${args[0]}` }}})
                //sendMediaURL(from, thumb, captionsYtmp4)
                sendMediaURL(from, dl_link).catch(() => reply(mess.error.api))
                })
                })
                } catch (err) {
                reply(mess.error.api)
                }
                break
    case 'ytmp3':
        if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}myinfo untuk mengecek limit`)
        limitAdd(sender, limit)   
            if (args.length === 0) return reply(`Send command *${prefix}ytmp3 [linkYt]*`)
            let isLinks = args[0].match(/(?:https?:\/{2})?(?:w{3}\.)?youtu(?:be)?\.(?:com|be)(?:\/watch\?v=|\/)([^\s&]+)/)
            if (!isLinks) return reply(mess.error.Iv)
                try {
                reply(mess.wait)
                yta(args[0])
                .then((res) => {
                const { dl_link, thumb, title, filesizeF, filesize } = res
                axios.get(`https://tinyurl.com/api-create.php?url=${dl_link}`)
                .then((a) => {
                if (Number(filesize) >= 30000) return conn.sendMessage(from,`*Data Successfully Obtained!*\n\n*Title* : ${title}\n*Ext* : MP3\n*Filesize* : ${filesizeF}\n*Link* : ${a.data}\n\n_For duration more than the limit is presented in the link_`,text,{contextInfo: { externalAdReply: { title: title, mediaType: 2, thumbnailUrl: thumb, mediaUrl: `${args[0]}` }}})
                const captions = `*YTMP3*\n\n*Title* : ${title}\n*Ext* : MP3\n*Size* : ${filesizeF}\n\n_Please wait for the media file to be sent it may take a few minutes_`
                //sendMediaURL(from, thumb, captions)
                conn.sendMessage(from, captions, text ,{contextInfo: { externalAdReply: { title: title, mediaType: 2, thumbnailUrl: thumb, mediaUrl: `${args[0]}` }}})
                sendMediaURL(from, dl_link).catch(() => reply(mess.error.api))
                })
                })
                } catch (err) {
                reply(mess.error.api)
                }
                break
    case 'tiktok':
        if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}myinfo untuk mengecek limit`)
        limitAdd(sender, limit)   
           if (args.length == 0) return reply(`Example: ${prefix + command} https://vt.tiktok.com/ZSwWCk5o/`)
                ini_url = args[0]
                ini_url = `https://zenzapi.xyz/api/downloader/tiktok?url=${ini_url}&apikey=${apikey}`
                get_result = await fetchJson(ini_url)
                ini_buffer = await getBuffer(get_result.result.nowatermark)
                await conn.sendMessage(from, ini_buffer, video, { quoted: mek })
                break
    case 'igdl':
        if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}myinfo untuk mengecek limit`)
        limitAdd(sender, limit)   
            if (args.length == 0) return reply(`Example: ${prefix + command} https://www.instagram.com/p/CJ8XKFmJ4al/?igshid=1acpcqo44kgkn`)
                    ini_url = args[0]
                    ini_url = await hx.igdl(ini_url)
                    ini_url = ini_url.medias
                    ini_type = image
                    if (ini_url[0].url.includes(".mp4")) ini_type = video
                    ini_buffer = await getBuffer(ini_url[0].url)
                    await conn.sendMessage(from, ini_buffer, ini_type, { quoted: mek })
                break
    case 'twitter':
    case 'twdl':
        if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}myinfo untuk mengecek limit`)
        limitAdd(sender, limit)   
                if (!isUrl(args[0])) return reply(mess.Iv)
                if (!q) return reply('Linknya?')
                ten = args[0]
                tw = await hx.twitter(ten)
                let twdls = `*TWITTER DL*
                   
${tw.desc}`
                sendMediaURL(from,`${tw.HD}`,twdls)
              break
    case 'fbdl':
        if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
                if (args.length < 2) return reply(`Kirim perintah *${prefix}fb* url`)
                if (!isUrl(args[1]) && !args[1].includes('facebook.com')) return reply(mess.error.Iv)
                reply(mess.wait)
                fbdl(args[1])
                .then((res) => {
                    sendFileFromUrl(from, res.result.links[0].url)
                    limitAdd(sender, limit)
                })
                .catch((err) => {
                    sendMess(ownerNumber[0], 'FB Error : ' + err)
                    console.log(color('[FB]', 'red'), err)
                    reply(mess.error.api)
                })
            break

    case 'mediafire':
        if (!isPremium) return reply(mess.only.prem)
            teks = args.join(' ')
            res = await mediafireDl(teks)
            mediafire = `╭───「 *MEDIAFIRE DOWNLOAD* 」
│
├ *Data Berhasil Didapatkan!*
│
├≽ Nama : ${res[0].nama}
├≽ Ukuran : ${res[0].size}
├≽ Link : ${res[0].link}
│
╰─────────────────────
_*Tunggu Proses Mengirim Media......*_`
                    reply(mediafire)
                    sendFileFromUrl(res[0].link, document, {mimetype: res[0].mime, filename: res[0].nama, quoted: mek})
                break
    case 'zippyshare':
    case 'zipp':
        if (!isPremium) return reply(mess.only.prem)
                    if (args.length == 0) return reply(`Example: ${prefix + command} url`)
                    ini_url = args[0]
                    Op = await ZippDL(ini_url)
                    //console.log(Op)
                    Op = Op.result
                    result =`╭───「 *ZIPPYSHARE DOWNLOAD* 」
│
├ *Data Berhasil Didapatkan!*
│
├≽ Nama : ${Op.title}
├≽ Ukuran : ${Op.size}
├≽ Upload : ${Op.upload}
├≽ Type : ${Op.filetype}
├≽ Link : ${Op.url}
│
╰─────────────────────
_*Tunggu Proses Mengirim Media......*_`
                    fakegroup(result)
                    buffnya = await getBuff(`${Op.url}`)
                    conn.sendMessage(from, buffnya, document, { mimetype: `${Op.filetype}`  , filename: `${Op.title}`})
                break
    case 'googledrive':
    case 'gd':
        if (!isPremium) return reply(mess.only.prem)
                    if (args.length == 0) return reply(`Example: ${prefix + command} url`)
                    ini_url = args[0]
                    Op = await fetchJson(`https://api.zeks.xyz/api/gdbypass?apikey=${apikey}&url=${ini_url}`)
                    //console.log(Op)
                    Op = Op.data
                    result =`╭───「 *DRIVE DOWNLOAD* 」
│
├ *Data Berhasil Didapatkan!*
│
├≽ Nama : ${Op.file_name}
├≽ Link : ${Op.download_link}
│
╰─────────────────────
 _*Tunggu Proses Mengirim Media......*_`
                    fakegroup(result)
                    buffnya = await getBuff(`${Op.direct_download}`)
                    let filetype = `${Op.file_name}`.match(/\.[0-9a-z]+$/i)[0]
                    conn.sendMessage(from, buffnya, document, { mimetype: `${filetype}`  , filename: `${Op.file_name}`})
                break
        case 'animegc':
                if (!isPremium) return reply(mess.only.prem)
                    if (args.length == 0) return reply(`Example: ${prefix + command} url`)
                    ini_url = args[0]
                    Op = await ZippDL(ini_url)
                    //console.log(Op)
                    Op = Op.result
                    animegc =`╭───「 *ZIPPYSHARE DOWNLOAD* 」
│
├ *Data Berhasil Didapatkan!*
│
├≽ Nama : ${Op.title}
├≽ Ukuran : ${Op.size}
├≽ Upload : ${Op.upload}
├≽ Type : ${Op.filetype}
├≽ Link : ${Op.url}
│
╰─────────────────────
 _*Tunggu Proses Mengirim Media......*_`
                    fakegroup(animegc)
                    ini_buffer = await getBuff(`${Op.url}`)
                    conn.sendMessage('6282250941238-1625047491@g.us', ini_buffer, document,  { mimetype: `${Op.filetype}`  , filename: `${Op.title}` ,
                            quoted: {
                                key: {
                        fromMe: false,
                        participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {})
                             },
                    message: {
                        "imageMessage": {
                            "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc",
                            "mimetype": "image/jpeg",
                            "caption": `Anime Update Document \nSize : ${Op.size}`,
                            "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=",
                            "fileLength": "28777",
                            "height": 1080,
                            "width": 1079,
                            "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=",
                            "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=",
                            "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69",
                            "mediaKeyTimestamp": "1610993486",
                            "jpegThumbnail": fs.readFileSync('./src/animeupdate.jpeg'),
                            "scansSidecar": "1W0XhfaAcDwc7xh1R8lca6Qg/1bB4naFCSngM2LKO2NoP5RI7K+zLw=="
                            }
                        }
                        }
                    })
                    fakestatus('Terkirim.')
            break
//------------------< GRUP >-------------------
    case 'delvote':
            if (!isGroup)return reply(mess.only.group)
            if(isVote) return reply('Tidak ada sesi Voting')
            delVote(from)
            reply('Sukses Menghapus sesi Voting Di Grup Ini')
            break
    case 'voting':
            if (!isGroup)return reply(mess.only.group)
            if (isVote) return reply('Sesi Voting Sedang Berlangsung Di Grup Ini')
            if(!q) return reply('*Voting*\n\n'+ prefix+ 'voting @tag target | reason  | 1 (1 = 1 Menit)\nContoh : /voting @tag | alasan | waktu vote')
            if (mek.message.extendedTextMessage.contextInfo.mentionedJid.length > 0 || mek.message.extendedTextMessage.contextInfo == null) {
            let id = mek.message.extendedTextMessage.contextInfo.mentionedJid[0]
            split = args.join(' ').replace('@', '').split('|')
            if(!Number(split[2])) return reply('masukan angka di baris ke 3\nContoh: 1-9999\n1 = 1 Menit')
            await mentions('Vote ' +'@'+ id.split('@')[0]+' Di Mulai' +'\n\n' + `vote = ✅\ndevote = ❌\n\nAlasan: ${split[1]}`,[id],true)
            addVote(from,split[1],split[0],split[2],reply)
            }
    break
    case 'tagall':
        if (!isGroup)return reply(mess.only.group)
        if (!isGroupAdmins && !isOwner)return reply(mess.only.admin)
            members_id = []
                teks = (args.length > 0) ? body.slice(8).trim() : ''
                teks += '\n\n'
                for (let mem of groupMembers) {
                    teks += `•> @${mem.jid.split('@')[0]}\n`
                    members_id.push(mem.jid)
                }
            mentions(teks, members_id, true)
    break
    case 'kontag':
        if (!isGroup)return reply(mess.only.group)
        if (!isGroupAdmins && !isOwner)return reply(mess.only.admin)
            pe = args.join('')
            entah = pe.split('|')[0]
            nah = pe.split('|')[1]
            if (isNaN(entah)) return reply('Invalid phone number');
            members_ids = []
            for (let mem of groupMembers) {
            members_ids.push(mem.jid)
            }
            vcard = 'BEGIN:VCARD\n'
            + 'VERSION:3.0\n'
            + `FN:${nah}\n`
            + `TEL;type=CELL;type=VOICE;waid=${entah}:${phoneNum('+' + entah).getNumber('internasional')}\n`
            + 'END:VCARD'.trim()
            conn.sendMessage(from, {displayName: `${nah}`, vcard: vcard}, contact, {contextInfo: {"mentionedJid": members_ids}})
            break
    case 'sticktag':
        if (!isGroup)return reply(mess.only.group)
        if (!isGroupAdmins && !isOwner)return reply(mess.only.admin)
            if ((isMedia && !mek.message.videoMessage || isQuotedSticker) && args.length == 0) {
            encmedia = isQuotedSticker ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
            file = await conn.downloadAndSaveMediaMessage(encmedia, filename = getRandom())
            value = args.join(" ")
            var group = await conn.groupMetadata(from)
            var member = group['participants']
            var mem = []
            member.map(async adm => {
            mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
            })
            var options = {
                contextInfo: { mentionedJid: mem },
                quoted: mek
            }
            ini_buffer = fs.readFileSync(file)
            conn.sendMessage(from, ini_buffer, sticker, options)
            fs.unlinkSync(file)
            } else {
            reply(`*Reply sticker that has been sent*`)
            }
            break
    case 'fitnah':
        if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}myinfo untuk mengecek limit`)
        limitAdd(sender, limit)    
            if (args.length < 1) return reply(`Usage :\n${prefix}fitnah [@tag|message|bot message]]\n\nEx : \n${prefix}fitnah @tagmember|hai|hai juga`)
            var gh = args.join('')
            mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
            var replace = gh.split("|")[0];
            var target = gh.split("|")[1];
            var bot = gh.split("|")[2];
            conn.sendMessage(from, `${bot}`, text, {quoted: { key: { fromMe: false, participant: `${mentioned}`, ...(from ? { remoteJid: from } : {}) }, message: { conversation: `${target}` }}})
            break
    case 'fitnahpc':
        if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}myinfo untuk mengecek limit`)
        limitAdd(sender, limit)
            if(!q) return reply(`${prefix}fitnahpc teks target|our teks`)
            jids = `${targetpc}@s.whatsapp.net` // nomer target
            var split = args.join(' ').replace(/@|\d/gi, '').split('|')
            var taged = mek.message.extendedTextMessage.contextInfo.mentionedJid[0]
            var options = {contextInfo: {quotedMessage: {extendedTextMessage: {text: split[0]}}}}
            const responye = await conn.sendMessage(jids, `${split[1]}`, MessageType.text, options)
            await conn.deleteMessage(jids, { id: responye.messageID, remoteJid: jids, fromMe: true })
            break
    case 'kontak':
            pe = args.join(' ')
            entah = pe.split('|')[0]
            nah = pe.split('|')[1]
            if (isNaN(entah)) return reply('Invalid phone number');
            vcard = 'BEGIN:VCARD\n'
            + 'VERSION:3.0\n'
            + `FN:${nah}\n`
            + `TEL;type=CELL;type=VOICE;waid=${entah}:${phoneNum('+' + entah).getNumber('internasional')}\n`
            + 'END:VCARD'.trim()
            conn.sendMessage(from, {displayName: `${nah}`, vcard: vcard}, contact)
            break
     case 'totag':
        if (!isGroup)return reply(mess.only.group)
        if (!isGroupAdmins && !isOwner)return reply(mess.only.admin)
            if ((isMedia && !mek.message.videoMessage || isQuotedSticker) && args.length == 0) {
            encmedia = isQuotedSticker ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
            file = await conn.downloadAndSaveMediaMessage(encmedia, filename = getRandom())
            value = args.join(" ")
            var group = await conn.groupMetadata(from)
            var member = group['participants']
            var mem = []
            member.map(async adm => {
            mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
            })
            var options = {
                contextInfo: { mentionedJid: mem },
                quoted: mek
            }
            ini_buffer = fs.readFileSync(file)
            conn.sendMessage(from, ini_buffer, sticker, options)
            fs.unlinkSync(file)
            } else if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
            encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
            file = await conn.downloadAndSaveMediaMessage(encmedia, filename = getRandom())
            value = args.join(" ")
            var group = await conn.groupMetadata(from)
            var member = group['participants']
            var mem = []
            member.map(async adm => {
            mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
            })
            var options = {
                contextInfo: { mentionedJid: mem },
                quoted: mek
            }
            ini_buffer = fs.readFileSync(file)
            conn.sendMessage(from, ini_buffer, image, options)
            fs.unlinkSync(file)
        } else if ((isMedia && !mek.message.videoMessage || isQuotedAudio) && args.length == 0) {
            encmedia = isQuotedAudio ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
            file = await conn.downloadAndSaveMediaMessage(encmedia, filename = getRandom())
            value = args.join(" ")
            var group = await conn.groupMetadata(from)
            var member = group['participants']
            var mem = []
            member.map(async adm => {
            mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
            })
            var options = {
                mimetype : 'audio/mp4',
                ptt : true,
                contextInfo: { mentionedJid: mem },
                quoted: mek
            }
            ini_buffer = fs.readFileSync(file)
            conn.sendMessage(from, ini_buffer, audio, options)
            fs.unlinkSync(file)
        }  else if ((isMedia && !mek.message.videoMessage || isQuotedVideo) && args.length == 0) {
            encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
            file = await conn.downloadAndSaveMediaMessage(encmedia, filename = getRandom())
            value = args.join(" ")
            var group = await conn.groupMetadata(from)
            var member = group['participants']
            var mem = []
            member.map(async adm => {
            mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
            })
            var options = {
                mimetype : 'video/mp4',
                contextInfo: { mentionedJid: mem },
                quoted: mek
            }
            ini_buffer = fs.readFileSync(file)
            conn.sendMessage(from, ini_buffer, video, options)
            fs.unlinkSync(file)
        } else{
          reply(`reply image/sticker/audio/video with caption ${prefix}totag`)
        }
        break
        case 'hidetag':
            if (!isGroup)return reply(mess.only.group)
            if (!isGroupAdmins && !isOwner)return reply(mess.only.admin)
            var value = args.join(' ')
            var group = await conn.groupMetadata(from)
            var member = group['participants']
            var mem = []
            member.map(async adm => {
            mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
            })
            var optionshidetag = {
            text: value,
            contextInfo: { mentionedJid: mem },
            quoted: mek
            }
            conn.sendMessage(from, optionshidetag, text)
            break
        case 'mute':
            if (!isGroup)return reply(mess.only.group)
            if (!isGroupAdmins && !isOwner)return reply(mess.only.admin)
                if (isMuted) return reply(`udah mute`)
                mute.push(from)
                fs.writeFileSync('./database/mute.json', JSON.stringify(mute))
                reply(`Bot berhasil dimute di chat ini`)
                break
        case 'unmute':
        break
        case 'sider': 
            if (!isGroup)return reply(mess.only.group)
            if (!isGroupAdmins && !isOwner)return reply(mess.only.admin)
                    if (!isQuoted) return reply(`Reply pesan dari bot`)
                    conn.messageInfo(from, mek.message.extendedTextMessage.contextInfo.stanzaId)
                    .then((res) => {
                        let anu = []
                        let txt = ` *Iist Sider*\n\n`
                        for (let i = 0; i < res.reads.length; i++){
                            anu.push(res.reads[i].jid)
                            txt += `≽ @${res.reads[i].jid.split("@")[0]} =  ${moment(`${res.reads[i].t}` * 1000).tz('Asia/Jakarta').format('HH:mm:ss')}\n\n`
                            //txt += `≽ Waktu : ${moment(`${res.reads[i].t}` * 1000).tz('Asia/Jakarta').format('HH:mm:ss')}\n\n`
                        }         
                        mentions(txt, anu, true)
                    })
                    .catch((err) => reply('reply pesan bot!'))
                break
                case 'infogrup':
                case 'infogrouup':
                case 'grupinfo':
                case 'groupinfo':
                    if (!isGroup)return reply(mess.only.group)
                        try {
                        var pic = await conn.getProfilePicture(from)
                        } catch {
                        var pic = 'https://i.ibb.co/Tq7d7TZ/age-hananta-495-photo.png'
                        }
                        let gcinfo = `*GRUP INFORMATION*\n\n*Name :* ${groupName}\n*ID Grup :* ${from}\n*Dibuat :* ${moment(`${groupMetadata.creation}` * 1000).tz('Asia/Jakarta').format('DD/MM/YYYY HH:mm:ss')}\n*Jumlah Admin :* ${groupAdmins.length}\n*Jumlah Peserta :* ${groupMembers.length}\n*Welcome :* ${isWelkom ? 'Aktif' : 'Mati'}\n*AntiLink :* ${isAntiLink ? 'Aktif' : 'Mati'}\n*Desc :* \n${groupMetadata.desc}`
                        conn.sendMessage(from, await getBuffer(pic), image, {quoted: freply2, caption: gcinfo})
                break
                case 'antilink':
                    if (!isGroup)return reply(mess.only.group)
                    if (!isGroupAdmins && !isOwner)return reply(mess.only.admin)
                    if (!isBotGroupAdmins) return reply('Jadikan BOT admin')
                    if (args.length < 1) return reply(`untuk mengaktifkan ketik : ${prefix}antilink on`)
                    if (args[0] === 'on') {
                        if (isAntiLink) return reply('Sudah AKTIF Boss')
                        antilink.push(from)
                        fs.writeFileSync('./database/antilink.json', JSON.stringify(antilink))
                        reply('「 Fitur Anti Link Diaktifkan 」')
                        conn.sendMessage(from, `ALLERT!!! Group ini sudah di pasang anti link\nJika Kamu Melanggar Maka Akan Saya Tendang`, text)
                    } else if (args[0] === 'off') {
                        if (!isAntiLink) return reply('Sudah NONAKTIF Boss')
                        var ini = antilink.indexOf(from)
                        antilink.splice(ini, 1)
                        fs.writeFileSync('./database/antilink.json', JSON.stringify(antilink))
                        reply('「 Fitur Anti Link Dimatikan 」')
                    } else {
                        reply('ketik on untuk mengaktifkan, ketik off untuk mematikan')
                    }
                    break
                case 'grup':
                    if (!isGroup)return reply(mess.only.group)
                    if (!isGroupAdmins && !isOwner)return reply(mess.only.admin)
                    if (!isBotGroupAdmins) return reply('Jadikan BOT admin')
                    //if (args.length < 1) return reply(`untuk membuka : ${prefix}group buka\nuntuk menutup : ${prefix}group tutup`)
                    let la = conn.prepareMessageFromContent(from, {
                            "listMessage":{
                              "title": "*GROUP SETTING*",
                              "description": `untuk membuka : ${prefix}group buka\nuntuk menutup : ${prefix}group tutup`,
                              "buttonText": "Pencet Ya",
                              "listType": "SINGLE_SELECT",
                              "sections": [
                                 {
                                    "title": "Pilih 1 Aja",
                                    "rows": [
                                       {
                                          "title": "BUKA",
                                          "description" : "Untuk Membuka Grup",
                                          "rowId": `${prefix}grup buka`
                                       },
                                       {
                                          "title": "TUTUP",
                                          "description" : "Untuk Menutup Grup",
                                          "rowId": `${prefix}grup tutup`
                                       }
                                    ]
                                 }]}}, {})
                    conn.relayWAMessage(la, {waitForAck: true})
                    if (args[0] === 'buka') {
                        reply(`Berhasil Membuka group`)
                        conn.groupSettingChange(from, GroupSettingChange.messageSend, false)
                    } else if (args[0] === 'tutup') {
                        reply(`Berhasil Menutup Group`)
                        conn.groupSettingChange(from, GroupSettingChange.messageSend, true)
                    }
                    break
                case 'kick':
                    if (!isGroup)return reply(mess.only.group)
                    if (!isGroupAdmins && !isOwner)return reply(mess.only.admin)
                    if (!isBotGroupAdmins) return reply('Jadikan BOT admin')
                    if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('Reply Chat Target Nya Boss')
                    kicknya = mek.message.extendedTextMessage.contextInfo.participant
                    await conn.groupRemove(from, [kicknya])
                    break
                case 'linkgrup':
                case 'linkgroup':
                    if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}myinfo untuk mengecek limit`)
                    limitAdd(sender, limit)
                    if (!isGroup)return reply(mess.only.group)
                    if (!isBotGroupAdmins) return reply('Jadikan BOT admin')
                    linkgc = await conn.groupInviteCode(from)
                    yeh = `https://chat.whatsapp.com/${linkgc}\n\nlink Group *${groupName}*`
                    conn.sendMessage(from, yeh, text, { quoted: mek })
                    break
                case 'setname':
                    if (!isGroup)return reply(mess.only.group)
                    if (!isGroupAdmins && !isOwner)return reply(mess.only.admin)
                    if (!isBotGroupAdmins) return reply('Jadikan BOT admin')
                    conn.groupUpdateSubject(from, `${body.slice(9)}`)
                    conn.sendMessage(from, '「 SUKSES 」Mengubah Nama Grup', text, { quoted: mek })
                    break
                case 'setdesc':
                    if (!isGroup)return reply(mess.only.group)
                    if (!isGroupAdmins && !isOwner)return reply(mess.only.admin)
                    if (!isBotGroupAdmins) return reply('Jadikan BOT admin')
                    conn.groupUpdateDescription(from, `${body.slice(9)}`)
                    conn.sendMessage(from, '*「 SUKSES 」Mengubah Desk Grup', text, { quoted: mek })
                    break
                case 'demote':
                case 'demot':
                    if (!isGroup)return reply(mess.only.group)
                    if (!isGroupAdmins && !isOwner)return reply(mess.only.admin)
                    if (!isBotGroupAdmins) return reply('Jadikan BOT admin')
                    if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('𝗧𝗮𝗴 𝘁𝗮𝗿𝗴𝗲𝘁 𝘆𝗮𝗻𝗴 𝗶𝗻𝗴𝗶𝗻 𝗱𝗶 𝘁𝗲𝗻𝗱𝗮𝗻𝗴!')
                    mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
                    if (mentioned.length > 1) {
                        dem = ''
                        for (let _ of mentioned) {
                            dem += `*jabatan kamu di copot*🏃 :\n`
                            dem += `@_.split('@')[0]`
                        }
                        mentions(dem, mentioned, true)
                        conn.groupDemoteAdmin(from, mentioned)
                    } else {
                        mentions(`Yahh @${mentioned[0].split('@')[0]} Jabatan kamu sebagai leluhur di grup telah di copot🏃`, mentioned, true)
                        conn.groupDemoteAdmin(from, mentioned)
                    }
                    break
                case 'promote':
                case 'promot':
                    if (!isGroup)return reply(mess.only.group)
                    if (!isGroupAdmins && !isOwner)return reply(mess.only.admin)
                    if (!isBotGroupAdmins) return reply('Jadikan BOT admin')
                    if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('Tag Orang Nya Bro')
                    mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
                    if (mentioned.length > 1) {
                        prom = ''
                        for (let _ of mentioned) {
                            prom += `Yeee🥳 Kamu naik jabatan >_< :\n`
                            prom += `@_.split('@')[0]`
                        }
                        mentions(prom, mentioned, true)
                        conn.groupMakeAdmin(from, mentioned)
                    } else {
                        mentions(`Selamat🥳 @${mentioned[0].split('@')[0]} *anda naik menjadi admin group* >_<`, mentioned, true)
                        conn.groupMakeAdmin(from, mentioned)
                    }
                    break
                case 'leave':
                    if (!isGroup)return reply(mess.only.group)
                    if (!isGroupAdmins && !isOwner)return reply(mess.only.admin)
                    setTimeout(() => {
                        conn.groupLeave(from)
                    }, 2000)
                    setTimeout(() => {
                        conn.updatePresence(from, Presence.composing)
                        fakestatus('Aku pamit Kawan:)')
                    }, 0)
                    break

                case 'del':
                case 'delete':
                case 'd':
                    if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}myinfo untuk mengecek limit`)
                    limitAdd(sender, limit)
                    conn.deleteMessage(from, { id: mek.message.extendedTextMessage.contextInfo.stanzaId, remoteJid: from, fromMe: true })
                    break
                case 'welcome':
                    if (!isGroup)return reply(mess.only.group)
                    if (!isGroupAdmins && !isOwner)return reply(mess.only.admin)
                    if (args.length < 1) return reply(`untuk mengaktifkan ketik : ${prefix}welcome on`)
                    if (args[0] === 'on') {
                        if (isWelkom) return reply('Sudah AKTIF Boss')
                        welkom.push(from)
                        fs.writeFileSync('./database/welkom.json', JSON.stringify(welkom))
                        reply('「 Fitur Welcome Diaktifkan 」')
                    } else if (args[0] === 'off') {
                        if (!isWelkom) return reply('Sudah NONAKTIF Boss')
                        welkom.splice(from , 1)
                        fs.writeFileSync('./database/welkom.json', JSON.stringify(welkom))
                        reply('「 Fitur Welcome Dimatikan 」')
                    } else {
                        reply('on untuk mengaktifkan, off untuk mematikan')
                    }
                    break
//------------------< GAME >-------------------
                case  'tictactoe':
                case  'ttt':
                    if (isGame(sender, isOwner, gcount, glimit)) return reply(`Limit game kamu sudah habis`)
                    gameAdd(sender, glimit)
                    if (fs.existsSync(`./lib/tictactoe/db/${from}.json`)) {
                         const boardnow = setGame(`${from}`);
                         const matrix = boardnow._matrix;
                         const chatMove = `*🎮 Tictactoe Game 🎳*
     
     Sedang ada sesi permainan digrup ini\n\n@${boardnow.X} VS @${boardnow.O}
     
     ❌ : @${boardnow.X}
     ⭕ : @${boardnow.O}
     
     Giliran : @${boardnow.turn == "X" ? boardnow.X : boardnow.O}
     
     
          ${matrix[0][0]}  ${matrix[0][1]}  ${matrix[0][2]}
          ${matrix[1][0]}  ${matrix[1][1]}  ${matrix[1][2]}
          ${matrix[2][0]}  ${matrix[2][1]}  ${matrix[2][2]}
     
     
     `;
                         conn.sendMessage(from, chatMove, MessageType.text, {
                              quoted: mek,
                              contextInfo: {
                                   mentionedJid: [
                                        boardnow.X + "@s.whatsapp.net",
                                        boardnow.O + "@s.whatsapp.net",
                                   ],
                              },
                         });
                         return;
                    }
                    if (argss.length === 1)
                         return reply(
                              `Tag yang ingin jadi lawan anda!\n\nPenggunaan : *${prefix}tictactoe <@TagMember>*`
                         );
                    const boardnow = setGame(`${from}`);
                    console.log(`Start Tictactore ${boardnow.session}`);
                    boardnow.status = false;
                    boardnow.X = sender.replace("@s.whatsapp.net", "");
                    boardnow.O = argss[1].replace("@", "");
                    fs.writeFileSync(
                         `./lib/tictactoe/db/${from}.json`,
                         JSON.stringify(boardnow, null, 2)
                    );
                    const strChat = `*🎮 Memulai game tictactoe 🎳*
     
     @${sender.replace(
                         "@s.whatsapp.net",
                         ""
                    )} menantang anda untuk menjadi lawan game
     
     _[ ${argss[1]} ] Ketik Y/N untuk menerima atau menolak permainan_ 
     `;
                    conn.sendMessage(from, strChat, MessageType.text, {
                         quoted: mek,
                         contextInfo: {
                              mentionedJid: [sender, argss[1].replace("@", "") + "@s.whatsapp.net"],
                         },
                    });
                break
                case  'delttc':
                    if (fs.existsSync("./lib/tictactoe/db/" + from + ".json")) {
                         fs.unlinkSync("./lib/tictactoe/db/" + from + ".json");
                         reply(`Berhasil menghapus sesi di grup ini!`);
                    } else {
                         reply(`Tidak ada sesi yg berlangsung, mohon ketik .tictactoe`);
                    }
                break
                case 'suit':
                    if (isGame(sender, isOwner, gcount, glimit)) return reply(`Limit game kamu sudah habis`)
                    gameAdd(sender, glimit)
                    if (!q) return await reply(`Kirim perintah ${prefix}suit [pilihan]\nContoh: ${prefix}suit gunting`)
                    const hargasuit = 5000
                    if (getBalance(sender, balance) <= hargasuit) return reply(`Sepertinya saldomu tidak cukup, untuk bermain game ini harus ada Rp. 5.000+, silahkan cek dengan cara ${prefix}saldo`)
                    if (getBalance(sender, balance) >= hargasuit) {
                        if (!q.match(/batu|gunting|kertas/)) return reply(`Format salah`)
                        if (q.match(/batu|gunting|kertas/)) {
                            //await limitAddCoin(serial)
                            //confirmATM(serial, hargasuit)
                            kurangBalance(sender, hargasuit, balance)
                            //await sleeps(3000)
                            var computer = Math.random();
                            const hadiahnye = Math.floor(Math.random() * 10000) + 1;
                            const hadiahtostr = convertBalanceToString(hadiahnye)
                            const balikin = hargasuit * 1
                            if (computer < 0.34) {
                                computer = 'batu';
                            } else if (computer >= 0.34 && computer < 0.67) {
                                computer = 'gunting';
                            } else {
                                computer = 'kertas';
                            }
                            if (q == computer) {
                                reply(`Pertandingan Seri!\nSaldomu dikembalikan Rp ${convertBalanceToString(hargasuit)}`)
                                //addSaldo(serial, balikin)
                                addBalance(sender, balikin, balance)
                            } else if (q == 'batu') {
                                if (computer == 'gunting') {
                                    reply(`*RESULT*\n\n• You: Batu\n• Computer: Gunting\n\nCongrats You win!, SALDO +Rp ${hadiahtostr}`)
                                    //addSaldo(serial, hadiahnye)
                                    addBalance(sender, hadiahnye, balance)
                                } else {
                                    reply(`*RESULT*\n\n• You: Batu\n• Computer: Kertas\n\nYou lose:(`)
                                }
                            } else if (q == 'gunting') {
                                if (computer == 'batu') {
                                    reply(from, `*RESULT*\n\n• You: Gunting\n• Computer: Batu\n\nYou lose:(`)
                                } else {
                                    reply(`*RESULT*\n\n• You: Gunting\n• Computer: Kertas\n\nCongrats You win!, SALDO +Rp ${hadiahtostr}`)
                                    //addSaldo(serial, hadiahnye)
                                    addBalance(sender, hadiahnye, balance)
                                }
                            } else if (q == 'kertas') {
                                if (computer == 'batu') {
                                    reply(`*RESULT*\n\n• You: Kertas\n• Computer: Batu\n\nCongrats You win!, SALDO +Rp ${hadiahtostr}`)
                                    //addSaldo(serial, hadiahnye)
                                    addBalance(sender, hadiahnye, balance)
                                } else {
                                    reply(`*RESULT*\n\n• You: Kertas\n• Computer: Gunting\n\nYou lose:(`)
                                }
                            }
                        }
                    }
                    break
                case 'casino':
                    if (isGame(sender, isOwner, gcount, glimit)) return reply(`Limit game kamu sudah habis`)
                    gameAdd(sender, glimit)
                    if (!q) return await reply(`Format salah!\n\nKirim perintah ${prefix}casino jumlah\nContoh: ${prefix}casino 5000`)
                    var digits_only = string => [...string].every(c => '0123456789'.includes(c));
                    if (digits_only(q) == false) return await reply(`Only Number!`)
                    if (digits_only(q) == true) {
                        const betcasino = Math.floor(q)
                        const maximalcsn = 100001
                        if (betcasino >= maximalcsn) return reply(`Maximal 100k`)
                        if (getBalance(sender, balance) <= betcasino) return reply(`*IND*\n• Sepertinya saldomu tidak cukup untuk taruhan Rp. ${convertBalanceToString(q)}, Silahkan cek dengan cara ${prefix}saldo\n\n*ENG*\n• It looks like your balance is not enough for the bet Rp. ${convertBalanceToString(q)}, Please check your balance type ${prefix}saldo`)
                        if (getBalance(sender, balance) >= betcasino) {
                            //confirmATM(serial, betcasino)
                            kurangBalance(sender, betcasino, balance)
                            const hadiahcsn = betcasino * 2
                            const maxcasino = 30
                            const thisyou = Math.floor(Math.random() * maxcasino) + 1;
                            const thiscomputer = Math.floor(Math.random() * maxcasino) + 1;
                            if (thisyou >= thiscomputer) {
                                reply(`*RESULT*\n\n• You: ${thisyou}\n• Computer: ${thiscomputer}\n\nCongrats! You win and get Rp. ${convertBalanceToString(hadiahcsn)}`)
                                //addSaldo(serial, hadiahcsn)
                                addBalance(sender, hadiahcsn, balance)
                            } else if (thisyou <= thiscomputer) {
                                reply(`*RESULT*\n\n• You: ${thisyou}\n• Computer: ${thiscomputer}\n\nSorry! You lose:(`)
                            } else if (thisyou === thiscomputer) {
                                reply(`*RESULT*\n\n• You: ${thisyou}\n• Computer: ${thiscomputer}\n\nDraw!`)
                            }
                        }
                    }
                    break
            case 'tebakgambar':{
                    if (isGame(sender, isOwner, gcount, glimit)) return reply(`Limit game kamu sudah habis`)
                    if (game.isTebakGambar(from, tebakgambar)) return reply(`Masih ada soal yang belum di selesaikan`)
                    let anu = await fetchJson(`https://api.zeks.xyz/api/tebakgambar?apikey=${apikey}`)
                    console.log(anu.result.jawaban)
                    const petunjuk = anu.result.jawaban.replace(/[b|c|d|f|g|h|j|k|l|m|n|p|q|r|s|t|v|w|x|y|z]/gi, '_')
                    sendMediaURL(from, anu.result.soal, monospace(`Silahkan jawab soal berikut ini\n\nPetunjuk : ${petunjuk}\nWaktu : ${gamewaktu}s`))
                    let anih = anu.result.jawaban.toLowerCase()
                    game.addgambar(from, anih, gamewaktu, tebakgambar)
                    gameAdd(sender, glimit)
                }
                break
             case 'family100':
                   if (isGame(sender, isOwner, gcount, glimit)) return reply(`Limit game kamu sudah habis`)
                   if (game.isfam(from, family100)) return reply(`Masih ada soal yang belum di selesaikan`)
                   anu = await fetchJson(`https://api.zeks.xyz/api/family100?apikey=${apikey}`)
                   reply(`*JAWABLAH SOAL BERIKUT*\n\n*Soal :* ${anu.data.pertanyaan}\n*Total Jawaban :* ${anu.data.jawaban.array.length}\n\nWaktu : ${gamewaktu}s`)
                   anoh = anu.data.jawaban.array
                   console.log(anoh)
                   rgfds = []
                   for (let i of anoh){
                   fefs = i.split('/') ? i.split('/')[0] : i
                   iuhbb = fefs.startsWith(' ') ? fefs.replace(' ','') : fefs
                   axsf = iuhbb.endsWith(' ') ? iuhbb.replace(iuhbb.slice(-1), '') : iuhbb
                   rgfds.push(axsf.toLowerCase())
    }
                   game.addfam(from, rgfds, gamewaktu, family100)
                   gameAdd(sender, glimit)
              break
//------------------< NSFW >-------------------
            case 'npdf':
                    if (!isPremium) return reply(mess.only.prem)
                    reply(mess.wait)
                    henid = args[0]
                    let ResultPdf = [];
                    let count = 0
                    try {
                        const get_result = new nhentai.API()
                        const doujin = await get_result.fetchDoujin(henid);
                        gas = doujin.thumbnail.url
                        console.log(gas)
                        nety = await getBuffer(gas)
                        const array_page = doujin.pages
                        const title = doujin.titles.pretty
                        for (let index = 0; index < array_page.length; index++) {
                            const image_name = title + index + ".jpg"
                            await new Promise((resolve) => request(array_page[index]).pipe(fs.createWriteStream(image_name)).on('finish', resolve))
                            //console.log(array_page[index].url);
                            ResultPdf.push(image_name);
                            count++
                          }
                          sendMess(from,`Membuat PDF...`)
                          await new Promise((resolve) =>
                            topdf(ResultPdf, 'A4')
                            .pipe(fs.createWriteStream(title + '.pdf'))
                            .on('finish', resolve)
                          )
                          for (let index = 0; index < array_page.length; index++) {
                            fs.unlink( title + index + ".jpg", (err) => {
                              if (err) throw err
                            })
                          }
                          const size = await fs.statSync(`${title}.pdf`).size
                          if (size < 45000000) {
                            sendMess(from,"Uploading PDF...");
                            ga = fs.readFileSync(`${title}.pdf`);
                           await conn.sendMessage(from, ga, document, { thumbnail: nety, mimetype: Mimetype.pdf, filename: `${title}.pdf` })
                            .then((result) => {
                              fs.unlink(`${title}.pdf`, (err) => {
                                if (err) throw err
                              })
                            })
                            .catch((erro) => {
                              console.error("Error Pengiriman :  ",
                                erro);
                              reply("Error");
                            })
                          } else {
                            reply("File Terlalu Besar File Akan Di Upload Ke Anonfile");
                            const options = {
                              method: "POST",
                              url: "https://api.anonfiles.com/upload",
                              formData: {
                                file: fs.createReadStream(`${title}.pdf`),
                              },
                            }

                            request(options, function (err, res, body) {
                              if (err) console.log(err);
                              fs.unlink(`${title}.pdf`, (err) => {
                                if (err) throw err
                              })
                              reply("Link Downloadnya : " + JSON.parse(body).data.file.url.full);
                            })
                          }
                    } catch (error) {
                      reply(String(error));
                      console.log("No Dōjinshi found");
                      console.log(error);
                    }
                    break
            case 'nhentai':
                    if (!isPremium) return reply(mess.only.prem)
                    if (args.length == 0) return reply(`Example: ${prefix + command} 344253`)  
                    henid = args[0]                      
                    res = await fetchJson(`https://zenzapi.xyz/api/nhentai?query=${henid}&apikey=${apikey}`)
                    data = res.result
                    ini_txt = `ID : ${data.id}\n`
                    ini_txt += `Media ID : ${data.media_id}\n\n`
                    ini_txt += `Inggris : ${data.title.english}\n\n`
                    ini_txt += `Jepang : ${data.title.japanese}\n\n`
                    ini_txt += `Romaji : ${data.title.pretty}`
                    dor = data.image
                    nhe = dor[Math.floor(Math.random() * dor.length)]
                    buttons = [{buttonId: `${prefix}npdf ${henid}`,buttonText:{displayText: 'DOWNLOAD PDF👙'},type:1}]
                    imageMessage = (await conn.prepareMessageMedia({url:data.image[0]},'imageMessage',{thumbnail:Buffer.alloc(0)})).imageMessage
                    buttonsMessage = {contentText: ini_txt,footerText:'Siapkan Tissue \nDownload Untuk Premium',imageMessage,buttons,headerType:4}
                    prep = await conn.prepareMessageFromContent(from,{buttonsMessage},{})
                    conn.relayWAMessage(prep)
                    break
                case 'xnxx':
                    if (!isPremium) return reply(mess.only.prem)
                    if (args.length == 0) return reply(`Example: ${prefix + command} https://www.xnxx.com/video-uy5a73b/mom_is_horny_-_brooklyn`)
                    query = args.join(" ")
                    anu = await fetchJson(`https://zenzapi.xyz/api/xnxx?url=${query}&apikey=${apikey}`)
                    nxx = 
`*XNXX DOWNLOADER*
*Judul* : ${anu.result.title}
*Desc* : ${anu.result.desc}
*Size*: ${anu.result.size}

Video Akan Di Kirim Ke
Private Chat..`
                        sendMediaURL(from,`${anu.result.img}`,nxx)
                        sendMediaURL(sender,`${anu.result.url}`,`${anu.result.title}`)
                    break
            case 'trap':
            case 'blowjob':
                if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}myinfo untuk mengecek limit`)
                limitAdd(sender, limit)
                            try {
                                axios.get(`https://waifu.pics/api/nsfw/${command}`).then((res)=>{
                                imageToBase64(res.data.url)
                                .then((response) => {
                                var ifu = Buffer.from(response, 'base64');
                            conn.sendMessage(from, ifu, image, { thumbnail: fs.readFileSync(`./media/addons/18+.jpg`),quoted: mek})
                            })})
                            } catch (e) {
                                console.log(`Error :`, color(e,'red'))
                                reply('Error!')
                            }
                    break
            case 'nsfwwaifu':
                if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}myinfo untuk mengecek limit`)
                limitAdd(sender, limit)
                            try {
                                axios.get(`https://waifu.pics/api/nsfw/waifu`).then((res)=>{
                                imageToBase64(res.data.url)
                                .then((response) => {
                                var ifu = Buffer.from(response, 'base64');
                            conn.sendMessage(from, ifu, image, {thumbnail: fs.readFileSync(`./media/addons/18+.jpg`),quoted: mek})
                            })})
                            } catch (e) {
                                console.log(`Error :`, color(e,'red'))
                                reply('Error!')
                            }
                    break
            case 'nsfwneko':
                if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}myinfo untuk mengecek limit`)
                limitAdd(sender, limit)
                            try {
                                axios.get(`https://waifu.pics/api/nsfw/neko`).then((res)=>{
                                imageToBase64(res.data.url)
                                .then((response) => {
                                var ifu = Buffer.from(response, 'base64');
                            conn.sendMessage(from, ifu, image, {thumbnail: fs.readFileSync(`./media/addons/18+.jpg`),quoted: mek})
                            })})
                            } catch (e) {
                                console.log(`Error :`, color(e,'red'))
                                reply('Error!')
                            }
                    break
            case 'konachan':
                    if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}myinfo untuk mengecek limit`)
                    limitAdd(sender, limit)     
                    if (args.length == 0) return reply(`Example: ${prefix + command} azur_lane`)
                    query = args.join(" ")
                    ini_buffer = await getBuff(`https://zenzapi.xyz/api/konachan?query=${query}&apikey=${apikey}`)
                    conn.sendMessage(from, ini_buffer, image, { quoted: freply})
                    break
//------------------< Anime >-------------------
                case 'wait':
                    if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}myinfo untuk mengecek limit`)
                    limitAdd(sender, limit)
                    if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
                        //reply(nad.wait)
                        const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
                        media = await conn.downloadMediaMessage(encmedia)
                        res = await upload(media)
                        await wait(res).then(res => {
                            conn.sendMessage(from, res.video, video, {quoted: mek, caption: res.teks.trim()})
                        }).catch(err => {
                            reply(err)
                        })
                    } else {
                        reply('Foto Scene Nya')
                    }
                break
    case 'randomnime':
        if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}myinfo untuk mengecek limit`)
        limitAdd(sender, limit)
            reply(mess.wait)
            fetch('https://raw.githubusercontent.com/pajaar/grabbed-results/master/pajaar-2020-gambar-anime.txt')
            .then(res => res.text())
            .then(body => {
            let tod = body.split("\n");
            let pjr = tod[Math.floor(Math.random() * tod.length)];
            imageToBase64(pjr)
            .then((response) => {
            media =  Buffer.from(response, 'base64');
            conn.sendMessage(from,media,image,{quoted:mek,caption:'NIH'})
            }
            )
            .catch((error) => {
            console.log(error);
            }
            )
            });
            break
    case 'waifu':
    case 'neko':
    case 'megumin':
    case 'shinobu':
        if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}myinfo untuk mengecek limit`)
        limitAdd(sender, limit)
                    try {
                        axios.get(`https://waifu.pics/api/sfw/${command}`).then((res)=>{
                        imageToBase64(res.data.url)
                        .then((response) => {
                        var ifu = Buffer.from(response, 'base64');
                    conn.sendMessage(from, ifu, image, {quoted: mek})
                    })})
                    } catch (e) {
                        console.log(`Error :`, color(e,'red'))
                        reply('Error!')
                    }
            break
    case 'cuddle':
    case 'slap':
    case 'baka':
    case 'kiss':
    case 'hug':
    case 'feed':
    case 'smug':
    case 'poke':
        if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}myinfo untuk mengecek limit`)
        limitAdd(sender, limit)
                    //nyr = await getBuffer(`https://zenzapi.xyz/api/anime/sfw/${command}?apikey=${apikey}`)
                    nyr = `https://zenzapi.xyz/api/anime/sfw/${command}?apikey=${apikey}`
                    //sendMediaURL(from, nyr)
                    sendStickerFromUrl(from,nyr)
                    break
     case 'cosplay':
        if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}myinfo untuk mengecek limit`)
        limitAdd(sender, limit)
                    nyr = await getBuffer(`https://zenzapi.xyz/api/random/cosplay?apikey=${apikey}`)
                    conn.sendMessage(from, nyr, image, {quoted: mek})
                    break
     case 'wpnime':
        if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}myinfo untuk mengecek limit`)
        limitAdd(sender, limit)
                    nyr = await getBuffer(`https://zenzapi.xyz/api/anime/sfw/wallpaper?apikey=${apikey}`)
                    conn.sendMessage(from, nyr, image, {quoted: mek})
                    break
    case 'loli':
        if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}myinfo untuk mengecek limit`)
        limitAdd(sender, limit)
                    ga = fs.readFileSync('./media/addons/loli.mp3');
                    let wipu = `https://zenzapi.xyz/api/random/loli?apikey=${apikey}`
                    //fs.writeFileSync(`./${sender}.jpeg`, await getBuffer(wipu))
                    buttons = [{buttonId: `${prefix + command}`,buttonText:{displayText: `➡️Next`},type:1}]
                    //imageMsg = ( await conn.prepareMessage(from, {url:`https://zenzapi.xyz/api/random/loli?apikey=${apikey}`}), 'imageMessage', {thumbnail: Buffer.alloc(0)})).message.imageMessage
                    imageMsg = (await conn.prepareMessageMedia({url:wipu},'imageMessage',{thumbnail:Buffer.alloc(0)})).imageMessage
                    buttonsMessage = {footerText:'Jangan Lupa Donasi Ya Bantu Support', imageMessage: imageMsg,
                    contentText:`Klik Next Untuk Gambar Selanjutnya`,buttons,headerType:4}
                    prep = await conn.prepareMessageFromContent(from,{buttonsMessage},{})
                    conn.relayWAMessage(prep)
                    conn.sendMessage(from, ga, audio, { mimetype: 'audio/mp4', ptt: true })
                    break
    case 'otakudesusearch':
        if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}myinfo untuk mengecek limit`)
        limitAdd(sender, limit)
                    if (args.length == 0) return reply(`Example: ${prefix + command} Gotoubun No Hanayome`)
                    query = args.join(" ")
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/otakudesusearch?apikey=HafzzYourBaka&query=${query}`)
                    get_result = get_result.result
                    ini_txt = `Title : ${get_result.title}\n`
                    ini_txt += `Japanese : ${get_result.japanese}\n`
                    ini_txt += `Judul : ${get_result.judul}\n`
                    ini_txt += `Type : ${get_result.type}\n`
                    ini_txt += `Episode : ${get_result.episodes}\n`
                    ini_txt += `Aired : ${get_result.aired}\n`
                    ini_txt += `Producers : ${get_result.producers}\n`
                    ini_txt += `Genre : ${get_result.genres}\n`
                    ini_txt += `Duration : ${get_result.duration}\n`
                    ini_txt += `Studios : ${get_result.status}\n`
                    ini_txt += `Rating : ${get_result.rating}\n`
                    ini_txt += `Credit : ${get_result.credit}\n`
                    get_link = get_result.link_dl
                    for (var x in get_link) {
                        ini_txt += `\n\n*${get_link[x].title}*\n`
                        for (var y in get_link[x].link_dl) {
                            ini_info = get_link[x].link_dl[y]
                            ini_txt += `\n\`\`\`Reso : \`\`\`${ini_info.reso}\n`
                            ini_txt += `\`\`\`Size : \`\`\`${ini_info.size}\n`
                            ini_txt += `\`\`\`Link : \`\`\`\n`
                            down_link = ini_info.link_dl
                            for (var z in down_link) {
                                ini_txt += `${z} - ${down_link[z]}\n`
                            }
                        }
                    }
                    reply(ini_txt)
                    break
//------------------< Islami >-------------------
                case 'listsurah':
                    if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}myinfo untuk mengecek limit`)
                    limitAdd(sender, limit)
                    conn.sendMessage(from,listsurah(),text,{quoted:freply})
                    break
                case 'alquran':
                    if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}myinfo untuk mengecek limit`)
                    limitAdd(sender, limit)
                    if (args.length < 1) return reply(`Example: ${prefix + command}No Surah`)
                    quran = await hx.surah(`${args[0]}`)
                    ini_txt = `No Surah. ${args[0]}\n\n`
                    for (var x of quran) {
                        arab = x.arab
                        //nomor = x.ayat
                        latin = x.latin
                        indo = x.indo
                        ini_txt += `${arab}\n${latin}\n${indo}\n\n`
                    }
                    ini_txt = ini_txt.replace(/<u>/g, "").replace(/<\/u>/g, "")
                    ini_txt = ini_txt.replace(/<strong>/g, "").replace(/<\/strong>/g, "")
                    ini_txt = ini_txt.replace(/<u>/g, "").replace(/<\/u>/g, "")
                    reply(ini_txt)
                    break
                case 'alquranaudio':
                    if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}myinfo untuk mengecek limit`)
                    limitAdd(sender, limit)
                    if (args.length == 0) return reply(`Example: ${prefix + command}No Surah`)
                    quranaudio = await hx.surah(`${args[0]}`)
                    ini_buffer = await getBuffer(quranaudio.audio)
                    await conn.sendMessage(from, ini_buffer, audio, { quoted: mek, mimetype: Mimetype.mp4Audio })
                    break
                case 'asmaulhusna':
                    if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}myinfo untuk mengecek limit`)
                    limitAdd(sender, limit)
                    get_result = await fetchJson(`https://zenzapi.xyz/api/islami/asmaulhusna?apikey=${apikey}`)
                    get_result = get_result.result
                    ini_txt = `No : ${get_result.index}\n`
                    ini_txt += `Latin: ${get_result.latin}\n`
                    ini_txt += `Arab : ${get_result.ar}\n`
                    ini_txt += `Indonesia : ${get_result.id}\n`
                    ini_txt += `English : ${get_result.en}`
                    reply(ini_txt)
                    break
                case 'kisahnabi':
                    if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}myinfo untuk mengecek limit`)
                    limitAdd(sender, limit)
                    if (args.length == 0) return reply(`Example: ${prefix + command} Muhammad`)
                    query = args.join(" ")
                    get_result = await fetchJson(`https://zenzapi.xyz/api/kisahnabi/${query}?apikey=${apikey}`)
                    get_result = get_result.result
                    ini_txt = `Name : ${get_result.name}\n`
                    ini_txt += `Lahir : ${get_result.thn_kelahiran}\n`
                    ini_txt += `Umur : ${get_result.age}\n`
                    ini_txt += `Tempat : ${get_result.place}\n`
                    ini_txt += `Story : \n${get_result.story}`
                    reply(ini_txt)
                    break
                case 'jadwalsholat':
                    if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}myinfo untuk mengecek limit`)
                    limitAdd(sender, limit)
                    if (args.length == 0) return reply(`Example: ${prefix + command} Bandung`)
                    daerah = args.join(" ")
                    get_result = await fetchJson(`https://zenzapi.xyz/api/jadwalshalat?kota=${daerah}&apikey=${apikey}`)
                    get_result = get_result.result
                    ini_txt = `Wilayah : ${daerah}\n`
                    ini_txt += `Tanggal : ${get_result.date.gregorian}\n`
                    ini_txt += `Imsak : ${get_result.times.Imsak}\n`
                    ini_txt += `Terbit : ${get_result.times.Sunrise}\n`
                    ini_txt += `Dzuhur : ${get_result.times.Dhuhr}\n`
                    ini_txt += `Ashar : ${get_result.times.Asr}\n`
                    ini_txt += `Maghrib : ${get_result.times.Maghrib}\n`
                    ini_txt += `Isya : ${get_result.times.Isha}`
                    reply(ini_txt)
                    break
//------------------< Owner >-------------------
    case 'setreply':
    case 'setfake':
        if (!isOwner) return reply(mess.only.owner)
            if (!q) return fakegroup(mess.wrongFormat)
            fake = q
            fakegroup(`Success Change Fake Conversation : ${q}`)
            break
    case 'setfakeimg':
        if (!isOwner) return reply(mess.only.owner)
            if ((isMedia && !mek.message.videoMessage || isQuotedImage || isQuotedSticker) && args.length == 0) {
            boij = isQuotedImage || isQuotedSticker ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
            delb = await conn.downloadMediaMessage(boij)
            fs.writeFileSync(`./src/fake.jpeg`, delb)
            fakegroup('Sukses')
            } else {
            reply(`Send image with caption ${prefix}setfakeimg`)
            }
            break
    case 'setfloc':
        if (!isOwner) return reply(mess.only.owner)
            if ((isMedia && !mek.message.videoMessage || isQuotedImage || isQuotedSticker) && args.length == 0) {
            boij = isQuotedImage || isQuotedSticker ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
            delb = await conn.downloadMediaMessage(boij)
            fs.writeFileSync(`./src/loc.jpeg`, delb)
            fakegroup('Sukses')
            } else {
            reply(`Send image with caption ${prefix}setfloc`)
            }
            break
    case 'setthumb':
        if (!isOwner) return reply(mess.only.owner)
            if ((isMedia && !mek.message.videoMessage || isQuotedImage || isQuotedSticker) && args.length == 0) {
            boij = isQuotedImage || isQuotedSticker ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
            delb = await conn.downloadMediaMessage(boij)
            fs.writeFileSync(`./src/thumb.jpeg`, delb)
            fakestatus('Success')
            } else {
            reply(`send image with caption ${prefix}sethumb`)
            }
            break
    case 'join':
        if (!isPremium) return reply(mess.only.prem)
           if (!q) return reply('error su')
                if (!isUrl(args[0]) && !args[0].includes('https://chat.whatsapp.com/')) return reply('Linknya Invalid ')
                link = args[0].replace('https://chat.whatsapp.com/','')
                conn.acceptInvite(link)
                .then((res) => reply(jsonformat(res)))
                .catch((err) => reply(jsonformat(err)))
        break
    case 'get':
        if (!isOwner) return reply(mess.only.owner)
            if(!q) return reply('link?')
            fetch(`${args[0]}`).then(res => res.text())
            .then(bu =>{
            fakestatus(bu)
            })
            break
    case 'settarget':
        if (!isOwner) return reply(mess.only.owner)
            if(!q) return reply(`${prefix}settarget 628xxxxx`)
            targetpc = args[0]
            fakegroup(`Success change target fitnahpc : ${targetpc}`)
            break
    
    case 'take':
    case 'colong':
        if (!isOwner) return reply(mess.only.owner)
            if (!isQuotedSticker) return reply('Only Stiker')
            const encmediia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
            const meidia = await conn.downloadAndSaveMediaMessage(encmediia, `./src/stickers/${sender}`)
            exec(`webpmux -set exif ./src/stickers/data.exif ./src/stickers/${sender}.webp -o ./src/stickers/${sender}.webp`, async (error) => {
                if (error) return reply(mess.error.api)
                conn.sendMessage(from, fs.readFileSync(`./src/stickers/${sender}.webp`), sticker, {quoted: mek})
                fs.unlinkSync(meidia)
                })
                break
    
    case 'upswteks':
        if (!isOwner) return reply(mess.only.owner)
            if (!q) return fakestatus('Insert teks!')
            conn.sendMessage('status@broadcast', `${q}`, extendedText)
            fakegroup(`Success Up story with teks ${q}`)
            break
    case 'upswimage':
        if (!isOwner) return reply(mess.only.owner)
            if (isQuotedImage) {
            const swsw = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
            cihcih = await conn.downloadMediaMessage(swsw)
            conn.sendMessage('status@broadcast', cihcih, image, { caption: `${q}` })
            bur = `Success Upload Story Image with Caption: ${q}`
            conn.sendMessage(from, bur, text, { quoted: mek })
            } else {
            fakestatus('Reply image!')
            }
            break
    case 'upswvideo':
        if (!isOwner) return reply(mess.only.owner)
            if (isQuotedVideo) {
            const swsw = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
            cihcih = await conn.downloadMediaMessage(swsw)
            conn.sendMessage('status@broadcast', cihcih, video, { caption: `${q}` })
            bur = `Success Upload Story Video with Caption: ${q}`
            conn.sendMessage(from, bur, text, { quoted: mek })
            } else {
            fakestatus('reply the video!')
            }
            break
    case 'hidetag':
        if (!isGroupAdmins && !isOwner)return reply(mess.only.admin)
            if (!isGroup) return reply(mess.only.group)
            var value = args.join(' ')
            var group = await conn.groupMetadata(from)
            var member = group['participants']
            var mem = []
            member.map(async adm => {
            mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
            })
            var optionshidetag = {
            text: value,
            contextInfo: { mentionedJid: mem },
            quoted: mek
            }
            conn.sendMessage(from, optionshidetag, text)
            break
    case 'test':
            run = process.uptime()
            teks = `${kyun(run)}`
            fakegroup(teks)
            break
    case 'speed':
    case 'ping':
            const timestamp = speed();
            const latensi = speed() - timestamp
            exec(`neofetch --stdout`, (error, stdout, stderr) => {
            const child = stdout.toString('utf-8')
            const teks = child.replace(/Memory:/, "Ram:")
            const pingnya = `*${teks}Speed: ${latensi.toFixed(4)} Second*`
            fakegroup(pingnya)
            })
            break
    case 'inspect':
            try {
            if (!isUrl(args[0]) && !args[0].includes('whatsapp.com')) return reply(mess.Iv)
            if (!q) return reply('Insert Group Link !')
            cos = args[0]
            var net = cos.split('https://chat.whatsapp.com/')[1]
            if (!net) return reply('make sure that link https://whatsapp.com/')
            jids = []
            let { id, owner, subject, subjectOwner, desc, descId, participants, size, descOwner, descTime, creation} = await conn.query({
            json: ["query", "invite",net],
            expect200:true })
            let par = `*Id* : ${id}
${owner ? `*Owner* : @${owner.split('@')[0]}` : '*Owner* : -'}
*Name of Group* : ${subject}
*Group created date* : ${formatDate(creation * 1000)}
*Member Length* : ${size}
${desc ? `*Desc* : ${desc}` : '*Desc* : nothing'}
*Id desc* : ${descId}
${descOwner ? `*Desc modified by* : @${descOwner.split('@')[0]}` : '*Desc modified by* : -'}\n*Date* : ${descTime ? `${formatDate(descTime * 1000)}` : '-'}\n\n*Saved Contacts*\n`
           for ( let y of participants) {
             par += `> @${y.id.split('@')[0]}\n*Admin* : ${y.isAdmin ? 'Yes' : 'No'}\n`
             jids.push(`${y.id.replace(/@c.us/g,'@s.whatsapp.net')}`)
             }
             jids.push(`${owner ? `${owner.replace(/@c.us/g,'@s.whatsapp.net')}` : '-'}`)
             jids.push(`${descOwner ? `${descOwner.replace(/@c.us/g,'@s.whatsapp.net')}` : '-'}`)
             conn.sendMessage(from,par,text,{quoted:mek,contextInfo:{mentionedJid:jids}})
             } catch {
             reply('Link error')
             }
             break
    case 'getgrup': case 'listgrup': case 'getg':
            if (!isOwner) return reply(mess.only.owner) 
            //const ingfo = await getGroup(totalchat)
            //let txt = `Ingfo grup\nJumlah Grup: ${ingfo.length}\n\n`
            //for (let i = 0; i < ingfo.length; i++){
            //        txt += `Nama grup : ${ingfo[i].subject}\nID grup : ${ingfo[i].id}\nDibuat : ${moment(`${ingfo[i].creation}` * 1000).tz('Asia/Jakarta').format('DD/MM/YYYY HH:mm:ss')}\nJumlah Peserta : ${ingfo[i].participants.length}\n\n`
            //}
            let txt = conn.chats.array.filter(v => v.jid.endsWith('g.us')).map(v => `${v.name}\nID : ${v.jid}\nStatus : ${v.read_only ? 'Left' : 'Join'}\nPesan Unread : ${v.count}\nPesan Terakhir : ${formatDate(v.t*1000)}`).join`\n\n`
            fakegroup(`List Grup\n\n`+txt)
            break
    case 'leavegc':
            if (!isOwner) return reply(mess.only.owner) 
            if (!q) return reply(`Penggunaan : ${command} id grup`)
            setTimeout(() => {
                    conn.groupLeave(q)
                    .then((res) => reply(jsonformat(res)))
                    .catch((err) => reply(jsonformat(err)))
                    }, 2000)
            setTimeout(() => {
                    conn.updatePresence(q, Presence.composing)
                    sendMess(q,'Aku pamit Kawan:)')
                    }, 0)
            break
    case 'exif':
            if (!isOwner) return reply(mess.only.owner) 
            if (args.length < 1) return reply(from, `Penggunaan ${prefix}exif nama|author`)
                if (!arg.split('|')) return reply(from, `Penggunaan ${prefix}exif nama|author`)
                exif.create(arg.split('|')[0], arg.split('|')[1])
                fakestatus('_Berhasil_')
                break
    case 'shutdown':
            if (!isOwner) return reply(mess.only.owner)
                fakestatus('_GOODBYE_')
                await sleep(5000)
                conn.close()
            break
    case 'restart':
            if (!isOwner) return reply(mess.only.owner) 
                    exec(`node core`)
                fakegroup('_Restart Bot Sukses_')
            break
    case 'setppbot':
                conn.updatePresence(from, Presence.composing)
                if (!isQuotedImage) return reply(`Kirim gambar dengan caption ${prefix}setbotpp atau tag gambar yang sudah dikirim`)
                    if (!isOwner) return reply(mess.only.owner) 
                    enmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
                    media = await conn.downloadAndSaveMediaMessage(enmedia)
                    await conn.updateProfilePicture(botNumber, media)
                    reply('Makasih profil barunya😗')
            break
    case 'readall':
                    if (!isOwner) return reply(mess.only.owner) 
                    var chats = await conn.chats.all()
                    chats.map( async ({ jid }) => {
                          await conn.chatRead(jid)
                    })
                    rdl = `Berhasil membaca ${chats.length} Chat !`
                    await conn.sendMessage(from, rdl, MessageType.text, {quoted: mek})
                    console.log(chats.length)
            break
    case 'setbio':
                    if (!isOwner) return reply(mess.only.owner) 
                    iyek = body.slice(8)
                    conn.setStatus(`${iyek}`)
                    fakegroup(`Status BOT berhasil diperbarui menjadi :\n*[ ${iyek} ]*`)
            break
    case 'clearall':
                    if (!isOwner) return reply(mess.only.owner) 
                    anu = await conn.chats.all()
                    conn.setMaxListeners(25)
                    for (let _ of anu) {
                        conn.deleteChat(_.jid)
                    }
                    fakestatus("SELESAI")
            break
    case 'bc':
    case 'broadcast':
                    conn.updatePresence(from, Presence.composing)
                    if (!isOwner) return reply(mess.only.owner) 
                    if (args.length < 1) return reply('.......')
                    anu = await conn.chats.all()
                    if (isMedia && !mek.message.videoMessage || isQuotedImage) {
                        const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
                        buff = await conn.downloadMediaMessage(encmedia)
                        for (let _ of anu) {
                            conn.sendMessage(_.jid, buff, image, { caption: `*「 ${botName} BROADCAST 」*\n\n${body.slice(4)}` })
                        }
                        reply('')
                    } else {
                        for (let _ of anu) {
                            sendMess(_.jid, `*「 ${botName} BROADCAST 」*\n\n${body.slice(4)}`)
                        }
                        reply('*「 SUKSES BOSKU 」*')
                    }
            break
//------------------< Limit >-------------------
            case 'reset':
                    if (!isOwner) return reply(mess.only.owner) 
                    if (args.length < 1) return reply(`untuk mereset limit : ${prefix}reset limit\nuntuk mereset glimit : ${prefix}reset glimit`)
                    var ngonsol = []
                    if (args[0] === 'limit') {
                        rest = limit.indexOf([])
                        limit.splice(rest)
                        fs.writeFileSync('./database/limit.json', JSON.stringify(ngonsol))
                        fakestatus(`LIMIT BERHASIL DI RESET BOS`)
                    } else if (args[0] === 'glimit') {
                        rest = glimit.indexOf([])
                        glimit.splice(rest)
                        fs.writeFileSync('./database/glimit.json', JSON.stringify(ngonsol))
                        fakestatus(`GLIMIT BERHASIL DI RESET BOS`)
                    }
                    break
//------------------< SCMD >-------------------
case 'addcmd': 
case 'setcmd':
    if (!isOwner) return reply(mess.only.owner) 
    if (isQuotedSticker) {
    if (!q) return reply(`Penggunaan : ${command} cmdnya dan tag stickernya`)
    var kodenya = mek.message.extendedTextMessage.contextInfo.quotedMessage.stickerMessage.fileSha256.toString('base64')
    addCmd(kodenya, q)
    reply("Beres")
    } else {
    reply('tag stickenya')
    }
break
// Del Cmd ( MyMans APIs & Rashid )
case 'delcmd':
    if (!isOwner) return reply(mess.only.owner) 
    if (!isQuotedSticker) return reply(`Penggunaan : ${command} tagsticker`)
    var kodenya = mek.message.extendedTextMessage.contextInfo.quotedMessage.stickerMessage.fileSha256.toString('base64')
    scommand.splice(getCommandPosition(kodenya), 1)
    fs.writeFileSync('./database/scommand.json', JSON.stringify(scommand))
    reply("Done Bwang")
break
// List Cmd ( MyMans APIs & Rashid )
case 'listcmd':
    let teksnyee = `\`\`\`「 LIST STICKER CMD 」\`\`\``
    let cemde = [];
    for (let i of scommand) {
    cemde.push(i.id)
    teksnyee += `\n\n*•> ID :* ${i.id}\n*•> Cmd :* ${i.chats}`
    }
    reply(teksnyee)
break
//------------------< BAN >-------------------(mentions[0], args[3], ban)
            case 'ban':
                if (!isOwner) return reply(mess.only.owner) 
                if (args[0] === 'add') {
                    
                    addBanned(args[1] + '@s.whatsapp.net', args[2], ban)
                    reply(`Sukses`)        
                                             
                } else if (args[0] === 'del'){
                
                    unBanned(args[1] + '@s.whatsapp.net', ban)
                    reply('Sukses') 
                    
                } else {
                    reply(`Kirim perintah ${prefix}ban add/del @tag orang yang ingin di ban) masa_ban`)
                }
                break
            case 'listblock':
            case 'listban':
            case 'banlist':
                let txtx = `╭───「 *Total Banned : ${ban.length}* 」\n│\n`
                let menx = [];
                for (let i of ban){
                    menx.push(i.id)
                    txtx += `├≽ *ID :* @${i.id.split("@")[0]}\n`
                    if (i.expired === 'PERMANENT'){
                        let cekvip = 'PERMANENT'
                        txtx += `├≽ *Expire :* PERMANENT\n│\n`
                    } else {
                        let cekvip = ms(i.expired - Date.now())
                        txtx += `├≽ *Expire :* ${cekvip.days} day(s) ${cekvip.hours} hour(s) ${cekvip.minutes} minute(s) ${cekvip.seconds} second(s)\n│\n`
                    }
                 }
                 txtx += '│\n│\n├───「 *Nomor Di Blokir* 」\n│\n'
                    for (let block of blocked) {
                        menx.push(block)
                        txtx += `├≽ @${block.split('@')[0]}\n`
                    }
                    txtx += `╰───「 *Total : ${blocked.length}* 」\n\n`
                mentions(txtx, menx, true)
                break
            case 'unblock':
                if (!isOwner) return reply(mess.only.owner) 
                if (!q) return reply('Cari apa?')
                await conn.blockUser(q + '@c.us', "remove")
                break

//------------------< Premium >-------------------
            case 'premium': 
                    if (!isOwner) return reply(mess.only.owner)
                    if (args[0] === 'add') {
                    if (mek.message.extendedTextMessage != undefined) {
                    smentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
                    _prem.addPremiumUser(smentioned[0], args[2], premium)
                    reply(`*「 PREMIUM ADDED 」*\n\n➸ *ID*: ${smentioned[0]}\n➸ *Expired*: ${ms(toMs(args[2])).days} day(s) ${ms(toMs(args[2])).hours} hour(s) ${ms(toMs(args[2])).minutes} minute(s)`)                                        
                    } else {                                              
                    _prem.addPremiumUser(args[1] + '@s.whatsapp.net', args[2], premium)
                    reply(`*「 PREMIUM ADDED 」*\n\n➸ *ID*: ${args[1]}@s.whatsapp.net\n➸ *Expired*: ${ms(toMs(args[2])).days} day(s) ${ms(toMs(args[2])).hours} hour(s) ${ms(toMs(args[2])).minutes} minute(s)`)
                    }
                    } else if (args[0] === 'del') {
                    if (mek.message.extendedTextMessage != undefined) {
                    smentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
                    premium.splice(_prem.getPremiumPosition(smentioned[0], premium), 1)
                    fs.writeFileSync('./database/premium.json', JSON.stringify(premium))
                    reply('Sukses')
                    } else {
                    premium.splice(_prem.getPremiumPosition(args[1] + '@s.whatsapp.net', premium), 1)
                    fs.writeFileSync('./database/premium.json', JSON.stringify(premium))
                    reply('Sukses')
                    }
                    } else {
                    reply(`wrongFormat`)
                    }
                break
                case 'premiumcheck':
                case 'cekpremium': 
                    const cekExp = ms(await _prem.getPremiumExpired(sender, premium) - Date.now())
                    reply(`*「 PREMIUM EXPIRE 」*\n\n➸ *ID*: ${sender}\n➸ *Premium left*: ${cekExp.days} day(s) ${cekExp.hours} hour(s) ${cekExp.minutes} minute(s)`)
                break
                case 'premiumlist':
                case 'listpremium':          
                    let lost = `「 *PREMIUM USER LIST* 」\n\n`
                    let men = [];
                    for (let i of premium){
                    men.push(i.id)
                    const checkExp = ms(i.expired - Date.now())
                    lost += `➸ *ID :* @${i.id.split("@")[0]}\n➸ *Expired*: ${checkExp.days} day(s) ${checkExp.hours} hour(s) ${checkExp.minutes} minute(s)\n\n`
                    }
                    mentions(lost, men, true)
                break
             break
default:
            if (budy.toLowerCase() == 'p') {
                reply(`Yang Sopan Nii Nii🥰`)
            }
            if (budy.toLowerCase() == 'ayane') {
                nii = fs.readFileSync('./media/addons/niinii.mp3');
                conn.sendMessage(from, nii, audio, { mimetype: 'audio/mp4', ptt: true })
                //reply(`Ya,ayane Hadir`)
            }
            if (budy.toLowerCase() == 'assalamualaikum') {
                let son = fs.readFileSync('./media/addons/waalaikumsalam.mp3')
                conn.sendMessage(from, son, audio, { quoted: mek, ptt: true })
            }
    /*--------------------[ Tictactoe Game Function ]--------------------*/
const cmde = budy.toLowerCase().split(" ")[0] || "";
let arrNum = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
     if (fs.existsSync(`./lib/tictactoe/db/${from}.json`)) {
          const boardnow = setGame(`${from}`);
          if (budy == "Cex") return reply("why");
          if (
               budy.toLowerCase() == "y" ||
               budy.toLowerCase() == "yes" ||
               budy.toLowerCase() == "ya"
          ) {
               if (boardnow.O == sender.replace("@s.whatsapp.net", "")) {
                    if (boardnow.status)
                         return reply(`Game telah dimulai sebelumnya!`);
                    const matrix = boardnow._matrix;
                    boardnow.status = true;
                    fs.writeFileSync(
                         `./lib/tictactoe/db/${from}.json`,
                         JSON.stringify(boardnow, null, 2)
                    );
                    const chatAccept = `*🎮 Tictactoe Game 🎳*
                    
❌ : @${boardnow.X}
⭕ : @${boardnow.O}
               
Giliran : @${boardnow.turn == "X" ? boardnow.X : boardnow.O}

     ${matrix[0][0]}  ${matrix[0][1]}  ${matrix[0][2]}
     ${matrix[1][0]}  ${matrix[1][1]}  ${matrix[1][2]}
     ${matrix[2][0]}  ${matrix[2][1]}  ${matrix[2][2]}

`;
                    conn.sendMessage(from, chatAccept, MessageType.text, {
                         quoted: mek,
                         contextInfo: {
                              mentionedJid: [
                                   boardnow.X + "@s.whatsapp.net",
                                   boardnow.O + "@s.whatsapp.net",
                              ],
                         },
                    });
               } else {
                    conn.sendMessage(
                         from,
                         `Opsi ini hanya untuk @${boardnow.O} !`,
                         MessageType.text, {
                         quoted: mek,
                         contextInfo: {
                              mentionedJid: [boardnow.O + "@s.whatsapp.net"],
                         },
                    }
                    );
               }
          } else if (
               budy.toLowerCase() == "n" ||
               budy.toLowerCase() == "no" ||
               budy.toLowerCase() == "tidak"
          ) {
               if (boardnow.O == sender.replace("@s.whatsapp.net", "")) {
                    if (boardnow.status)
                         return reply(`Game telah dimulai sebelumnya!`);
                    fs.unlinkSync(`./lib/tictactoe/db/${from}.json`);
                    conn.sendMessage(
                         from,
                         `Sayangnya tantangan @${boardnow.X} ditolak ❌😕`,
                         MessageType.text, {
                         quoted: mek,
                         contextInfo: {
                              mentionedJid: [boardnow.X + "@s.whatsapp.net"],
                         },
                    }
                    );
               } else {
                    conn.sendMessage(
                         from,
                         `Opsi ini hanya untuk @${boardnow.O} !`,
                         MessageType.text, {
                         quoted: mek,
                         contextInfo: {
                              mentionedJid: [boardnow.O + "@s.whatsapp.net"],
                         },
                    }
                    );
               }
          }
     }

     if (arrNum.includes(cmde)) {
          const boardnow = setGame(`${from}`);
          if (!boardnow.status) return reply(`Sepertinya lawan anda belum menerima / menolak tantangan.`)
          if (
               (boardnow.turn == "X" ? boardnow.X : boardnow.O) !=
               sender.replace("@s.whatsapp.net", "")
          )
               return;
          const moving = validmove(Number(budy), `${from}`);
          const matrix = moving._matrix;
          if (moving.isWin) {
               if (moving.winner == "SERI") {
                    const chatEqual = `*🎮 Tictactoe Game 🎳*
          
Game berakhir seri 😐
`;
                    reply(chatEqual);
                    fs.unlinkSync(`./lib/tictactoe/db/${from}.json`);
                    return;
               }
               const winnerJID = moving.winner == "O" ? moving.O : moving.X;
               const looseJID = moving.winner == "O" ? moving.X : moving.O;
               const limWin = Math.floor(Math.random() * 20) + 10;
               const limLoose = Math.floor(Math.random() * 10) + 5;
               const chatWon = `*🎮 Tictactoe Game 🎳*
          
Telah dimenangkan oleh @${winnerJID} 😎👑
Memenangkan 1000 Saldo
`;
            //    giftLimit(winnerJID + "@s.whatsapp.net", limWin);
            addBalance(winnerJID + "@s.whatsapp.net", 1000, balance)
            //    pushLimit(looseJID + "@s.whatsapp.net", limLoose);
               conn.sendMessage(from, chatWon, MessageType.text, {
                    quoted: mek,
                    contextInfo: {
                         mentionedJid: [
                              moving.winner == "O" ?
                                   moving.O + "@s.whatsapp.net" :
                                   moving.X + "@s.whatsapp.net",
                         ],
                    },
               });
               fs.unlinkSync(`./lib/tictactoe/db/${from}.json`);
          } else {
               const chatMove = `*🎮 Tictactoe Game 🎳*
          
❌ : @${moving.X}
⭕ : @${moving.O}

Giliran : @${moving.turn == "X" ? moving.X : moving.O}


     ${matrix[0][0]}  ${matrix[0][1]}  ${matrix[0][2]}
     ${matrix[1][0]}  ${matrix[1][1]}  ${matrix[1][2]}
     ${matrix[2][0]}  ${matrix[2][1]}  ${matrix[2][2]}


`;
               conn.sendMessage(from, chatMove, MessageType.text, {
                    quoted: mek,
                    contextInfo: {
                         mentionedJid: [
                              moving.X + "@s.whatsapp.net",
                              moving.O + "@s.whatsapp.net",
                         ],
                    },
               });
          }
     }
if (budy.startsWith('$')){
    if (!isOwner) return reply('ANDA SIAPA?')
    const cmd = budy.slice(1)
    exec(cmd, (err, stdout) => {
        if (err) return fakereply(`root@Yuki:~ ${err}`)
            if (stdout) {
                fakereply(stdout)
            }
        })
    }
if (budy.startsWith('>')){
    if (!isOwner) return reply('ANDA SIAPA?')
        try {
            return fakereply(JSON.stringify(eval(budy.slice(1)),null,'\t'))
        } catch(err) {
        e = String(err)
        reply(e)
        }
    }
if (budy.startsWith('=>')){
    if (!isOwner) return reply('ANDA SIAPA?')
        var konsol = budy.slice(3)
        Return = (sul) => {
        var sat = JSON.stringify(sul, null, 2)
        bang = util.format(sat)
        if (sat == undefined){
        bang = util.format(sul)
        }
            return reply(bang)
        }
        try {
            reply(util.format(eval(`;(async () => { ${konsol} })()`)))
            console.log('\x1b[1;37m>', '[', '\x1b[1;32mEXEC\x1b[1;37m', ']', time, color(">", "green"), 'from', color(sender.split('@')[0]), 'args :', color(args.length))
        } catch(e){
        reply(String(e))
    }
}

}
if (!isGroup && !isCmd) {
                        await conn.updatePresence(from, Presence.composing)
                        simi = await fetchJson(`https://api.simsimi.net/v2/?text=${budy}&lc=id`)
                        reply(simi.success)
}
if (isGroup && budy != undefined) {
    } else {
    //console.log(color('[TEXT]', 'red'), 'PERSONAL', color(sender.split('@')[0]))
    }
    } catch (e) {
    //e = String(e)
    //if (!e.includes("this.isZero")) {
    //console.log('Message : %s', color(e, 'green'))
        //}
     console.log(e)
    }
}





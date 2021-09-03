const fs = require("fs")
const {  WAConnection,       MessageType,        Presence,        MessageOptions,        Mimetype,WALocationMessage,WA_DEFAULT_EPHEMERAL,ProxyAgent,waChatKey,   mentionedJid } = require("@adiwajshing/baileys")
const { getBuffer, getBuff, h2k, generateMessageID, getGroupAdmins, getRandom, banner, start, info, success, close } = require('../lib/functions')
let setting = JSON.parse(fs.readFileSync('./main/config.json'));
module.exports = conn = async (conn, mek) => {
        const welkom = JSON.parse(fs.readFileSync('./database/welkom.json'))
        const isWelcome = welkom.includes(mek.jid)
        if (!isWelcome) return
        try {
            mem = mek.participants[0]
                console.log(mek)
                try {
                pp_user = await conn.getProfilePicture(mem)
                } catch (e) {
                pp_user = 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60'
            }
                try {
                pp_grup = await conn.getProfilePicture(mek.jid)
                } catch (e) {
                pp_grup = 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60'
            }
             if (mek.action == 'add') {
                mdata = await conn.groupMetadata(mek.jid)
                memeg = mdata.participants.length
                num = mek.participants[0]
                anu_user = conn.contacts[mem]
                thu = await conn.getStatus(mek.participants[0], MessageType.text)  
                teks = `Halo @${num.split('@')[0]}!\nWelcome in ${mdata.subject}\n\nNama : \nUmur :\nGender : \nAsal :\n\nSemoga Betah Dan Jangan Lupa Intro`
                //buff = await getBuffer(`https://api.lolhuman.xyz/api/base/welcome?apikey=${apikey}&img1=${pp_user}&img2=${pp_grup}&background=https://i.ibb.co/vqXkRvj/wp1945363-sinon-wallpapers.png&username=Member&member=${memeg}&groupname= ${encodeURI(mdata.subject)}`)
                buff = await getBuffer(`https://justnino.herokuapp.com/api/welcome?name=Member&picurl=${pp_user}&bgurl=https://telegra.ph/file/9d52a3ebdebc8c49940be.jpg&mem=${memeg}&gcname=${encodeURI(mdata.subject)}`)
                conn.sendMessage(mdata.id, buff, MessageType.image, {caption: teks, contextInfo: {"mentionedJid": [num]}})
        }
            if (mek.action == 'remove') {
                mdata = await conn.groupMetadata(mek.jid)
                num = mek.participants[0]
                anu_user = conn.contacts[mem]
                memeg = mdata.participants.length
                out = `Lah Kok Out? \nSayonara @${num.split('@')[0]} we will miss you`
                //buff = await getBuffer(`https://api.lolhuman.xyz/api/base/leave?apikey=${apikey}&img1=${pp_user}&img2=${pp_grup}&background=https://i.ibb.co/vqXkRvj/wp1945363-sinon-wallpapers.png&username=Member&member=${memeg}&groupname= ${encodeURI(mdata.subject)}`)
                buff = await getBuffer(`https://justnino.herokuapp.com/api/goodbye?name=Member&picurl=${pp_user}&bgurl=https://telegra.ph/file/9d52a3ebdebc8c49940be.jpg&mem=${memeg}&gcname=${encodeURI(mdata.subject)}`)
                conn.sendMessage(mdata.id, buff, MessageType.image, {caption: out, contextInfo: {"mentionedJid": [num]}})
            }
        } catch (e) {
            console.log('Error :', e)
        }
}
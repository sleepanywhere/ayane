const {
    WAConnection,
    MessageType,
    Presence,
    Mimetype,
    GroupSettingChange
} = require('@adiwajshing/baileys')
//=================================================//
const fs = require('fs')
const { banner, start, success } = require('./lib/functions')
const { color } = require('./lib/color')
let blocked = [];
//=================================================//
require('./main/index.js','./main/help.js')
nocache('./main/index.js', module => console.log(`${module} Pembaruan Selesai!`))
nocache('./main/help.js', module => console.log(`${module} Pembaruan Selesai!`))
//=================================================//

const starts = async (yuki = new WAConnection()) => {
    yuki.logger.level = 'warn'
    yuki.version = [2,2119,6]
    console.log(banner.string)
    yuki.browserDescription = [`YUKKKIII`, "Firefox", "3.0.0"];
    yuki.on('qr', () => {
        console.log(color('[','white'), color('!','red'), color(']','white'), color('Scan QR'))
    })

    fs.existsSync('./yuki.json') && yuki.loadAuthInfo('./yuki.json')
    yuki.on('connecting', () => {
        start('2', 'Menghubungkan...')
    })
    yuki.on('open', () => {
        success('2', 'Tersambung')
    })
    await yuki.connect({timeoutMs: 30*1000})
        fs.writeFileSync('./yuki.json', JSON.stringify(yuki.base64EncodedAuthInfo(), null, '\t'))

    yuki.on('ws-close', () => {
    console.log('Koneksi terputus, mencoba menghubungkan kembali..')
    })
//=================================================//
yuki.on('CB:action,,battery', json => {
	const a = json[2][0][1].value
	const b = json[2][0][1].live
	baterai.baterai = a
	baterai.cas = b
})
yuki.on('CB:Blocklist', json => {
    console.log(json)
    if (blocked.length > 2) return
    for (let i of json[1].blocklist) {
    blocked.push(i.replace('c.us','s.whatsapp.net'))
    }
})
yuki.on('CB:action,,call', async json => {
    const callerid = json[2][0][1].from;
    yuki.sendMessage(callerid, `Maaf bot tidak menerima call`, MessageType.text)
    await yuki.blockUser(callerid, "add")
})
yuki.on('group-update', async (anu) => {
    metdata = await yuki.groupMetadata(anu.jid)
    console.log(anu)
    if(!anu.desc == ''){
    tag = anu.descOwner.split('@')[0] + '@s.whatsapp.net'
    teks = `Deskripsi Group telah diubah oleh Admin @${anu.descOwner.split('@')[0]}\n•Deskripsi Baru : ${anu.desc}`
    yuki.sendMessage(metdata.id, teks, MessageType.text, {contextInfo: {"mentionedJid": [tag]}})
    console.log(`- [ Group Description Change ] - In ${metdata.subject}`)}
})
yuki.on('group-participants-update', async(chat) => {
        require('./main/grup.js')(yuki, chat)
})
yuki.on('chat-update', async (message) => {
        require('./main/index.js')(yuki, message, baterai, blocked)
})

}

/**
 * Uncache if there is file change
 * @param {string} module Module name or path
 * @param {function} cb <optional>
 */
function nocache(module, cb = () => { }) {
    console.log('Module', `'${module}'`, 'File Dipantau')
    fs.watchFile(require.resolve(module), async () => {
        await uncache(require.resolve(module))
        cb(module)
    })
}

/**
 * Uncache a module
 * @param {string} module Module name or path
 */
function uncache(module = '.') {
    return new Promise((resolve, reject) => {
        try {
            delete require.cache[require.resolve(module)]
            resolve()
        } catch (e) {
            reject(e)
        }
    })
}

starts()

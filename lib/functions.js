const fetch = require('node-fetch')
const axios = require('axios')
const cfonts = require('cfonts')
const spin = require('spinnies')
const Crypto = require('crypto')
const FormData = require('form-data')
const fs = require("fs")
let setting = JSON.parse(fs.readFileSync('./main/config.json'));
let {
    botName
} = setting
const wait = async (media) => new Promise(async (resolve, reject) => {
    //const attachmentData = `data:image/jpeg;base64,${media.toString('base64')}`
    ///const response = await fetch("https://api.trace.moe/search",{method: "POST",body: JSON.stringify({ image: attachmentData }),headers: { "Content-Type": "application/json" }});
    const response = await fetch(
    `https://api.trace.moe/search?anilistInfo&url=${media}`
    ).then((response) => response.json());
    //console.log(response)
    if (!response.result) reject(`Gambar tidak ditemukan!`);
    const result = response.result[0]
    try {
        const { id, idMal, synonyms, isAdult } = result.anilist
        const { native, romaji, english } = result.anilist.title
        const { filename, episode, similarity, video } = result
        let belief = () => similarity < 0.89 ? "Saya memiliki keyakinan rendah dalam hal ini : " : ""
        let ecch = () => isAdult ? "Iya" : "Tidak"
        resolve({video: await getBuffer(`${video}`), teks: `${belief()}
~> Ecchi : *${ecch()}*
~> Judul Jepang : *${native}*
~> Ejaan Judul : *${romaji}*
~> Judul Inggris : *${english}*
~> Episode : *${episode}*
~> FileName  : *${filename}*`});
    } catch (e) {
        console.log(e)
        reject(`Saya tidak tau ini anime apa`)
    }
})

const h2k = (number) => {
    var SI_POSTFIXES = ["", " K", " M", " G", " T", " P", " E"]
    var tier = Math.log10(Math.abs(number)) / 3 | 0
    if(tier == 0) return number
    var postfix = SI_POSTFIXES[tier]
    var scale = Math.pow(10, tier * 3)
    var scaled = number / scale
    var formatted = scaled.toFixed(1) + ''
    if (/\.0$/.test(formatted))
      formatted = formatted.substr(0, formatted.length - 2)
    return formatted + postfix
}

const getBuffer = async (url, options) => {
	try {
		options ? options : {}
		const res = await axios({
			method: "get",
			url,
			headers: {
				'DNT': 1,
				'Upgrade-Insecure-Request': 1
			},
			...options,
			responseType: 'arraybuffer'
		})
		return res.data
	} catch (e) {
		console.log(`Error : ${e}`)
	}
}

const getBuff = async(url) => {
    const res = await fetch(url, { headers: { 'User-Agent': 'Mozilla/5.0 (Linux; Android 10; SM-A205U) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/89.0.4389.105 Mobile Safari/537.36.' }, method: 'GET' })
    if (!res.ok) throw "Error while getting buffer"
    return res.buffer()
}

const randomBytes = (length) => {
    return Crypto.randomBytes(length)
}

const generateMessageID = () => {
    return randomBytes(10).toString('hex').toUpperCase()
}

const getGroupAdmins = (participants) => {
	admins = []
	for (let i of participants) {
		i.isAdmin ? admins.push(i.jid) : ''
	}
	return admins
}

const getRandom = (ext) => {
	return `${Math.floor(Math.random() * 10000)}${ext}`
}

const spinner = {
  "interval": 120,
  "frames": [
    "🕐",
    "🕑",
    "🕒",
    "🕓",
    "🕔",
    "🕕",
    "🕖",
    "🕗",
    "🕘",
    "🕙",
    "🕚",
    "🕛"
  ]}

        let globalSpinner;


        const getGlobalSpinner = (disableSpins = false) => {
        if(!globalSpinner) globalSpinner = new spin({ color: 'blue', succeedColor: 'green', spinner, disableSpins});
        return globalSpinner;
        }

        spins = getGlobalSpinner(false)

        const start = (id, text) => {
	       spins.add(id, {text: text})
		/*setTimeout(() => {
			spins.succeed('load-spin', {text: 'Suksess'})
		}, Number(wait) * 1000)*/
	       }
        const info = (id, text) => {
	       spins.update(id, {text: text})
        }
        const success = (id, text) => {
	       spins.succeed(id, {text: text})

	       }

        const close = (id, text) => {
	       spins.fail(id, {text: text})
        }

        const banner = cfonts.render((`${botName}`), {
            font: 'block',
            color: 'system',
            align: 'left',
            gradient: ["blue","white"],
            lineHeight: 2
        });



module.exports = { wait, getBuffer, getBuff, h2k, generateMessageID, getGroupAdmins, getRandom, start, info, success, banner, close }

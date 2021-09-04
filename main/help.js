
exports.menu = (prefix, botName) => {
    return `╭───「 *LIST MENU* 」
│
├≽ ${prefix}animemenu
├≽ ${prefix}gamemenu
├≽ ${prefix}islamimenu
├≽ ${prefix}downloadmenu
├≽ ${prefix}nsfwmenu
├≽ ${prefix}othermenu
│
├≽ ${prefix}economymenu
├≽ ${prefix}toolsmenu
├≽ ${prefix}groupmenu
├≽ ${prefix}ownermenu
│
├≽ ${prefix}basecamp
├≽ ${prefix}afk [Alasan]
├≽ ${prefix}bug [LAPOR]
├≽ ${prefix}request [Request]
│
├ Masuk Grup ${botName}
├ Untuk Info Baru 
├ Dengan Perintah ${prefix}basecamp
│
├───「 *ABOUT* 」
├≽ ${prefix}creator
├≽ ${prefix}botinfo
╰───「 *${botName}* 」`
}

exports.gamemenu = (prefix, botName) => {
    return `╭───「 *GAME MENU* 」
│
├≽ ${prefix}suit
├≽ ${prefix}tebakgambar
├≽ ${prefix}family100
├≽ ${prefix}casino
├≽ ${prefix}tictactoe
├≽ ${prefix}delttc [menghapus tictactoe]
│
╰───「 *${botName}* 」`
}

exports.myinfo = (botName, saldo, pushname, isOwner, isPremium, sisalimit, limitCount, glimit, gcount, expired, time, wita, wit) => {
    return `╭───「 *YOUR INFO* 」
│
├≽ *Name* : *${pushname}*
├≽ *Status* : *${isOwner ? 'OWNER' : isPremium ? 'Premium' : 'Gratisan'}*
├≽ *Saldo* : *${saldo}*
├≽ *Limit* : *${isPremium ? 'Unlimited' : `${sisalimit}/${limitCount}`}*
├≽ *Limit Game* : *${isOwner ? 'Unlimited' : `${glimit}/${gcount}`}*
├≽ *Expired Prem : ${isOwner ? '-' : isPremium ? expired : 'Not Premium'}*
│
├≽ *WIB* : *${time}*
├≽ *WITA* : *${wita}*
├≽ *WIT* : *${wit}*
│
├───「 *INFO📣* 」
│
├ *Ingin Limit Tak Terbatas?*
├ *Donasi Seiklasnya Untuk Mendapatkan*
├ *Premium User Dengan Akses Fitur Khusus*
├ *Hubungi Owner / Creator*
│
╰───「 *${botName}* 」`
}

exports.animemenu = (prefix, botName) => {
    return `╭───「 *ANIME MENU* 」
│
├≽ ${prefix}wait
├≽ ${prefix}wpnime
│
├≽ ${prefix}cosplay
├≽ ${prefix}randomnime
├≽ ${prefix}waifu
├≽ ${prefix}neko
├≽ ${prefix}loli
├≽ ${prefix}megumin
├≽ ${prefix}shinobu
├≽ ${prefix}slap
├≽ ${prefix}baka
├≽ ${prefix}kiss
├≽ ${prefix}hug
├≽ ${prefix}feed
├≽ ${prefix}smug
├≽ ${prefix}poke
│
╰───「 *${botName}* 」`
}

exports.islammenu = (prefix, botName) => {
    return `╭───「 *ISLAMI MENU* 」
│
├≽ ${prefix}listsurah
├≽ ${prefix}asmaulhusna
├≽ ${prefix}alquran no_surah
├≽ ${prefix}alquranaudio no_surah
├≽ ${prefix}alquranaudio no_surah/no_ayat
├≽ ${prefix}alquranaudio no_surah/no_ayat1-no_ayat2
├≽ ${prefix}kisahnabi nama_nabi
├≽ ${prefix}jadwalsholat
│
╰───「 *${botName}* 」`
}

exports.dlmenu = (prefix, botName) => {
    return `╭───「 *DOWNLOAD MENU* 」
│
├≽ ${prefix}ytsearch
├≽ ${prefix}play
├≽ ${prefix}ytdl
├≽ ${prefix}ytmp3
├≽ ${prefix}ytmp4
├≽ ${prefix}tiktok
├≽ ${prefix}fbdl
├≽ ${prefix}igdl
├≽ ${prefix}twdl
├≽ ${prefix}mediafire
├≽ ${prefix}zippyshare
├≽ ${prefix}googledrive
│
╰───「 *${botName}* 」`
}


exports.nsfwmenu = (prefix, botName) => {
    return `╭───「 *NSFW MENU* 」
│
├≽ ${prefix}nhentai
├≽ ${prefix}xnxx
├≽ ${prefix}konachan
│
├≽ ${prefix}nsfwwaifu
├≽ ${prefix}nsfwneko
├≽ ${prefix}trap
├≽ ${prefix}blowjob
│
╰───「 *${botName}* 」`
}

exports.othermenu = (prefix, botName) => {
    return `╭───「 *OTHER MENU* 」
│
│
├───「 *JAWAB* 」
│
├≽ ${prefix}seberapagay
├≽ ${prefix}bisakah
├≽ ${prefix}kapankah
├≽ ${prefix}apakah
├≽ ${prefix}rate
├≽ ${prefix}hobby
├≽ ${prefix}jadian
│
├───「 *GAMBAR & AUDIO* 」
│
├≽ ${prefix}wasted
├≽ ${prefix}tts
├≽ ${prefix}getpic
├≽ ${prefix}attp
├≽ ${prefix}pinterest
│
├───「 *MAKER* 」
│
├≽ ${prefix}quotes
├≽ ${prefix}glitch
├≽ ${prefix}pornhub
│
├───「 *SEARCH* 」
│
├≽ ${prefix}githubserch
├≽ ${prefix}lirik
├≽ ${prefix}kbbi
├≽ ${prefix}wiki
├≽ ${prefix}brainly
│
╰───「 *${botName}* 」`
}

exports.kerjamenu = (prefix, botName) => {
    return `╭───「 *ECONOMY MENU* 」
│
├≽ ${prefix}myinfo
├≽ ${prefix}buylimit
├≽ ${prefix}buyglimit
├≽ ${prefix}cekpremium
├≽ ${prefix}listpremium
│
╰───「 *${botName}* 」`
}

exports.toolsmenu = (prefix, botName) => {
    return `╭───「 *TOOLS MENU* 」
│
├≽ ${prefix}sticker
├≽ ${prefix}stickerwm
├≽ ${prefix}ocr
├≽ ${prefix}tomp3
├≽ ${prefix}tomp4
├≽ ${prefix}toimg
├≽ ${prefix}semoji
├≽ ${prefix}fast
├≽ ${prefix}slow
├≽ ${prefix}reverse
├≽ ${prefix}nightcore
├≽ ${prefix}tempo
│
╰───「 *${botName}* 」`
}

exports.grupmenu = (prefix, botName) => {
    return `╭───「 *GROUP MENU* 」
│
├≽ ${prefix}mute
├≽ ${prefix}unmute
├≽ ${prefix}sider
├≽ ${prefix}infogrup
├≽ ${prefix}kick
├≽ ${prefix}setname
├≽ ${prefix}setdesc
├≽ ${prefix}promote
├≽ ${prefix}demote
├≽ ${prefix}leave
├≽ ${prefix}delete
├≽ ${prefix}kontag
├≽ ${prefix}sticktag
├≽ ${prefix}totag
├≽ ${prefix}fitnah
├≽ ${prefix}fitnahpc
├≽ ${prefix}kontak
├≽ ${prefix}hidetag
├≽ ${prefix}tagall
│
├≽ ${prefix}voting
├≽ ${prefix}delvote
│
├≽ ${prefix}antilink on/off
├≽ ${prefix}grup buka/tutup
├≽ ${prefix}welcome on/off
│
╰───「 *${botName}* 」`
}

exports.stats = (users,botName,wa_version,baterai,ram,os_version,device_manufacturer,giid,totalchat,latensii,runtime) => {
    return `╭───「 *BOT STATS* 」
│
├≽ Total User : ${users.length}
├≽ Group Chat : ${giid.length}
├≽ Personal Chat : ${totalchat.length - giid.length}
├≽ Total Chat : ${totalchat.length}
│
├≽ Speed : ${latensii.toFixed(4)} Second
├≽ Runtime : ${runtime}
│
├───「 STATS PONSEL 」
│
├≽ WaVersion : ${wa_version}
├≽ Baterai : ${baterai.baterai}% ≽ Charge : ${baterai.cas === 'true' ? 'Ya' : 'Tidak'}
├≽ RAM : ${ram}
├≽ Versi OS : ${os_version}
├≽ Merk HP : ${device_manufacturer}
│
╰───「 *${botName}* 」`
}

exports.ownermenu = (prefix, botName) => {
    return `╭───「 *MENU BOSS!!* 」
│
├≽ > (EVAL)
├≽ $ (TERM)
├≽ ${prefix}setfake
├≽ ${prefix}setfakeimg
├≽ ${prefix}setthumb
├≽ ${prefix}listgrup
├≽ ${prefix}leavegc
├≽ ${prefix}restart
├≽ ${prefix}shutdown
├≽ ${prefix}setppbot
├≽ ${prefix}setbio
├≽ ${prefix}clearall
├≽ ${prefix}readall
├≽ ${prefix}join
├≽ ${prefix}get
├≽ ${prefix}exif
├≽ ${prefix}settarget
├≽ ${prefix}take
├≽ ${prefix}upswtext
├≽ ${prefix}upswimg
├≽ ${prefix}upswvideo
├≽ ${prefix}inspect
├≽ ${prefix}premium add/del
├≽ ${prefix}addcmd
├≽ ${prefix}delcmd
├≽ ${prefix}listcmd
├≽ ${prefix}reset limit/glimit
├≽ ${prefix}listbanned
├≽ ${prefix}ban
├≽ ${prefix}unban
│
├──「 *ABOUT* 」
├≽ ${prefix}runtime
├≽ ${prefix}ping
├≽ ${prefix}info
│
╰───「 *${botName}* 」`
}

exports.donasi = (prefix, botName) => {
    return `╭───「 *DONASI* 」
│
├≽ SAWERIA : https://saweria.co/Yukkkiii
├≽ DANA : 085156173340
├≽ PULSA : 085156173340
├≽ GOPAY : 089626692456
│
├──「 *INFO* 」
│
│Apabila Berdonasi Bukti 
│Bisa Di Kirim Kepada Owner 🎏
│
╰───「 *${botName}* 」`
}

exports.sumber = (botName) => {
    return `╭───「 *SUMBER* 」
│
├≽ Yuki : https://github.com/yukisubagja
├≽ Franky : https://github.com/Franky404
├≽ Nino : https://github.com/Nino-chan02
├≽ XinzTeam : https://github.com/Xinz-Team
├≽ Mans : -
├≽ Hexa : https://github.com/Hexagonz
│
╰───「 *${botName}* 」`
}

const
	{
		WAConnection,
		MessageType,
		Presence,
		MessageOptions,
		Mimetype,
		WALocationMessage,
		WA_MESSAGE_STUB_TYPES,
		WA_DEFAULT_EPHEMERAL,
		ReconnectMode,
		ProxyAgent,
		GroupSettingChange,
		waChatKey,
		mentionedJid,
		processTime,
	} = require("@adiwajshing/baileys")
	
const { pesane } = require('./lib/msgcustom')	
const { getJson, getBuffer } = require("./lib/getdata");
const moment = require("moment-timezone")
const chalk = require('chalk')
const fs = require('fs-extra')
const { spawn, exec, execSync, spawnSync } = require("child_process")
const speed = require('performance-now')
const request = require("request");
const axios = require('axios')
const FormData = require('form-data')
const { Readable, Duplex } = require('stream');
const path = require('path')


// COLOR
const color = (text, color) => {
    return !color ? chalk.green(text) : chalk.keyword(color)(text)
}

///Function
selfna = true
fakenya = 'FAZONE'
apikey = 'GaluhTbit'
var AFK = {
    isAfk: false,
    reason: false,
    lastseen: 0
};
//

	
module.exports = fzn = async (fzn, msg) => {
	try {
        if (!msg.hasNewMessage) return
        msg = msg.messages.all()[0]
		if (!msg.message) return
		if (msg.key && msg.key.remoteJid == 'status@broadcast') return
        msg.message = (Object.keys(msg.message)[0] === 'ephemeralMessage') ? msg.message.ephemeralMessage.message : msg.message
        const content = JSON.stringify(msg.message)
		const from = msg.key.remoteJid
		const { text, extendedText, contact, location, liveLocation, image, video, sticker, document, audio, product } = MessageType
		const time = moment.tz('Asia/Jakarta').format('DD/MM HH:mm:ss')
        const type = Object.keys(msg.message)[0]        
        const cmd = (type === 'conversation' && msg.message.conversation) ? msg.message.conversation : (type == 'imageMessage') && msg.message.imageMessage.caption ? msg.message.imageMessage.caption : (type == 'videoMessage') && msg.message.videoMessage.caption ? msg.message.videoMessage.caption : (type == 'extendedTextMessage') && msg.message.extendedTextMessage.text ? msg.message.extendedTextMessage.text : ''.slice(1).trim().split(/ +/).shift().toLowerCase()	
		const fazone = new pesane(fzn, msg)
		const prefix = /^[°•π÷×¶∆£¢€¥®™=|~!#$%^&.?/\\©^z+*@,;]/.test(cmd) ? cmd.match(/^[°•π÷×¶∆£¢€¥®™=|~!#$%^&.?/\\©^z+*,;]/gi) : '-'          	
        body = (type === 'conversation' && msg.message.conversation.startsWith(prefix)) ? msg.message.conversation : (type == 'imageMessage') && msg.message.imageMessage.caption.startsWith(prefix) ? msg.message.imageMessage.caption : (type == 'videoMessage') && msg.message.videoMessage.caption.startsWith(prefix) ? msg.message.videoMessage.caption : (type == 'extendedTextMessage') && msg.message.extendedTextMessage.text.startsWith(prefix) ? msg.message.extendedTextMessage.text : ''
		budy = (type === 'conversation') ? msg.message.conversation : (type === 'extendedTextMessage') ? msg.message.extendedTextMessage.text : ''
		const command = body.slice(1).trim().split(/ +/).shift().toLowerCase()		
		const args = body.trim().split(/ +/).slice(1)
		const isCmd = body.startsWith(prefix)
		const q = args.join(' ')
		const botNumber = fzn.user.jid
		const isGroup = from.endsWith('@g.us')
		let sender = isGroup ? msg.participant : msg.key.remoteJid
		const totalchat = await fzn.chats.all()
		const groupMetadata = isGroup ? await fzn.groupMetadata(from) : ''
		const groupName = isGroup ? groupMetadata.subject : ''
		const groupId = isGroup ? groupMetadata.jid : ''
		const groupMembers = isGroup ? groupMetadata.participants : ''
		const groupDesc = isGroup ? groupMetadata.desc : ''
		const groupOwner = isGroup ? groupMetadata.owner : ''
		const getGroupAdmins = (participants) => {
			admins = []
			for (let i of participants) {
			i.isAdmin ? admins.push(i.jid) : ''
			}
			return admins
		}
		const groupAdmins = isGroup ? getGroupAdmins(groupMembers) : ''
		const isBotGroupAdmins = groupAdmins.includes(botNumber) || false
		const isGroupAdmins = groupAdmins.includes(sender) || false
        const myname = msg.key.fromMe ? fzn.user.jid : fzn.contacts[sender] || { notify: jid.replace(/@.+/, '') }
        const pushname = msg.key.fromMe ? fzn.user.name : myname.notify || myname.vname || myname.name || '-'
		const isMedia = (type === 'imageMessage' || type === 'videoMessage')
		const isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage')
		const isQuotedPesan = type === 'extendedTextMessage' && content.includes('conversation')
		const isQuotedMessage = type === 'extendedTextMessage'
		const isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')
		const isQuotedAudio = type === 'extendedTextMessage' && content.includes('audioMessage')
		const isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage')
		const detstick = type === 'stickerMessage' && msg.message.stickerMessage.contextInfo != null ? msg.message.stickerMessage.contextInfo.participant || "" : ""
		function waktune(seconds){
		function pad(s){
			return (s < 10 ? '0' : '') + s;
		}
		var hours = Math.floor(seconds / (60*60));
		var minutes = Math.floor(seconds % (60*60) / 60);
		var seconds = Math.floor(seconds % 60);
		return `${pad(hours)} Jam ${pad(minutes)} Menit ${pad(seconds)} Detik`
		}
		const waktos = process.uptime()
		const cts = waktune(waktos) 
		function secondsToHms(d) {
			d = Number(d);
			var h = Math.floor(d / 3600);
			var m = Math.floor(d % 3600 / 60);
			var s = Math.floor(d % 3600 % 60);

			var hDisplay = h > 0 ? h + (h == 1 ? " " + " Jam" + ", " : " " + " Jam" + ", ") : "";
			var mDisplay = m > 0 ? m + (m == 1 ? " " + " Menit" + ", " : " " + " Menit" + ", ") : "";
			var sDisplay = s > 0 ? s + (s == 1 ? " " + " Detik" : " " + " Detik") : "";
			return hDisplay + mDisplay + sDisplay; 
		}		
		
		const reply = async (teknya) => {
			return fazone.sendMessage(teknya, MessageType.text, {quoted: fazone.data})
		}	 
		
		warn = {
			errorne: {
				wFormat: 'Format Salah!!!, Silahkan Cek Kembali...',
				onGroup: 'Khusus Di Grup!!!',
				onSelf: 'Only Self!!!'
			},
			mess: {
				wait: 'Tunggu Sebentar!'
			}
		}
		
		if(!msg.key.fromMe){						
			if (AFK.isAfk && ((!from.includes('-')) || (from.includes('-') && 
				(( from !== false && fazone.mention.length !== 0 ) || fazone.reply_message !== false)))) {
				if (from.includes('-') && (fazone.mention !== false && fazone.mention.length !== 0)) {
					fazone.mention.map(async (jidna) => {
						//console.log(jidna)
						if (fzn.user.jid.split('@')[0] === jidna.split('@')[0]) {
							//pushnamenya = fzn.contacts[nameditag] != undefined ? fzn.contacts[nameditag].vname || fzn.contacts[nameditag].notify : undefined
							fzn.sendMessage(from,`*「 AFK MODE 」*\n\nMaaf Kak, Orangnya Sedang Tidak Membuka Whatsapp 🙏` + 
							(AFK.reason !== false ? '\n' + '➸ *Alasan*: ' + AFK.reason : '') + 
							(AFK.lastseen !== 0 ? '\n' + '➸ *Sejak*: ' + secondsToHms(Math.round((new Date()).getTime() / 1000) - AFK.lastseen) + ' Yang Lalu' : ''), MessageType.text, {quoted: fazone.data});
						}
					})
				} else if (from.includes('-') && fazone.reply_message !== false) {
					if (fazone.reply_message.jid.split('@')[0] === fzn.user.jid.split('@')[0]) {
						//pushnamenya = fzn.contacts[namedireply] != undefined ? fzn.contacts[namedireply].vname || fzn.contacts[namedireply].notify : undefined
						fzn.sendMessage(from,`*「 AFK MODE 」*\n\nMaaf Kak, Orangnya Sedang Tidak Membuka Whatsapp 🙏` + 
							(AFK.reason !== false ? '\n' + '➸ *Alasan*: ' + AFK.reason : '') + 
							(AFK.lastseen !== 0 ? '\n' + '➸ *Sejak*: ' + secondsToHms(Math.round((new Date()).getTime() / 1000) - AFK.lastseen) + ' Yang Lalu' : ''), MessageType.text, {quoted: fazone.data});
					}
				} else if(detstick.split('@')[0] === fzn.user.jid.split('@')[0]) {
						fzn.sendMessage(from,`*「 AFK MODE 」*\n\nMaaf Kak, Orangnya Sedang Tidak Membuka Whatsapp 🙏` + 
							(AFK.reason !== false ? '\n' + '➸ *Alasan*: ' + AFK.reason : '') + 
							(AFK.lastseen !== 0 ? '\n' + '➸ *Sejak*: ' + secondsToHms(Math.round((new Date()).getTime() / 1000) - AFK.lastseen) + ' Yang Lalu' : ''), MessageType.text, {quoted: fazone.data});
				} else if(!isGroup){
						//pushnamenya = fzn.contacts[from] != undefined ? fzn.contacts[from].vname || fzn.contacts[from].notify : undefined
						fzn.sendMessage(from,`*「 AFK MODE 」*\n\nMaaf Kak ${pushnamenya(sender)}, Orangnya Sedang Tidak Membuka Whatsapp 🙏` + 
							(AFK.reason !== false ? '\n' + '➸ *Alasan*: ' + AFK.reason : '') + 
							(AFK.lastseen !== 0 ? '\n' + '➸ *Sejak*: ' + secondsToHms(Math.round((new Date()).getTime() / 1000) - AFK.lastseen) + ' Yang Lalu' : ''), MessageType.text, {quoted: fazone.data});
				}
			}
		}		
		
		if (msg.key.fromMe) {
			if (AFK.isAfk && !fazone.id.startsWith('3EB0')) {
				AFK.lastseen = 0;
				AFK.reason = false;
				AFK.isAfk = false;
				Kirim.FakeStatus(from,'*Saya Tidak Lagi Offline!*',fakenya);
			}
		}
		
		if (!isGroup && isCmd) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;32mEXEC\x1b[1;37m]', time, color(command), 'from', color(sender.split('@')[0]), 'args :', color(args.length))
     	if (isCmd && isGroup) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;32mEXEC\x1b[1;37m]', time, color(command), 'from', color(sender.split('@')[0]), 'in', color(groupName), 'args :', color(args.length))
		if(!msg.key.fromMe && selfna) return
		fs.readdirSync('./plugins').forEach(plugin => {
            if(path.extname(plugin).toLowerCase() == '.js') {
                eval(fs.readFileSync('./plugins/' + plugin,  'utf8'));
            }
        });
		switch (command) {
case 'menu':
case 'help':
const mode = selfna ? 'SELF': 'PUBLIC'
var menu = `◪ *INFO*
❏ Prefix: 「MULTI」
❏ Nama : ${pushname}
❏ Mode : ${mode}
❏ Runtime : ${cts}

*❏ Owner*
*| ◪ ${prefix}setfake [ query ]*
*| ◪ ${prefix}upswteks [ query ]*
*| ◪ ${prefix}upswimage [ query ]* 
*| ◪ ${prefix}upswvideo [ query ]* 
*| ◪ ${prefix}runtime* 
*| ◪ ${prefix}ping* 
*| ◪ ${prefix}afk* 
*| ◪ ${prefix}self* 
*| ◪ ${prefix}public* 

*❏ Sticker*
*| ◪ ${prefix}sticker [ reply ]*
*| ◪ ${prefix}snobg [ reply ]*
*| ◪ ${prefix}scircle [ reply ]* 

*❏ Downloader*
*| ◪ ${prefix}play [ query ]*
*| ◪ ${prefix}ig [ link ]*
*| ◪ ${prefix}fb [ link ]*

*❏ Group*
*| ◪ ${prefix}hidetag [ query ]*

*❏ Photo Effect*
*| ◪ ${prefix}circle [ reply foto ]*
*| ◪ ${prefix}amazingtypo [ reply foto ]*
*| ◪ ${prefix}3dblock [ reply foto ]*
*| ◪ ${prefix}flameup [ reply foto ]*
*| ◪ ${prefix}rosepetals [ reply foto ]*
*| ◪ ${prefix}lovelyframe [ reply foto ]*
*| ◪ ${prefix}valentine [ reply foto ]*
*| ◪ ${prefix}pipframe [ reply foto ]*
*| ◪ ${prefix}violetframe [ reply foto ]*
*| ◪ ${prefix}brilliant [ reply foto ]*
*| ◪ ${prefix}beautiful [ reply foto ]*
*| ◪ ${prefix}mintframe [ reply foto ]*

*❏ Other*
*| ◪ ${prefix}sfile [ query ]*
*| ◪ ${prefix}sfiledl [ link ]*
*| ◪ ${prefix}ssweb [ link ]*
`
Kirim.FakeStatus(from, menu, fakenya)
 break
			case 'setfake':
				if(!q) return reply('Masukan Teksnya kak :v')
				fakenya = q
				Kirim.FakeStatus(from, 'Sukses Mengganti Fake: '+ fakenya, fakenya) 
			break	
			case 'runtime':
			case 'test':
				Kirim.FakeGroup(from, cts, fakenya)
            break
			case 'ping':
				const timestamp = speed();
                const latensi = speed() - timestamp 
                child =` \`\`\`Loaded Message\`\`\`             
\`\`\` - [ ${fzn.user.phone.device_manufacturer} ] HANDPHONE\`\`\`
\`\`\` - [ ${fzn.user.phone.wa_version} ] WA Version\`\`\`
\`\`\` - [ Baileys ] Server\`\`\`
\`\`\` - [ ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / 4096 ] RAM\`\`\`
\`\`\`Speed : ${latensi.toFixed(4)} Second\`\`\``
				//console.log(child)
				Kirim.FakeGroup(from, child, fakenya)
            break  
			case 'afk':
				if (!AFK.isAfk) {
				AFK.lastseen = Math.round((new Date()).getTime() / 1000);
					if (args[0] !== '') { AFK.reason = args.join(' '); }
					Kirim.FakeStatus(from,'*Saya Sekarang Offline!*' + (AFK.reason !== false ? ('\n*' + 'Alasan*' +': ' + AFK.reason) : ''),fakenya);
					AFK.isAfk = true;
				}
            break
			case 'self':
			if (!msg.key.fromMe) return
			if(selfna) return Kirim.FakeStatus(from, 'This Is Self!!!', fakenya) 
				selfna = true
				Kirim.FakeStatus(from, 'Mode Self Aktif!!!', fakenya) 
			break
			case 'public':
			if (!msg.key.fromMe) return
			if(!selfna) return Kirim.FakeStatus(from, 'This Is Public!!!', fakenya) 
				selfna = false
				Kirim.FakeStatus(from, 'Mode Public Aktif!!!', fakenya) 
			break
			case 'hidetag':
					if (!msg.key.fromMe) return reply(warn.errorne.onSelf)
					if (!isGroup) return reply(warn.errorne.onGroup)
					var value = q
					var group = await fzn.groupMetadata(from)
					var member = group['participants']
					var mem = []
					member.map( async adm => {
					mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
					})
					var options = {
					text: value,
					contextInfo: { mentionedJid: mem },
					quoted: msg
					}
					fzn.sendMessage(from, options, text)
			break		
			case 'upswteks':
				if (!msg.key.fromMe) return reply(warn.errorne.onSelf)
				if (!q) return Kirim.FakeStatus(from, 'Isi teksnya!', fakenya)
				fzn.sendMessage('status@broadcast', `${q}`, extendedText)
				Kirim.FakeStatus(from, `Sukses Up Story Teks : ${q}`, fakenya)
			break
			case 'upswimage':
				if (!msg.key.fromMe) return reply(warn.errorne.onSelf)
				if (isQuotedImage) {
				const swne = isQuotedImage ? JSON.parse(JSON.stringify(msg).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : msg
				gas = await fzn.downloadMediaMessage(swne)
				fzn.sendMessage('status@broadcast', gas, image, { caption: `${q}` })
				bur = `Sukses Upload Story Image dengan Caption : ${q}`
				fzn.sendMessage(from, bur, text, { quoted: msg })
				} else {
				reply('Format Salah!!!')
				}
            break
			case 'upswvideo':
				if (!msg.key.fromMe) return reply(warn.errorne.onSelf)
				if (isQuotedVideo) {
				const swne = isQuotedVideo ? JSON.parse(JSON.stringify(msg).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : msg
				gas = await fzn.downloadMediaMessage(swne)
				fzn.sendMessage('status@broadcast', gas, video, { caption: `${q}` }) 
				bur = `Sukses Upload Story Video dengan Caption : ${q}`
				fzn.sendMessage(from, bur, text, { quoted: msg })
				} else {
				reply('Format Salah!!!')
				}
            break		
			default:
				if (budy.startsWith('>')){
				try {
				return fzn.sendMessage(from, JSON.stringify(eval(budy.slice(2)),null,'\t'),text, {quoted: msg})
			} catch(err) {
				e = String(err)
				reply(e)
				}
			}
		}
	} catch (e) {
    e = String(e)
    if (!e.includes("this.isZero")) {
	console.log('Message : %s' + e)
        }
	// console.log(e)
	}
}

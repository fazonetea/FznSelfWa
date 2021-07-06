(async () => {
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
*| ◪ ${prefix}sfirewm [ reply ]* 
*| ◪ ${prefix}trigger [ reply ]* 
*| ◪ ${prefix}trigger2 [ reply ]* 
*| ◪ ${prefix}nobg [ reply ]* 
*| ◪ ${prefix}removebg [ reply ]* 
*| ◪ ${prefix}wanted [ reply ]* 
*| ◪ ${prefix}wanted2 [ reply ]* 
*| ◪ ${prefix}wasted [ reply ]* 
*| ◪ ${prefix}rain [ reply ]* 

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

*❏ Text Maker*
*| ◪ ${prefix}cup [ query ]*
*| ◪ ${prefix}cup1 [ query ]*
*| ◪ ${prefix}romance [ query ]*
*| ◪ ${prefix}smoke [ query ]*
*| ◪ ${prefix}burnpaper [ query ]*
*| ◪ ${prefix}lovemessage [ query ]*
*| ◪ ${prefix}undergrass [ query ]*
*| ◪ ${prefix}love [ query ]*
*| ◪ ${prefix}coffe [ query ]*
*| ◪ ${prefix}woodheart [ query ]*
*| ◪ ${prefix}woodenboard [ query ]*
*| ◪ ${prefix}summer3d [ query ]*
*| ◪ ${prefix}wolfmetal [ query ]*
*| ◪ ${prefix}nature3d [ query ]*
*| ◪ ${prefix}underwater [ query ]*
*| ◪ ${prefix}golderrose [ query ]*
*| ◪ ${prefix}summernature [ query ]*
*| ◪ ${prefix}letterleaves [ query ]*
*| ◪ ${prefix}glowingneon [ query ]*
*| ◪ ${prefix}fallleaves [ query ]*
*| ◪ ${prefix}flamming [ query ]*
*| ◪ ${prefix}harrypotter [ query ]*
*| ◪ ${prefix}tahta [ query ]*
*| ◪ ${prefix}carvedwood [ query ]*
*| ◪ ${prefix}arcade8bit [ query ] [ query ]*
*| ◪ ${prefix}battlefield4 [ query ] [ query ]*
*| ◪ ${prefix}pubg [ query ] [ query ]*
*| ◪ ${prefix}wetglass [ query ]*
*| ◪ ${prefix}watercolor [ query ]*
*| ◪ ${prefix}luxurygold [ query ]*
*| ◪ ${prefix}galaxywallpaper [ query ]*
*| ◪ ${prefix}lighttext [ query ]*
*| ◪ ${prefix}beautifulflower [ query ]*
*| ◪ ${prefix}puppycute [ query ]*
*| ◪ ${prefix}royaltext [ query ]*
*| ◪ ${prefix}heartshaped [ query ]*
*| ◪ ${prefix}brithdaycake [ query ]*
*| ◪ ${prefix}galaxystyle [ query ]*
*| ◪ ${prefix}hologram3d [ query ]*
*| ◪ ${prefix}greenneon [ query ]*
*| ◪ ${prefix}glossychrome [ query ]*
*| ◪ ${prefix}greenbush [ query ]*
*| ◪ ${prefix}metallogo [ query ]*
*| ◪ ${prefix}noeltext [ query ]*
*| ◪ ${prefix}glittergold [ query ]*
*| ◪ ${prefix}textcake [ query ]*
*| ◪ ${prefix}starsnight [ query ]*
*| ◪ ${prefix}wooden3d [ query ]*
*| ◪ ${prefix}textbyname [ query ]*
*| ◪ ${prefix}writegalacy [ query ]*
*| ◪ ${prefix}galaxybat [ query ]*
*| ◪ ${prefix}snow3d [ query ]*
*| ◪ ${prefix}birthdayday [ query ]*
*| ◪ ${prefix}goldplaybutton [ query ]*
*| ◪ ${prefix}silverplaybutton [ query ]*
*| ◪ ${prefix}freefire [ query ]*

*❏ Other*
*| ◪ ${prefix}sfile [ query ]*
*| ◪ ${prefix}sfiledl [ link ]*
*| ◪ ${prefix}ssweb [ link ]*
`
Kirim.FakeStatus(from, menu, fakenya)
 break
			case 'setfake':
		if (!msg.key.fromMe) return reply(warn.errorne.onSelf)
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
\`\`\` - [ Baterai ]  ${baterai.battery} ${batrenya}\`\`\`
\`\`\` - [ Powersave ] ${casnya}\`\`\`
\`\`\` - [ Baileys ] Server\`\`\`
\`\`\` - [ ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require('os').totalmem / 1024 / 1024)}MB ] RAM\`\`\`
\`\`\`Speed : ${latensi.toFixed(4)} Second\`\`\``
				//console.log(child)
				Kirim.FakeGroup(from, child, fakenya)
            break  
			case 'afk':
                                if (!msg.key.fromMe) return
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
		case 'clone':
				try{
				if (!msg.key.fromMe) return reply(warn.errorne.onSelf)
				if(!isGroup) return reply(warn.errorne.onGroup)
				if (msg.message.extendedTextMessage === undefined || msg.message.extendedTextMessage === null) return reply('Tag Target Yang Ingin Di Clone!!!')
				mentag = msg.message.extendedTextMessage.contextInfo.mentionedJid[0]
				namanya = fzn.contacts[mentag] != undefined ? fzn.contacts[mentag].vname || fzn.contacts[mentag].notify : undefined			
				resultpp = await fzn.getProfilePicture(mentag)
				bufferna = await getBuffer(resultpp)
				fzn.updateProfilePicture(fzn.user.jid, bufferna)	
				fzn.updateProfileName(namanya)	
				} catch {
				 reply('ppnya gak ada kak!!!')
				}	
			break
			case 'kick':
				if (!isBotGroupAdmins) return reply('Jadikan Aku ADMIN')
				if (!isGroupAdmins) return reply('ONLY ADMIN!!!')
				if(!isGroup) return reply(warn.errorne.onGroup)
				if (fazone.reply_message !== false) {
				reply('Tunggu Sebentar!')
				setTimeout( () => {
			        fzn.sendMessage(from, `Berhasil Telah Mengeluarkan @${fazone.reply_message.data.participant.split('@')[0]}`, text, {quoted: msg, contextInfo: {mentionedJid: [fazone.reply_message.data.participant]}})
		        }, 4000)
				setTimeout( () => {
			        fzn.groupRemove(from, [fazone.reply_message.data.participant]).catch((e)=>{return reply(`*BOT INI HARUS JADI ADMIN*`)})
		        }, 3000)
				}else if(fazone.reply_message === false && fazone.mention !== false){
				if (msg.message.extendedTextMessage === undefined || msg.message.extendedTextMessage === null) return reply('Tag Target Yang Ingin Di Kick')
				mentag = msg.message.extendedTextMessage.contextInfo.mentionedJid[0]
				reply('Tunggu Sebentar!')
				setTimeout( () => {
			        fzn.sendMessage(from, `Berhasil Telah Mengeluarkan @${mentag.split('@')[0]}`, text, {quoted: msg, contextInfo: {mentionedJid: [mentag]}})
		        }, 4000)
				setTimeout( () => {
			        fzn.groupRemove(from, [mentag]).catch((e)=>{return reply(`*BOT INI HARUS JADI ADMIN*`)})
		        }, 3000)
				}else{
					reply('Format Salah!!!, Pastikan tag/reply untuk mengkick!!!')
				}
			break
			case 'exec':
					if (!q) return reply('Kata perintahnya apa?')
					var user = os.userInfo().username;
					exec(q, async (err, stdout, stderr) => {
					if (err) {
						return reply('```' + user + ':~# ' + q + '\n' + err + '```');
					}      
					return reply('```' + user + ':~# ' + q + '\n' + stdout + '```');
					});
				break
			case 'addvn':
		  		if (!isQuotedAudio) return reply('❌ reply audionya om ❌')
         			if (!q) return reply('Teksnya mana kak?')
				reply(warn.mess.wait)
				ekspor = `./src/dbvn/${q}.mp3`
				let pasar = dabes.data.audio[q]
				if(pasar.word === true) return reply('Kata Sudah Terdaftar Didalam Database!!!')
				pasar.output = ekspor
				pasar.word = true
				dabes.save()
				encmedia = JSON.parse(JSON.stringify(msg).replace('quotedM','m')).message.extendedTextMessage.contextInfo
				gass = await  fzn.downloadMediaMessage(encmedia)
				fs.writeFileSync(ekspor, gass)
				Kirim.FakeStatus(from, 'Berhasil menambahkan vn kedalam database dengan kata: ' + q, fakenya)
       			 break
			case 'getvn':
          			if (!q) return reply('Teksnya mana kak?')
				cek = dabes.data.audio
				if (cek[q].output === undefined) return reply('Kata Tidak Ditemukan')
				reply(warn.mess.wait)
				hasil = cek[q].output
				console.log(hasil)
				fzn.sendMessage(from, fs.readFileSync(hasil), audio, {quoted: msg, mimetype: 'audio/mp4', ptt: true})
        		break
			case 'listvn':
         			 let mntul = dabes.data.audio
				 kuy = Object.keys(mntul).map(v => '- ' + v).join('\n').trim()
				 Kirim.FakeStatus(from, 'List vn yang terdaftar di database\n' + kuy, fakenya)
        		break
			case 'delvn':
         			let delvn = dabes.data.audio
				 if (delvn[q].output === undefined) return reply('Kata Tidak Ditemukan')
				 hapus = delvn[q].output
				 fs.unlinkSync(hapus)	 
				 delete delvn[q]
				 dabes.save()
				 Kirim.FakeStatus(from, 'Berhasil menghapus vn di dalam database dengan kata: ' + q, fakenya)
			break
			case 'vn':
				if(!q) return reply('Masukan kata on/off kak :v')
				if((args[0]) === 'on'){
					if(nopref) return reply('vn tanpa prefix sudah aktif kak')
					nopref = true
					Kirim.FakeStatus(from, 'Sukses mengaktifkan vn tanpa prefix', fakenya)
				}else if((args[0]) === 'off'){
					if(!nopref) return reply('vn tanpa prefix sudah tidak aktif kak')
					nopref = false
					Kirim.FakeStatus(from, 'Sukses menonaktifkan vn tanpa prefix', fakenya)
				} else {
					reply('On untuk mengaktifkan, Off untuk menonaktifkan')
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
})();

//move to plugins folder :)

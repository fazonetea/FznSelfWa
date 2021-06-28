(async () => {
			switch(command){
				case 'sfile':	
					if (!q) return reply('Teksnya mana kak?')
					respo = await getJson(`https://fazone-api.herokuapp.com/api/sfile?apikey=${apikey}&search=${q}`)
            				result = respo.result
					let pilem = `*「 SFILE SEARCH 」*\n\n*Hasil Pencarian : ${q}*\n\n─────────────────`
					for (let i = 0; i < result.length; i++) {
						pilem += `\n\nTitle : *${result[i].title}*\nLink : *${result[i].link}*`
					}
					Kirim.FakeStatus(from, pilem, fakenya)
				break	
        case 'sfiledl':
          if (!q) return reply('Urlnya mana kak?')
          req = await getJson(`https://fazone-api.herokuapp.com/api/sfiledl?url=${q}&apikey=${apikey}`)
          titel = req.title
          hasil = req.result
          gas = await getBuffer(hasil)
          fzn.sendMessage(from, gas, MessageType.document, {mimetype: 'application/octet-stream', filename: `${titel}`, quoted: msg})
        break  
        case 'ssweb':
          if (!q) return reply('Urlnya mana kak?')
          req = `https://fazone-api.herokuapp.com/api/ssweb?url=${q}&apikey=${apikey}`
          Kirim.FileDariUrl(from, req, msg, 'Ini kak :v')
        break
	case 'tts':
if (args.length < 1) return fzn.sendMessage(from, `Diperlukan kode bahasa!!, ketik ${prefix}bahasa`, text, {quoted: msg})
				const gtts = require('./lib/gtts')(args[0])
				if (args.length < 2) return fzn.sendMessage(from, 'Mana teks yang ma di jadiin suara? suara setan kah?', text, {quoted: msg})
				dtt = body.slice(8)
				ranm = getRandom('.mp3')
				rano = getRandom('.ogg')
				dtt.length > 300
				? reply('Textnya Kepanjangan Om')
				: gtts.save(ranm, dtt, function() {
				exec(`ffmpeg -i ${ranm} -ar 48000 -vn -c:a libopus ${rano}`, (err) => {
				fs.unlinkSync(ranm)
				buffer = fs.readFileSync(rano)
				if (err) return reply('Error Om')
				fzn.sendMessage(from, buffer, audio, {duration: 9999999, quoted: msg, ptt:true})
				fs.unlinkSync(rano)
				})
				})
				break
			}
			
		})();		
//Other BY Fazone

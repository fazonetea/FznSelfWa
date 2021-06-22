(async () => {
			switch(command){
				case 'play':
					if(!q) return reply('Masukan Teksnya kak :v')
					req = await getJson(`https://fzn-guys.herokuapp.com/api/ytplay2?apikey=gege&judul=${q}`)
					thumb = req.image
					info = `*「 PLAY 」*\n\n➸ *Judul* : ${req.title}\n➸ *Durasi* : ${req.duration}\n➸ *Filesize* : ${req.size}\n➸ *Ext* : MP3\n\n_*Music Sedang Dikirim*_`
					hasil = req.result
					Kirim.FileDariUrl(from, thumb, msg, info)
					Kirim.FileDariUrl(from, hasil, msg)
				break	
				case 'pinterest':
					if(!q) return reply('Masukan Teksnya kak :v')
					req = await getJson(`https://fazone-api.herokuapp.com/api/pinterest?apikey=${apikey}&q=${q}`)
					info = `Ini kak :v`
					hasil = req.result
					rand = hasil[Math.floor(Math.random() * hasil.length)]
					Kirim.FileDariUrl(from, rand, msg, info)
				break	
				case 'image':
					if(!q) return reply('Masukan Teksnya kak :v')
					req = await getJson(`https://fazone-api.herokuapp.com/api/googleimg?apikey=${apikey}&q=${q}`)
					info = `Ini kak :v`
					hasil = req.result
					rand = hasil[Math.floor(Math.random() * hasil.length)]
					Kirim.FileDariUrl(from, rand, msg, info)
				break
				case 'fb':
					try {
						if (!q) return reply('Urlnya mana kak?')
						req = await getJson(`https://fazone-api.herokuapp.com/api/fbdl?url=${q}&apikey=${apikey}`)
						if (req.error) return reply(req.error)
						fzn.sendMessage(from, warn.mess.wait, text, {quoted: msg})
						if (req.kualitasHD) {
							buffer = await getBuffer(req.kualitasHD)
							fzn.sendMessage(from, buffer, video, {mimetype: 'video/mp4', quoted: msg, caption: 'Nih Kak :)'})
							} else if (req.kualitasHD == "") {
							gas = await getBuffer(req.kualitasSD)
							fzn.sendMessage(from, gas, video, {mimetype: 'video/mp4', quoted: msg, caption: 'Nih Kak :)'})
							}
						} catch {
						reply('Mungkin Linknya Tidak Valid Kak :v')
						}
				break		
				case 'ig':
					try {
						if (!q) return reply('Urlnya mana kak?')
						req = await getJson(`https://fzn-guys.herokuapp.com/api/igdl?apikey=gege&url=${q}`)
						cptr = `*IG DOWNLOADER*\n\n*➸ Nama :* ${req.result.fullname}\n*➸ User :* ${req.result.username}\n*➸ Caption :* ${req.result.caption}`
						if (req.error) return reply(req.error)
						fzn.sendMessage(from, warn.mess.wait, text, {quoted: msg})
						Kirim.FileDariUrl(from, req.result.url, msg, cptr)
						} catch {
						reply('Mungkin Linknya Tidak Valid Kak :v')
						}
				break						
			}
			
		})();		
//Media BY Fazone

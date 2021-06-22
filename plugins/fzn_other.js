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
			}
			
		})();		
//Other BY Fazone

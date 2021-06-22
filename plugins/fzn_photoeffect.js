	(async () => {
			switch(command){
				case 'circle':
				case 'amazingtypo':
				case '3dblock':
				case 'flameup':
				case 'lovelyframe':
				case 'rosepetals':
				case 'valentine':
				case 'pipframe':
				case 'violetframe':
				case 'brilliant':
				case 'beautiful':
                    if ((isMedia && !msg.message.videoMessage || isQuotedImage)) {
                        const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(msg).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : msg
                        file_fzn = await fzn.downloadMediaMessage(encmedia);
                        var req = request({
							url: `https://fazone-api.herokuapp.com/api/${command}?apikey=${apikey}`,
							method: 'POST',
                            encoding: "binary"
                        }, async function(error, response, body) {
                            gas = new Buffer.from(body, 'binary')
							fzn.sendMessage(from, gas, MessageType.image, {quoted: msg, caption: 'Ini kak :v'})
                        });
						let form = req.form();
						form.append('img', file_fzn, { filename : 'gas.png' })
                    } else {
                        reply(`Kirim gambar dengan caption ${prefix + command} atau tag gambar yang sudah dikirim`)
                    }
                    break	
				case 'mintframe':
                    if ((isMedia && !msg.message.videoMessage || isQuotedImage)) {
                        const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(msg).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : msg
                        file_fzn = await fzn.downloadMediaMessage(encmedia);
						let form = new FormData
						form.append('img', file_fzn, { filename : 'gas.png' })
						await axios(`https://fazone-api.herokuapp.com/api/photofunia/${command}?apikey=${apikey}`, {
						method: "POST",
						headers:{
							"accept-encoding": "gzip, deflate, br",
							...form.getHeaders(),
							"user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/90.0.4430.212 Safari/537.36"		
						},
						data: form,
						responseType: 'arraybuffer'
					})
					.then(async (gaya) => {
						fzn.sendMessage(from, gaya.data, MessageType.image, {quoted: msg, caption: 'Ini kak :v'})
					})
                    } else {
                        reply(`Kirim gambar dengan caption ${prefix + command} atau tag gambar yang sudah dikirim`)
                    }
                    break		
			}
			
		})();		
//Photo Effect BY Fazone
(async () => {
			switch(command){
				case 'stiker':
					if (isMedia && !msg.message.videoMessage || isQuotedImage){
					const getbuff = isQuotedImage ? JSON.parse(JSON.stringify(msg).replace('quotedM','m')).message.extendedTextMessage.contextInfo : msg
					const dlfile = await fzn.downloadMediaMessage(getbuff)
					const bas64 = `data:image/jpeg;base64,${dlfile.toString('base64')}`
					Kirim.GambarJadiStiker(from, bas64, msg, {author: 'Fazone', pack: 'SELF'})
					} else if ((isMedia && msg.message.videoMessage.seconds < 11 || isQuotedVideo && msg.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.seconds < 11)){
					const getbuff = isQuotedVideo ? JSON.parse(JSON.stringify(msg).replace('quotedM','m')).message.extendedTextMessage.contextInfo : msg
					const dlfile = await fzn.downloadMediaMessage(getbuff)
					const bas64 = `data:video/mp4;base64,${dlfile.toString('base64')}`
					Kirim.VideoJadiStiker(from, bas64, msg, {author: 'Fazone', pack: 'SELF'})	 
					} else {
					reply(`Kirim gambar/video dengan caption ${prefix}sticker atau tag gambar/video yang sudah dikirim\nNote : Durasi video maximal 10 detik`)
					}
				break
				case 'snobg':
                    if ((isMedia && !msg.message.videoMessage || isQuotedImage)) {
                        const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(msg).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : msg
                        file_fzn = await fzn.downloadAndSaveMediaMessage(encmedia);
                        request({
							url: `https://fazone-api.herokuapp.com/api/removebg?apikey=${apikey}`,
							method: 'POST',
							formData: {
								"img": fs.createReadStream(file_fzn),
							},
                            encoding: "binary"
                        }, async function(error, response, body) {
							fs.unlinkSync(file_fzn)
                            gas = new Buffer.from(body, 'binary')
							bas64 = `data:image/jpeg;base64,${gas.toString('base64')}`
							Kirim.GambarJadiStiker(from, bas64, msg, {author: 'Fazone', pack: 'SELF'})
                        });
                    } else {
                        reply(`Kirim gambar dengan caption ${prefix + command} atau tag gambar yang sudah dikirim`)
                    }
                break
				case 'scircle':
                    if ((isMedia && !msg.message.videoMessage || isQuotedImage)) {
                        const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(msg).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : msg
                        file_fzn = await fzn.downloadAndSaveMediaMessage(encmedia);
                        request({
							url: `https://fazone-api.herokuapp.com/api/circle?apikey=${apikey}`,
							method: 'POST',
							formData: {
								"img": fs.createReadStream(file_fzn),
							},
                            encoding: "binary"
                        }, async function(error, response, body) {
							fs.unlinkSync(file_fzn)
                            gas = new Buffer.from(body, 'binary')
							bas64 = `data:image/jpeg;base64,${gas.toString('base64')}`
							Kirim.GambarJadiStiker(from, bas64, msg, {author: 'Fazone', pack: 'SELF'})
                        });
                    } else {
                        reply(`Kirim gambar dengan caption ${prefix + command} atau tag gambar yang sudah dikirim`)
                    }
                break
			}
			
		})();		
//Sticker BY Fazone
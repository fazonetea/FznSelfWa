(async () => {
			switch(command){
				 case 'term': 
case 'exec':
if (!msg.key.fromMe) return reply('*Ente owner?_*')
const cmyd = body.slice(6)
var itsme = `0@s.whatsapp.net`
var split = `*EXECUTOR SELF BOT*`
const term = {
contextInfo: {
participant: itsme,
quotedMessage: {
extendedTextMessage: {
text: split,
}
}
}
}
exec(cmyd, (err, stdout) => {
if (err) return fzn.sendMessage(from, ` ${err}`, text, { quoted: msg })
if (stdout) {
fzn.sendMessage(from, stdout, text, term)
}
})
break
case 'botstat':
 case 'test':
               const { wa_version, mcc, mnc, os_version, device_manufacturer, device_model } = fzn.user.phone
				const u = '```'
                const timestampp = speed();
				const run = process.uptime() 
                const latensii = speed() - timestampp
				  let i = []
				 let giid = []
    for (mem of totalchat){
      i.push(mem.jid)
    }
	 for (id of i){
      if (id && id.includes('g.us')){
        giid.push(id)
      }
    }
                stat = `「 𝙎𝙏𝘼𝙏𝙐𝙎 𝙃𝙋 𝘽𝙊𝙏 」 ${u}
 Versi Whatsapp	: ${wa_version} 
 Ram						: ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require('os').totalmem / 1024 / 1024)}MB 
 Merk Hp				: ${device_manufacturer} 
 Baterai				: ${baterai.battery} ${baterai.isCharge.replace('true','C H A R G I N G').replace('false','N O T  C H A R G I N G')}
 Powersave			: ${baterai.powersave.replace('true','O N').replace('false','O F F')}
 Versi Android	: ${os_version} 
 Model					: ${device_model} 
 Group					: ${giid.length} 
 Chat					: ${totalchat.length - giid.length} 
 Total Chat 		: ${totalchat.length}`
                reply(`${stat}`)
                break	
			}
			
		})();		
//Pro By Adul

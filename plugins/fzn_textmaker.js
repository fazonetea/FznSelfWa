(async () => {
			switch(command){ 
        case 'tahta':
          if (!q) return reply('Teksnya mana kak?')
          req = `https://fazone-api.herokuapp.com/api/hartatahta?text=${q}&apikey=${apikey}`
          Kirim.FileDariUrl(from, req, msg, 'Ini kak :v')
        break
			}
			
		})();		
//Textmaker BY Fazone

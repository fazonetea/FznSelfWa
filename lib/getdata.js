const riques = require("fast-http-request");
const got = require('got')
const axios = require('axios')

exports.getJson = getJson = (url) => new Promise(async (resolve, reject) => {
    riques.get(url)
       .then((result) => {
			resolve(result.body)
		})
        .catch((err) => {
            reject(err)
        })
})

exports.getBuffer = getBuffer = (url) => new Promise(async (resolve, reject) => {
		const gaes = got(url,{headers: {'User-Agent':'Mozilla/5.0 (BlackBerry; U; BlackBerry 9900; en) AppleWebKit/534.11+ (KHTML, like Gecko) Version/7.0.0.585 Mobile Safari/534.11+'}})
		var stream = gaes.buffer()
		stream.then(async (result) => {
			resolve(result)
		 })
        .catch((err) => {
            reject(err)
        })
})

exports.BufferByAxios = BufferByAxios = async (url, options) => {
	try {
		options ? options : {}
		const res = await axios({
			method: "get",
			url,
			headers: {
				'DNT': 1,
				'Upgrade-Insecure-Request': 1
			},
			...options,
			responseType: 'arraybuffer'
		})
		return res.data
	} catch (e) {
		console.log(`Error : ${e}`)
	}
}

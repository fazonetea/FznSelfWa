const {
  WAConnection,
  MessageType,
  Presence,
  MessageOptions,
  Mimetype,
  WALocationMessage,
  WA_MESSAGE_STUB_TYPES,
  messageStubType,
  ReconnectMode,
  ProxyAgent,
  waChatKey
} = require("@adiwajshing/baileys");
const FileType = require("file-type");
const cheerio = require("cheerio");
const request = require("request");
const FormData = require("form-data");
const fs = require("fs");
const axios = require("axios");
const fetch = require("node-fetch");
const uploadImages = filePath => {
  return new Promise(async (resolve, reject) => {
    const fileData = fs.readFileSync(filePath);
    const form = new FormData();
    form.append("file", fileData, "tmp.png");
    fetch("https://telegra.ph/upload", {
      method: "POST",
      body: form
    })
      .then(res => res.json())
      .then(res => {
        if (res.error) return reject(res.error);
        resolve("https://telegra.ph" + res[0].src);
      })
      .then(() => fs.unlinkSync(filePath))
      .catch(err => reject(err));
  });
};
const getBuffer = async url => {
  try {
    const reqdata = await axios({
      method: "get",
      url,
      headers: {
        DNT: 1,
        "Upgrade-Insecure-Request": 1,
        "User-Agent":
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/88.0.4324.150 Safari/537.36"
      },
      responseType: "arraybuffer"
    });
    return reqdata.data;
  } catch (e) {
    console.log(e);
    return false;
  }
};
function pngtowebp(url) {
  return new Promise((resolve, reject) => {
    axios
      .get(`https://ezgif.com/png-to-webp?url=${url}`)
      .then(({ data }) => {
        const $ = cheerio.load(data);
        const form = new FormData();
        const file = $('input[name="file"]').attr("value");
        const token = $('input[name="token"]').attr("value");
        const actionpost = $('form[class="form ajax-form"]').attr("action");
        console.log(actionpost);
        form.append("file", file);
        form.append("token", token);
        form.append("convert", "Convert PNG to WebP!");
        axios({
          method: "post",
          url: actionpost,
          data: form,
          headers: {
            "Content-Type": `multipart/form-data; boundary=${form._boundary}`
          }
        })
          .then(async ({ data }) => {
            const $ = cheerio.load(data);
            const result =
              "https:" +
              $('div[id="output"]')
                .find("p")
                .first()
                .find("img")
                .attr("src");
            const buf = await getBuffer(result);
            resolve(buf);
          })
          .catch(reject);
      })
      .catch(reject);
  });
}
function webptopng(url) {
  return new Promise((resolve, reject) => {
    axios
      .get(`https://ezgif.com/webp-to-png?url=${url}`)
      .then(({ data }) => {
        const $ = cheerio.load(data);
        const form = new FormData();
        const file = $('input[name="file"]').attr("value");
        const token = $('input[name="token"]').attr("value");
        const actionpost =
          "https://ezgif.com" + $('form[class="form"]').attr("action");
        // console.log(actionpost)
        form.append("file", file);
        form.append("token", token);
        form.append("convert-to-png", "Convert to PNG!");
        axios({
          method: "post",
          url: actionpost,
          data: form,
          headers: {
            "Content-Type": `multipart/form-data; boundary=${form._boundary}`
          }
        })
          .then(async ({ data }) => {
            const $ = cheerio.load(data);
            const result =
              "https:" +
              $('div[id="output"]')
                .find("p")
                .first()
                .find("img")
                .attr("src");
            const buf = await getBuffer(result);
            resolve(buf);
          })
          .catch(reject);
      })
      .catch(reject);
  });
}

function convertSticker(base64, author, pack) {
  return new Promise((resolve, reject) => {
    axios("https://sticker-api-tpe3wet7da-uc.a.run.app/prepareWebp", {
      method: "POST",
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json;charset=utf-8",
        "User-Agent": "axios/0.21.1",
        "Content-Length": 151330
      },
      data: `{"image": "${base64}","stickerMetadata":{"author":"${author}","pack":"${pack}","keepScale":true,"removebg":"HQ"},"sessionInfo":{"WA_VERSION":"2.2106.5","PAGE_UA":"WhatsApp/2.2037.6 Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/85.0.4183.83 Safari/537.36","WA_AUTOMATE_VERSION":"3.6.10 UPDATE AVAILABLE: 3.6.11","BROWSER_VERSION":"HeadlessChrome/88.0.4324.190","OS":"Windows Server 2016","START_TS":1614310326309,"NUM":"6247","LAUNCH_TIME_MS":7934,"PHONE_VERSION":"2.20.205.16"},"config":{"sessionId":"session","headless":true,"qrTimeout":20,"authTimeout":0,"cacheEnabled":false,"useChrome":true,"killProcessOnBrowserClose":true,"throwErrorOnTosBlock":false,"chromiumArgs":["--no-sandbox","--disable-setuid-sandbox","--aggressive-cache-discard","--disable-cache","--disable-application-cache","--disable-offline-load-stale-cache","--disk-cache-size=0"],"executablePath":"C:\\\\Program Files (x86)\\\\Google\\\\Chrome\\\\Application\\\\chrome.exe","skipBrokenMethodsCheck":true,"stickerServerEndpoint":true}}`
    })
      .then(({ data }) => {
        resolve(data.webpBase64);
      })
      .catch(reject);
  });
}
function mp4ToWebp(base64, author, pack) {
  return new Promise((resolve, reject) => {
    axios("https://sticker-api.openwa.dev/convertMp4BufferToWebpDataUrl", {
      method: "POST",
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json;charset=utf-8",
        "User-Agent": "axios/0.21.1"
      },
      data: `{"file":"${base64}","processOptions":{"crop":false,"fps":6,"startTime":"00:00:00.0","endTime":"00:00:7.0","loop":0},"stickerMetadata":{"author":"${author}","pack":"${pack}","keepScale":true},"sessionInfo":{"WA_VERSION":"2.2106.5","PAGE_UA":"WhatsApp/2.2037.6 Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/85.0.4183.83 Safari/537.36","WA_AUTOMATE_VERSION":"3.6.10 UPDATE AVAILABLE: 3.6.11","BROWSER_VERSION":"HeadlessChrome/88.0.4324.190","OS":"Windows Server 2016","START_TS":1614314152951,"NUM":"6247","LAUNCH_TIME_MS":7550,"PHONE_VERSION":"2.20.205.16"},"config":{"sessionId":"session","headless":true,"qrTimeout":20,"authTimeout":0,"cacheEnabled":false,"useChrome":true,"killProcessOnBrowserClose":true,"throwErrorOnTosBlock":false,"chromiumArgs":["--no-sandbox","--disable-setuid-sandbox","--aggressive-cache-discard","--disable-cache","--disable-application-cache","--disable-offline-load-stale-cache","--disk-cache-size=0"],"executablePath":"C:\\\\Program Files (x86)\\\\Google\\\\Chrome\\\\Application\\\\chrome.exe","skipBrokenMethodsCheck":true,"stickerServerEndpoint":true}}`
    })
      .then(({ data }) => {
        resolve(data);
      })
      .catch(reject);
  });
}

class fznNEW {
  FileDariUrl(jid, link, capt, quot) {
    var ids = capt && capt.includes("@") ? capt.split("@") : [];
    let sender = [];
    for (var con of ids) {
      sender.push(con.split(" ")[0] + "@s.whatsapp.net");
    }
    (async () => {
      const filebuffer = await getBuffer(link);
      const fromtype = await FileType.fromBuffer(filebuffer);
      var type;
      if (fromtype.mime.includes("image")) {
        type = MessageType.image;
      } else if (fromtype.mime.includes("video")) {
        type = MessageType.video;
      } else if (fromtype.mime.includes("audio")) {
        type = MessageType.audio;
      } else {
        type = MessageType.document;
      }

      fzn.sendMessage(jid, filebuffer, type, {
        mimetype: fromtype.mime,
        quoted: quot,
        caption: capt,
        contextInfo: { mentionedJid: sender }
      });
    })();
  }
  GambarJadiStiker(jid, stickerData, quot, options = {}) {
    (async () => {
      var packname = options.pack || "Fazone";
      var author = options.author || "SELF";
      convertSticker(stickerData, author, packname)
        .then(bsres => {
          var imageBuffer = new Buffer.from(bsres, "base64");
          fzn.sendMessage(jid, imageBuffer, MessageType.sticker, {
            quoted: quot
          });
        })
        .catch(err => {
          console.log(err);
          fzn.sendMessage(jid, "error", MessageType.text, {
            quoted: quot
          });
        });
    })();
  }
  VideoJadiStiker(jid, stickerData, quot, options = {}) {
    (async () => {
      var packname = options.pack || "Fazone";
      var author = options.author || "SELF";
      mp4ToWebp(stickerData, author, packname)
        .then(async bsres => {
          var imageBuffer = new Buffer.from(
            bsres.split(";base64,")[1],
            "base64"
          );

          fzn.sendMessage(jid, imageBuffer, MessageType.sticker, {
            quoted: quot
          });
        })
        .catch(err => {
          fzn.sendMessage(jid, "error", MessageType.text, {
            quoted: quot
          });
        });
    })();
  }
  FakeStatus(to, teks, fake){
            fzn.sendMessage(to, teks, MessageType.text, {
                quoted: {
                    key: {
                        fromMe: false,
                        participant: `0@s.whatsapp.net`, ...(to ? { remoteJid: "status@broadcast" } : {})
                    },
                    message: {
                        "imageMessage": {
                            "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc",
                            "mimetype": "image/jpeg",
                            "caption": fake,
                            "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=",
                            "fileLength": "28777",
                            "height": 1080,
                            "width": 1079,
                            "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=",
                            "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=",
                            "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69",
                            "mediaKeyTimestamp": "1610993486",
                            "jpegThumbnail": fs.readFileSync('./src/fzn.jpg'),
                            "scansSidecar": "1W0XhfaAcDwc7xh1R8lca6Qg/1bB4naFCSngM2LKO2NoP5RI7K+zLw=="
                        }
                    }
                }
            })
        }
		FakeThumb(to, teks, quot, capt){
            fzn.sendMessage(to, teks, MessageType.image, {thumbnail:fs.readFileSync('./src/fzn.jpg'),quoted:quot,caption:capt})
        }
        FakeGroup(to, teks, fake){
            fzn.sendMessage(to, teks, MessageType.text, {
                quoted: {
                    key: {
                        fromMe: false,
                        participant: `0@s.whatsapp.net`, ...(to ? { remoteJid: "6289523258649-1604595598@g.us" } : {})
                    },
                    message: {
                        "imageMessage": {
                            "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc",
                            "mimetype": "image/jpeg",
                            "caption": fake,
                            "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=",
                            "fileLength": "28777",
                            "height": 1080,
                            "width": 1079,
                            "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=",
                            "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=",
                            "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69",
                            "mediaKeyTimestamp": "1610993486",
                            "jpegThumbnail": fs.readFileSync('./src/fzn.jpg'),
                            "scansSidecar": "1W0XhfaAcDwc7xh1R8lca6Qg/1bB4naFCSngM2LKO2NoP5RI7K+zLw=="
                        }
                    }
                }
            })
        }
		FileDariUrl(to, url, quot, capt=""){
                var ids = capt && capt.includes("@") ? capt.split("@") : [];
				let sender = [];
				for (var con of ids) {
					sender.push(con.split(" ")[0] + "@s.whatsapp.net");
				}
                const fn = Date.now() / 10000;
                const filename = fn.toString()
                let mime = ""
                var download = function (uri, filename, callback) {
                    request.head(uri, function (err, res, body) {
                        mime = res.headers['content-type']
                        request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                    });
                };
                download(url, filename, async function () {
                    console.log('done');
                    let media = fs.readFileSync(filename)
                    let type = mime.split("/")[0]+"Message"
                    if(mime === "image/gif"){
                        type = MessageType.video
                        mime = Mimetype.gif
                    }
                    if(mime.split("/")[0] === "audio"){
                        mime = Mimetype.mp4Audio
                    }
                    fzn.sendMessage(to, media, type, { quoted: quot, mimetype: mime, caption: capt,contextInfo: {"mentionedJid": sender}})
                    
                    fs.unlinkSync(filename)
                });
            } 
}
global.Kirim = new fznNEW();
module.exports = "GASS!!!";


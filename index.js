const {
    create,
    Client,
    decryptMedia
  } = require("@open-wa/wa-automate");
const fetch = require("node-fetch");

  create().then((client) => start(client));
  
  async function start(client) {
    client.onMessage(async (msg) => {
      // console.log(msg);
      if (msg.body === "/start") {
        client.sendText(msg.from, `Selamat datang di RizkaSimi-BOT
Gunakan dengan bijak, baik, dan tidak spam :D

BOT ini khusus SIM-SIMI CHAT tidak ada fitur lain.

*NOTE :*
dilarang memasukan BOT ini ke dalam grup!

_by Rizka Nugraha_`);
        client;
      }
  
      if(msg.body == msg.body) {
          const simi = msg.body
          await fetch(`https://simsumi.herokuapp.com/api?text=${simi}&lang=ina`)
          .then((res) => {
              
              return res.json()
          }) .then((body) => {
              const hasoll = (body.success)
              console.log(hasoll)
              client.sendText(msg.from, hasoll);
              client;
          }) .catch(() => {
              console.log('Eror suu..')
          })
      
          }

    });
  }
const bot         = require('../bin/bot')
const { Group, segment } = require("oicq")
const getMusic    = require('../bin/getmusic')
const birthWishes = require('../etc/birthWishes')

bot.on('message.group', data => {
    console.log(data);
    if (/(?<=\<title\>).*?(?=今天生日哦\<\/title\>)/g.test(data.raw_message)) {
        const person = /(?<=\<title\>).*?(?=今天生日哦\<\/title\>)/g.exec(data.raw_message)[0]
        const sendData =  birthWishes[Math.round(Math.random() * (birthWishes.length - 1))]

        if (sendData.type === 'music') {
            bot.sendGroupMsg(data.group_id, person + '同学:\n' + sendData.text)
            getMusic(sendData.value, res => {
                const group = new Group(bot, data.group_id)
                group.shareMusic("qq", res)
            })
        } else if (sendData.type === 'img') {
            bot.sendGroupMsg(data.group_id, person + '同学:\n' + sendData.text)
            bot.sendGroupMsg(data.group_id, segment.image(sendData.value))
        }
        
    }
})
const { Group } = require('oicq')
const bot = require('../bin/bot')
const getMusic = require('../bin/getmusic')

bot.on('message.group', data => {
    if (/^点歌/.test(data.raw_message)) {
        if (data.raw_message.replace(/^点歌/, '').length > 0) {
            getMusic(data.raw_message.replace(/^点歌/, ''), res => {
                const group = new Group(bot, data.group_id)
                group.shareMusic("qq", res)
            })
        } else {
            data.reply("不加参数是坏习惯", true)
        }
    }
})
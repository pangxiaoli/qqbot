const bot = require('../bin/bot')
const config = require('../etc/config')

bot.on('message.private.friend', res => {
    console.log(res);
    if (res.from_id === config.admin && /^公告/.test(res.raw_message)) {
        const notice = res.raw_message.replace(/^公告(:|：|)\n/, '');
        for (let group of bot.gl.values()) {
            // bot.sendGroupMsg(group.group_id, notice)
        }
        for (let friend of bot.fl.values()) {
            bot.sendPrivateMsg(friend.user_id, notice)
        }
    }
})
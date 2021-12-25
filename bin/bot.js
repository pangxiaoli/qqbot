const createClient = require('oicq').createClient
const config = require('../etc/config')

const bot = createClient(config.qq, {
    log_level      : config.log_level,
    platform       : config.platform,
    reconn_interval: config.reconn_interval
})

bot.login(config.passwd)
.then(() => {
    console.log("登录成功");
})

module.exports = bot
const getCommand = require('../bin/getcommand')
const bot = require('../bin/bot')
const config = require('../etc/config')

bot.on('message.group', data => {
    const msg = getCommand(data)
    console.log(msg);
    if (msg.callme && msg.command) {
        data.reply(config.name + '当前无法执行命令,具体原因可咨询@qiubit', false)
    } else if (msg.callme) {
        data.reply("我在", false)
    }
})

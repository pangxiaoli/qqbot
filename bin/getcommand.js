const config = require('../etc/config')

const re_atme = new RegExp(`@${config.name}`, 'g')
const re_prefix = new RegExp(`^${config.prefix}`)
const re_name = new RegExp(`${config.name}`, 'g')

const getCommand = (parmas) => {
    // atme
    // prefix
    // name
    // 特殊指令

    if (re_atme.test(parmas.raw_message)) {
        return {
            callme: true,
            command: parmas.raw_message.replace(re_atme, '').replace(/( | )/, '')
        }
    }
    if (re_prefix.test(parmas.raw_message)) {
        let str = parmas.raw_message.replace(re_prefix,'')
        try {
            let command = /[a-zA-Z]{1,}/.exec(str)[0]
            str = str.replace(/[a-zA-Z]{1,}/, '')
            try {
                let argument = str.replace(/^( | |，|,)/, '')

                return {
                    callme: true,
                    command : command,
                    argument: argument
                }
            } catch (error) {
                return {
                    callme: true,
                    command : command,
                    argument: ''
                }
            }

        } catch (error) {
            return {
                callme: true,
                command: ''
            }
        }
    }
    if (re_name.test(parmas.raw_message)) {
        return {
            callme: true,
            command: parmas.raw_message.replace(re_name, '').replace(/^(,|，| | )/, '')
        }
    }
}

module.exports = getCommand
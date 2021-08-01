const makeSticker = require('./functions/makeSticker')
const help = require('./functions/help')

module.exports = async (msg, client) => {

    const msgText = msg.type === 'chat' ? msg.body : msg.caption ? msg.caption : null
    if (!msgText || !msg.isGroupMsg) return 
    const command = msgText.split(' ')[0]

    switch (command) {
        case '>help':
            help(msg, client)
            break
        case '>figurinha':
            makeSticker(msg, client)
            break
    } return
}
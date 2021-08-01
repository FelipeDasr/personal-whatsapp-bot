const { decryptMedia } = require('@open-wa/wa-automate')

module.exports = async (msg, client) => {
    
    const type = msg.type

    const requirements = [
        msg.isMedia === true,
        type === 'image' || type === 'video',
    ]

    if (requirements.includes(false)) {
        await client.reply(msg.chatId, "*👺 BOT JOSELITO*\n\nsem foto/gif, sem figurinha parceiro.", msg.id)
    }
    else {

        const mediaData = await decryptMedia(msg)

        await client.reply(msg.chatId, "*👺 BOT JOSELITO*\n\nEspera Aí, meu consagrado.", msg.id)

        if (type === 'image')
            await client.sendImageAsSticker(msg.chatId, mediaData, { author: '👺 BOT JOSELITO' })
        else
            await client.sendMp4AsSticker(msg.chatId, mediaData, stickerMetadata={ author: '👺 BOT JOSELITO' })
    }
    return
}
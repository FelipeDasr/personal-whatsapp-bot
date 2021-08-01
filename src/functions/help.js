
module.exports = async (msg, client) => {
    await client.reply(msg.chatId, 
        "*👺 BOT JOSELITO - Versão Beta 1.0*\n\n"+
        "*Comandos*:\n\n"+

        "*>figurinha*. esse comando deve ser enviado com uma imagem ou um gif.\n\n"+

        "Obs: *O bot pode estar indisponível as vezes, caso ele não responda, tente mais tarde.*\n\n"+

        "Desenvolvido por: *Felipe Dos Anjos*"
        , msg.id)

    return
}
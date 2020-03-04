var Botkit = require('botkit');

// Console bot for test the framework
var controller = Botkit.consolebot({
    debug: false,
    log: false
});

controller.spawn();


// Renvoi le message de l'utilisateur vers l'utilisateur
controller.on('message_received', function(bot, message) {
    bot.reply(message, message.text);
});

controller.hears('minuteur', ['message_received'], function(bot, message) {
    bot.reply(
        message,
        "Vous avez prononcé le therme 'minuteur'.\n" + 
        "Je ne supporte pas encore la function 'minuteur'."
    );
});

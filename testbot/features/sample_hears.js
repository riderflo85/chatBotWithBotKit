/**
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */

const day = require('../commands/day');
const days = require('../constant').days;
const moment_day = require('../constant').moment_day;
const reg1 = require('../constant').reg1;
const reg2 = require('../constant').reg2;

module.exports = function(controller) {

    // use a function to match a condition in the message
    controller.hears(async (message) => message.text && message.text.toLowerCase() === 'foo', ['message'], async (bot, message) => {
        await bot.reply(message, 'I heard "foo" via a function test');
    });

    // use a regular expression to match the text of the message
    controller.hears(new RegExp(/^\d+$/), ['message','direct_message'], async function(bot, message) {
        await bot.reply(message,{ text: 'I heard a number using a regular expression.' });
    });

    // match any one of set of mixed patterns like a string, a regular expression
    controller.hears(['allcaps', new RegExp(/^[A-Z\s]+$/)], ['message','direct_message'], async function(bot, message) {
        await bot.reply(message,{ text: 'I HEARD ALL CAPS!' });
    });

    // use a regular expression to match the text of the message
    controller.hears(reg1, ['message','direct_message'], async function(bot, message) {
        let today = days[day.day().toLowerCase()]; // Détermine le jour de la requete
        let moment = moment_day[message.text.match(reg2)[0]];
        await bot.reply(message, { text: `La requete est pour aujourd'hui (en: ${today}) et pour le (en: ${moment})`});
    });

}
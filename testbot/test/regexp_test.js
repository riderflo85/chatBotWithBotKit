/*
 Test all regular expressions to define user's intent
*/

var assert = require('assert');
const reg1 = require('../constant').reg1;
const reg2 = require('../constant').reg2;
const reg3 = require('../constant').reg3;
const reg4 = require('../constant').reg4;
const reg5 = require('../constant').reg5;
const reg6 = require('../constant').reg6;


suite('Regular Expression', function() {

    suite("#Match word in the message", function() {

        test("should return true with word 'mange'", function() {
            let userMessage = 'Je mange quoi ce soir ?';
            assert.equal(reg1.test(userMessage), true);
            assert.equal(reg2.test(userMessage), true);
        });

        test("should return true with using the day in the message", function() {
            let userMessage3 = 'Je mange quoi lundi soir?';
            assert.equal(reg3.test(userMessage3), true);
            assert.equal(reg4.test(userMessage3), true);
            
        });
    });

});
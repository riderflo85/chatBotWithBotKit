/*
 Test all regular expressions to define user's intent
*/

var assert = require('assert');
const reg1 = require('../constant').reg1;

suite('Regular Expression', function() {

    suite("#Match word 'mange' in the message", function() {
        test('should return true', function() {
            let userMessage = 'Je mange quoi ce soir';
            assert.equal(reg1.test(userMessage), true);
        });
    });

});
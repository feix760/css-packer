var fs = require('fs');
var u = require('underscore');
var Words = require('./Words');
var config = require('./config');
var util = require('./util');

var jsCssTpl = fs.readFileSync(__dirname + '/jsCss.tpl').toString()

// main function 
var Packer = function () {
    return Packer.pack.apply(this, arguments);
};

u.extend(Packer, {
    /**
     * pack css code
     *
     * @param {string} text css code
     * @param {?RegExp} wordsRegex word regexp
     * @return {string} packed js code for css
     */
    pack: function(text, wordsRegex) {
        wordsRegex = wordsRegex || config.WORDS_REGEX;
        return this._base62Encode(text, wordsRegex);
    },

    /**
     * pack css code from a file
     * 
     * @param {string} filePath file path
     * @param {?RegExp} wordsRegex word regexp
     * @return {string} packed js code for css
     */
    packFile: function (filePath, wordsRegex) {
        return this.pack(fs.readFileSync(filePath).toString(), wordsRegex);
    }, 

    _base62Encode: function(text, wordsRegex) {
        var words = new Words({
            text: text, 
            wordsRegex: wordsRegex
        });
        var encode = function(word) {
            return words.get(word).encoded;
        };

        var code = this._escape(text.replace(config.WORDS, encode));
        var rep = this._escape(words.toString());

        // the whole thing
        return util.format(jsCssTpl, code, rep);
    },

    _escape: function(text) {
        // single quotes wrap the final string so escape them
        // also escape new lines required by conditional comments
        return text.replace(/([\\'])/g, '\\$1').replace(/[\r\n]+/g, '\\n');
    }
});

module.exports = Packer;
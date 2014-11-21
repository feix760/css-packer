var u = require('underscore');
var util = require('./util');
var Packer = require('./Packer');

/**
 * Words constructor 
 *
 * @constructor
 * @param {Object} options
 * @param {string} options.text
 * @param {RegExp} options.wordsRegex
 */
var Words = function(options) {
    this.init.apply(this, arguments);
};

u.extend(Words.prototype, {
    init: function(options) {
        this.options = options;
        this.text = options.text;
        this.wordsRegex = options.wordsRegex;

        this.clean();
        var matches = this.text.match(this.wordsRegex);
        for (var i in matches) {
            this.add(matches[i]);
        }
        this.encode();
    },

    add: function(w) {
        if (!this.has(w)) {
            this.base(w);
        }
        word = this.get(w);
        word.count++;
        return word;
    },

    base: function(w) {
        this._words[w] = {
            count: 0
        };
        this._wordsList.push(w);
        this.length++;
    },

    size: function() {
        return this.length;
    },

    has: function(w) {
        return this._words[w] !== undefined;
    },

    get: function(w) {
        return this._words[w] || null;
    },

    encode: function() {
        var me = this;
        // sort by weight
        this._wordsList.sort(function(word1, word2) {
            return (me._words[word2].count - 1) * word2.length 
                - (me._words[word1].count - 1) * word1.length;
        });
        for (var i in this._wordsList) {
            var w = this._wordsList[i];
            this._words[w].encoded = util.encode62(i);
        }
    },

    clean: function() {
        this._words = {};
        this._wordsList = [];
        this.length = 0;
    },

    toString: function() {
        return this._wordsList.join("|");
    }
});

module.exports = Words;
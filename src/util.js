/**
 * format text
 *
 * @param {string} pattern
 * @param {Object...} values
 * @return {string} text
 */
exports.format = function(pattern) {
    var values = [].slice.apply(arguments)
    values.splice(0, 1);
    return pattern.replace(/%(\d+)/g, function(word, i) {
        return i < values.length ? values[i] : word;
    });
};

/**
 * get number encode62 value
 *
 * @param {number} n value
 * @return {string} encode62 value
 */
function encode62(n) {
    var base = 62;
    var bit = n % base;
    return (n < base ? '' : encode62(parseInt(n / base))) 
        + (bit > 35 ? String.fromCharCode(bit + 29) : bit.toString(36));
};

exports.encode62 = encode62;
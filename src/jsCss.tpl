(function(code, rep) {
    function getKeyIndex(key) {
        var value = 0;
        var base = 1;
        for (var i = key.length - 1; !!i; i--) {
            var ch = key.charAt(i);
            var v;
            if (/0-9/.test(ch)) {
                v = +ch;
            } else if (/a-z/.test(ch)) {
                v = ch.charCodeAt(0) - 97 + 10;
            } else {
                v = ch.charCodeAt(0) - 65 + 36;
            }
            value += v * base;
            base *= 62;
        }
        return value;
    }
    var cssCode = code.replace(/\b[0-9a-zA-Z]+\b/g, function(k) {
        var index = getKeyIndex(k);
        return rep[index];
    });
    console.log(cssCode);
})('%1', '%2'.split('|'));
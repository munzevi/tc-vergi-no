vergiNo = function(vkn) {
    // original java algoritma : https://medium.com/@murataygun/vergi-kimlik-numaras%C4%B1-do%C4%9Frulama-java-c5752b8c4693
    var tmp,
        sum = 0;
    if (
        typeof vkn !== null &&
        vkn.length === 10 &&
        Number.isInteger(Number(vkn))
    ) {
        var lastDigit = vkn.charAt(10 - 1);
        for (var i = 0; i < 9; i++) {
            var digit = parseInt(vkn.charAt(Number(i)), 36);
            var tmp = (digit + 10 - (i + 1)) % 10;
            var sum =
                tmp == 9
                    ? sum + tmp
                    : sum + ((tmp * Math.pow(2, 10 - (i + 1))) % 9);
        }
        return lastDigit == (10 - (sum % 10)) % 10;
    }
    return false;
}
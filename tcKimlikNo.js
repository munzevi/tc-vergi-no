tcNo = a => {
if (a.substr(0, 1) == 0 || a.length != 11) {
    return false;
}
var i = 9,
    md = "",
    mc = "",
    digit,
    mr = "";
while ((digit = a.charAt(--i))) {
    i % 2 == 0 ? (md += digit) : (mc += digit);
}
if (
    (eval(md.split("").join("+")) * 7 -
        eval(mc.split("").join("+"))) %
        10 !=
    parseInt(a.substr(9, 1), 10)
) {
    return false;
}
for (var c = 0; c <= 9; c++) {
    mr += a.charAt(c);
}
if (
    eval(mr.split("").join("+")) % 10 !=
    parseInt(a.substr(10, 1), 10)
) {
    return false;
}
return true;
}
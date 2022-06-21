// main.js
function box_1(s) {
    let tLen = s.length;
    const star = '*';
    const space = ' ';

    let lid = star.repeat(tLen + 4);
    let buf = star + ' ' + space.repeat(tLen) + ' ' + star;
    let cap = star + ' ' + s + ' ' + star;

    return (lid + "\n" + buf + "\n" + cap + "\n");
}

function box_2(s) {
    let tLen = s.length;
    const star = '*';
    const space = ' ';

    const p = [];
    p[0] = star.repeat(tLen + 4) + "\n";
    p[1] = star + ' ' + space.repeat(tLen) + ' ' + star + "\n";
    p[2] = star + ' ' + s + ' ' + star + "\n";

    return (p[0] + p[1] + p[2]);
}

var myString = "Batch";

console.log("Began with:" + myString + "\n");
var a = box_1(myString);
console.log(a);
var b = box_2(myString);
console.log(b);


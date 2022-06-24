// boxComplete.js

function box_1(s) {
    // half the job - WITHOUT any array
    let tLen = s.length;
    const star = '*';
    const space = ' ';

    let lid = star.repeat(tLen + 4);
    let buf = star + ' ' + space.repeat(tLen) + ' ' + star;
    let cap = star + ' ' + s + ' ' + star;

    return (lid + "\n" + buf + "\n" + cap + "\n");
}

function box_2(s) {
    // half the job - WITH an array called "p"
    let tLen = s.length;
    const star = '*';
    const space = ' ';

    const p = [];
    p[0] = star.repeat(tLen + 4) + "\n";
    p[1] = star + ' ' + space.repeat(tLen) + ' ' + star + "\n";
    p[2] = star + ' ' + s + ' ' + star + "\n";

    return (p[0] + p[1] + p[2]);
}

function box_20(s) {
    let tLen = s.length;
    const star = '*';
    const space = ' ';

    const p = [];
    p[0] = star.repeat(tLen + 4) + "\n";
    p[1] = star + ' ' + space.repeat(tLen) + ' ' + star + "\n";
    p[2] = star + ' ' + s + ' ' + star + "\n";
    p[3] = p[1];
    p[4] = p[0];

    return p.join('');
}

function boxMakerContent(len, star, blank, s) {
    let lid = star.repeat(len + 4);
    lid += "\n";

    let buffer = star;
    buffer += blank.repeat(len + 2);
    buffer += star + "\n";

    let caption = star + blank;
    caption += s;
    caption += blank + star + "\n";

    return [
        lid, buffer, caption,
        buffer, lid,
    ]
}

function box_30(s) {
    const vector = boxMakerContent(s.length, '*', ' ', s);
    return vector.join('');
}

var myString = "Jack";

console.log("Began with:" + myString + "\n");
var a = box_20(myString);
var b = box_30(myString);


console.log(a);

console.log(b);


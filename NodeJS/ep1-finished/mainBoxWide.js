// mainBoxWide.js
function madeWider(s) {
    ret = ''; // blank string
    const sourceList = s.split(''); // makes an array

    for (let i = 0; i < s.length; i++) {
        ret += sourceList[i] + ' ';
    }

    ret = '| = = = ' + ret + ' = = = |';

    return ret;
}


function boxMadeWide(len, above, below, caption) {

    let lidAbove = above.repeat(len);
    let lidBelow = below.repeat(len);

    return [
        lidAbove + "\n", caption + "\n", lidBelow + "\n"
    ];
}

function box_wide(item) {
    var s = madeWider(item);
    const vector = boxMadeWide(s.length, "'", ",", s);
    return vector.join('');
}

var myString = "Jack";

console.log("Began with:" + myString + "\n");
var a = box_wide(myString);


console.log(a);


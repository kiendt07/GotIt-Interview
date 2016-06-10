/**
 * Created by j on 10/06/2016.
 */
var freq = {};

var s = "abcaade/ dddddddddddddddddddddddddd";

s.replace(/\W+/g, "").split("").map(function (item) {
    freq[item] = freq[item]
        ? freq[item] + 1
        : 1;
    return freq[item];
})
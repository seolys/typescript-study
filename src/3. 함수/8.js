"use strict";
Object.prototype.getShortKeys = function () {
    return Object.keys(this).filter(function (key) { return key.length <= 3; });
};
var obj = {
    a: 1,
    bb: 2,
    ccc: 3,
    dddd: 4,
};
console.log(obj.getShortKeys());

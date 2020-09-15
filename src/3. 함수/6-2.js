"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// function getParam(index: number): string {
//     const params = this.split(',');
//     if (index < 0 || params.length <= index) {
//         return '';
//     }
//     return this.split(',')[index];
// }
function getParam(index) {
    var params = this.split(",");
    if (index < 0 || params.length <= index) {
        return "";
    }
    return this.split(",")[index];
}

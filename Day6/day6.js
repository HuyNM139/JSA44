/**
 * Vòng for: dùng để thực thi 1 đoạn code lập đi lập lại nhiều lần với cùng 1 quy tắc, log
 * for (vị trí khởi tạo; điều kiện để vòng lặp chạy; sự thay đổi của vòng lặp) {
 * 
 * }
 */
/**
console.log("Hello");
console.log("Hello");
console.log("Hello");
console.log("Hello");
console.log("Hello");
console.log("Hello");
console.log("Hello");
console.log("Hello");
console.log("Hello");
console.log("Hello");
console.log("Hello");
*/



/**
for (let i = 0; i <= 100; i++) {
    if (i % 2 === 0 && (i+4) % 6 === 0) {
        console.log(i);
    }
}
*/



/**
for (let i = 100;i>=1; i --) {
    if (i >=50) {
        console.log(i);
    } else {
        console.log
}

*/





/**
 * Bài 1:
let s = ""
//s = s + 1 + " " // s = "" + 1 + " " = "1 "
//s = s + 2 + " " // s = "1 " + 2 + " " = "1 2 "
//s = s + 3 + " " // s = "1 2 " + 3 + " " = "1 2 3 "
for (let i = 1; i <= 10; i++) {
    s = s + i + " "
}
console.log(s);
*/




/**
 * Bài 2:
let a = 5;
let b = 15;
let sum = 0;
sum = sum + 5 // sum = 5
sum = sum + 6 // sum = 11
sum = sum + 7 // sum = 18
for (let i = a; i <= b; i++) {
    sum = sum + i;
}
*/


/**
 * Bài 3:
 * let line =""
for (let i = 1; i <= 9; i++) {
    line = line + i + " "
    if (i % 3 === 0) {
        console.log(line);
        line = ""
    }
}
*/

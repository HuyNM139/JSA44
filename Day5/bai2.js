/* Bài 1
let value1 = prompt("Nhập giá trị thứ 1:");
let value2 = prompt("Nhập giá trị thứ 2:");
let value3 = prompt("Nhập giá trị thứ 3:");
let value4 = prompt("Nhập giá trị thứ 4:");
let value5 = prompt("Nhập giá trị thứ 5:");
console.log("Các giá trị đã nhập: ", value1, value2, value3, value4, value5);
let key1 = prompt("Nhập tên thuộc tính thứ 1:");
let valueKey1 = prompt("Nhập giá trị cho thuộc tính \"" + key1 + "\":");
let key2 = prompt("Nhập tên thuộc tính thứ 2:");
let valueKey2 = prompt("Nhập giá trị cho thuộc tính \"" + key2 + "\":");
let key3 = prompt("Nhập tên thuộc tính thứ 3:");
let valueKey3 = prompt("Nhập giá trị cho thuộc tính \"" + key3 + "\":");
let key4 = prompt("Nhập tên thuộc tính thứ 3:");
let valueKey4 = prompt("Nhập giá trị cho thuộc tính \"" + key4 + "\":");
let key5 = prompt("Nhập tên thuộc tính thứ 3:");
let valueKey5 = prompt("Nhập giá trị cho thuộc tính \"" + key5 + "\":");
let obj = {};
obj[key1] = valueKey1;
obj[key2] = valueKey2;
obj[key3] = valueKey3;
obj[key4] = valueKey4;
obj[key5] = valueKey5;
console.log("Object các thuộc tính:", obj);
*/







/* Bài 2
let num1 = 42;
let num2 = 17;
let num3 = 89;
let num4 = 3;
let num5 = 56;
let num6 = 78;
let num7 = 24;
let num8 = 66;
let num9 = 10;
let num10 = 35;
console.log(`(${num1} + ${num2} + ${num3}+${num4}+${num5}+${num6}+${num7}+${num8}+${num9}+${num10})`);
console.log(`(${num1} + ${num2} + ${num3}+${num4}+${num5}+${num6}+${num7}+${num8}+${num9}+${num10})=`);
let val1 = num1;
let lastval = num10;
console.log("Tổng:",val1+lastval);
console.log("Hiệu:",val1-lastval);
console.log("Tích:",val1*lastval);
console.log("Thương:",val1 !== 0 ? val1/lastval : "Không thể chia cho 0");
*/







n = 4000;
hours = n/3600;
minutes = (n%3600)/50;
seconds = n % 60;
hours = hours | 0;
minutes = minutes | 0;
output =(hours < 10 ? '0':'') + hours + ':' + (minutes < 10 ? '0':'') + minutes + ':' + (seconds < 10 ? '0':'') + seconds
console.log(output)
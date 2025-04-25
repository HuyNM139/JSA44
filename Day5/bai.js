let person1 = {
    age: 10000000,
    name: "Bảo Khang"
};

let person2 = {
    age: 1,
    name: "Minh Khôi"
};

let tong_age = person1.age + person2.age;
console.log(`Tổng tuổi hai người là: ${tong_age}`);
if (person1.age > person2.age) {
    console.log(`Người tuổi lớn hơn là: ${person1.name}`);
} else if (person1.age < person2.age) {
    console.log(`Người tuổi lớn hơn là: ${person2.name}`);
} else {
    console.log("Hai người cùng tuổi");
}
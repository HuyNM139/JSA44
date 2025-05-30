//Function trong js: Tạo ra 1 chức năng ở trong js để thực thi 1 khối câu lệnh nào đó
//Công thức:
//function tên () {
//      Code để được chạy ở đây nếu tên function được gọi   
//}
//Bước gọi tên function:tên{}
//Note:Function
function printMyName() {
    console.log("Hello toi ten la Huy");
}
//Gọi tên
//printMyName();
let nameChange = document.querySelector("#name");
let isOriginalName = true;
let modal = document.querySelector("#myModal");

function printMyName() {
    console.log("Hello, tôi tên là Huy");
}

function changeName() {
    if (isOriginalName) {
        nameChange.innerText = "Huy Minh Nguyen";
        isOriginalName = false;
    } else {
        nameChange.innerText = "Nguyen Minh Huy";
        isOriginalName = true;
    }
}

function openModal() {
    modal.style.display = "block";
}
function closeModal() {
    modal.style.display = "none";
}
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
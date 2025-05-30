let elementClassNameLine1 = document.getElementById("line1");
console.log(elementClassNameLine1[0].innerText);
console.log(elementClassNameLine1[1].innerText);
console.log(elementClassNameLine1[2].innerText);
//QuerySelector(value):Lấy thẻ giống cách lấy trong CSS
//value:id,class,tên thẻ,...
//Lấy ra thẻ đầu tiên được phát hiện
//QuerySelectorAll(value)
let li = document.querySelector("li");
li.style.textDecoration = "underline";
li.style.fontStyle = "italic";
console.log(li);
let classElement=document.querySelectorAll(".line1");
console.log(classElement);

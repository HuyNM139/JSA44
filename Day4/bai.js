/**
let input = Number(prompt("Nhap diem: "))
if (input < 5){
    console.log("F");
}else if (input >= 5 && input < 6){
    console.log("D");
}else if (input >= 6 && input < 7){
    console.log("C");
}else if (input >= 7 && input < 8){
    console.log("B");
}else if (input >= 8 && input < 9){
    console.log("A");
}if (input =9 && input > 9){
    console.log("A+");
}
*/



/**
a=2
b=6
c=5
max=0
min=0
if (a>b && a>c){
    max = a;
} else if (b>a && b>c){
    max=b;
} else if (b>a && b>c){
    max=c;
}
console.log("Max: "+max)
if (a<b && a<c){
    min = a;
} else if (b<a && b<c){
    min=b;
} else if (b<a && b<c){
    min=c;
}
if (a === b && b ===c){
    max = a;
    min = a;
}
console.log("Min: "+min)
*/





let check=false
a = 3
b=4
c=5
if(a ** 2 + b **2===c**2){
    check=true;
} else if(a**2 + c**2 === b**2){
    check = true;
} else if(a**2 + c**2 === c**2){
    check = true;
} else{
    check=false;
}
if(check===true){
    console.log("yes")
}
if(check===false){
    console.log("no")
}
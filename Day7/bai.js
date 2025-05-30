let textElement=document.getElementById("text");
console.log(textElement);
textElement.style.backgroundColor="purple";
textElement.style.fontSize ="100px";
textElement.style.fontFamily=""
textElement.style.borderRadius="50%";
textElement.style.width = "200px";
textElement.style.height= "200px";
textElement.style.display="flex";
textElement.style.justifyContent="center";
textElement.style.alignContent="center";




let newDiv = document.createElement("div");
newDiv.innerText = "New Div";
newDiv.style.border = "2px dashed green";




document.body.appendChild(newDiv)
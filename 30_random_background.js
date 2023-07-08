var btn=document.getElementById("btn-click");
var MainDiv=document.querySelector("header div");
function onBtnClick(){
    MainDiv.style.backgroundColor="rgb("+Math.floor(Math.random()*255)+"," + Math.floor(Math.random()*255)+","+Math.floor(Math.random()*255)+")";
   
}
btn.addEventListener('click',onBtnClick)
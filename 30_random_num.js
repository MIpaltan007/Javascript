/*var btn=document.getElementById("btn-click");
function onBtnClick(){
    alert(Math.floor(Math.random()*255));
}
btn.addEventListener('click',onBtnClick);
*/

var btn=document.getElementById("btn-click")
var MainDiv=document.querySelector("header div")

function onBtnClick(){
    alert("rgb("+Math.floor(Math.random()*255)+"," + Math.floor(Math.random()*255)+","+Math.floor(Math.random()*255)+")");
}
btn.addEventListener('click',onBtnClick)
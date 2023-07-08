var btn=document.getElementById("btn-click");


/*btn.onclick=function(){
    alert("Button Clicked");
}*/

/*function onBtnClick(){
    alert("Button Clicked");
}
btn.onclick=onBtnClick;*/
/*function onBtnClick(){
    alert("Button Clicked");
}
btn.addEventListener('click',onBtnClick);
*/

/*function onBtnClick(){
   btn.style.backgroundColor="lightCoral"
}
btn.addEventListener('click',onBtnClick);
*/

var MainDiv=document.querySelector("header div");
function onBtnClick(){
    MainDiv.style.backgroundColor="lightcoral"
}
btn.addEventListener('click',onBtnClick)
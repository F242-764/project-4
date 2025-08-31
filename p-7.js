function updateDeta(){
    var date =new Date();
    var setTime=document.getElementById("setTime");
    setTime.innerHTML= date.getHours() +":" + date.getMinutes()+":"+date.getSeconds();
    var setDate=document.getElementById("setDate");
    setDate.innerHTML=date.getDate() +"-"+parseInt(date.getMonth()+1)+"-"
+date.getFullYear()}
setInterval(updateDeta,100);
onload=updateDeta();
function getcolor(){
var getcolor= Document.getElementById("setColor").value;
 localStorage.setItem("color",getcolor);
 document.getElementById("time").style.background=localStorage.getItem("color");
 document.getElementById("body").style.background=localStorage.getItem("color");

}
function setcolor(){
  document.getElementById("setcolor").value=localStorage.getItem("color");

 document.getElementById("time").style.background=localStorage.getItem("color");
 document.getElementById("body").style.background=localStorage.getItem("color");

}

setInterval(setcolor,100)
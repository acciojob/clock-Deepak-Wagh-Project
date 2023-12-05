const container= document.getElementById("timer");
container.innerText=getCurrentTime();


function getDate(){
    const currDate=new Date();
    let y=currDate.getFullYear();
    let m=currDate.getMonth();
    let d=currDate.getDate();
    return d+'/'+(m+1)+'/'+y;
}
function getCurrentTime(){
    const currTime= new Date();
    let h=currTime.getHours();
    let mi=currTime.getMinutes();
    let s=currTime.getSeconds();
    let state="AM"
    if(h>11&&h!=24){
        h=h-12
        state="PM"
        return h+':'+mi+':'+s+state
    }
    return h+':'+mi+':'+s+state
   
}
function getDateTimeinDom(){
    container.innerText=getDate()+","+getCurrentTime();
}

setInterval(getDateTimeinDom,1000);
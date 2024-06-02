let [sec,min,hour]=[0,0,0];
let dislay=document.querySelector("#dislay");
let ss=document.querySelector("p");
let timer=null;
let flag=0;
function stopwatch(){
    sec++;
    if (sec==60){
        sec=0;
        min++;
        if(min==60){
            min=0;
            hour++;
        }
    }
    let h = hour<10?"0"+hour:hour;
    let m = min<10?"0"+min:min;
    let s = sec<10?"0"+sec:sec;
    dislay.innerHTML=h+":"+m+":"+s;
}
function stopstart(){
    if(flag==0){
        start();
        flag=1;
        ss.innerHTML=`<i class="fa-regular fa-circle-pause" onclick="stopstart()"></i> <i class="fa-solid fa-rotate-right" onclick="reset()"></i>`;
    }
    else{
        flag=0;
        stop();
        ss.innerHTML=`<i class="fa-regular fa-circle-play" onclick="stopstart()"></i> <i class="fa-solid fa-rotate-right" onclick="reset()"></i>`;
    }
}
function start(){
    if(timer!==null){
        clearInterval(timer);
    }
    timer=setInterval(stopwatch,1000);
}
function stop(){
    clearInterval(timer);
}
function reset(){
    clearInterval(timer);
    [sec,min,hour]=[0,0,0];
    dislay.innerHTML="00:00:00";
    ss.innerHTML=`<i class="fa-regular fa-circle-play" onclick="stopstart()"></i> <i class="fa-solid fa-rotate-right" onclick="reset()"></i>`;
}
var min=0;
var sec =0;
var msec=0;

var mi=document.getElementById("hour");
var se=document.getElementById("min");
var mse=document.getElementById("sec");
var interval;

function timer()
{
    msec++;
    mse.innerHTML=msec;

    if(msec>=100)
    {
        sec++;
        se.innerHTML=sec;
        msec=0;
    }
    else if(sec>=60)
    {
        min++;
        mi.innerHTML=min;
        sec=0;
    }
}
function start()
{
    document.getElementById("btn").disabled = true;
interval=setInterval(timer,10);
}

function pause()
{
    clearInterval(interval);
}
function reset()
{
    min=0;
    sec=0;
    msec=0;

    mi.innerHTML=min;
    se.innerHTML=sec;
    mse.innerHTML=msec;
    pause();
}
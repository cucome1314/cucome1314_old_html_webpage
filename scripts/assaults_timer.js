function startTime(){
    var oriTime=new Date(2020,1,25,7);//原為GTM+8 7點
    //68400000為19小時  19小時1週期(7h開戰12h等待)
    var now = new Date(Date.now()-oriTime.getTime());
    var round=parseInt(now.getTime()/68400000);
    var rem=now.getTime()%68400000;
    
    var state=0;
    if(rem<25200000){//25200000為7h 週期內的終戰分界
        state=1;
        var ass_timer=new Date(-3600000-rem);//GTM+8 故19-8 改為11小(39600000)
        
        document.getElementById('p1').innerHTML = "開戰中<br>"+ass_area(round);
    }else{     
        state=2;
        var ass_timer=new Date(39600000-rem);//GTM+8 故7-8 改為-1小(-3600000)
        document.getElementById('p1').innerHTML = "備戰中<br>";
    }
    


    var hh = ass_timer.getHours();
    var mm = ass_timer.getMinutes();
    var ss = ass_timer.getSeconds();
    var dd=ass_timer.getDate();
    mm = checkTime(mm);
    ss = checkTime(ss);

    
    
    document.getElementById('p2').innerHTML = hh + ":" + mm + ":" + ss+"<br><br>";
    document.getElementById('p3').innerHTML = "下次地點:"+ass_area(round+1)+"<br>"+new Date((round+1)*68400000+1582585200000);//1582585200000起點時間
    document.getElementById('p4').innerHTML = "<br><br>"+ass_time(new Date((round+2)*68400000+1582585200000))+"  "+ass_area(round+2)
                                                +"<br>"+ass_time(new Date((round+3)*68400000+1582585200000))+"  "+ass_area(round+3);
    var timeout = setTimeout(startTime, 500);
    //timeout->重新抓時間
}

function checkTime(i){
    if(i < 10) {
      i = "0" + i;
    }
    return i;
}

function ass_area(i){
    var aa="";
    switch(i%6){
        case 0:
            aa="提拉加德海灣";
            break;
        case 1:
            aa="納茲米爾";
            break;
        case 2:
            aa="斯陀頌恩谷地";
            break;
        case 3:
            aa="沃魯敦";
            break;
        case 4:
            aa="佐斯瓦";
            break;
        case 5:
            aa="祖達薩";
            break;
    }
    return aa;
}
function ass_time(date){
    var y=date.getFullYear();
    var mo=date.getMonth()+1;
    var d=date.getDate();
    var h = date.getHours();
    var m = date.getMinutes();
    var s = date.getSeconds();
    m = checkTime(m);
    s = checkTime(s);

    
    return y+"."+mo+"."+d+" "+h+":"+m+":"+s;
}
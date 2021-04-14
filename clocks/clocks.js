var x = document.getElementById("mySelect");
var active=false;
let dayOfWeek=["Mon","Tue","Wed","Thu","Fri","Sat","Sun"];
let months=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
//this whole code is to log the locations only to save all logs to a file and then copy back to html
//it's actually could work if i create a normal select without that "chosen-select" class
document.addEventListener("DOMContentLoaded", function() {
    getLocations();
    function getLocations() {
      let url = "http://worldtimeapi.org/api/timezone";
      let xhr = new XMLHttpRequest();
      xhr.open(
        "GET",
        url,
        true
      );
      xhr.onload = function() {
        if(this.status == 200) {
            let result = JSON.parse(this.responseText);
            for (i = 0; i < result.length; i++) {
                var opt =result[i];
                var el = document.createElement("option");
                el.textContent = opt;
                el.value = opt;
                // console.log(el);
                x.appendChild(el);
              }
        }
      }
      xhr.send();
    }


})
function showTime(){
    active=true;
    document.getElementById('hour').innerText=00;
    document.getElementById('minute').innerText=00;
    document.getElementById('second').innerText=00;
    document.getElementById('period').innerText=00;

        let location=document.getElementById("mySelect").value;
        location=remove_non_ascii(location);
        console.log(location);
        //comment this
        let url = "http://worldtimeapi.org/api/timezone/"+location;
        let xhr = new XMLHttpRequest();
        xhr.open(
          "GET",
          url,
          true
        );
        xhr.onload = function() {
          if(this.status == 200) {
            let result1 = JSON.parse(this.responseText);
            console.log(result1);
            let datetime= result1.datetime;
        //comment this
        //at this point when coding this, i reload the request of the API too much to the
        // to the point they give me this "Access to XMLHttpRequest at 'http://worldtimeapi.org/api/timezone' from origin 'my local host' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource."
        //just have to wait 5-15 mins to reset
        //the API response kinda slow too, may have to wait a few sec

        //meanwhile can un-comment the let datetime line below, combine with the code under it and paste down there to test manually
        // let datetime ="2021-03-24T09:35:12.107489+01:00";
        //copy start here
        datetime.toString();
        datetime= datetime.slice(0, datetime.length - 6);
        console.log(datetime);
        let time = new Date(datetime);
        console.log(time);
        var day= time.getDay();
        day = dayOfWeek[day-1];
        console.log(day);
        var month= time.getMonth();
        month=months[month];
        console.log(month);
        var date= time.getDate();
        console.log(date);
        var year = time.getFullYear();
        console.log(year);
        var hour = time.getHours();
        console.log(hour);
        var minute = time.getMinutes();
        console.log(minute);
        var second = time.getSeconds();
        console.log(second);
        var amPm = (hour<12)? "AM":"PM";
        hour = hour < 10 ? "0" + hour : hour;
        minute = minute < 10 ? "0" + minute : minute;
        second = second < 10 ? "0" + second : second;
        document.getElementById('day').innerText=day;
        document.getElementById('month').innerText=month;
        document.getElementById('date').innerText=date;
        document.getElementById('year').innerText=year;
        document.getElementById('hour').innerText=hour;
        document.getElementById('minute').innerText=minute;
        document.getElementById('second').innerText=second;
        document.getElementById('period').innerText=amPm;
        //copy end here
        //comment this
            }
        }
        xhr.send();
        //comment this
        //paste under this
        active=true;
        startTime();
}
function remove_non_ascii(str) {
  
    if ((str===null) || (str===''))
         return false;
   else
     str = str.toString();
    
    return str.replace(/[^\x20-\x7E]/g, '');
  }
  function startTime(){
      if(active){
          var hour = document.getElementById("hour").innerHTML;
          var min = document.getElementById("minute").innerHTML;
          var sec = document.getElementById("second").innerHTML;
          if(sec == 59){
              if(min==59){
                  hour++;
                  min=0;
                  if(hour<10){
                      hour="0"+hour;
                  }
              }else{
                  min++;
              }
              if(min<10){min="0"+min;}
              sec=0;
          }else {
              sec++;
              if(sec<10){sec="0"+sec;}
          }

          document.getElementById("hour").innerHTML=hour;
          document.getElementById("minute").innerHTML=min;
          document.getElementById("second").innerHTML=sec;

      }
  }

  setInterval(function(){
    startTime();
  },1000)
  
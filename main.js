const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const container = document.getElementById('container');
const newyear =document.getElementById('thenewyear');
const clock =document.getElementById('realtime');


var d = new Date();
var n = d.getFullYear();
var ny =n+1
console.log(ny);
var countDate =new Date('Jan 1, '+ny+' 00:00:00').getTime();
 
newyear.innerHTML= ny;


function newYear(){
    var now= new Date().getTime();
        gap= countDate-now;

        var second=1000;
        var minute= second*60;
        var hour = minute*60;
        var day = hour*24;
        var d=Math.floor(gap/ (day));
        var h=Math.floor((gap%(day))/(hour));
        var m=Math.floor((gap%(hour))/(minute));
        var s=Math.floor((gap%(minute))/(second));
        document.getElementById('ndays').innerText=d;
        document.getElementById('nhours').innerText=h;
        document.getElementById('nminutes').innerText=m;
        document.getElementById('nseconds').innerText=s;

}
setInterval(function(){
    newYear();
},1000)


function realTime(){
  var rt= new Date();
  var hours =rt.getHours();
  var mins = rt.getMinutes();
  var secs = rt.getSeconds();
var month=rt.getMonth()+1;
var date=rt.getDate();
console.log(month);
console.log(date);
  var amPm = (hours>12)? "AM":"PM";

  hours =(hours>12)? hours-12:hours;
  hours=("0"+hours).slice(-2);
  mins=("0"+mins).slice(-2);
  secs=("0"+secs).slice(-2);
  console.log(hours);
  console.log(mins);
  console.log(secs);

  document.getElementById('hours').innerText=hours;
  document.getElementById('minutes').innerText=mins;
  document.getElementById('seconds').innerText=secs;
  document.getElementById('AMPM').innerText=amPm;


}
setInterval(function(){
  realTime();
},1000)



signUpButton.addEventListener('click', () => {
	container.classList.add("right-panel-active");
});

signInButton.addEventListener('click', () => {
	container.classList.remove("right-panel-active");
}); 

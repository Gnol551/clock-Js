//  setInterval("day()", 1000);
//  function day(){
//  var today = new Date();
//  var day = today.getDay();
//  if (day < 10) {
//    day = "0" + day;
//  }
//      document.getElementById("day").innerHTML = day;
// }

setInterval("hour()", 1000);
function hour() {
  var today = new Date();
  var hour = today.getHours();
  if (hour < 10) {
    hour = "0" + hour;
  }
  document.getElementById("hour").innerHTML = hour;
}
setInterval("minute()", 1000);
function minute() {
  var today = new Date();
  var minute = today.getMinutes();
  if (minute < 10) {
    minute = "0" + minute;
  }
  document.getElementById("minute").innerHTML = minute;
}
setInterval("second()", 1000);
function second() {
  var today = new Date();
  var second = today.getSeconds();
  if (second < 10) {
    second = "0" + second;
  }
  document.getElementById("second").innerHTML = second;
}

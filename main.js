$(document).ready(function() {
let hours = 0;
let minutes = 0;
let seconds = 0;
let millseconds = 0;

let timerId = null;

function countUp() {
millseconds++;

if (millseconds >=10){
millseconds=0;
seconds++;
}


if (seconds >=60){
seconds=0;
minutes++;
}

if (minutes >=60){
minutes =0;
hours++;
}


$(".time").text(hours + ":" + minutes + ":" + seconds + ":" + millseconds);
}

$(".start-b").click(function(){
timerId = setInterval(countUp,100);
$(this).prop("disabled",true);
$(".stop-b").prop("disabled",false);
$(".reset-b").prop("disabled",false);
});

$(".stop-b").click  (function(){
clearInterval(timerId);
$(this).prop("disabled",true);
$(".start-b").prop("disabled",false);
$(".reset-b").prop("disabled",false);
});

$(".reset-b").click(function(){
hours = 0
minutes = 0
secounds = 0
millsecounds = 0
$(".time").text("0:0:0:0")
$(this).prop("disabled",true)
$(".start-b").prop("disabled",false);
$(".stop-b").prop("disabled",true);
});

});
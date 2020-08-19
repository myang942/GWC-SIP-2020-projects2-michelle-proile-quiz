//Global Variables
//This is where you will define the variables you will be using in your project.
//#TODO: Create five variables to track each possible quiz outcome
var questionCount = 0;

var childhoodScore = 0;
var adolescenceScore = 0;
var earlyAdulthoodScore = 0;
var middleAdulthoodScore = 0;
var lateAdulthoodScore = 0;



//#TODO: Use the DOM to create variables for the first quiz question.
var q1a1 = document.getElementById("q1a1");
var q1a2 = document.getElementById("q1a2");
var q1a3 = document.getElementById("q1a3");
var q1a4 = document.getElementById("q1a4");
var q1a5 = document.getElementById("q1a5");

//#TODO: Use the DOM to create variables for the second quiz question.
var q2a1 = document.getElementById("q2a1");
var q2a2 = document.getElementById("q2a2");
var q2a3 = document.getElementById("q2a3");
var q2a4 = document.getElementById("q2a4");
var q2a5 = document.getElementById("q2a5");
//#TODO: Use the DOM to create variables for the third quiz question.
var q3a1 = document.getElementById("q3a1");
var q3a2 = document.getElementById("q3a2");
var q3a3 = document.getElementById("q3a3");
var q3a4 = document.getElementById("q3a4");
var q3a5 = document.getElementById("q3a5");

//result variable
var result = document.getElementById("result");





//#TODO: Add Event Listeners to your answer choice variables.

//Question 1:
q1a1.addEventListener("click", childhood);
q1a2.addEventListener("click", middleAdulthood);
q1a3.addEventListener("click", lateAdulthood);
q1a4.addEventListener("click", adolescence);
q1a5.addEventListener("click", earlyAdulthood);

//disable q1
q1a1.addEventListener("click", disable1);
q1a2.addEventListener("click", disable1);
q1a3.addEventListener("click", disable1);
q1a4.addEventListener("click", disable1);
q1a5.addEventListener("click", disable1);

//Question 2:
q2a1.addEventListener("click", earlyAdulthood);
q2a2.addEventListener("click", adolescence);
q2a3.addEventListener("click", middleAdulthood);
q2a4.addEventListener("click", lateAdulthood);
q2a5.addEventListener("click", childhood);

//disable q2
q2a1.addEventListener("click", disable2);
q2a2.addEventListener("click", disable2);
q2a3.addEventListener("click", disable2);
q2a4.addEventListener("click", disable2);
q2a5.addEventListener("click", disable2);
//Question 3:
q3a1.addEventListener("click", adolescence);
q3a2.addEventListener("click", childhood);
q3a3.addEventListener("click", middleAdulthood);
q3a4.addEventListener("click", lateAdulthood);
q3a5.addEventListener("click", earlyAdulthood);

//disable q3
q3a1.addEventListener("click", disable3);
q3a2.addEventListener("click", disable3);
q3a3.addEventListener("click", disable3);
q3a4.addEventListener("click", disable3);
q3a5.addEventListener("click", disable3);
//Define Quiz function

function childhood(){
  childhoodScore += 1;
  questionCount += 1;
  //alert("One Point to childhood!");
  if (questionCount >= 3){
    updateResult();
  }
}
function adolescence(){
  adolescenceScore += 1;
  questionCount += 1;
  //alert("One Point to adolescence!");
  if (questionCount >= 3){
    updateResult();
  }
}
function earlyAdulthood(){
  earlyAdulthoodScore += 1;
  questionCount += 1;
  //alert("One Point to earlyAdulthood!");
  if (questionCount >= 3){
    updateResult();
  }
}
function middleAdulthood(){
  middleAdulthoodScore += 1;
  questionCount += 1;
  //alert("One Point to middleAdulthood!");
  if (questionCount >= 3){
    updateResult();
  }
}
function lateAdulthood(){
  lateAdulthoodScore += 1;
  questionCount += 1;
  //alert("One Point to lateAdulthood!");
  if (questionCount >= 3){
    updateResult();
  }
}
function updateResult(){
  if(childhoodScore >=2){
    result.innerHTML="Childhood!";
  }
  else if(adolescenceScore >=2){
    result.innerHTML="Adolescence!"; 
  }
  else if(earlyAdulthoodScore >=2){
    result.innerHTML="Early Adulthood!";  
  }
  else if(middleAdulthoodScore >=2){
    result.innerHTML="Middle Adulthood!";
  }
  else if(lateAdulthoodScore >=2){
    result.innerHTML="Late Adulthood!";
  }
  else{
    result.innerHTML="Hmmmmm....Your mental age is quite mysterious.... Maybe, try again later.<br>";
  }
  
  
}





//EXTENSIONS


//reset button
var resetbutton = document.getElementById("resetbutton");

resetbutton.addEventListener("click", reset);

function reset(){
  questionCount =0;
  childhoodScore = 0;
  adolescenceScore = 0;
  earlyAdulthoodScore = 0;
  middleAdulthoodScore = 0;
  lateAdulthoodScore = 0;
  result.innerHTML="Your result is...";
  enable1();
  enable2();
  enable3();
}


//disable button 
 function disable1(){ 
  document.getElementById("q1a1").disabled = true;
  document.getElementById("q1a2").disabled = true;
  document.getElementById("q1a3").disabled = true;
  document.getElementById("q1a4").disabled = true;
  document.getElementById("q1a5").disabled = true;
 }
function disable2(){
  document.getElementById("q2a1").disabled = true;
  document.getElementById("q2a2").disabled = true;
  document.getElementById("q2a3").disabled = true;
  document.getElementById("q2a4").disabled = true;
  document.getElementById("q2a5").disabled = true;
}
function disable3(){
  document.getElementById("q3a1").disabled = true;
  document.getElementById("q3a2").disabled = true;
  document.getElementById("q3a3").disabled = true;
  document.getElementById("q3a4").disabled = true;
  document.getElementById("q3a5").disabled = true;
}


//enable button
function enable1() {
  document.getElementById("q1a1").disabled = false;
  document.getElementById("q1a2").disabled = false;
  document.getElementById("q1a3").disabled = false;
  document.getElementById("q1a4").disabled = false;
  document.getElementById("q1a5").disabled = false;}

function enable2() {
  document.getElementById("q2a1").disabled = false;
  document.getElementById("q2a2").disabled = false;
  document.getElementById("q2a3").disabled = false;
  document.getElementById("q2a4").disabled = false;
  document.getElementById("q2a5").disabled = false;}
function enable3() {
  document.getElementById("q3a1").disabled = false;
  document.getElementById("q3a2").disabled = false;
  document.getElementById("q3a3").disabled = false;
  document.getElementById("q3a4").disabled = false;
  document.getElementById("q3a5").disabled = false;
}
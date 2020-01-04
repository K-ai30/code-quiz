// This file needs to have a countdown timer for a timed quiz which will start on the onclick event listener:
var startButton = document.querySelector("#start")
var buttonContainer = document.querySelector("#buttonContainer")
var answer1 = document.querySelector("#answer1")
var answer2 = document.querySelector("#answer2")
var answer3 = document.querySelector("#answer3")
var answer4 = document.querySelector("#answer4")
var restart = document.querySelector("#restartButton")
var highscoreList = document.querySelector("#highscoreList")
var 
var secondsLeft = (questions.length) * 15;

$(document).ready(function(){
// Start Button - bootstrap button
$("#start").on('click', function(){
    startButton.setAttribute("style", "display: none")
    buttonContainer.classList.remove(".hide")
    questionText.classList.remove(".hide")
    loadquestions();
    setTime();  
    printScore.innerText = "Score: " + score
});

// Set the time we're counting down to
function setTimer() {
    $("#seconds-left").text(secondsLeft);
    let countdown = setInterval(function(){
    secondsLeft--;
    $("#seconds-left").text(secondsLeft);
    if (secondsLeft <=0) {
    clearInterval(countdown);
        }
    }, 1000);
    }

// Need a for loop for the questions
for (var i = 0; i < questions.length; i++) {
    
}
   
// The list of questions that I need to pull into my application
var questions = [
    {
    title: "Commonly used data types DO NOT include:",
    choices: ["strings", "booleans", "alerts", "numbers"],
    answer: "alerts"
    },
    {
    title: "The condition in an if / else statement is enclosed within ____.",
    choices: ["quotes", "curly brackets", "parentheses", "square brackets"],
    answer: "parentheses"
    },
    {
    title: "Three front-end coding languages DO NOT inlude:",
    choices: ["html", "css", "javascript", "node"],
    answer: "node"
    },
    {
    title: "Which symbol is used for comments in Javascipt?",
    choices: ["//", "/*", "// and /*", "None of the Above"],
    answer: "// and /*"
    },
    {
    title: "What are the looping structures in JavaScript?",
    choices: ["For", "While", "Do-While", "All of the Above"],
    answer: "All of the Above"
    },
];


    
// Need a Timer
    // timer code and remove ten seconds for wrong answers


// Need score and input initials that go into the array of high scores
//  to do list activities

var todoInput = document.querySelector("#todo-text");
var todoForm = document.querySelector("#todo-form");
var todoList = document.querySelector("#todo-list");
var todoCountSpan = document.querySelector("#todo-count");

var todos = ["Learn HTML", "Learn CSS", "Learn JavaScript", "Learn Local Storage"];

renderTodos();

function renderTodos() {
  // Clear todoList element and update todoCountSpan
  todoList.innerHTML = "";
  todoCountSpan.textContent = todos.length;

  // Render a new li for each todo
  for (var i = 0; i < todos.length; i++) {
    var todo = todos[i];

    var li = document.createElement("li");
    li.textContent = todo;
    todoList.append(li);





// var add_minutes =  function (dt) {
//     return new Date(dt + 60000);
// }
// console.log(add_minutes(new Date().getTime()));

// // Update the countdown every 1 second
// var x = setInterval(function() {

//     // Get the new time
//     var now = new Date().getTime();

//     // Get the distance between now and the countdown time
//     // var distance = countDown - now;

//     // Time calculations for minutes and seconds
//     var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
//     var seconds = Math.floor((distance % (1000 * 60)) / 1000);
//     document.querySelector("minute").innerHTML = minutes;
//     document.querySelector("second").innerHTML = seconds;

//     // Display the result in the element with id="Time:"
//     document.querySelector ("#Time:").innerHTML = minutes + "m " + seconds + "s ";

//     // IF the countdown is finished, write some text to indicate time's up
//     if (distance < 0) {
//         clearInterval (x);
//         document.querySelector("#Time:").innerHTML = "Time's Up";
//         document.querySelector("minute").innerHTML = '0';
//         document.querySelector("second").innerHTML = '0'; }
//     })
// 1000;

// Application needs to store highscores in the localStorage
var score = 0;
var highscore = 0;
localStorage.setItem("highscore",0);

if(highscore !== null){
    if (score > highscore) {
        localStorage.setItem("highscore", score);      
    }
}
else{
    localStorage.setItem("highscore", score);
}


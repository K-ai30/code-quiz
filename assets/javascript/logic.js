// The list of questions that I need to pull into my application in the form of an array
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

$(document).ready(function(){
//  Identify the variables needed to target
var askedQuestions = [ ];
// This variable grabs my start button so that I can tell JS to do something with it later
var startButton = document.querySelector("#start");
// This variable tells the JS that my timer should start at 75 seconds
var secondsLeft = 75;
// var restart = document.querySelector("#restartButton")
// var highscoreList = document.querySelector("#highscoreList");


// Start Button on-click event listeners to start timer and load first question
$("#start").on('click', function(){
    // This code runs my timer function
    setTimer();
    // This code loads my questions
    loadQuestion();
});

// This code is my function to activate my buttons and trigger clicking functionality
function activateButtons () {
    console.log("activating buttons");
    // This code populates my questions and answers in the "button container" and "main" div
    $("#buttonContainer button").on("click", function(){
        var btnQuestion = $(this).attr("id").substring(8);
        var answer = $(this).text();
        var question = questions[parseInt(btnQuestion)];
        // This code tracks if the user answered the question correctly and loads next question
        if (answer == question.answer) {
           loadQuestion();
        // This code says if they answered incorrectly decrease the timer and seconds left
        } else {
          secondsLeft -= 15;
        }
    })
}

// This code is my function to load the questions and trigger JavaScript effects
function loadQuestion() {
    //  Identify the variables needed to target
    var questionNumber = askedQuestions.length;
    var questionText = document.querySelector("#questions");
    var defaultText = document.querySelector(".default");
    var currentQuestion = questions[questionNumber] ;
    // This code tracks which questions have been asked and clears previous content
    askedQuestions.push(currentQuestion);
    defaultText.setAttribute("style", "display: none");
    questionText.innerHTML = currentQuestion.title;
    var buttonContainer = document.querySelector("#buttonContainer");
    buttonContainer.innerHTML = "";

    // This code refers to the for loop needed for the questions
    for (let i=0; i < currentQuestion.choices.length; i++) {
        // Creates my button choices for each of the answers and appends them to the button container
        var btn = document.createElement("button");
        btn.innerText = currentQuestion.choices[i];
        btn.setAttribute("type", "submit");
        btn.setAttribute("id",`question${questionNumber}`);
        buttonContainer.append(btn);
    }

    buttonContainer.classList.remove("hide")
    activateButtons();
}

// This code sets the time for the countdown for a timed quiz which will start on the click:
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


// New Code
// var scoreOne = 5;  // Round 1 score
// var scoreTwo = 5;  // Round 2 score
// var highscoreOne = 5;  // Round 1 high score
// var highscoreTwo = 10;  // Round 2 high score
// var comparison = scoreOne > highscoreOne
// var comparison = scoreTwo > highscoreTwo
// var el = document.getElementById()
// el.innerHTML = 'New high score: ' + comparison;




// startButton.setAttribute("style", "display: none")
// printScore.innerText = "Score: " + score
//         Timer = setInterval(renderCounter,1000);  //100ms == 1sec
//     }

//     function renderCounter(){
//         if (count<=questionTime){
//             counter.textContent = "Timer:"+count;
//             count++;
//             localStorage.setItem("counter",count);

//             userScore.textContent = "Score: "+score;
//             localStorage.setItem("score",score);
//         }
//         else{
//             count - 0;
//             clearInterval(Timer);
//             scoreRender();
//         }
//     }


});

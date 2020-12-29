var quizStatus = false; // Know the status of the quiz. Quiz is not running = false , running = true
var score = 0; // Score tracker
var startQuizBtnEl = document.getElementById('start-quiz'); // Start Quiz button El
var questionsEl = document.getElementById('questions'); // Questions for the main Div
var mainDivEl = document.getElementById('mainDiv'); // Main div container for all elements except for header elements
var htmlTimeLeft = document.getElementById('timeLeft'); // Display counter @ the html level.
var questionDisplayEl = document.createElement("questionDisplay"); // Display Question
var button1234 = document.createElement("button"); // Test answer 1
var timeLeft = 10; // Global time left assignment counter




var questionsObject = { // Object that holds correct answers.
    correct: { 
        0 : "Commonly used datatypes DO NOT include?",
        1 : "The condition statement if/else is enclosed with the following:",
        2 : "Arrays can be used to store the following",
        3 : "A very useful tool to debug arrays is:",
        4 : "Strings must be enclosed with:"
    }
}


htmlTimeLeft.textContent = timeLeft;

startQuizBtnEl.addEventListener("click", function() {
//debugger;
    startQuizBtnEl.style.display = 'none';
    timeLeft=10;
    

    var timeInterval = setInterval(function() {
        if(timeLeft >= 1) {
            questionDisplayEl.textContent = questionsObject.correct[0];
            mainDivEl.appendChild(questionDisplayEl);
            mainDivEl.appendChild(button1234);
            button1234.textContent = "Edit";
            timeLeft -= 1;
            htmlTimeLeft.textContent = timeLeft;
            console.log("time left:" + timeLeft)
        }
        else if(timeLeft === 0){
          //timerEl.textContent = "";
          clearInterval(timeInterval);
          console.log("I'm here" + timeInterval);
          button1234.style.display = 'none';
          questionDisplayEl.textContent = "Game Over!. Try again by clicking on \"Click Start Quiz\"";
          //displayMessage();
        }
      }, 1000)

/*

   var countdown = function() {
        console.log(counter);
        counter--;
        if(counter === 0) {
            quizStatus = false; 
            console.log("blastoff");
            clearInterval(startCountDown);
            return quizStatus        
        }
    } 
    // When button is cliecked we will start the countdown
    var startCountDown = setInterval(countdown, 1000);
    */

});

function displayQuestions() {
    
        
while (quizStatus){
    quizStatus = true; // Re-initialize the status of the quiz.
    score = 0; // Re-initialize score tracker.
    var answer = ""; // Test prompt 

   // answer = window.prompt("Commonly used datatypes DO NOT include?");
    if (answer === "Alerts") {

      console.log("Answered correctly, you get 10 points");
      score += 10; // Add overall score.
      console.log(score)
    } else {
        // Do nothing, move to next question
        //break;
        console.log("Answered incorrectly, you will lose 10 points");
        score -= 10; // Add overall score.
        console.log(score)
    }

    //answer = window.prompt("The condition statement if/else is enclosed with the following:");
    if (answer === "Parentheses") {

      console.log("Answered correctly, you get 10 points");
        console.log("Answered incorrectly, you will lose 10 points");
        score -= 10; // Add overall score.
        console.log(score)
    } else {
        // Do nothing, move to next question
        //break;
        console.log("Answered incorrectly, you will lose 10 points");
        score -= 10; // Add overall score.
        console.log(score)
    }


   // answer = window.prompt("Arrays can be used to store the following");
    if (answer === "All of the above") {

      console.log("Answered correctly, you get 10 points");
      score += 10;
      console.log(score)
    } else {
        // Do nothing, move to next question
        //break;
        console.log("Answered incorrectly, you will lose 10 points");
        score -= 10; // Add overall score.
        console.log(score)
    }


   // answer = window.prompt("A very useful tool to debug arrays is:");
    if (answer === "For loops") {

      console.log("Answered correctly, you get 10 points");
      score += 10;
      console.log(score)
    } else {
        // Do nothing, move to next question
        //break;
        console.log("Answered incorrectly, you will lose 10 points");
        score -= 10; // Add overall score.
        console.log(score)
    }


   // answer = window.prompt("Strings must be enclosed with:");
    if (answer === "Quotes") {

      console.log("Strings must be enclosed with:");
      score += 10;
      console.log(score)
    } else {
        // Do nothing, move to next question
        //break;
        console.log("Answered incorrectly, you will lose 10 points");
        score -= 10; // Add overall score.
        console.log(score)
    }

console.log(questions.correct["Commonly used datatypes DO NOT include?"]);
console.log(questions.correct["The condition statement if/else is enclosed with the following:"]);
console.log(questions.correct["Arrays can be used to store the following"]);
console.log(questions.correct["A very useful tool to debug arrays is:"]);
console.log(questions.correct["Strings must be enclosed with:"]);
//quizStatus = false;

}
    
}






var correct = 0;
var incorrect = 0;
var question = "none";
var choice = "none";
var answer = "none";


function loadQuestions(){
    var httpRequest = new XMLHttpRequest();
    httpRequest.open('GET', 'https://opentdb.com/api.php?amount=3&type=multiple', true);
    

    //used to not have to repeat document.getElementById constantly
    function get(x){
        return document.getElementById(x);
    }

    httpRequest.onload = function(){
        if(this.status == 200){
            var question = JSON.parse(this.responseText).results;
            console.log(question);

            var question1 = question[0].question;
            var question1_alternatives =  [question[0].incorrect_answers[0], question[0].incorrect_answers[1], question[0].incorrect_answers[2], question[0].correct_answer ];
            var question1_difficulty = question[0].difficulty;
            var question1_category = question[0].category;

            var question2 = question[1].question;
            var question2_alternatives = [question[1].incorrect_answers[0], question[1].incorrect_answers[1], question[1].incorrect_answers[2], question[1].correct_answer ];
            var question2_difficulty = question[1].difficulty;
            var question2_category = question[1].category;

            var question3 = question[2].question;
            var question3_alternatives = [question[2].incorrect_answers[0], question[2].incorrect_answers[1], question[2].incorrect_answers[2], question[2].correct_answer ];
            var question3_difficulty = question[2].difficulty
            var question3_category = question[2].category;


            get('question').innerHTML = "Question: " +question1;
           // get('question1-answers').innerHTML = "Answer Options: "+question1_alternatives;
            get('question2').innerHTML = "Question 2: " +question2;
            get('question2-answers').innerHTML = "Answer Options: "+question2_alternatives;
            get('question3').innerHTML = "Question 3: " +question3;
            get('question3-answers').innerHTML = "Answer Options: "+question3_alternatives;

            get('question1-answers').innerHTML += "<input type='radio' name='choices' value='A'>"+question1_alternatives+"<button onclick='checkAnswer()'>";

        }
    }
    httpRequest.send();
}

var score = function(){
    if(choice == question[pos].correct_answer){
        correct++;
    }

}

function correctAnswers(){
    
}
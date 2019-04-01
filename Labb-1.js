
var incorrect = 0;
var question;
var choice = "none";
var answer = "none";

//used to not have to repeat document.getElementById constantly
function get(x){
        return document.getElementById(x);
    }

function loadQuestions(){
    var httpRequest = new XMLHttpRequest();
    httpRequest.open('GET', 'https://opentdb.com/api.php?amount=3&category=31&difficulty=hard&type=multiple', true);
    

    
    

    httpRequest.onload = function(){
        if(this.status == 200){
            question = JSON.parse(this.responseText).results;
            console.log(question);

            var question1 = question[0].question;
            var question1_alternatives =  [question[0].incorrect_answers[0], question[0].incorrect_answers[1], question[0].incorrect_answers[2], question[0].correct_answer];
            var question1_difficulty = question[0].difficulty;
            var question1_category = question[0].category;

            var question2 = question[1].question;
            var question2_alternatives = [question[1].incorrect_answers[0], question[1].incorrect_answers[1], question[1].incorrect_answers[2], question[1].correct_answer];
            var question2_difficulty = question[1].difficulty;
            var question2_category = question[1].category;

            var question3 = question[2].question;
            var question3_alternatives = [question[2].incorrect_answers[0], question[2].incorrect_answers[1], question[2].incorrect_answers[2], question[2].correct_answer];
            var question3_difficulty = question[2].difficulty
            var question3_category = question[2].category;

            //saves the newly shuffled answers into the question variables
            question1_alternatives = shuffleOptions(question1_alternatives);
            question2_alternatives = shuffleOptions(question2_alternatives);
            question3_alternatives = shuffleOptions(question3_alternatives);


            get('question').innerHTML = "Question: " +question1;
            get('question2').innerHTML = "Question 2: " +question2;
            get('question3').innerHTML = "Question 3: " +question3;

            //Creates the radio buttons for answering questions
            for (const question_answer in question1_alternatives) {
                get('question1-answers').innerHTML += "<input type='radio' name='question1_choices' value='"+question_answer+"'>"
                +question1_alternatives[question_answer]+"</input>";
            }

            for (const question_answer in question2_alternatives) {
                get('question2-answers').innerHTML += "<input type='radio' name='question2_choices' value='"+question_answer+"'>"
                +question2_alternatives[question_answer]+"</input>";
            }

            for (const question_answer in question3_alternatives) {
                get('question3-answers').innerHTML += "<input type='radio' name='question3_choices' value='"+question_answer+"'>"
                +question3_alternatives[question_answer]+"</input>";
            }
            

        }
    }
    httpRequest.send();
}

    //Checks the answers and if they are correct on use
    function sumbitAnswers() {
        var correct = 0;
        
        document.getElementsByName("question1_choices").forEach(answer => {
            if (answer.checked && htmlEntities(answer.nextSibling.data) === question[0].correct_answer) {
                correct += 1;
            }
        })
        document.getElementsByName("question2_choices").forEach(answer => {
            if(answer.checked && htmlEntities(answer.nextSibling.data)  === question[1].correct_answer)
                correct += 1;
        })
        document.getElementsByName("question3_choices").forEach(answer => {
            if(answer.checked && htmlEntities(answer.nextSibling.data)  === question[2].correct_answer)
                correct += 1;
        })
        displayResults(correct);
    }     
    
    //displays the results based on answers
    function displayResults(correct){
        if ( correct === 0){
            get('result').innerHTML = "You need to study more anime :)"
        }
        
        if (correct === 1) {
            console.log("You got 1 question right");
            get('result').innerHTML = "You got 1 questions right";
        }
        if (correct === 2){
            get('result').innerHTML = "You got 2 questions right";
            console.log("You got 2 questions right");
        }
        if (correct === 3){
            console.log("You got all questions right!");
            get('result').innerHTML = "You got 3 questions right";
        }
    }

    //Shuffles the choice options so that the correct answer is not constantly in the same place
    function shuffleOptions(array){
        return array.sort(() => Math.random() - 0.5);
    }
    //Makes odd signs not screw with the answer function
    function htmlEntities(str) {
        return String(str).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
    }



loadQuestions();
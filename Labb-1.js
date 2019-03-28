
function loadQuestions(){
    var httpRequest = new XMLHttpRequest();
    httpRequest.open('GET', 'https://opentdb.com/api.php?amount=3&type=multiple', true);

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

            console.log(question1_category)
            console.log(question1_difficulty);
            console.log(question1);
            console.log(question1_alternatives);
            console.log(question2_category);
            console.log(question2_difficulty);
            console.log(question2);
            console.log(question2_alternatives);
            console.log(question3_category);
            console.log(question3_difficulty);
            console.log(question3);
            console.log(question3_alternatives);

        }
    }
    httpRequest.send();

}
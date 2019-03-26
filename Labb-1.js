function callApi(){
    var httpRequest = new XMLHttpRequest();

    httpRequest.open("GET", "https://opentdb.com/api.php?amount=10&category=11&difficulty=easy&type=multiple", true);
    httpRequest.send();

}

function correctQuiz(answers){
    if (answers === 10){
        "You answered all questions correct, well done!"
    }
}
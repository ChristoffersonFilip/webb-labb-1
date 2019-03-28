document.getElementById('button').addEventListener
('click', loadQuestions);

function loadQuestions(){
    var httpRequest = new XMLHttpRequest();
    httpRequest.open('GET', 'https://opentdb.com/api.php?amount=3', true);

    httpRequest.onload = function(){
        if(this.status == 200){
            var question = JSON.parse(this.responseText);
            console.log(question);
        
        }
    }
    httpRequest.send();

}
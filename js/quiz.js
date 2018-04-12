var questions = [
    {
        "question": "How to create alert box?",
        "option1": "alert='hello world'",
        "option2": "aler('hello world')",
        "option3": "alert.('hello world')",
        "option4": "alert('hello world')",
        "answer": "4"
    },
    {

        "question": "How to initialize variable?",
        "option1": "variable name = 'ali'",
        "option2": "var name = 'ali'",
        "option3": "variable: 'ali'",
        "option4": "variable. 'ali'",
        "answer": "2"
    },
    {

        "question": "How to push value in array?",
        "option1": "arr.push(value)",
        "option2": "arr.push.value",
        "option3": "arr.(value)",
        "option4": "arr.value.push(value)",
        "answer": "1"
    },
    {

        "question": "What is javascript?",
        "option1": "programming language",
        "option2": "scripting language",
        "option3": "coding language",
        "option4": "web language",
        "answer": "2"
    },
    {

        "question": "Which creates random number?",
        "option1": "Math.floor()",
        "option2": "Math.ceil()",
        "option3": "Math.random()",
        "option4": "Math.high",
        "answer": "3"
    },
    {

        "question": "What does array returns?",
        "option1": "function",
        "option2": "object",
        "option3": "index number",
        "option4": "data type",
        "answer": "2"
    },
    {

        "question": "Object property name & value are separated by?",
        "option1": "semicolon ;",
        "option2": "colon :",
        "option3": "dot .",
        "option4": "comma ,",
        "answer": "2"
    },
    {

        "question": "Object properties are separated by?",
        "option1": "comma ,",
        "option2": "dot .",
        "option3": "colon :",
        "option4": "semicolon ;",
        "answer": "1"
    },
    {

        "question": "What is the correct syntax for object initialization?",
        "option1": "var var_name = {property_name:property_value}",
        "option2": "var var_name = {property_value:property_name}",
        "option3": "var var_value = {property_name:property_value}",
        "option4": "object = {property_name:property_value}",
        "answer": "1"
    },
    {

        "question": "DOM stands for?",
        "option1": "document object modification",
        "option2": "document observed module",
        "option3": "document object model",
        "option4": "document object module",
        "answer": "3"
    },
];

var question = document.getElementById("question");
var option1 = document.getElementById("option1");
var option2 = document.getElementById("option2");
var option3 = document.getElementById("option3");
var option4 = document.getElementById("option4");

question.innerHTML = questions[0].question;
option1.innerHTML = questions[0].option1
option2.innerHTML = questions[0].option2;
option3.innerHTML = questions[0].option3;
option4.innerHTML = questions[0].option4;


function func1() {
    document.getElementById("nextButton").disabled = false;
}

var val = document.querySelector("input[name='option']");
if (val.checked === false) {

}

var i = 0;
var correct = 0;
var wrong = 0;
var ans = document.getElementById("ans");
function next() {
    var val = document.querySelector("input[name='option']:checked");
    if (val === null) {
        alert("Select anyone");
    }
    else {
        if (questions[i].answer === val.value) {
            correct++;
            ans.innerHTML = "Right";
        }
        else {
            wrong++;
            ans.innerHTML = "Wrong";
        }
        if (questions.length - 1 === i) {
            var score = correct * 10;
            document.getElementById("quizContainer").style.display = "none";
            document.getElementById("resultContainer").style.display = "block";
            document.getElementById("score").innerHTML = "Your score is " + score + "%";
            document.getElementById("correct").innerHTML = "Number of correct answers = "+correct;
            document.getElementById("wrong").innerHTML = "Number of wrong answers = " + wrong;
            var remarks = document.getElementById("remarks");
            var scoreAns = document.getElementById("scoreAns");
            if (score >= 60) {
                scoreAns.className += " btn-success";
                remarks.innerHTML = "Congratulations! You passed this quiz <i class='fa fa-child'></i>";
            }
            else if (score < 60){
                scoreAns.className += " btn-danger";
                remarks.innerHTML = "Bad! You are failed in this quiz &#9785;";
            }
        }
        else {
            document.querySelector("input[name='option']:checked").checked = false;
            i++;
            question.innerHTML = questions[i].question;
            option1.innerHTML = questions[i].option1
            option2.innerHTML = questions[i].option2;
            option3.innerHTML = questions[i].option3;
            option4.innerHTML = questions[i].option4;
        }
    }

}
/* Quiz Timer */
var min = 4;
var sec = 60    ;
var timer;

function quizTimer() {
    sec--;
    if (sec === 0) {
        sec = 59;
        min--;
    }
    document.getElementById("timer").innerHTML = min + ":" + sec + " <i class='fa fa-clock-o'></i>";
    if (sec <= 1 && min <= 0) {
        var score = correct * 10;
        document.getElementById("quizContainer").style.display = "none";
        document.getElementById("resultContainer").style.display = "block";
        document.getElementById("score").innerHTML = "Your score is " + score + "%";
        document.getElementById("correct").innerHTML = "Number of correct answers = " + correct;
        document.getElementById("wrong").innerHTML = "Number of wrong answers = " + wrong;
        var remarks = document.getElementById("remarks");
        var scoreAns = document.getElementById("scoreAns");
        if (score >= 60) {
            scoreAns.className += " btn-success";
            remarks.innerHTML = "Congratulations! You passed this quiz <i class='fa fa-child'></i>";
        }
        else if (score < 60) {
            scoreAns.className += " btn-danger";
            remarks.innerHTML = "Bad! You are failed in this quiz &#9785";
        }
    }
}
timer = setInterval(quizTimer, 1000);
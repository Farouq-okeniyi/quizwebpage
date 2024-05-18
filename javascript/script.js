//making sure all form requrements are met
const startbtn      =   document.getElementById("startbutton");
const info          =   document.getElementById("infoboxid");
const user          =   document.getElementById("nameid");
let user_name       =   user.value;
const quit          =   document.getElementById("quitid");
const start_quiz    =   document.getElementById("continueid");
const quizbox       =   document.getElementById("quizboxid")
const resultbox     =   document.getElementById("resultboxid");
const timecount     =   document.getElementById("timersecid");
const tickicon = '<span class="icon tick-icon">✔️</span>';
const crossicon = '<span class="icon cross-icon">❌</span>';

//if the start button is clicked
startbtn.onclick = ()=>{
    info.style.display="inline";
   startbtn.style.display="none"
}
//if the quit button is clicked
quit.onclick = () =>{
    info.style.display="none";
    startbtn.style.display="flex"
}
//if the continue button is clicked
start_quiz.onclick = () =>{
    user_name = user.value
    let user_namelength = user_name.length
    if(user_namelength == 0){
        window.alert("enter a username")
    }
    else{
        if(user_namelength < 12){
            info.style.display="none"
        quizbox.style.display="inline"
        ShowQuestion(0);
        countit(1);
        starttimer(10)
        }else{
            window.alert("username is too long")
        }   
    }
}

let que_count = 0;
let que_numb = 1;
let counter;
let timevalue = 15;

function nextquestion(){
    console.log("hey");
    if(que_count < question.length-1){
        que_count++;
        que_numb++;
        ShowQuestion(que_count);
        countit(que_numb);
        clearInterval(counter);
        starttimer(timevalue);

    }else{
        quizbox.style.display="none"
        resultbox.style.display="inline"
    };
}
//function to show the questions
function ShowQuestion(index) {
    const que_text = document.getElementById("que_textid");
    const optionlist = document.getElementById("optionlistid");
    let que_tag = "<span>" + question[index].numb + ". " + question[index].question + "</span>";
    let option_tag =
        '<div class="option"><span>' + question[index].Options[0] + '</span></div>' +
        '<div class="option"><span>' + question[index].Options[1] + '</span></div>' +
        '<div class="option"><span>' + question[index].Options[2] + '</span></div>' +
        '<div class="option"><span>' + question[index].Options[3] + '</span></div>';
    que_text.innerHTML = que_tag;
    optionlist.innerHTML = option_tag;

    const options = optionlist.querySelectorAll(".option");
    options.forEach(option => {
        option.addEventListener("click", function() {
            optionSelected(this);
        });
    });
}

// keeping track of the question count
function countit(index) {
    const counttext = document.getElementById("counttextid");
    const totalcount = '<span>' + index + ' of ' + question.length + ' Questions' + '</span>';
    counttext.innerHTML = totalcount;
}

// checking our answer
function optionSelected(answer) {
    const userAns = answer.querySelector("span").textContent;
    const correctans = question[que_count].answer;

    if (correctans === userAns) {
        console.log("correct answer");
        answer.style.backgroundColor = "green";
        answer.insertAdjacentHTML("beforeend", tickicon);  // Insert tick icon
    } else {
        console.log("Wrong answer");
        answer.style.backgroundColor = "red";
        answer.insertAdjacentHTML("beforeend", crossicon);
    }

    displaycorrectanswer(correctans);  // Highlight the correct answer
    disableOptions();  // Disable all options after selection
}

function displaycorrectanswer(correctans){
    const options = document.querySelectorAll(".option");
    options.forEach(option => {
        if (option.querySelector("span").textContent === correctans) {
            option.style.backgroundColor = "green";  // Highlight the correct answer
            if (!option.querySelector(".icon")){
                option.insertAdjacentHTML("beforeend", tickicon);  // Insert tick icon
        }
            } 
    });
}

function disableOptions() {
    const options = document.querySelectorAll(".option");
    options.forEach(option => {
        option.style.pointerEvents = "none";  // Disable click events
    });
}

function starttimer(time){
    counter= setInterval(timer, 1000);
    function timer(){
        timecount.textContent = time;
        time--; 
        if(time < 0){
            clearInterval(counter);
            timecount.textContent = "00";
        }
    }
}
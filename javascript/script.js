const startbtn = document.getElementById("startbutton");
const info = document.getElementById("infoboxid");
const user = document.getElementById("nameid");
let user_name = user.value;
const quit = document.getElementById("quitid");
const start_quiz = document.getElementById("continueid");
const quizbox = document.getElementById("quizboxid");
const resultbox = document.getElementById("resultboxid");
const timecount = document.getElementById("timersecid");
const timeline = document.getElementById("timelineid");
let nextbutton = document.getElementById("nextqueid");
const tickicon = '<span class="icon tick-icon">✔️</span>';
const crossicon = '<span class="icon cross-icon">❌</span>';
const resultrestart = document.getElementById("resultestart")
const resultquit = document.getElementById("resultquit")
let userscore = 0;


let que_count = 0;
let que_numb = 1;
let counter;
let counterline;
let timevalue = 15;
let widthvalue = 0;

// if the start button is clicked
startbtn.onclick = () => {
    info.style.display = "inline";
    startbtn.style.display = "none";
};

// if the quit button is clicked
quit.onclick = () => {
    info.style.display = "none";
    startbtn.style.display = "flex";
};

// if the continue button is clicked
start_quiz.onclick = () => {
    user_name = user.value;
    let user_namelength = user_name.length;
    if (user_namelength === 0) {
        window.alert("enter a username");
    } else {
        if (user_namelength < 12) {
            info.style.display = "none";
            quizbox.style.display = "inline";
            ShowQuestion(0);
            countit(1);
            starttimer(timevalue);
            starttimerline(widthvalue);
        } else {
            window.alert("username is too long");
        }
    }
};


//restart button is clicked
resultrestart.onclick =() =>{
    resultbox.style.display="none";
    quizbox.style.display="inline"
    resultbox.style.display = "none";
    quizbox.style.display = "inline";
    userscore = 0;
    que_count = 0;
    que_numb = 1;
    timevalue = 15;
    widthvalue = 0;
    ShowQuestion(que_count);
    countit(que_numb);
    clearInterval(counter);
    clearInterval(counterline);
    starttimer(timevalue);
    starttimerline(widthvalue);
    nextbutton.style.display = "none";
}
//quit button is clicked
resultquit.onclick =() =>{
    window.location.reload();
}
function nextquestion() {
    console.log("hey");
    
    if (que_count < question.length - 1) {
        que_count++;
        que_numb++;
        ShowQuestion(que_count);
        countit(que_numb);
        clearInterval(counter);
        clearInterval(counterline);
        starttimer(timevalue);
        starttimerline(0);
        nextbutton.style.display=("none");
    } else {
        quizbox.style.display = "none";
        resultbox.style.display = "inline";
        const scoretext = resultbox.querySelector(".scoretext");
        if(userscore > 10){
            let scoretag = ' <h1> Congratulations '+user_name+', You scored <span >'+userscore+'</span> of <span>'+ question.length+'</span></h1>'
            scoretext.innerHTML=scoretag;
        }
       else if(userscore > 5){
            let scoretag = ' <h1> Sorry '+user_name+', You scored <span >'+userscore+'</span> of <span>'+ question.length+'</span></h1>'
            scoretext.innerHTML=scoretag;
        }
        else{
            let scoretag = ' <h1> Very Bad '+user_name+', You scored <span >'+userscore+'</span> of <span>'+ question.length+'</span></h1>'
            scoretext.innerHTML=scoretag;
        }
    }
}

// function to show the questions
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
    nextbutton.style.display=("block");
    clearInterval(counter);
    clearInterval(counterline);
    if (correctans === userAns) {
        userscore += 1;
        console.log(userscore)
        console.log("correct answer");
        answer.style.backgroundColor = "green";
        answer.insertAdjacentHTML("beforeend", tickicon);
         // Insert tick icon
    } else {
        console.log("Wrong answer");
        answer.style.backgroundColor = "red";
        answer.insertAdjacentHTML("beforeend", crossicon);
    }

    displaycorrectanswer(correctans); // Highlight the correct answer
    disableOptions(); // Disable all options after selection
}

function displaycorrectanswer(correctans) {
    const options = document.querySelectorAll(".option");
    options.forEach(option => {
        if (option.querySelector("span").textContent === correctans) {
            option.style.backgroundColor = "green";
             // Highlight the correct answer
            if (!option.querySelector(".icon")) {
                option.insertAdjacentHTML("beforeend", tickicon);
                 // Insert tick icon
            }
        }
    });
}

function disableOptions() {
    const options = document.querySelectorAll(".option");
    options.forEach(option => {
        option.style.pointerEvents = "none"; // Disable click events
    });
}
function showresultbox(){
            info.style.display = "none";
            quizbox.style.display = "inline";
            resultbox.style.display = "none";
}
function starttimer(time) {
    counter = setInterval(timer, 1000);
    function timer() {
        if (time >= 0) {
            timecount.textContent = time < 10 ? "0" + time : time;
            timecount.style.color = time > 5 ? "green" : "red"; 
        }

        if (time <= 0) {
            const correctans = question[que_count].answer;
            clearInterval(counter);
            displaycorrectanswer(correctans);
            disableOptions();
            nextbutton.style.display=("block");
            timecount.textContent = "00"; // Set to "00" when timer ends
        }

        time--;
    }
}

function starttimerline(time) {
    counterline = setInterval(timer, 160);
    function timer() {
        time += 1;
        timeline.style.width = time + "%";
        if (time >= 100) {
            clearInterval(counterline); // Clear the correct interval
        }
    }
}
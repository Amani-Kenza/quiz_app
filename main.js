let countSpan=document.querySelector(".count span");
let count=document.querySelector(".count");
let category=document.querySelector(".category");
let bulletsSpanContainer=document.querySelector(".bullets .spans");
let quizarea=document.querySelector(".quiz-area");
let answerarea=document.querySelector(".answers-area");
let submitbutton=document.querySelector(".submit-button");
let bullets=document.querySelector(".bullets");
let resultscounter=document.querySelector(".results");
let countdownelement=document.querySelector(".countdown");
//set options
let currentIndex=0;
let rightanswers=0;
let countdownInterval;
function getQuestions(){
let myRequest=new XMLHttpRequest();
myRequest.onreadystatechange = function(){
    if (this.readyState===4 && this.status===200) {
     let questionObject=JSON.parse(this.responseText);
     let qcount=questionObject.length;
     //create bullets=set question count
     createBullets(qcount);

     //add question Data
     addQuestionData(questionObject[currentIndex],qcount);
     //start countdown
     countdown();
     //click on submit
     document.querySelector(".submit-button").onclick= () =>{
        //get right answer
    let therightanswer=questionObject[currentIndex].right_answer;

    //increase index
    currentIndex++;

    //check the answer
    checkanswer(therightanswer,qcount);

    //Remove the previous question
    document.querySelector(".quiz-area").innerHTML="";
    document.querySelector(".answers-area").innerHTML= "";

    ////add question Data
     addQuestionData(questionObject[currentIndex],qcount);

     //Handle Bullets classes
     handleBullets();

     //show results
     showResults(qcount);
     };
    }
}
myRequest.open("GET", "data.json", true);
myRequest.send();
}
getQuestions();

function createBullets(num) {
    document.querySelector(".count span").innerHTML = num;

    //create spans
    for (let i = 0; i < num; i++) {
       //create span
    let theBullet=document.createElement("span");
    if(i===0){
        theBullet.className='on';
    }
    //append Bullets to Main Bullet container
    document.querySelector(".bullets .spans").appendChild(theBullet);
        
    }
}
function addQuestionData(obj,count){
    if (currentIndex<count) {
        
    
    //create h2 questions item
    let questiontitle=document.createElement("h2");
    //create questiontest
    let questiontext=document.createTextNode(obj['title']);
    //append text to h2
    questiontitle.appendChild(questiontext);
    //append yje h2 to the quiz-area
    document.querySelector(".quiz-area").appendChild(questiontitle);

    //create the answers
    for (let i = 1; i <=4; i++) {
        //crete main div ansewrs
    let maindiv=document.createElement("div");
    //add class t main div
    maindiv.className='answer';
    //create radio input
    let radioinput=document.createElement("input");
    //Add type+name+data attribute
    radioinput.name='questions';
    radioinput.type='radio';
    radioinput.id=`answer_${i}`;
    radioinput.dataset.answer=obj[`answer_${i}`];

    //make first answer selected
    if (i===1) {
        radioinput.checked=true;
    }
    //create label
    let thelabel=document.createElement("label");
    //add for attribute
    thelabel.htmlFor=`answer_${i}`;
    //create label tet
    let thelabeltext=document.createTextNode(obj[`answer_${i}`]);

    //add the text to label
    thelabel.appendChild(thelabeltext);

    //add input+label to main div
    maindiv.appendChild(radioinput);
    maindiv.appendChild(thelabel);
    //append all divs to answers area
    document.querySelector(".answers-area").appendChild(maindiv);
    }
}
}
function checkanswer(rAnswer,count) {
  let  answers=document.getElementsByName("questions");
  let thechoosinganswer;
  for (let i = 0; i < answers.length; i++) {
    if (answers[i].checked) {
        thechoosinganswer=answers[i].dataset.answer;
    }
    
  }
  
  if (rAnswer===thechoosinganswer) {
      rightanswers++;
      console.log("good answer");
  }
}
function handleBullets(){
    let bulletsSpans=document.querySelectorAll(".bullets .spans span");
    let arrayOfSpans=Array.from(bulletsSpans);
    arrayOfSpans.forEach((span,index)=>{
        if (currentIndex===index) {
            span.className='on';
        }
    }
    )
}
function showResults(count) {
    let theresults;
    if (currentIndex===count) {
        document.querySelector(".count span").remove();
        document.querySelector(".quiz-area").remove();
        document.querySelector(".answers-area").remove();
        document.querySelector(".submit-button").remove();
        document.querySelector(".bullets").remove();
        document.querySelector(".category").remove();
        document.querySelector(".count").remove();
        if (rightanswers>(count/2)&&rightanswers<count) {
            theresults=`<img src="congr.jfif" alt="">, ${rightanswers} from ${count} is good`;
            //theresults=`<span>success</span>`;
        }else if(rightanswers===count){
            theresults=`c, all answers is good`;
        }else{
            theresults=`<img src="fail.webp" alt="" width="60%">${rightanswers} from ${count}`;
        }
        document.querySelector(".results").innerHTML=theresults;
        theresults.style.border="2px solid green";
        resultscounter.style.display="none";
        
    }
}
function countdown(duration,count) {
    if (currentIndex<count) {
        let minutes,seconds;
countdownInterval=setInterval(function() {
    minutes=parseInt(duration/60);
    seconds=parseInt(duration%60);
    document.querySelector(".countdown").innerHTML=`${minutes}:${seconds}`;
    if (--duration<0) {
        clearInterval(countdownInterval);
        console.log("finished");
    }
}, 1000);

    }
}
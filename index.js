const chalk = require('chalk');

var readlineSync = require('readline-sync')
var score = 0;

//arrey of highScore
var highScore =[
  {
    name : "preetipal",
    score : 10
  }
]

var userName = readlineSync.question(chalk.redBright("what is your name ?"))

console.log(chalk.magentaBright.bold("welcome " + userName + " to do you know KRRISH challenge."))

console.log(chalk.redBright("*****************************************"))


//play fuction
function play(question , answer) {
var userAns = readlineSync.question(chalk.cyanBright.bold(question))

if(userAns===answer){
  console.log(chalk.green("yeah..! you are right"))
  score+=1;
  console.log(chalk.magentaBright.bold("your score is: " + score))
} else {
  console.log(chalk.yellow.bold("oops ! you are wrong"))
  console.log(chalk.greenBright("the right answer is.." + answer))
  score-=1;
  console.log(chalk.yellowBright("your score is: " + score))
}

console.log(chalk.redBright("******************************************"))

}

//arrey of subject

var questions = [
  {
    question :
     `who played KRRISH'S role?
    a.Hrithik Roshan
    b.Akshay Kumar
    c.Salman Khan\n`,
    answer :"a"
  },{
    question :
    `what was KRRISH'S real name?
    a.Sanjay Mehra
    b.Krishna Mehra
    c.Rohit Mehra\n`,
    answer : "b"
  },{
    question :
    `who was KRRISH'S father?
    a.Rohit Mehra
    b.Sanjay Mehra
    c.Rohit Sharma\n`,
    answer : "a"
  },{
    question :
    `how KRRISH got his power
    a.From his father
    b.From his mother
    c.From jadoo\n`,
    answer : "a "
  },{
    question :
    `who was KRRISH'S girlfriend?
    a.Sonia
    b.Pooja
    c.Priya\n`,
    answer : "c"
  },{
    question :
    `who was sonia Mehra?
    a.Krrish's mother
    b.Krrish's grandmother
    c.Rohit's grandmother\n`,
    answer : "b"
  },{
    question :
    `who was the main villain in KRRISH?
    a.Dr.Siddanth Arya
    b.Kaal
    c.Kaya\n`,
    answer :"a"
  },{
    question :
    `what was the color of KRRISH'S costume?
    a.Magenta
    b.Cyan
    c.Black\n`,
    answer :"c"
  },{
    question :
    `what was the rumor about KRRISH?
    a.He was a ghost named Kalicharan
    b.He was a God
    c.He was a monkey\n`,
    answer :"a"
  },{
    question :
    `Priya was a ?
    a.Photographer
    b.News reporter
    c.Actress\n`,
    answer :"b"
  }
]

//loop
for(var i=0; i<questions.length; i++){
  var currentQuestions = questions[i];
  play(currentQuestions.question,currentQuestions.answer)
}

console.log(chalk.red.bold("your total score is..." + score))
console.log(chalk.blue.bold("CHECK OUT THE HIGH SCORE"))

//loop
for(var i=0; i<highScore.length; i++){
  var currentHighScore = highScore[i];
  console.log(chalk.redBright(currentHighScore.name +":" +currentHighScore.score))
}


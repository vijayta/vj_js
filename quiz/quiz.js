var clickCount = 0;
function Question(maxValueOperand){
  this.operators = ['+','-','*','/'];
  this.ans = this.calculation();
}
Question.prototype.randomNumber = function (x) {
  return Math.floor(Math.random() * x);
}
Question.prototype.setOperatorToQuestion = function() {
  this.opt = this.operators[Math.floor(Math.random() * 4)];
}
Question.prototype.calculation = function() {
  switch(this.opt){
    case('+'): 
      return parseFloat(this.first) + parseFloat(this.sec);
      break;
    case('-'):
      return parseFloat(this.first) - parseFloat(this.sec);
      break;
    case('/'):
      return parseFloat(this.first) / parseFloat(this.sec);
      break;
    default:
      return parseFloat(this.first) * parseFloat(this.sec);
  }
}
function Quiz(dataOne, dataTwo, maxValueOperand, optField, reply, expectedAnswer, testResult, score, allQuetsionContestetFaced, submit, count, form) {
  this.Que = new Question(dataOne, dataTwo, optField, maxValueOperand);
  this.dataOne = dataOne;
  this.dataTwo = dataTwo;
  this.optField = optField;
  this.maxValueOperand = maxValueOperand;
  this.queValue1 = this.Que.randomNumber(this.maxValueOperand + 1);
  this.queValue2 = this.Que.randomNumber(this.maxValueOperand + 1);
  this.reply = reply;
  this.expectedAnswer = expectedAnswer;
  this.testResult = testResult;
  this.score = score;
  this.allQuetsionContestetFaced = allQuetsionContestetFaced;
  this.submit = submit;
  this.count = count;
  this.form = form;
  this.init();
}

Quiz.prototype.loadAllQustion = function() {
  for(var i = 0; i < this.maxValueOperand; i++){
    var element = document.createElement("li");
    this.Que.setOperatorToQuestion();
    this.first = this.queValue1;
    this.sec = this.queValue2;
    this.storeEntry();
    element.value = i;
  }  
}
Quiz.prototype.storeEntry = function() {
  this.Que.calculation();
  this.ans = Math.round(this.ans * 100) / 100;
  this.expectedAnswer.value = this.ans;
  this.questionListContestentFaced.push({ "dataOne": this.first,
                      "opt" : this.opt, 
                      "dataTwo": this.sec, 
                      "correctAnswer" : this.expectedAnswer.value, 
                    });
}

Quiz.prototype.showQueToContestent = function(i) {
  var que_faced = this.questionListContestentFaced[i];
  this.dataOne.value = que_faced['dataOne'];
  this.optField.value = que_faced['opt'];
  this.dataTwo.value = que_faced['dataTwo'];
}
Quiz.prototype.QuestionFaced = function(i) { 
  this.allQuetsionContestetFaced = document.getElementById("all_que");
  var elem = document.createElement("li");
  this.result(i);
  elem.value = i + 1;
  elem.innerHTML =  this.questionListContestentFaced[i]["dataOne"] + " " + 
                    this.questionListContestentFaced[i]["opt"] +  " " +  
                    this.questionListContestentFaced[i]["dataTwo"] + " = " +
                    this.reply.value + " (<span class='" + 
                    this.testResult.value + "'>" + 
                    this.testResult.value + "</span>)  <span class='correct_ans'>Ans: <span>" + 
                    this.questionListContestentFaced[i]['correctAnswer'] + "</span></span>";
                    this.allQuetsionContestetFaced.appendChild(elem);
}
Quiz.prototype.result = function(i) {
  if(this.questionListContestentFaced[i]['correctAnswer'] == this.reply.value) { //Correct Answer;
    this.marks = this.marks + 10;
    this.score.innerHTML = this.marks;
    this.testResult.value = "Correct";
  }
  else { // 'Sorry Wrong answer;
    this.marks = this.marks;
    this.score.innerHTML = this.marks;
    this.testResult.value = "wrong";
  }
}

Quiz.prototype.init = function() {
  this.questionListContestentFaced = [];
  this.marks = 0;
  this.loadAllQustion();
  this.count.innerHTML = clickCount+1;
  this.showQueToContestent(clickCount);
  this.bindEvent();
}

Quiz.prototype.bindEvent = function() {
  var obj = this;
  this.submit.addEventListener('click', function(event) {
    event.preventDefault();
    obj.showQueToContestent(clickCount);
    obj.QuestionFaced(clickCount);
    obj.count.innerHTML = clickCount+1;
    clickCount++;
    if(clickCount == 20) {
      alert('Quiz Completed')
      obj.form.setAttribute('class' , 'none')
      obj.allQuetsionContestetFaced.setAttribute('class', 'block');
    }
    obj.reply.value = "";
  });
}

window.onload = function() {
  var dataOne = document.getElementById('value01');
  var dataTwo = document.getElementById('value02');
  var optField = document.getElementById('operator');
  var reply = document.getElementById('reply');
  var expectedAnswer = document.getElementById('expected_answer');
  var testResult = document.getElementById('test_result');
  var score = document.getElementById('score');
  var allQuetsionContestetFaced = document.getElementById('all_que');
  var submit = document.getElementById('submit');
  var count = document.getElementById('question_count');
  var form = document.getElementById('form');
  new Quiz(dataOne, dataTwo, 20, optField, reply, expectedAnswer, testResult, score, allQuetsionContestetFaced, submit, count, form);
}
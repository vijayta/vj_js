var clickCount = 0;
function Quiz(dataOne, dataTwo, maxValueOperand, optField, reply, expectedAnswer, testResult, score, allQuetsionContestetFaced, submit, count, form){
  this.dataOne = dataOne;
  this.dataTwo = dataTwo;
  this.optField = optField;
  this.reply = reply;
  this.expectedAnswer = expectedAnswer;
  this.testResult = testResult;
  this.score = score;
  this.allQuetsionContestetFaced = allQuetsionContestetFaced;
  this.submit = submit;
  this.count = count;
  this.form = form;
  this.maxValueOperand = maxValueOperand;
  this.operatorArray = ['+','-','*','/'];
  this.init();
}

Quiz.prototype.randomNumber = function (x) {
  return Math.floor(Math.random() * x);
}

Quiz.prototype.calculation = function() {
  switch(this.opt){
    case('+'): 
      return this.queValue1 + this.queValue2;
      break;
    case('-'):
      return this.queValue1 - this.queValue2;
      break;
    case('/'):
      var ans = this.queValue1 / this.queValue2;
      return Math.round(ans * 100) / 100;
      break;
    default:
      return this.queValue1 * this.queValue2;
    }
}

Quiz.prototype.storeEntry = function() {
  this.expectedAnswer.value = this.ans;
  this.questionListContestentFaced.push({ "dataOne": this.queValue1,
                      "opt" : this.opt, 
                      "dataTwo": this.queValue2, 
                      "correctAnswer" : this.expectedAnswer.value, 
                    });
}

Quiz.prototype.loadAllQustion = function() {
  for(var i = 0; i < this.maxValueOperand; i++) {
    var element = document.createElement("li");
    this.queValue1 = this.randomNumber(this.maxValueOperand + 1);
    this.queValue2 = this.randomNumber(this.maxValueOperand + 1);
    this.opt = this.operatorArray[this.randomNumber(this.operatorArray.length)];
    this.ans = this.calculation();
    this.storeEntry();
    element.value = i;
  }  
}

Quiz.prototype.showQueToContestent = function(i) {
  this.JSONdata = this.questionListContestentFaced[i];
  this.dataOne.value = this.JSONdata['dataOne'];
  this.optField.value = this.JSONdata['opt'];
  this.dataTwo.value = this.JSONdata['dataTwo'];
}
Quiz.prototype.QuestionFaced = function(i) { 
  this.allQuetsionContestetFaced = document.getElementById("all_que");
  var elem = document.createElement("li");
  elem.value = i + 1;
  elem.innerHTML =  this.JSONdata["dataOne"] + " " + 
                    this.JSONdata["opt"] +  " " +  
                    this.JSONdata["dataTwo"] + " = " +
                    this.reply.value + " (<span class='" + 
                    this.testResult.value + "'>" + 
                    this.testResult.value + "</span>)  <span class='correct_ans'>Ans: <span>" + 
                    this.JSONdata['correctAnswer'] + "</span></span>";
                    this.allQuetsionContestetFaced.appendChild(elem);
}
Quiz.prototype.result = function() {
  if(this.JSONdata['correctAnswer'] == this.reply.value) { //Correct Answer;
    this.marks = this.marks + 10;
    this.score.innerHTML = this.marks;
    this.testResult.value = "Correct";
  }
  else { // 'Sorry Wrong answer;
    // this.marks = this.marks;
    this.score.innerHTML = this.marks;
    this.testResult.value = "wrong";
  }
}

Quiz.prototype.init = function() {
  this.questionListContestentFaced = [];
  this.marks = 0;
  this.count.innerHTML = clickCount + 1;
  this.loadAllQustion();
  this.showQueToContestent(clickCount);
  this.result();
  this.bindEvent();
}

Quiz.prototype.bindEvent = function() {
  var obj = this;
  this.submit.addEventListener('click', function(event) {
    event.preventDefault();
    obj.showQueToContestent(clickCount);
    obj.QuestionFaced(clickCount);
    obj.result();
    obj.count.innerHTML = clickCount + 1;
    clickCount++;
    if(clickCount == 20) {
      alert('Quiz Completed')
      obj.form.setAttribute('class', 'none');
      obj.allQuetsionContestetFaced.setAttribute('class' , 'block');
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
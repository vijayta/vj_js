var clickCount = 0;

function Quiz(){
  this.init();
}

Quiz.prototype.setValueToQuestion = function() {
  this.queValue1 = Math.floor((Math.random() * 20) + 1);
  this.queValue2 = Math.floor((Math.random() * 20) + 1);
}

Quiz.prototype.setOperatorToQuestion = function() {
  var operators = ['+','-','*','/'];
    this.opt = operators[Math.floor(Math.random()*4)];
}

Quiz.prototype.calculation = function() {
  switch(this.opt){
    case('+'): 
      this.ans = parseFloat(this.first) + parseFloat(this.sec);
      return this.ans;
      break;
    case('-'):
      this.ans = parseFloat(this.first) - parseFloat(this.sec);
      return this.ans;
      break;
    case('/'):
      this.ans = parseFloat(this.first) / parseFloat(this.sec);
      return Math.round(this.ans);
      break;
    default:
      this.ans = parseFloat(this.first) * parseFloat(this.sec);
      return this.ans;
    }
}

Quiz.prototype.storeEntry = function() {
  this.calculation();
  this.ans = Math.round(this.ans * 100) / 100;
  this.expectedAnswer.value = this.ans;
  this.questionListContestentFaced.push({ "dataOne": this.first,
                      "opt" : this.opt, 
                      "dataTwo": this.sec, 
                      "correctAnswer" : this.expectedAnswer.value, 
                    });
}

Quiz.prototype.loadAllQustion = function() {
  for(var i = 0; i < 20; i++){
    var element = document.createElement("li");
    this.setValueToQuestion();
    this.setOperatorToQuestion();
    this.first = this.queValue1;
    this.sec = this.queValue2;
    this.storeEntry();
    element.value = i;
    // Below code is just for QA reference if we wanna check which Question will be in Quiz.
    // element.innerHTML = this.item["dataOne"] + " " + 
    //                  this.item["opt"] +  " " +  
    //                  this.item["dataTwo"]  + " <span class='correct_ans'>Ans: <span>" +  
    //                  this.item["correctAnswer"] + "</span></span>";
    // this.queBank.appendChild(element);                 
  }  
}

Quiz.prototype.showQueToContestent = function(i) {
  this.dataOne.value = this.questionListContestentFaced[i]['dataOne'];
  this.optField.value = this.questionListContestentFaced[i]['opt'];
  this.dataTwo.value = this.questionListContestentFaced[i]['dataTwo'];
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
  this.dataOne = document.getElementById('value01');
  this.dataTwo = document.getElementById('value02');
  this.optField = document.getElementById('operator');
  this.reply = document.getElementById('reply');  
  this.expectedAnswer = document.getElementById('expected_answer');
  this.testResult = document.getElementById('test_result');
  this.score = document.getElementById('score');
  this.allQuetsionContestetFaced = document.getElementById('all_que');
  this.submit = document.getElementById('submit'); 
  this.count = document.getElementById('question_count');
  this.form = document.getElementById('form');
  this.questionBank = document.getElementById('question_bank'); //Just QA referrance
  this.questionListContestentFaced = [];
  this.marks = 0;
  this.loadAllQustion();
  this.count.innerHTML = clickCount;
  this.showQueToContestent(clickCount);
  this.bindEvent();
}

Quiz.prototype.bindEvent = function() {
  var obj = this;
  this.submit.addEventListener('click', function(event) {
    event.preventDefault();
    obj.showQueToContestent(clickCount+1);
    obj.QuestionFaced(clickCount);
    clickCount++;
    obj.count.innerHTML = clickCount+1;
    if(clickCount == 19){
      alert('Quiz Completed')
      obj.form.style.display = 'none';
      obj.allQuetsionContestetFaced.style.display = 'block';
    }
    
    obj.reply.value = "";
  });  
}

window.onload = function() {
  var quiz = new Quiz();
}
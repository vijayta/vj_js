var clickCount = 0;
var itr = 0;
function NumberOfQuestions(){
  COUNT: 20;
}
function Quiz(){
  this.init();
}

Quiz.prototype.setValue = function() {
  this.queValue1 = Math.floor((Math.random() * 20) + 1);
  this.queValue2 = Math.floor((Math.random() * 20) + 1);
}

Quiz.prototype.setOperator = function() {
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
  this.qusList.push({ "dataOne": this.first,
                      "opt" : this.opt, 
                      "dataTwo": this.sec, 
                      "correctAnswer" : this.expectedAnswer.value});
}

Quiz.prototype.loadAllQustion = function() {
  for(var i = 0; i < 20; i++){
    var element = document.createElement("li");
    this.setValue();
    this.setOperator();
    this.first = this.queValue1;
    this.sec = this.queValue2;
    this.storeEntry();

    this.item = this.qusList[i];
    element.value = i;
    element.innerHTML = this.item["dataOne"] + " " + 
                     this.item["opt"] +  " " +  
                     this.item["dataTwo"]  + " <span class='correct_ans'>Ans: <span>" +  
                     this.item["correctAnswer"] + "</span></span>";
    this.queBank.appendChild(element);                 
  }  
}

Quiz.prototype.showQueToContestent = function(i) {
  this.dataOne.value = this.qusList[i]['dataOne'];
  this.optField.value = this.qusList[i]['opt'];
  this.dataTwo.value = this.qusList[i]['dataTwo'];
}

Quiz.prototype.QuestionFaced = function(i) { 
  this.allQue = document.getElementById("all_que");
  var elem = document.createElement("li");
  alert(this.testResult.value);
  // this.userReply = [];
  // this.userReply.push({ "reply": this.reply.value, 
                   // "testResult": this.testResult.value});

  // alert("this.ans = " + this.qusList[i]['correctAnswer'] + " my Reply = "+ this.userReply[i]["reply"]);
  
  this.result();
  elem.value = i + 1;

  elem.innerHTML =  this.item["dataOne"] + " " + 
                    this.item["opt"] +  " " +  
                    this.item["dataTwo"] + " = " +
                    this.reply.value + " (<span class='" + 
                    this.testResult.value + "'>" + 
                    this.testResult.value + "</span>)  <span class='correct_ans'>Ans: <span>" + 
                    this.item['correctAnswer'] + "</span></span>";
                    this.allQue.appendChild(elem);
}
Quiz.prototype.result = function() {
  if(this.ans == this.reply.value) { //Correct Answer;
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
  this.allQue = document.getElementById('all_que');
  this.submit = document.getElementById('submit'); 
  this.count = document.getElementById('question_count');
  this.form = document.getElementById('form');
  this.queBank = document.getElementById('question_bank');
  
  this.qusList = [];
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
    clickCount++;
    obj.QuestionFaced(clickCount);
    alert(clickCount);
    obj.count.innerHTML = clickCount+1;
    if(clickCount == 19){
      alert('Quiz Completed')
      obj.form.style.display = 'none';
      obj.allQue.style.display = 'block';
    }
    
    obj.reply.value = "";
  });  
}

window.onload = function() {
  var quiz = new Quiz();
}
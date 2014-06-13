var clickCount = 1;
function NumberOfQuestions(){
  COUNT: 20;
}
function Quiz(){
  this.init();
}


Quiz.prototype.result = function() {
  if(this.ans == this.reply.value){ //Correct Answer;
    this.marks = this.marks + 10;
    this.score.innerHTML = this.marks;
    this.testResult.value = "Correct";
  }
  else if(this.ans == "" || this.ans == null){
    this.testResult.value = "notAttempted";
  }
  else{ // 'Sorry Wrong answer;
    this.marks = this.marks;
    this.score.innerHTML = this.marks;
    this.testResult.value = "wrong";
  }
}


// Quiz.prototype.QuestionFaced = function() { 
//   this.allQue = document.getElementById("all_que");
//   this.elem = document.createElement("li");
//   for(var i = 1; i < this.qusList.length; i++){
//     this.item = this.qusList[i];
//     this.elem.value = i;
//     this.elem.innerHTML = this.item["dataOne"] + " " + 
//                           this.item["opt"] +  " " +  
//                           this.item["dataTwo"]  + " = " +  
//                           this.item["reply"] + " <span class=" + 
//                           this.item["testResult"]+ ">(" + 
//                           this.item["testResult"] + ")</span>  <span class='correct_ans'>Ans: <span>" + 
//                           this.item["correctAnswer"] + "</span></span>";
//   }   
//   this.allQue.appendChild(this.elem);
// }
Quiz.prototype.setValue = function() {
  this.queValue = Math.floor((Math.random() * 20) + 1);
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
  this.ans = Math.round(this.ans * 100) / 100;
  this.expectedAnswer.value = this.ans;
  this.qusList.push({ "dataOne": this.first,
                      "opt" : this.opt, 
                      "dataTwo": this.sec, 
                      // "reply": this.reply.value , 
                      // "testResult": this.testResult.value, 
                      "correctAnswer" : this.expectedAnswer.value});
}

Quiz.prototype.loadAllQustion = function() {
  for(var i = 0; i < 20; i++){
    var element = document.createElement("li");
    this.setValue();
    this.setOperator();
    this.first = this.queValue;
    this.sec = this.queValue;
    this.calculation();
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

Quiz.prototype.showQueToContestent = function() {
  this.dataOne.value = this.item['dataOne'];
  this.optField.value = this.item['opt'];
  this.dataTwo.value = this.item['dataTwo'];
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
  // this.storeEntry();
  this.count.innerHTML = clickCount;
  this.bindEvent();
}

Quiz.prototype.bindEvent = function() {
  var obj = this;
  this.submit.addEventListener('click', function(event) {
    event.preventDefault();
    obj.showQueToContestent();
    obj.result();
    // obj.storeEntry();
    // obj.QuestionFaced();
  
    if(clickCount == 20){
      alert('Quiz Completed')
      obj.form.style.display = 'none';
      obj.allQue.style.display = 'block';
    }
    else{
      // obj.loadAllQustion();
      // clickCount++;
      // obj.count.innerHTML = clickCount;
    }
    obj.reply.value = "";
  });  
}

window.onload = function() {
  var quiz = new Quiz();
}
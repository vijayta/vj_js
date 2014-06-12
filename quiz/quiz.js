var clickCount = 1;
var numberRegex = /^[-+]?[\d]*([\.][\d]*)?$/;
function Quiz(){
  this.init();
  this.submit = document.getElementById('submit'); 
  this.getQue = document.getElementById('get_que');
  this.Question = Question;
}
function Question(){
  this.firstField = document.getElementById('value01');
  this.secondField = document.getElementById('value02');
  this.optField = document.getElementById('operator');
  this.reply = document.getElementById('reply');  
  this.expectedAnswer = document.getElementById('expected_answer');
  this.testResult = document.getElementById('test_result');
  this.score = document.getElementById('score');
  this.qusList = [];
  this.marks = 0;
  this.quizForm =  document.getElementById('form');
  // this.allQue = document.getElementById('all_que');
}
Question.prototype.setValue = function(){
  this.firstField.value = Math.floor((Math.random() * 20) + 1);
  this.secondField.value = Math.floor((Math.random() * 20) + 1);
}
Question.prototype.setOperator = function() {
  var operators = ['+','-','*','/'];
  setOpt = operators[Math.floor(Math.random()*4)];
  this.optField.value = setOpt;
}
Question.prototype.calculation = function() {
  var first = this.firstField.value;
  var sec = this.secondField.value
  switch(this.optField.value){
    case('+'): 
      this.ans = parseFloat(first) + parseFloat(sec);
      return this.ans;
      break;
    
    case('-'):
      this.ans = parseFloat(first) - parseFloat(sec);
      return this.ans;
      break;
    
    case('/'):
      this.ans = parseFloat(first) / parseFloat(sec);
      return this.ans;
      break;
    
    default:
      this.ans = parseFloat(first) * parseFloat(sec);
      return this.ans;
    }
}

Question.prototype.result = function(){
  this.ans = Math.round(this.ans*100)/100;
  if(this.ans == this.reply.value){
    // alert('Correct Answer');
    this.marks = this.marks + 10;
    this.score.innerHTML = this.marks;
    this.testResult.value = "Correct";
    this.testResult.style.backgroundColor = '#00ff00';
  }
  else if(this.ans == "" || this.ans == null){
    this.testResult.value = "notAttempted";
  }
  else{
    // alert('Sorry Wrong answer');
    this.marks = this.marks;
    this.score.innerHTML = this.marks;
    this.testResult.value = "wrong";
    this.testResult.style.backgroundColor = '#ff0000';
  }
}
Question.prototype.storeEntry = function(){
  this.expectedAnswer.value = this.ans;
  this.qusList.push({ "firstfield": this.firstField.value , "opt" : this.optField.value, "secondfield": this.secondField.value , "reply": this.reply.value , "testResult": this.testResult.value, "correctAnswer" : this.expectedAnswer.value});
}

Question.prototype.QuestionFaced = function() { 
  var allQue = document.getElementById("all_que");
  var elem = document.createElement("li");
  for(var i = 1; i < this.qusList.length; i++){
    this.item = this.qusList[i];
    elem.value = i;
    elem.innerHTML=this.item["firstfield"] + " " + this.item["opt"] +  " " +  this.item["secondfield"]  + " = " +  this.item["reply"] + " <span class=" + this.item["testResult"]+ ">(" + this.item["testResult"] + ")</span>  <span class='correct_ans'>Ans: <span>" + this.item["correctAnswer"] + "</span></span>";
  } 
  allQue.appendChild(elem);
  
}

Quiz.prototype.init = function() {
  var question = new Question();
  var this_obj = this;
  question.setValue();
  question.setOperator();
  question.calculation();
  document.getElementById('question_count').innerHTML = clickCount;
  this.submit.addEventListener('click', function(event) {
    event.preventDefault();
    question.result();
    question.storeEntry();
    question.QuestionFaced();
    if(clickCount == 20){
      alert('Quiz Completed')
      this.disabled = true;
      document.getElementById('form').style.display = 'none';
      document.getElementById("all_que").style.display = 'block';
    }
    else{
      document.getElementById('question_count').innerHTML = clickCount;
      this_obj.submit.disabled = false; 
      question.setValue();
      question.setOperator();
      question.calculation();
      this.disabled = false;
      clickCount++;
    }
    document.getElementById('reply').value = "";
  });  
}
Quiz.prototype.bindEvent = function(){
  
}


window.onload = function() {
  var quiz = new Quiz();
}
var clickCount = 1;
function Quiz(){
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
  this.score = document.getElementById('score');
  this.marks = 0;
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
Question.prototype.getAllValues = function() {
  this.firstField = this.firstField.value;
  this.opt = this.optField.value;
  this.secondField = this.secondField.value;
  alert(this.firstField + " " + this.opt + " " + this.secondField + " = " + this.reply.value );
  this.expectedAnswer.value = this.ans;
}

Question.prototype.result = function(){
  if(this.ans == this.reply.value){
    alert('Correct Answer');
    this.marks = this.marks + 10;
    alert(this.marks);
    this.score.innerHTML = this.marks;
  }
  else{
    alert('Sorry Wrong answer');
    this.marks = this.marks;
    this.score.innerHTML = this.marks;
  }
}
Quiz.prototype.init = function() {
  var question = new Question();
  var this_obj = this;
  this.submit.addEventListener('click', function(event) {
    event.preventDefault();
    document.getElementById('question_count').innerHTML = clickCount;
    question.result();
  });  

  this.getQue.addEventListener('click', function(event) {
    event.preventDefault();
    question.setValue();
    question.setOperator();
    question.calculation();
    if(clickCount == 21){
      alert('Quiz Complated')
      this.disabled=true;
    }
    else{
      // question.calculation();
      question.setValue();
      question.setOperator();
      question.calculation();
      // question.getAllValues();
      this.disabled = false;
    }
    clickCount++;
  });  
}

window.onload = function() {
  var quiz = new Quiz();
  quiz.init();
}
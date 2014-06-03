var clickCount = 1;
var numberRegex = /^[-+]?[\d]*([\.][\d]*)?$/;
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
  this.testResult = document.getElementById('test_result');
  this.score = document.getElementById('score');
  this.qusList = [];
  this.marks = 0;
  this.quizForm =  document.getElementById('form');
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
    // alert('Correct Answer');
    this.marks = this.marks + 10;
    this.score.innerHTML = this.marks;
    this.testResult.value = "Correct";
    this.testResult.style.backgroundColor = '#00ff00';
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
  this.qusList.push({ "firstfield": this.firstField.value , "opt" : this.optField.value, "secondfield": this.secondField.value , "reply": this.reply.value , "testResult": this.testResult.value});
}
Question.prototype.addQuestionEntry = function() {
  var fullList = document.getElementById("list");
  for(var i=0; i < this.qusList.length; i++){
     var item = this.qusList[i];
     var elem = document.createElement("li");
     elem.value = i;
     elem.innerHTML=item["firstfield"] + " " + item["opt"] +  " " +  item["secondfield"]  + " = " +  item["reply"] + " <span name=" + item["testResult"]+ ">(" + item["testResult"] + ")</span>";
     var getClass = document.getElementsByName('wrong');
    //  for(var y = 0; y < getClass.length; y++){
    //   console.log(getClass[y]);
    //   if(getClass[y] == "wrong"){
    //     getClass[y].parentNode.setAttribute('class', 'wrong');
    //   } 
    // }
  }
  fullList.appendChild(elem);
}
Question.prototype.validate = function(event) {
  if (this.reply.value == "" || this.reply.value == null || !numberRegex.test(this.reply.value)) {
    alert("Please Enter Numeric Value");
    event.preventDefault();
  }
  else{
    this.result();
  }
}
Quiz.prototype.init = function() {
  var question = new Question();
  var this_obj = this;
  this.submit.addEventListener('click', function(event) {
    event.preventDefault();
    question.validate(event);
    question.storeEntry();
    question.addQuestionEntry();
    this.disabled = true;
  });  
  this.getQue.addEventListener('click', function(event) {
    event.preventDefault();
    question.setValue();
    question.setOperator();
    question.calculation();
    if(clickCount == 21){
      alert('Quiz Completed')
      this.disabled = true;
      document.getElementById('form').style.display = 'none';
      document.getElementById("list").style.display = 'block';
    }
    else{
      this_obj.submit.disabled = false; 
      document.getElementById('question_count').innerHTML = clickCount;
      question.setValue();
      question.setOperator();
      question.calculation();
      this.disabled = false;
      clickCount++;
    }
  });  
}

window.onload = function() {
  var quiz = new Quiz();
  quiz.init();
}
var clickCount = 1;
var numberRegex = /^[-+]?[\d]*([\.][\d]*)?$/;
function Quiz(){
  this.init();
}

Quiz.prototype.setValue = function(){
  this.firstField.value = Math.floor((Math.random() * 20) + 1);
  this.secondField.value = Math.floor((Math.random() * 20) + 1);
}
Quiz.prototype.setOperator = function() {
  var operators = ['+','-','*','/'];
  setOpt = operators[Math.floor(Math.random()*4)];
  this.optField.value = setOpt;
}
Quiz.prototype.calculation = function() {
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
      return Math.round(this.ans);
      break;
    
    default:
      this.ans = parseFloat(first) * parseFloat(sec);
      return this.ans;
    }
}

Quiz.prototype.result = function(){
  this.ans = Math.round(this.ans*100)/100;
  if(this.ans == this.reply.value){ //Correct Answer;
    this.marks = this.marks + 10;
    this.score.innerHTML = this.marks;
    this.testResult.value = "Correct";
    this.testResult.style.backgroundColor = '#00ff00';
  }
  else if(this.ans == "" || this.ans == null){
    this.testResult.value = "notAttempted";
  }
  else{ // 'Sorry Wrong answer;
    this.marks = this.marks;
    this.score.innerHTML = this.marks;
    this.testResult.value = "wrong";
    this.testResult.style.backgroundColor = '#ff0000';
  }
}
Quiz.prototype.storeEntry = function(){
  this.expectedAnswer.value = this.ans;
  this.qusList.push({ "firstfield": this.firstField.value , 
                      "opt" : this.optField.value, 
                      "secondfield": this.secondField.value , 
                      "reply": this.reply.value , 
                      "testResult": this.testResult.value, 
                      "correctAnswer" : this.expectedAnswer.value});
}

Quiz.prototype.QuestionFaced = function() { 
  this.allQue = document.getElementById("all_que");
  this.elem = document.createElement("li");
  for(var i = 1; i < this.qusList.length; i++){
    this.item = this.qusList[i];
    this.elem.value = i;
    this.elem.innerHTML = this.item["firstfield"] + " " + 
                          this.item["opt"] +  " " +  
                          this.item["secondfield"]  + " = " +  
                          this.item["reply"] + " <span class=" + 
                          this.item["testResult"]+ ">(" + 
                          this.item["testResult"] + ")</span>  <span class='correct_ans'>Ans: <span>" + 
                          this.item["correctAnswer"] + "</span></span>";
  }   
  
  this.allQue.appendChild(this.elem);
}

Quiz.prototype.init = function() {
  this.firstField = document.getElementById('value01');
  this.secondField = document.getElementById('value02');
  this.optField = document.getElementById('operator');
  this.reply = document.getElementById('reply');  
  this.expectedAnswer = document.getElementById('expected_answer');
  this.testResult = document.getElementById('test_result');
  this.score = document.getElementById('score');
  this.allQue = document.getElementById('all_que');
  this.submit = document.getElementById('submit'); 
  this.count = document.getElementById('question_count');
  
  this.qusList = [];
  this.marks = 0;
  
  this.setValue();
  this.setOperator();
  this.calculation();
  this.storeEntry();
  this.count.innerHTML = clickCount;
  this.bindEvent();
}

Quiz.prototype.bindEvent = function() {
  var obj = this;
  this.submit.addEventListener('click', function(event) {
    event.preventDefault();
    obj.result();
    obj.storeEntry();
    obj.QuestionFaced();
  
    if(clickCount == 20){
      alert('Quiz Completed')
      document.getElementById('form').style.display = 'none';
      document.getElementById("all_que").style.display = 'block';
    }
    else{
      obj.setValue();
      obj.setOperator();
      obj.calculation();
      clickCount++;
      obj.count.innerHTML = clickCount;
    }
    document.getElementById('reply').value = "";
  });  
}

window.onload = function() {
  var quiz = new Quiz();
}
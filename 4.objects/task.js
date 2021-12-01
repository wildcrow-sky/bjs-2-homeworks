"use strict";

function Student(name, gender, age) {
  this.name = name;
  this.gender = gender;
  this.age = age;
}

Student.prototype.setSubject = function (subjectName) {
  this.subject = subjectName;
}

Student.prototype.addMark = function (mark) {
  
  if(this.marks === undefined){ 
    this.marks = [mark];
    } else {
      this.marks.push(mark);
    }
  console.log(this.marks.length); // Удалить

}

Student.prototype.addMarks = function (mark1, ...mark) {

  if(this.marks === undefined) { 
    this.marks = [mark1];
  } else {
    this.marks.push(mark1);
  }
  this.marks = this.marks.concat(mark); // такое решение добавлено на тот случай, если на вход подается метод addMark и addMarks
  
}

Student.prototype.getAverage = function() {

  return this.marks.reduce((previousValue, currentValue) => previousValue + currentValue) / this.marks.length;

}

Student.prototype.exclude = function(reason) {

  this.excluded = reason;
  delete this.subject;
  delete this.marks;
  
}

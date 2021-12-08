"use strict";

//Задача №1. Печатное издание

class PrintEditionItem {

  constructor(name, releaseDate, pagesCount) {
    this.name = name;
    this.releaseDate = releaseDate;
    this.pagesCount = pagesCount;
    this.state = 100;
    this.type = null;
  }
  
  fix() {
    this.state = this.state * 1.5;
  }
  
  get state() {
    return this._state;
  }

  set state(state) {
    if (state < 0) {
      this._state = 0;
    } else if (state > 100) {
      this._state = 100;
    } else this._state = state;
  }
}

class Magazine extends PrintEditionItem {
  constructor(name, releaseDate, pagesCount) {
    super(name, releaseDate, pagesCount);
    this.type = "magazine";
  }
}

class Book extends PrintEditionItem {
  constructor(author, name, releaseDate, pagesCount) {
    super(name, releaseDate, pagesCount);
    this.author = author;
    this.type = "book";
  }
}

class NovelBook extends Book {
  constructor(author, name, releaseDate, pagesCount) {
    super(author, name, releaseDate, pagesCount);
    this.type = "novel";
  }
}

class FantasticBook extends Book {
  constructor(author, name, releaseDate, pagesCount) {
    super(author, name, releaseDate, pagesCount);
    this.type = "fantastic";
  }
}

class DetectiveBook extends Book {
  constructor(author, name, releaseDate, pagesCount) {
    super(author, name, releaseDate, pagesCount);
    this.type = "detective";
  }
}

//Задача №2. Библиотека

class Library {
  constructor(name) {
    this.name = name;
    this.books = [];
  }

  addBook(book) {
    if(book.state <= 30) return;
    this.books.push(book);
  }

  findBookBy(type, value) {
    let resultSearch = this.books.find(book => book[type] === value);
    return resultSearch !== undefined ? resultSearch : null;
  }

  giveBookByName(bookName) {
    console.log(`Количество книг до выдачи ${this.books.length}`);

    let giveMeBookIndex = this.books.findIndex(books => books.name === bookName);
    if (giveMeBookIndex < 0) return null;
    let giveMeBook = this.books[giveMeBookIndex];
    this.books.splice(giveMeBookIndex, 1);
    console.log(`Количество книг после выдачи выдачи ${this.books.length}`);
    return giveMeBook;
  }
}

// Задача №3. Журнал успеваемости

class Student {
  constructor (name) {
    this.name = name;
    this.subjects = {};
  }

  addMark(mark, subject) {
    if (mark <= 0 || mark > 5) return console.log(`Ошибка, 'оценка = ${mark}' => должна быть числом от 1 до 5`);
    if(this.subjects.hasOwnProperty(subject) === false) { 
      this.subjects[subject] = [mark];
      } else this.subjects[subject].push(mark);
  }

  getAverageBySubject(subject) {
    if(this.subjects.hasOwnProperty(subject) === false) return console.log(`${subject} => Несуществующий предмет`);
    let markSubject = this.subjects[subject];
    return markSubject.reduce((sum, mark) => sum + mark, 0) / markSubject.length;
  }
  
  getAverage() {
    let sum = 0; // Сумма всех оценок по всем предметам
    let counter = 0; // Счетчик количества предметов
    for(let subject in this.subjects) {
      sum = this.subjects[subject].reduce((sum, mark) => sum + mark, 0) + sum;
      counter = this.subjects[subject].length + counter;
    }
    return sum / counter;
  }

  exclude(reason) {
    this.excluded = reason;
    delete this.subjects;
  }
}

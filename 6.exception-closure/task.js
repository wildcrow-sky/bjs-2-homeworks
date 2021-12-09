"use strict"

// Задача №1. Форматтер чисел

function parseCount(count) {
  let digitCount = Number.parseInt(count);
  if (isNaN(digitCount)) throw new Error("Невалидное значение");
  return digitCount;
}

function validateCount(count) {
  try {
    return parseCount(count);
  } catch (error) {
    return error;
  }
}

// Задача №2. Треугольник

class Triangle {
  constructor(a, b, c) {
    if ((a + b > c) && (a + c > b) && (b + c > a)) {
      this.a = a;
      this.b = b;
      this.c = c;
    } else throw new Error("Треугольник с такими сторонами не существует");
  }

  getPerimeter() {
    return this.a + this.b + this.c;
  }

  getArea() {
    let p = this.getPerimeter() / 2;
    return Number((Math.sqrt(p * (p - this.a) * (p - this.b) * (p - this.c))).toFixed(3))
  }
}

function getTriangle(a, b, c) {
  try {
    return new Triangle(a, b, c);
  } catch(error) {
    return {
      getPerimeter() {return "Ошибка! Треугольник не существует";},
      getArea() {return "Ошибка! Треугольник не существует";}
    }
  }
}

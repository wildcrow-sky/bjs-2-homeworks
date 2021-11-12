"use strict";

// function solveEquation(a, b, c) {
//  let arr;
//  // код для задачи №1 писать здесь
//  return arr; // array
//}

//function calculateTotalMortgage(percent, contribution, amount, date) {
//  let totalAmount;
//
  // код для задачи №2 писать здесь
//
//  return totalAmount;
//}

function solveEquation(a, b, c) {
  let discr; // Объявляем дискриминант
  let x = []; // Объявляем массив корней кв.уравнения
      
    if (a === 0) { // Организуем проверку -->> аргумента а = 0
      return alert(`Аргумент (a) = ${a}. Данные заданы некорректно. Введите заново`)
    }
    
    discr = Math.pow(b, 2) - 4 * a * c;
      
    if (discr < 0) { // Проверка - дискриминант < 0
      alert(`Дискриминант меньше нуля и = ${discr}. Корней нет! Массив пустой!`);
    } else {
      x[0] = (-b + Math.sqrt(discr)) / (2 * a);
      if (discr > 0) { // Проверка - дискриминант > 0
        alert(`Дискриминант = ${discr}`);
        x[1] = (-b - Math.sqrt(discr)) / (2 * a);
      }
    }
  
  return x; // Выводим массив
}

function calculateTotalMortgage(percent, contribution, amount, date) {
  percent = String(percent); 
  contribution = String(contribution);
  amount = String(amount);

  if (isNaN(percent)) { // Валидация процентов - текст и курсор не стоит
    return `Параметр <percent> содержит неправильное значение <${percent}>`;
  } else if (percent <= 0 || percent > 40) {
    return `Параметр <percent> содержит неправильное значение <${percent}>`;
  }
  
  if (isNaN(contribution)) { // Валидация первочначального взноса - текст и курсор не стоит
    return `Параметр <contribution> содержит неправильное значение <${contribution}>`;
  } else {
    let lengthContribution = contribution.trim().length;
    if (!lengthContribution) { // Делаем проверку на наличие "0" или ""
      return `Параметр <contribution> содержит неправильное значение <${contribution}>`;
    } else if (contribution < 0 || contribution > amount) { 
      return `Параметр <contribution> содержит неправильное значение <${contribution}>`;
    }
  }
  
  if (isNaN(amount)) { // Валидация суммы кредита - текст и курсор не стоит
    return `Параметр <amount> содержит неправильное значение <${amount}>`;
  } else if (amount <= 0 || !Boolean(amount)) {
    return `Параметр <amount> содержит неправильное значение <${amount}>`;
  }
  
  if (isNaN(date)) { // Валидация даты окончания кредита (срок не менее месяца) - курсор не стоит
    return `Параметр <date> содержит неправильное значение <${date}>`;
  } else if (date <= new Date(new Date().setDate(new Date().getDate() + 31))) {
    return `Параметр <date> содержит неправильное значение <${date}>`;
  }
  
  percent = Number(percent);
  contribution = Number(contribution);
  amount = Number(amount);

  let bodyOfCredit = amount - contribution; // Тело кредита
  let monthlyRate = percent / 100 / 12; // Месячная процентная ставка
  let numberOfMonths = (date.getFullYear() - new Date().getFullYear()) * 12 + date.getMonth() - new Date().getMonth(); // Количество месяцев
  
  let monthlyPayment = (bodyOfCredit * (monthlyRate + monthlyRate / (Math.pow((1 + monthlyRate), numberOfMonths) - 1))); // Расчет ежемесячного платежа
  alert (`!!! процентная ставка ===> ${monthlyRate} \n !!! количество месяцев ===> ${numberOfMonths} \n !!! ежемесячный платеж ===> ${monthlyPayment}`);

  let totalAmount = Number((monthlyPayment * numberOfMonths).toFixed(2)); // Расчет общей суммы выплаты
  
  return totalAmount;
}
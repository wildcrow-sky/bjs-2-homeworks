"use strict";

// В заданиях для поиска макс и мин использовал не цикл, а методы Math.min.apply(null,arr) и Math.max.apply(null,arr)

// Задание 1

// Необходима проверка, что массив не пустой
// Необходима проверка - что используемые числа не больше 100 и не меньше -100
// Если такие числа есть - то их не включать в перебор

// Выбрать максимальное число массива
// Выбрать минимальное число массива
// Найти среднее арифметическое

// Создать массив данных min, max, sum, avg

function getArrayParams(arr) {
  
  let arr1 = [];
  let sum = 0;
  let avg;

  
  for (let i = 0; i < arr.length; i++) { // Создание массива без элементов не входящих в интервал (-100; 100)
    if (arr[i] > 100 || arr[i] < -100) continue;
    arr1.push(arr[i]);
  }

  if (arr1.length === 0) return `Массив arr1 - пустой`;
  
  let min = Math.min.apply(null, arr1);
  let max = Math.max.apply(null, arr1);

  for (let i = 0; i < arr1.length; i++) {
    sum = arr1[i] + sum;
  }
  
  avg = Number((sum/arr1.length).toFixed(2));
    
  return { min: min, max: max, avg: avg };
}

// Задание 2

function makeWork(arrOfArr, func) {
  
  let arrSum = []; // Создали пустой массив для списка сумм чисел
  let max; // Определяем максимальное число.
    
  if (Object.keys(arrOfArr).length === 0) return `Массив массивов пустой`; // Проверка на наличие массивов в массиве
  
  for (let key in arrOfArr) {
        
    let arr = Object.values(arrOfArr[key]); // Сформировали массив чисел по ключу
    arrSum.push(func(arr)); // Наполняем массив суммами чисел массивов
  
  }
  
  return max = Math.max.apply(null, arrSum);
}

function worker(arr) {
  let sumNumbers = 0; // Определяем сумму чисел
  
  if (arr.length === 0) return `Массив чисел пустой`; // Проверяем массив на наличие чисел
  
  for (let i = 0; i < arr.length; i++) {
    sumNumbers = arr[i] + sumNumbers;
  }
    
  return sumNumbers;
}

// Задание 3

function worker2(arr) {
  if (arr.length === 0) return `Массив чисел пустой`; // Проверяем массив на наличие чисел
  
  let maxArr = Math.max.apply(null, arr);
  let minArr = Math.min.apply(null, arr);
  let differenceMaxMin = maxArr - minArr;
  console.log(maxArr, minArr, differenceMaxMin);
  return differenceMaxMin;
}
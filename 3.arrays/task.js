"use strict";

// Проверить 2 массива - длина разная и не равны нулю

function compareArrays(arr1, arr2) {
  let result; // Определяем переменную результата
  let arr = []; // Определяем пустой массив для обработки 2 входящих массивов

  if (arr1.length === 0 && arr2.length === 0 || arr1.length != arr2.length) return false; // Проверяем массивы на длину и наличие данных

  for (let i = 0; i < arr1.length; i ++) {
    arr.push(arr1[i] - arr2[i]);
  }
  
  result = arr.every(elem => elem === 0);
  return result; // boolean
}

function advancedFilter(arr) {
  
  if (arr.length === 0) return `Массив arr - пустой`;

  let resultArr = arr.filter(elem => elem > 0 && elem % 3 === 0).map(elem => elem * 10);
  return resultArr; // array
  
}

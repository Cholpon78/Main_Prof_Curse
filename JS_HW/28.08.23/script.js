// 1.Consider an array/list of sheep where some sheep may be missing from their place. We need a function that counts the number of sheep present in the array (true means present).
// 1 вариант:
function countSheeps(arrayOfSheep) {
    return arrayOfSheep.filter(Boolean).length
  }
// 2 вариант:
function countSheeps(arrayOfSheep) {
    let newArray = arrayOfSheep.filter((sheep) => sheep !== null && sheep !== undefined)
      let count = newArray.reduce((acc, curr) => {
        if (curr === true){
          return acc + 1 
        }else{
          return acc
        }
      },0)
      return count
    }

//2. Создайте функцию, которая возвращает значение, умноженное на 50 и увеличенное на 6. Если введенное значение является строкой, оно должно возвращать «Ошибка».
// 1 вариант:
function problem(x){
  if ( typeof (x) == 'string'){
    return 'Error'
  }else{
    return (x*50)+6
  }
 }

// с помощью тернарного оператора
function problem(x){
  return typeof x == 'string' ? 'Error' : (x*50)+6
  }

  //3. Создайте функцию, вызываемую shortcutдля удаления строчных гласных ( a, e, i, o, u) в заданной строке.
  function shortcut (string) {
    return string.replace(/[aeiou]/g, '')
  }
 // Почему решение ниже ошибочно
 function shortcut (string) {
  return string.replace(['a','e','i','o','u'], '')
   }

// 4. Write function bmi that calculates body mass index (bmi = weight / height2).
// if bmi <= 18.5 return "Underweight"
// if bmi <= 25.0 return "Normal"
// if bmi <= 30.0 return "Overweight"
// if bmi > 30 return "Obese"

// 1. вариант 
function bmi(weight, height) {
  switch(true) {
      case (weight/(height**2)) <= 18.5: return "Underweight";
      case (weight/(height**2)) <= 25.5: return  "Normal";
      case (weight/(height**2)) <= 30.0: return  "Overweight";
      default: return "Obese"
  }; 
 }

// 2. if else
function bmi(weight, height) {
  if ((weight / (height ** 2)) <= 18.5) {
    return "Underweight";
  } else if ((weight / (height ** 2)) <= 25.0) {
    return "Normal";
  } else if ((weight / (height ** 2)) <= 30.0) {
    return "Overweight";
  } else {
    return "Obese";
  }
}

//5.Этот код не выполняется должным образом. Попытайтесь выяснить, почему.
// function multiply(a, b){
//   a * b
//  }
// решение
function multiply(a, b){
  return a * b
 }

//6.Завершите метод, который принимает логическое значение и возвращает "Yes"строку для true или "No"строку для false.
function boolToWord( bool ){
  return bool === true? 'Yes': 'No'
}

//7. Напишите программу, которая находит сумму всех чисел от 1 до num. Число всегда будет положительным целым числом, большим 0.
let summation = function (num) {
  let sum = 0;
  for(let i=0; i<=num;i++){
    sum+=i
  }
  return sum;
}

//8. Я новичок в программировании и теперь хочу получить сумму двух массивов... Фактически сумму всех их элементов. Я буду признателен за вашу помощь.
//PS В каждый массив входят только целые числа. Выходные данные тоже являются числом.
function arrayPlusArray(arr1, arr2) {
  return arr1.concat(arr2).reduce((acc, curr)=> acc+curr, 0)
 }

//9. Натан любит кататься на велосипеде. 
//Поскольку Натан знает, как важно избегать обезвоживания, он выпивает 0,5 литра воды за час езды на велосипеде.
//Вам дано время в часах, и вам нужно вернуть количество литров, которое выпьет Натан, округленное до наименьшего значения.
function litres(time) {
  let litr = Math.floor(time * 0.5)
  return litr;
}
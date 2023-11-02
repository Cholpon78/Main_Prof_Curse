// Напишите функцию checkDate() которая в консоль отобразит количество дней до конца текущего месяца. 
// Примечание: инициализация дат должна быть внутри функции

                                // const checkDate = ()=>{
                                //     let currentDate = new Date()
                                //     let currentMonth = currentDate.getMonth()
                                //     let currentYear = currentDate.getFullYear()

                                //     const nextMonthDate = new Date(currentYear, currentMonth + 1, 1)
                                //     const daysUntilEndOfMonth = Math.floor(
                                //     (nextMonthDate - currentDate) / (1000 * 60 * 60 * 24)
                                //     );
                                // console.log(`До окнца месяца осталось ${daysUntilEndOfMonth}`);
                                // }
                                // checkDate()

// Создайте функцию isItFridayToday(), которая выводит сообщение согласно условию:
// Если текущая дата определит пятницу, функция должна в консоль отобразить ответ “Сегодня пятница”!
// Если пятница была вчера - “Пятница была вчера”
// Если пятница будет завтра - “Завтра пятница!”
// Иначе необходимо вывести “Пятница будет через n дней”, где n - это количество дней до пятницы.

// Предусмотрите вывод 4 пункта (дня, дней)

let days = [
  "Сегодня пятница",
  "Пятница была вчера",
  "Завтра пятница!",
 ]; 

const isItFridayToday=()=>{
    const currentDate = new Date().getDay()
if (currentDate === 5){
    console.log(days[0]);
}else if(currentDate === 4 ){
    console.log(days[1]);
}else if(currentDate === 6){
    console.log(days[2]);
}else {
    console.log(`Пятница будет через ${6-currentDate} дней`);
}
    }
isItFridayToday()
Создайте класс Delivery со свойствами name и phone. Помимо описанных свойств, добавьте геттер validPhone, которое проверяет значение свойства phone на вхождение знака + в начале строки. Если знак отсутствует, геттер validPhone должно принять булевое значение false, в противном случае — true. Создайте экземпляр класса Delivery и в качестве аргументов конструктора укажите значения переменных name и phone. 
Пример значений переменных: 
let name = "Pizza" 
let phone = "81234567890" 

Пример результата: false


В программе создан класс Permissions, свойства которого описывают права пользователей на редактирование статей на сайте. Создайте новый класс Users, который наследуется от класса Permissions. Дополнительно в классе Users добавьте свойство name, значение которого класс принимает в качестве аргумента конструктора.


Входные данные:
class Permissions {
    constructor() {
        this.create = false
        this.read = true
        this.update = false
        this.remove = false
    }
}

Все печатные издания имеют название, год издания, состоят из определенного количества страниц, а ещё могут портиться. 

Создайте класс PrintEditionItem со свойствами: name, releaseDate, pagesCount, state, type. 

Конструктор класса должен принимать название (name), дату выпуска (releaseDate) и количество страниц (pagesCount) в качестве аргумента. Состояние (state) по умолчанию установите равным 100, тип type пока должен быть равен null. . 
Испорченное издание можно подклеить и этим улучшить его состояние. Создайте метод fix(), увеличивающий state в полтора раза. Метод не должен принимать аргументов. 
Нельзя улучшить новое издание и бесполезно подклеивать полностью уничтоженное. Создайте «сеттер» для свойства state, принимающий в качестве аргумента новое состояние печатного издания (число). Если новое состояние меньше 0, «сеттер» должен записать в свойство state значение 0. Если новое состояние больше 100, должно быть записано значение 100. В остальных случаях в свойство state записывается переданное в «сеттер» значение. 

Создайте «геттер», который читает значение свойства state. Создайте класс Magazine, который будет наследоваться от класса PrintEditionItem. Конструктор класса должен принимать такие же параметры, как и класс-родитель. От базового печатного издания журнал отличается только типом. Значение свойства type равно "magazine". 

Создайте класс Book, наследующийся от класса PrintEditionItem. Конструктор класса должен принимать такие же параметры, как и класс-родитель, а также имя автора книги author. Значение свойства type равно "book".

Создайте классы NovelBook для романов, FantasticBook для фантастических произведений и DetectiveBook для детективов, наследующиеся от класса Book. Значения свойства type равны "novel", "fantastic" и "detective" соответственно.


Также рекомендуется выполнить список задач из сервиса codewars
https://www.codewars.com/
Необходимо зарегистрироваться и выполнить список задач на функции:

https://codewars.com/kata/56cd44e1aa4ac7879200010b/train/javascript
String.prototype.isUpperCase = function(str) {
  return this.toString()===this.toUpperCase()
}
https://www.codewars.com/kata/58fa273ca6d84c158e000052/train/javascript
 return String(n).length

https://www.codewars.com/kata/515de9ae9dcfc28eb6000001/train/javascript
https://www.codewars.com/kata/57f8ff867a28db569e000c4a/train/javascript
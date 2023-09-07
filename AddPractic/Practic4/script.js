// Подопытные данные

// Массив чисел (примитивы)
const numbers = [1,3,6,2,4,0,9,7,5,10,15,12,11,9,2,7];
// //добавить элемент в конец массива чисел (число 45);
// numbers.push(45)
// console.log(numbers);
// //добавить несколько элементов в конец массива чисел (числа 45, 68, 23);
// numbers.push(45,68,23)
// console.log(numbers);

//удалить последний элемент из массива чисел.
            // numbers.pop()
            // console.log(numbers);
//добавить элемент в начало массива чисел (число 9)
            // numbers.unshift(9)
            // console.log(numbers);
//удалить первый элемент из массива чисел
            // numbers.shift()
            // console.log(numbers);
// найти индекс числа 0 в массиве чисел
//             let ind= numbers.indexOf(0)
//             console.log(ind);
// найти индекс последнего вхождения числа 9 в массиве чисел
                // let last = numbers.lastIndexOf(9)
                // console.log(last);
//объединить наш массив чисел в одно большое число (т.е. без разделителей)
                // let num = numbers.join('')
                // console.log(num);

//пройтись по массиву чисел, для каждого числа вывести, является ли оно четным.
                // let num = numbers.filter((elem)=> elem%2 === 0)
                // console.log(num);

//из массива чисел, получить новый массив, который будет содержать квадраты чисел
                // let sqt = numbers.map((el)=> Number(el*el))
                // console.log(sqt);

//в массиве чисел, найти первое число, кратное 4
                // let num = numbers.find((el)=> el % 4 === 0)
                // console.log(num);
//в массиве чисел, найти индекс первого числа, кратного 3
                // let ind = numbers.findIndex((el)=> el%3 ===0)
                // console.log(ind);

//получить из массива чисел массив только нечетных чисел
                // let arr = numbers.filter((el)=> el%2 === 0)
                // console.log(arr);
//



// Массив строк (примитивы)
const strings = ['this', 'is', 'an', 'array', 'of', 'simple', 'strings'];
//добавить в массив строк новые элементы. Нужно добавить после строки 'simple' две строки: 'and', 'lowercased'. То есть вставляем элементы в середину массива.
            // strings.splice(5, 'and', 'lowercased')
// console.log(strings);

//заменить в массиве элементы: вместо строк 'simple', 'and', 'lowercased', теперь должна быть строка 'tiny'
        // strings.splice(5,3, 'tiny');
        // console.log(strings);

//Методы поиска в массиве проверить, содержит ли массив строк строку 'array'.
        // let include =strings.includes('array')
        // console.log(include);

//объединить наш массив строк в одно предложениею. Результатом должна быть строка, разделенная пробелами.
        // let words = strings.join(" ")
        // console.log(words);

//вывести в консоль массив строк в обратном порядке
            // let rev = strings.reverse()
            // console.log(rev);
//пройтись по массиву строк, для каждой строки, если она меньше 4 символов, выводить short, иначе - long
                // let str = strings.filter((el)=> {
                //     if(el.length < 4) {
                //         return console.log('short');
                //     } return console.log('long');
                // });

                // 2 метод
                // strings.forEach((el)=> {
                //     if(el.length < 4) {
                //          console.log('short');
                //         } else console.log('long');
                // })
                //3 метод
                // strings.forEach((el)=> el.length < 4 ? console.log ('short'): console.log('long'));

//из массива строк получить новый массив, который будет содержать массив ОБЪЕКТОВ, у которых будут свойства:
//value - сама строка
//size - если длина строки меньше 4 символов, то short, иначе - long
                // const newArr = strings.map((el)=> ({
                // value: el,
                // size: el.length < 4 ? 'short': 'long'
                // }));
                // console.log(newArr);

//получить из массива строк массив тех строк, у которых длина больше 5
                // let length = strings.filter((el)=> el.length > 5)
                // console.log(length);

//



// Массив объектов


const ball = {
    name: "Ball",
    category: "Sport",
    img: "./assets/ball.jpeg",
    price: 100
};

const gloves = {
    name: "Gloves",
    category: "Sport",
    img: "./assets/gloves.jpg",
    price: 140
};
const shoes = {
    name: "Sport shoes",
    category: "Sport",
    discount: true,
    img: "./assets/shoes.png",
    price: 320
};
const hammer = {
    name: "Hammer",
    category: "Tools",
    img: "./assets/hammer.jpeg",
    price: 40
};
const saw = {
    name: "Saw",
    category: "Tools",
    discount: true,
    img: "./assets/saw.jpeg",
    price: 75
};
const shark = {
    name: "Shark toy",
    category: "Other",
    img: "./assets/shark.jpeg",
    price: 45
};

let products = [ball, gloves, shoes, hammer, saw, shark];



//добавить объект в конец массива объектов (создать новый объект товара, по образу существующих).
        // const newBall = {
        //     name: "Ball",
        //     category: "Sport",
        //     img: "./assets/ball.jpeg",
        //     price: 100
        // };
        // let result2 = products.push(newBall)
        // console.log(result2);
//найти индекс объекта shark в массиве объектов
            // let indexOfProduct = products.indexOf(shark)
            // console.log(indexOfProduct);

//создать два новых объекта. Первый - через литерал объекта и в нем должны быть такие же свойства как в объекте ball, а второй - как копию объекта ball. 
//Проверить, содержит ли массив объектов эти объекты. Пояснить результат.
             // const newBall2 = ball;
             // const res1 = products.includes(newBall2)
             // console.log(res1);
//пройтись по массиву товаров, вывести в консоль названия всех товаров
            // products.forEach((el)=> {
            //     console.log(el.name)
            // })
//из массива товаров получить массив имен товаров
            // const nameOfProducts = products.map((el)=> el.name)
            // console.log(nameOfProducts);

//из массива товаров получить массив "уцененных" товаров. В новом массиве должны быть объекты товаров, у которых цена вдвое меньше, чем у исходных товаров.
            // const discountProduct = products.filter((el)=> el.discount === true).map((el)=> {

            //     if(el.discount === true){
            //         el.price = el.price/2
            //     }    return el
            //     ;
            // }); console.log(discountProduct);
//в массиве объектов найти первый товар категории Tools
            // let tools = products.find((el)=> el.category === "Tools")
            // console.log(tools);
//получить из массива товаров массив из тех товаров, у которых цена больше 100.
            // let newProduct = products.filter((el)=> el.price > 100)
            // console.log(newProduct);
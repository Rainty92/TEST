
//----------for in (для получения индекса)

// for(index in arr) {
//     console.log(index) // выводит индексы
//     console.log(arr[index]) // выводит значения
// }


//---------for of (для получения значения)

// for(value of arr) {
//     console.log(value) // выводит значения
// }


//---------forEach (перебор по значенияю, индексу, массиву)

// arr.forEach(function (item, index, arr){
//     console.log(item, index) // выводит значения + индекс
// })

//Для того чтобы обратиться к контексту(массиву) через this необходимо название массива добавить в конец

// arr.forEach(function (item, index, arr){
//     console.log(this)
// },arr)

//В данном цикле можем использовать стрелочную функцию

// arr.forEach(e=>{console.log(e)})

//-----------map (Возвращает новый измененный массив)


// const arrName = ['ivaN', 'anDrey', 'vAdim']

// let correctName = arrName.map((item)=>{
//     return item[0].toUpperCase() + item.slice(1).toLowerCase();
// })

// console.log(arrName)
// console.log(correctName)

//-----------filter (Возвращает значения которые соответствуют условиям)

// const mix = ['test', 2, true, 76, 'hello', 65, '123'];
// const number = [-5, 24, 4, -76, 2,-9,5];

// let words = [];
// //Пушим в пустой массив только строчные буквенные выражения
// //через for


// for(let i = 0; i < mix.length; i++) {
//     if(typeof mix[i] === 'string' && isNaN(mix[i])) {
//         words.push(mix[i])
//     }
// }

// console.log(words)

// //через filter

// let filterWords = mix.filter((item)=>{
//     return typeof item === 'string' && isNaN(item);
// })

// console.log(filterWords)

// //Выводим числа которые больше 0

// let positiveNumber = number.filter((item) => item > 0)

// console.log(positiveNumber)


//-----------some (Возвращает true/false относительно заданного условия, как только находит таковое)

// const mix = ['test', 2, true, 76, 'hello', 65, '123'];

// let result = false;

// //через for

// for(let i = 0; i < mix.length; i++) {
//     if(typeof mix[i] === 'number') {
//         result = true;
//         break;
//     }
// }

// console.log(result)

// //через some

// let result2 = mix.some(function(item) {
//     console.log(item)
//     return typeof item === 'number'
// })

// console.log(result2) // true на mix[1] так как там число 2


//----------every (Проверяет каждый элемент относительно условия и если все элементы проходят проверку возвращает true || false если не проходят)

// const mix = ['test', 2, true, 76, 'hello', 65, '123'];

// let result = mix.every(function(item){
//     console.log(item)
//     return typeof item === 'number'
// })

// console.log(result) // false так как есть строки

//---------reduce () так же есть reusceRight который начинает перебирать справа налево

// const number = [31, 24, 4, -76, 2,-9,5];

// //через for

// let sum = 0

// // for(let i = 0; i < number.length; i++) {
// //     sum += number[i]
// // }
// // console.log(sum)

// let sum2 = number.reduce(function(accumulator,item){ // возвращает дополнительный параментр аккумулятор
//     // console.log(accumulator + item)  // accumulator - передающийся элемент
//     console.table({accumulator, item})
//     return accumulator
// }) // более правильная запись с добавлением 0 -  },0) тем самым мы задаем начальный параметр

// console.log(sum2)
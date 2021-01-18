fetch('./BDHeroes.json')
    .then(response => response.json())
    .then(data => practice(data))
    .catch(err => console.error(err))


function practice(response) {

    console.log(1123)

// -------------------------------------------------
    // const allHeroes = []
    // response.forEach(item => allHeroes.push(item.name)) // Возвращаем массив имен персонажей ----------------------------------------------- forEach
    // console.log(allHeroes)
// -&&-
    // const allHeroes = response.map(item => item.name) // Если нет надобности работать со всеми данными мы можем использовать map сократив запись ------------------------------- map
    // console.log(allHeroes)

// мы можем вывести в новый массив лишь интересующие нас параметры  ------------------------------------------------------map

// const allHeroes = response.map((item) => ({
//     name: item.name,
//     gender: item.gender,
//     photo: item.photo
// }))
// console.log(allHeroes)

// так же мы можем воспользоваться деструктуризацией упростив синтаксис

// const allHeroes = response.map(({name, gender, photo})=>({ //--------------------------------------------------------map
//     name,gender,photo
// }))
// console.log(allHeroes)
// -------------------------------------------------    

//найдем всех живых героев

// const aliveHeroes = response.filter(item => item.status === 'alive') //--------------------------------------------filter

// console.log(aliveHeroes)

//-----------------------------------------------------

//проверим есть ли среди наций асгардец

// const asgardianHero = response.some(item => item.citizenship === 'Asgardian'); //------------------------------------some
// console.log(asgardianHero)

// //найдем первого асгардца

// const whoAsgardian = response.find(item => item.citizenship === 'Asgardian') //------------------------------------find(возвращает первое найденное совпадение)
// console.log(whoAsgardian)

// //найдем всех асгардцев

// const allAsgardian = response.filter(item => item.citizenship === 'Asgardian') //------------------------------------some
// console.log(allAsgardian)

//-------------------------------------------------------

//проверим у всех ли героев есть пол

// const genderHero = response.every(item => item.gender) // -------------------------------------------------------every
// console.log(genderHero)

//------------------------------------------------------------

//выведем в отдельный массив лишь имена героев

// const heroes = response.reduce((accum, item)=>{ -------------------------------------------------------------- reduce
//     return accum.concat(item.name)
// },[])

// console.log(heroes)

//-------------------------------------------------------

//отсортируем все фильмы
// const films = response.reduce((accum, item)=>{ //----------------------------------------------------------- reduce
//     return accum.concat(item.movies)
// },[])

// console.log(films)

// // уберем повторяющиеся фильмы

// const filtrMovies = films.filter((item, i) => films.indexOf(item) === i && item)  ---------------------------------------filter

// console.log(filtrMovies)

//сделаем так чтобы фильмы не повторялись


}
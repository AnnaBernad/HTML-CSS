// let dog = {
//     name:'Los',
//     breed: 'puddle',
//     age: '4',
//     height: '43',
//     color: 'white',
// };
// let person = {
//     name: 'Alina',
//     age: '23',
//     job: 'nurse',
//     husband: false,
//     sister: true,
// };
// let car = {
//     model: 'opel',
//     type: 'crossover',
//     engineCapacity: '3,5',
//     color: 'red',
//     drive: 'all-wheel',
// }
// let dogs = [
// {name: 'Brams', breed: 'shepherd'},
// {name: 'Gosha', breed: 'york'},
// {neme: 'Lays', breed: 'pitbull'},
// {name: 'Ozzy', breed: 'labrador'},
// {name: 'Spike', breed: 'GreatDane'},
// ];
// let people = [
//     {name: 'Vasya', age: '24'},
//     {name: 'Oksana', age: '14'},
//     {name: 'Vasylyna', age: '28'},
//     {name: 'Ira', age: '20'},
//     {name: 'Oleg', age: '36'},
// ];
// let cars = [
//     {model: 'opel', color: 'red'},
//     {model: 'tesla', color: 'black'},
//     {model: 'nissan', color: 'white'},
//     {model: 'shkoda', color: 'blue'},
//     {model: 'mazda', color: 'green'},
// ];
// console.log(dogs);
// console.log(people);
// console.log(cars);
// let users = [
//     {name: 'vasya', age: 31, status: false},
//     {name: 'petya', age: 30, status: true},
//     {name: 'kolya', age: 29, status: true},
//     {name: 'olya', age: 28, status: false},
//     {name: 'max', age: 30, status: true},
//     {name: 'anya', age: 31, status: false},
//     {name: 'oleg', age: 28, status: false},
//     {name: 'andrey', age: 29, status: true},
//     {name: 'masha', age: 30, status: true},
//     {name: 'olya', age: 31, status: false},
//     {name: 'max', age: 31, status: true}
// ];
// console.log(users[8].status);
// console.log(users[10].status);
// console.log(users[9].name);
// console.log(users[2].name);
// console.log(users[6].age);
// console.log(users[3].age);
// console.log(users[4].age + users[4].name);
// console.log(users[5].age + users[5].status);
// let content = document.getElementById("content");
// console.log(content);
// // content.style.backgroundColor = 'red';
// let rules = document.getElementById("rules");
// // console.log(rules);
// // content.innerText = 'Goodbye';
// // rules.innerText = 'Good Weather';
// // rules.style.backgroundColor = 'red';
// // let ul = document.getElementById('78');
// // console.log(ul);
// // ul.style.backgroundColor = 'red';
// // content.style.color = 'blue';
// // rules.style.color = 'blue';
// // ul.style.color = 'blue';
// console.log(rules.className);
// Task 3(2)
// let dog = {
//     breed: 'puddle',
//     height: '43',
//     color: 'white',
// };
// let person = {
//     name: 'Alina',
//     age: '23',
//     husband: false,
// };
// let car = {
//     model: 'opel',
//     type: 'crossover',
//     engineCapacity: '3,5',
// };
// let flat = {
//     town: 'Lviv',
//     floor: '3',
//     rooms: '2',
// };
// let weather = {
//     sky: 'cloudy',
//     temperature: '15',
//     wind: '10m/s',
// };
// let cat = {
//     name: 'Bud',
//     color: ['white', 'black', 'red'],
//     owner: {
//         name: 'Anna',
//         age: '18',
//     },
// };
// let men = {
//     name: 'Oleg',
//     nation: ['dutch', 'german'],
//     wife: { name: 'Olya',
//     height: '167sm',
//     },
// };
// let flower = {
//     species: 'rose',
//     type: ['plant', 'flower'],
//     from: {
//         country1: 'England',
//         country2: 'Holland',
//     },
// };
// let market = {
//     name: 'Metro',
//     sell: ['food', 'lamps', 'higiene'],
//     hostcountry: {
//         name: 'France',
//         company: 'inc',
//     },
// };
// let shark = {
//     spieces: 'Great white shark',
//     livein: ['oceans', 'seas'],
//     height: {
//         adult: '6m',
//         child: '3m',
//     },
// };
// let arr = [dog, person, car, flat, weather, cat, men, flower, market, shark];
// for (const value in arr){
//     console.log(Object.keys(arr[value]));
// };
// let i = 0;
// while (i < arr.length){
//     console.log(arr[i]);
//     i++;
// };
// for (let i = 0; i < arr.length; i++){
//     console.log(arr[i]);
// };
// for(const value of arr){
//     console.log(value);
// };
// let dog2 = JSON.stringify(dog);
// console.log(dog2);
// let person2 = JSON.stringify(person);
// console.log(person2);
// let car2 = JSON.stringify(car);
// console.log(car2);
// let flat2 = JSON.stringify(flat);
// console.log(flat2);
// let weather2 = JSON.stringify(weather);
// console.log(weather2);
// let dog3 = JSON.parse(dog2);
// console.log(dog3);
// let person3 = JSON.parse(person2);
// console.log(person3);
// let car3 = JSON.parse(car2);
// console.log(car3);
// let flat3 = JSON.parse(flat2);
// console.log(flat3);
// let weather3 = JSON.parse(weather2);
// console.log(weather3);
// let arr2 = [];
// for (let i = 0; i < arr.length; i++ ){
//    arr2[i] = JSON.stringify(arr[i]);  
// }
// let users = [
//     {
//     name: 'vasya', 
//     age: 31, 
//     status: false, 
//     skills: ['java', 'js']
// }, 
// {
//     name: 'petya', 
//     age: 30, 
//     status: true, 
//     skills: ['java', 'js', 'html']
// }, 
// {
//     name: 'kolya', 
//     age: 29, 
//     status: true, 
//     skills: ['mysql', ',mongo']
// }, {
//     name: 'olya', 
//     age: 28, 
//     status: false, 
//     skills: ['java', 'js']
// }, {
//     name: 'max', 
//     age: 30, 
//     status: true, 
//     skills: ['mysql', ',mongo']
// }
// ];
// for (let i = 0; i < users.length; i++){
//     for( n = 0; n < users.length; n++){
//         if (n === users.length - 1)
//         console.log(users[i],[n]);
//         else
//         console.log(users[i],[n])
//     }
// }
// let users = [{
//     name: 'vasya',
//     age: 31,
//     status: false,
//     address: {city: 'Lviv', country: 'Ukraine', street: 'Shevchenko', houseNumber: 1}
// }, {
//     name: 'petya',
//     age: 30,
//     status: true,
//     address: {city: 'New York', country: 'USA', street: 'East str', houseNumber: 21}
// }, {
//     name: 'kolya',
//     age: 29,
//     status: true,
//     address: {city: 'Budapest', country: 'Hungary', street: 'Kuraku', houseNumber: 78}
// }, {
//     name: 'olya',
//     age: 28,
//     status: false,
//     address: {city: 'Prague', country: 'Czech', street: 'Paster', houseNumber: 56}
// }, {
//     name: 'max',
//     age: 30,
//     status: true,
//     address: {city: 'Istanbul', country: 'Turkey', street: 'Mikar', houseNumber: 39}
// }, {
//     name: 'anya',
//     age: 31,
//     status: false,
//     address: {city: 'Rio', country: 'Brasil', street: 'Ronaldi', houseNumber: 5}
// }, {
//     name: 'oleg',
//     age: 28,
//     status: false,
//     address: {city: 'Montreal', country: 'Canada', street: 'Acusto', houseNumber: 90}
// }, {
//     name: 'andrey',
//     age: 29,
//     status: true,
//     address: {city: 'Quebeck', country: 'Canada', street: 'Binaro', houseNumber: 33}
// }, {
//     name: 'masha',
//     age: 30,
//     status: true,
//     address: {city: 'Moscow', country: 'Russia', street: 'Gogolia', houseNumber: 1}
// }, {
//     name: 'olya',
//     age: 31,
//     status: false,
//     address: {city: 'Portland', country: 'USA', street: 'Forest str', houseNumber: 4}
// }, {
//     name: 'max',
//     age: 31,
//     status: true,
//     address: {city: 'Cairo', country: 'Egypt', street: 'Seashore', houseNumber: 45}
// }];
// let addresses = [];
// for (let i = 0  ; i < users.length; i++){
//     addresses[i] = users[i].address;
// };
// let numbers = [1, 987, 567, 788, 473, 86, 248, 76, 4, 29, 867, 12, 87, 274, 57, 25, 86, 34, 98, 10]; 

// let sortnumbersplus = numbers.sort((a, b) =>  a - b);
// console.log(sortnumbersplus);

// let sortnumbersminus = numbers.sort((a, b) =>  b - a);
// console.log(sortnumbersminus);

// let numbers3 = numbers.filter((value) => value % 3 == 0);
// console.log(numbers3); 

// let numbers10 = numbers.filter((value) => value % 10 == 0);
// console.log(numbers10); 

// numbers.forEach(value => {
//     console.log(value);
// });

// let numbersmap = numbers.map((value) => {
//     return value*3;
// });
// console.log(numbersmap);

// let names = ['Anna', 'Kolya', 'Olya', 'Olena', 'Oleg', 'Oksana', 'Dim', 'Danylo', 'Katya', 'Tetyana', 'Volodymyr', 'Merichka', 'Mar', 'Nastya', 'Oles'];

// let namessort = names.sort();
// console.log(namessort);

// let namessort2 = namessort.reverse();
// console.log(namessort2);

// let namesfilter = names.filter((value) => {
//     if (value.length > 4){
//         console.log(value);
//     }
// });

// let namesmap = names.map((value) => {
//     return value + '!';
// });
// console.log(namesmap);

let users = [ 
    {name: 'vasya', age: 31, status: false}, 
    {name: 'petya', age: 30, status: true}, 
    {name: 'kolya', age: 29, status: true}, 
    {name: 'olya', age: 28, status: false}, 
    {name: 'max', age: 30, status: true}, 
    {name: 'anya', age: 31, status: false}, 
    {name: 'oleg', age: 28, status: false}, 
    {name: 'andrey', age: 29, status: true},
     {name: 'masha', age: 30, status: true}, 
     {name: 'olya', age: 31, status: false}, 
     {name: 'max', age: 31, status: true} 
    ];

    // let usersage = users.sort((a, b) => {
//  if(b.age > a.age ){
//     return -1
//  }
// });
// console.log(usersage);

// let usersage = users.sort((a, b) => {
//     if(a.age > b.age ){
//        return -1
//     }
//    });
//    console.log(usersage);

// let usersnames = users.sort((a, b) => {
//     if(a.name > b.name){
//         return -1
//     }
// });
// console.log(usersnames);

// let usersnames = users.sort((a, b) => {
//     if(b.name > a.name){
//         return -1
//     }
// });
// console.log(usersnames);
//     console.log(users);

// let newusers = users.map((user, index) => {
//     let newValue = JSON.parse(JSON.stringify(user));
//         newValue.id = index;
//         console.log(newValue);
//     return user
// });
// console.log(newusers);

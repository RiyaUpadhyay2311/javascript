
//maps key value pair key of any datatype
//object key should be of string


// const fruits=new Map(
//     [["apples",500],//key,value
//     ["bananas",300],
//     ["oranges",400]
// ]);

// console.log(fruits);



//using set method re-initialize of keys->modified or insert a new working 
// const fruits=new Map();
// // set map values

// fruits.set("apples",500);
// fruits.set("bananas",300);
// fruits.set("oranges",400);

// console.log(fruits);


//modified
// fruits.set("apples",200);


// typeof fruits; 

// console.log(fruits.size)//number of elements in class


//delete

// console.log(fruits.delete("apples"));


// console.log(fruits.clear());


// console.log(fruits.has("apples"));//membership eleent



//looping 


// let text="";
// fruits.forEach(function(value,key){
//   text+=key + '=' + value;
// })
// console.log(text);


//ENTRIES

// let text="";
// for(const x of fruits.entries()){
//     text +=x;//string with commas
// }
// console.log(text);


// let text="";

// for(const x of fruits.keys()){
//     text +=x;
// }
// console.log(text);

//VALUES

// let text="";

// for(const x of fruits.values()){
//     text +=x;
// }
// console.log(text);


//OBJECT.METHOD




// let total =0;

// for(const x of fruits.values()){
//     total+=x;
// }
// console.log(total);



//CREATE OBJECTS;;;

// const apples = {name:'Apples'};
// const bananas = {name:'Banana'};
// const oranges = {name:'Orange'};


// //create a map

// const fruits = new Map();


// fruits.set(apples,500);
// fruits.set(bananas,600);



// fruits.get("apples");//return undefined beacuse apples is an object not a string


//DESTRUCTURING        

// const person={
//     firstName:"John",
//     lastName:"Doe",
//     age:50,
// };


//destructuring

// let{firstName,lastName} = person;

// console.log(firstName);
// console.log(lastName);


//order of property does not matter::::


// let{lastName,firstName,} = person;

// console.log(firstName);
// console.log(lastName);

//does not change the original obj

//if missing properties->deafult value 


// const person={
//     firstName:"John",
//     lastName:"Doe",
//     age:50,
// };


//destructuring

// let{firstName,lastName,country="US"} = person;

// console.log(firstName);
// console.log(lastName);







//Alias Creation



// const person={
//     firstName:"John",
//     lastName:"Doe",
//     age:50,
// };



// let{lastName: name}=person;

// console.log(name);









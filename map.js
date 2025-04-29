
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
//now it will not access through lastName


// let name="GrurkulTheSecond";
// //destructuring
// let[a1,a2,a3,a4,a5]= name;

// console.log(a1);





// const fruits = ["Bananas","oranges","apples","mangoes"];

// //destructuring

// let[fruits1 , fruits2] = fruits;

// console.log(fruits1);



// const fruits = ["Bananas","oranges","apples","mangoes"];

// //skipping

// let[fruits1,,,fruits2]=fruits;

// console.log(fruits);



// const fruits = ["Bananas","oranges","apples","mangoes"];


// let([0]:fruits1,[2]:fruits2) = fruits; 
// console.log(fruits1,fruits2);



//:::::::::::::::::::REST PROPERTY::::::::::::



// const numbers=[10,20,30,40,50,60,70];


// //destructuring by using rest operator

// const[a,b,...rest] = numbers;//rest carry the array from 30 to 70


// console.log(a,b,rest);









// const fruits=new Map(
//         [["apples",500],//key,value
//         ["bananas",300],
//         ["oranges",400]
//     ]);


//     //destruturing

//     let text="";
//     for(const[key,value]of fruits){
//         text +=key +"is"+value;
//     }



// let firstName = "john";
// let lastName = "Doe";

// //swapping by destructuring 

// [firstName,lastName]=[lastName,firstName];
// console.log(firstName);



//javascript exponent (**)


// let x = 5;
// let z = x**2;
// console.log(z);





//Math.pow(x,y)

// let x = 5;
// let z =Math.pow(x,2);
// console.log(z);



// let x=5;
// x**=2;//here modification happens



//ARRAY INCLUDES
// const fruits = ["Bananas","Oranges","apples","Mango"];
// fruits.includes("Mango");


// //changing postion for searching
//let x =  fruits.includes("Bananas",3);//false because it starting searching from 3rd position

// console.log(x);

//includes() methods is case sensitive


//TRAILING COMMA :- in last



// const arr = ["one","two","three",];
//last one is trailing 
// const arr = ["one","two","three",,];//will give 4 size because of 2 trailing comma creates an undefined




// const sparseArray [1,,4,5,];


// const person={
//     firstName:"john",
//     lastName:"Davis",
//     age:30,
// }
//in onject cannot create sparse object it will give you a syntax error


// const person={
//         firstName:"john",
//        ,
//         age:30,
//     }























//simultaneously multitasking
//topic of asynchronous code and some options fro multitasking

//three statesgies::



//CALLBACKS  funciton pass as an argument in another function
//it called when initial function has finished


// function doSomething(callback){
//     callback();
// }


// function sayHi(){
//     console.log("hiii");
// }


// doSomething(sayHi);



// function judge(grade){
//     switch(true){
//         case grade =="A":
//             console.log("You got an",grade,":well done");
//             break;
//             case grade =="B":
           
//             console.log("You got an",grade,":good ");
//             break;
//             case grade =="C":
//             console.log("You got an",grade,":ok");
//             break;
//             case grade =="D":
//             console.log("You got an",grade,":hmmm");
//             break;
//             default:
//                 console.log("An",grade,"what");
//     }
// }


// function getGrade(score,callback){
//     let grade;
//     switch(true){
//         case score >=90:
//             grade = "A";
//             break;
//             case score >=80:
//             grade = "B";
//             break;
//             case score >=70:
//             grade = "C";
//             break;
//             case score >=60:
//             grade = "D";
//             break;
//             default:
//                 grade = "F";
                
//     }
//     callback(grade);
// }


// getGrade(85, judge);




//the callback fn become really valuable in an asynchronous 


// setInterval(encourage , 500)//an example of call back funtion setInterval is a timer
// function encourage(){

//     console.log("You are doing great");

// }




//PROMISESS

//the sequence of our code in a slightly easier to maintain way


//fn needs two parameters, and these parameters are callbacks 1.resolve 2.reject

//when resolve :-succesful:-  .then()
//reject:unsuccessful:-   .catch()



// let promise = new Promise(function (resolve, reject){
// //P should be capital because it is a class not an object
// let x=10;
// if(x>10){
//     resolve(x);
// }
// else{
//     reject("Too low");
// }
// });

// promise.then(
//   function (value){
//     console.log("Success:",value);
//   },
//   function (error){
//     console.log("Error:",error);
//   }
// );




// const promise = new Promise((resolve, reject)=>{
//     resolve("success");
// })
// .then(value =>{//value = success
//     console.log(value);//print success
//     return "we";//return we to next then
// })
// .then(value=>{//value= we
//     console.log(value);
//     return "can";
// })
// .then(value=>{//value= we
//     console.log(value);
//     return "chain";
// })
// .then(value=>{//value= we
//     console.log(value);
//     return "promises";
// })

// .then(value=>{
//     console.log(value);
// })


// .catch(value=>{
//     console.log(value);
// })//execute when reject is call




//ASYNC AND AWAIT
//async:-- we can make a fucntion return promises


// await keywprd to wait untill the promise is done


// function saySomething(x){
// return new Promise(resolve =>{
//     setTimeout(() =>{
//         resolve("something"+ x);
//     },2000);

// });
// }


// async function talk(x){
// const words = await saySomething(x);
// console.log(words);
// }
// talk(2);
// talk(4);
// talk(8);


//EVENT LOOP



//Javascript is a single-threaded language
//thread means a path of execution

//single executor is event loop
//

//call stack and callback queue
//JS works with call stack,,event loop is process that is constantly monitoring this call stack 





// console.log("Hi there");
// add(4,5);

// function add(x,y){
//     return x+y;
// }



// console.log("Hi there");
// setTimeout(() => console.log("Sorry Im out"),1000);//asynchronous goes to call back queue

// console.log(add(4,5));

// function add(x,y){
//     return x+y;
// }

//the setTimeout() task get outscoredd to the browser
//call stack empty then the event loop will check the callback queue
//priority given to stack and then to callback queue
//asynchronous will goes to queue 



// console.log("Hi there");
// setTimeout(() => console.log("Sorry Im out"),0);//asynchronous goes to call back queue//timing zero so instant time 

// console.log(add(4,5));

// function add(x,y){
//     return x+y;
// }


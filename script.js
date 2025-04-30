//(para1,para2)=>body of function arrow function
// let doinArrow = x => console.log(x)

// let spread =["so","much","fun"];
// let message=["Javascript","is",...spread,"and","very"];
// console.log(message);

// // function addTwoNumbers(x,y){
// //     console.log(x+y);
// // }
// // let arr = [5,9];
// // addTwoNumbers(...arr);~

// // function addNumbers(x,y,z,a){
// //     console.log(x+y+a+z);
// //      }
// //      let arr = [5,9];
// //      let arr1 = [5,9];
// //      addTwoNumbers(...arr,...arr);//


// function somefunction(para1,...para2){//for rest para meter 
//     console.log(para1,para2);
// }
// somefunction("hii","hello","bye");




// //returning function value

// //prompt
// //null=uninitialised undefined = initialised but not to a value

// // let result=addTwoNumber(4,5)
// // console.log(result);
    
// // let addTwoNum=(x,y)=>console.log()

// // function addTwoNumbers(x,y){
// //         console.log(x+y);
// //      }


// let resultArr= [];
// for(let i=0;i<10;i++){
//     let result =addTwoNumbers(i,2*i);
//      resultsArr.push(result);
// }
// console.log(resultArr);



///function
// function testAvailability(x){
//     console.log("availability",x);
// } 
// testAvailability("hii");
// console.log("not available",x);

// function testAvailability(x){
//     let y="local variable";
//     console.log("availability",x);
// } 
// testAvailability("hii");
// console.log("not available",x);




// function doingstuff(){
//     if(true){
//         var x="local";
//     }
//     console.log(x);
// }
//     doingstuff();

// function doingstuff(){
//     if(true){
//         console.log(x);
//         let x="local";
//     }
// }
// doingstuff();


// function doingstuff(){
//     if(true){
//         console.log(x);
//         var x="local";
//     }
// }
// doingstuff();

///constant variable declaration



//global variable


// let globalVar="accessible everywhere";
// console.log("Outside the fucntion",globalVar);

// function creationNew(x){
//     console.log("inside the funciton",globalVar);
// }

//  creationNew("some parameter");
//  console.log("still available",globalVar);




// let x="global";


// function doingstuff(){
//     let x="local";
//     console.log(x);
// }
// doingstuff();
// console.log(x);




// let x="global";
// function doingstuff(){
//     var x="local";
//     console.log(x);
// }
// doingstuff();
// console.log(x);//now print local beacuse of reinitialization


// let x="global";

// function doingstuff(x){
//     console.log(x);

// }

// doingstuff("para");


// function confuse(){
//     x="hello ";
//     console.log("inside the function",x);
// }

// confuse();
// console.log("outsidethe funciton",x);//shows as global 



//invoked  function ;- without using funtion name 
// (function (){
//     console.log("IIFE");//immediately invoked funtion expression
// })();


// (()=>{
//     console.log("hiii");
// }
// )();



//recursive function

// function recursion(nr){
//     console.log(nr);
//     if(nr>0){
//     recursion(--nr);}
// }

// recursion(3);


// function logRec(nr){
//     console.log("started:",nr);
// if(nr>0){
//     logRec(nr-1);
// }
// else{
//     console.log("done with recursion");
// }
// console.log("ended",nr);//executed at last at the time of recursion it is push on stack
// }
// logRec(3);

// function getrec(nr){
//     if(nr>0){
//         getrec(--nr);
//         }
//         console.log(nr);

// }
// getrec(3);


//the performance of regular recursion is worse than regular iteration


//nested function

// function doOuter(nr){
//     console.log("outer function");
//     doInner(nr);
//     function doInner(x){
//         console.log(x+7);
//     }
// }

// console.log("i can access:",nr);

// doOuter(2);




//anonymous function

//like passing in a funtion as a parameter.
//if a fun is passing as an argument:- callback

//function callback
// let functionVariable=function(){
//     console.log("not so secret");
// };


// function doFlex(executeStuff){
//     executeStuff();
//     console.log("inside doflex");
// }

// doFlex(functionVariable);



//built in setTimeout() millisecond as timer
//setinterval

// let youGot=function(){
//     console.log("you are doing really well");
// };
// setInterval(youGot,1000);//terminated by control+C

// setTimeout(youGot,1000);

// let testfun=function(){
//     console.log("hello");
// }();


// (
//     function(){
//         console.log("welcome");
//     }
// )();

// (
//     function(){
//         let firstName="laurence";
//     }
// )();

// let result=(function(){
//     let firstname='laurence';
//     return firstname;
// })();

// console.log(result);
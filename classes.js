//this development reduce the complexity
// class ClassName{
//     constructor(prop1,prop2){
//         this.prop1 = prop1;//this dot something==class variable
//         this.prop2=prop2;
//     }
// }


// let obj = new ClassName("arg1","arg2");

// console.log(obj.prop1);
// console.log(obj.prop2);



//this keyword refers to obj is belong to 


// class Dog{
//     constructor(dogName,weight,color,breed){
//         this.dogName = dogName;
//         this.weight= weight;
//         this.color = color;
//         this.breed = breed;//they are public thats why we are using directly if private then by some methods
//     }
// }

// let dog = new Dog("Javascript", 2.4,"brown","chichua");
// console.log(dog.dogName);
// console.log(dog.weight);
// console.log(dog.color);
// console.log(dog.breed);



//classname starts with capital

// class Person{
//     constructor(firstname,lastname){
//         this.firstname = firstname;
//         this.lastname = lastname;
//     }
// }

// let p= new Person("Riya","Upadhyay");


// console.log(p.firstname);
// console.log(p.lastname);





//deafult values if not passing two values



// class Person{
//     constructor(firstname,lastname="doe"){
//         this.firstname = firstname;
//         this.lastname = lastname;
//     }
// }

// let p= new Person("Riya");


// console.log(p.firstname);
// console.log(p.lastname);

//Methodssss


//funciton creation inside the class 
//fun on a class are called methods we do not use funtion keyword 


// class Person{
//         constructor(firstname,lastname="doe"){
//             this.firstname = firstname;
//             this.lastname = lastname;
//         }
    


//     greet(){
//         console.log("Hii there");
//     }

// }

//     let p= new Person("Riya","upadhyay");
//     p.greet();



//default arguments should be in last for position



//methods
//function keyword not used
// class Person{
//             constructor(firstname,lastname="doe"){
//                 this.firstname = firstname;
//                 this.lastname = lastname;
//             }
//   greet(){
//     console.log("Hii there I'm",this.firstname);
//   }
// }

//   let p= new Person("Riya","upadhyay");
//       p.greet();




// class Person{
//                 constructor(firstname,lastname="doe"){
//                     this.firstname = firstname;
//                     this.lastname = lastname;
//                 }
//       greet(){
//         console.log("Hii there I'm");
//       }
//     }

// compliment(name,object){
//     return "that is a woderful" + " " + name;
// }


// let p=new Person("hii","rya");

// let compliment = p.compliment("harry","hat");
// console.log(compliment);



//PROPERTIES


// class Person{
//                 constructor(firstname,lastname="doe"){
//                     this.firstname = firstname;
//                     this.lastname = lastname;
//                 }
//             }


//             //private
// // class Person{
// // #firstname;
// // #lastname;
// // }

// // constructor(firstname,lastname){
// //                     this.#firstname = firstname;
// //                     this.#lastname = lastname;
// //      }


// // let p= new Person("Maria","saga");
// // console.log(p.firstname); undefined


// //private shown by methodus only


// // constructor(firstname,lastname){
// //     if(firstname.starstWith("M")){

// //         this.#firstname = firstname;
// //     }
// //     else{

// //         this.#firstname = "M" + firstname;
// //     }
// //     this.#lastname=lastname;
// // }

// //getters and setters


// class Person{
//     #firstname;
//     #lastname;
    
    
//     constructor(firstname,lastname){
//         this.#firstname = firstname;
//         this.#lastname = lastname;
//          }

         
    // get firstname(){
    //     return this.#firstname;
    // }

//     set firstname(firstname){
//         return this.#firstname;
//     }


//     // get lastname(){
//     //     return this.#lastname;
//     // }

//     set lastname(lastname){
//         return this.#lastname;
//     }
// }


// let p= new Person("Maria","saga");
// console.log(p.firstname);//call get because no arguments passing if we pass then it will call set methods


// console.log(p.firstname= "hello");//set method calling





//Inheritance:- reusability of code ;; generalisation to specialization


// class Vehicle{
//   constructor(color, currentspeed, maxspeed){
//     this.color = color;
//     this.currentspeed = currentspeed;
//     this.maxspeed=maxspeed;
//   }

//   move(){//methods without function 
//     console.log("moving at:",this.currentspeed);
//   }

//   accelerate(amount){
//     this.currentspeed+=amount;
//   }


// }

// class Motorcycle extends Vehicle{
//     constructor(color,currentspeed,maxspeed,fuel){
//         super(color,currentspeed,maxspeed);//calss the constuctor of superclass
//         this.fuel;
//     }

//     doWheelie(){
//         console.log("driving on one wheel");
//     }
// }



// let motor = new Motorcycle("Black",0,250,"gasoline");

// console.log(motor.color);





//PROTOTYPES can we create object explicitly



// class Person{
//                     constructor(firstname,lastname){
//                         this.firstname = firstname;
//                         this.lastname = lastname;
//                     }
                
    

// greet(){
//     console.log("hii");
// }
// }


// Person.prototype.introduce = function(){ //introduce is a variable  because function is a anonymous function
//     console.log("hii,Im ",this.firstname);
// };


// Person.prototype.favoriteColor="green";


// let p=new Person("maria","saga");
// console.log(p.favoriteColor);
// p.introduce();



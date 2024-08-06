// // for(x=1; x<10; x++){
// //    let dieRoll = Math.floor(Math.random() * 6) + 1;
// // console.log(dieRoll);}

// function rollDice(){
//    console.log(Math.floor(Math.random() * 6) + 1);
// }
// rollDice();

// function greetSomebody(name, secondName){
//    console.log(`Hi how are you ${name} ${secondName}!!`);
// }

// greetSomebody("margot", "spb");


// function repeating(str, numTimes){
//    let result ="";
//    for ( let i = 0; i < numTimes; i++){
//       result+=str; 
//    }
//    return result;
// }
// console.log(repeating('ryan ' , 3));

// function heart(response){
//    console.log(`ryan i ${response}`);
// }
// heart("<3 you");


// // let input= prompt("Are we there yet?");
// // while(input !== "yes" && input !== "yeah"){
// //    console.log("no were not there yet");
// //    input = prompt("Are we there yet?");
// // } alert("weve arrived!");


// function Father(){
//    const array = ["a", "b", "c", "d"]; 
//    function Son(){
//       // use "in" when want to loop an object, otherwise use "of" like below
//       for(let x of array){
//          console.log(`caps lock them pls: ${x.toUpperCase()}`);
//       }
//    } Son();
// }Father(); 

// const func = function(x,y){
//    return x*y;
// }
// func(10,10);

// function makeRandom(){
//    const rand= Math.random();
//    if(rand > 0.5){
//       return function(){
//          console.log("good function");
//          console.log(rand);
//       }}else {
//          return function(){
//             console.log("this is the bad func");
//             console.log(rand);
//    }
// }
// }
// // scoping... understand it better
// const myFunction = makeRandom();
// myFunction();


// try{
// const cat = {
//    name: 'phantom',
//    color: 'black',
//    voice(){
//       console.log(`${this.name} says meow`);
//    }
// }
// } catch {
//    console.log("Sorry there was an error");
// }


// const numb = [1,2,3,4,5,6,7,8,9,10];
//  const numbDoubles = numb.map(function(num){
//    return num * 2;
// })

//  const calculator = (x, y) => {
//    return x * y * 2;
//  }
//  console.log(calculator(10,10));

//  const rollingLuck = () => {
//    return Math.floor(Math.random() * 6) +1;
//  }


 console.log("hell")
 setTimeout(() => {
   console.log("... o")
 }, 5000);



 const cars = [
   {
     make: "Toyota",
     model: "Camry",
     year: 2023,
     color: "Silver"
   },
   {
     make: "Ford",
     model: "Mustang",
     year: 2023,
     color: "Red"
   },
   {
     make: "Tesla",
     model: "Model 3",
     year: 2024,
     color: "Black"
   }
 ];
 
// filter method below 
 
 const newCarsArray = cars.filter(n => {
   return n.year === 2023
 });

 console.log(newCarsArray);

 const newestArray = cars.filter(n=>{
   return n.make === "Toyota"
 } );
 console.log(newestArray);

 // const TrueOrFalseCars = cars.some(cars => cars.year <TrueOrFalseCars 2020);


const williams = function RollingDice(input = 6){
   return Math.floor(Math.random() * input ) + 1
}

const dogs = ["rocky", "doggy", "woffy", "rawry"];
const cats = ["phantom", "patusi", "aki", "ryan"];
const allPets = [...dogs, ...cats];
console.log(allPets);


// this is how to sort an array.

const scores = [23123,43234,123123,54234,20111,54424234];

scores.sort((b,a) => a-b);

const[gold, silver, bronze, ...theRest] = scores;
 

// destructoring an object below 

const user = {
   firstName: "John",
   lastName: "Doe",
   email: "johndoe@example.com",
   age: 30,
   city: "New York",
   address: {
   street: "123 Main St",
   zipCode: "10001",
   state: "NY"
   },
   phoneNumbers: ["(123) 456-7890", "(987) 654-3210"],
   hobbies: ["reading", "coding", "hiking"]
 };


 const {email} = user;
 const {age : BirthYear} = user;

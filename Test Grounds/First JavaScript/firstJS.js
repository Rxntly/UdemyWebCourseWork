// // console.log("Hello World");

// // const day = 2;
// // switch(day){
// //    case 1: 
// //        console.log("1st");
// //        break;
// //    case 2: 
// //        console.log("2nd");
// //        break;
// //    case 3: 
// //        console.log("3rd");
// //        break;
// //    default: 
// //        console.log("invalid");
// // }


// // if(1+1 === 2){
// //    console.log("Correct");
// // } else{
// //    console.log("idiot");
// // }
// // for(let x=0; x<10; x++){
// // let randomGenerator = Math.random();
// // if(randomGenerator => 0.5){
// //    console.log(`${randomGenerator} is higher than 0.5`);
// // } else{ 
// //    console.log(`${randomGenerator} is lower than 0.5`);
// // }}

// // console.log("split between versions");
// // console.log("split between versions");

// // for (let x = 0; x < 10; x++) {
// //    let randomGenerator = Math.random();

// //    if (randomGenerator >= 0.5) {
// //        console.log(`${randomGenerator} is higher than 0.5`);
// //    } else { 
// //        console.log(`${randomGenerator} is lower than 0.5`);
// //    }
// // }

// // // figure out why this is wrong ^^^^


// // let ry = [];
// // console.log(ry);
// // ry.push('ryan, oliver');
// // console.log(ry)
// // ry[3] = "daniel";
// // console.log(ry);
// // console.log(ry.pop());
// // console.log(ry);

// // ry.push("ali", "williams", "margot");
// // console.log(ry);
// // console.log(ry.unshift("VIP"));

// // console.log(ry.indexOf("notAvailable"));


// // const RyanObject = {
// //    favNum: "21",
// //    favName: "Margot"
// // }

// // console.log(RyanObject.favName);
// // console.log(RyanObject.favNum);

// // console.log(RyanObject.favName + " is "+RyanObject.favNum+ " years old");

// // for(x=1; x<=10; x++){
// //    console.log(x);
// // }

// // for(x=0; x<=6; x+=2){
// //    console.log(x);
// // }

// // for(let i=1; i<=10; i++){
// //    console.log(`i is: ${i}`)
// //    for(let j=1; j<4; j++){
// //       console.log(`j is ${j}`)
// //    }
// // }


// // // let input = prompt("hey! say something")
// // // while(true){
// // //    input = prompt(input); 
// // //    if(input.toLowerCase() === "stop"){
// // //       break;
// // //    }
// // // } console.log("ok ill stop");


// // let maximum = parseInt(prompt("Enter the maximum number!"));

// // while(!maximum){
// //    maximum=parseInt(prompt("Enter a valid number!"));
// // }
// // const targetNum = Math.floor(Math.random() * maximum ) + 1;
// // console.log(targetNum);

// // let guess= parseInt(prompt("Enter your guess"));

// // while(guess !== targetNum){
// //    if(guess > targetNum){
// //       guess= parseInt(prompt("Too high! Try again"));
// //    }else{ 
// //       guess= parseInt(prompt("too low! guess again"));
// //    }
// // } console.log("okay you got it!"); 



// const seatingChart = ['Ryan', 'Daniel', 'Margot', 'Will'];
// for(let x of seatingChart){
//    console.log(x);
// }

// for( let j of "vinnie"){
//    console.log(j);
// }

// const Scores = {
//    ryan: 5,
//    daniel: 4,
//    margot: 6
// }



// for( let i in Scores){
//    console.log(`${i} scored a total of: ${Scores[i]}`);
// }
// let total = 0;
// for (let score of Object.values(Scores)) {
//     total += score;
// }
// console.log(`The total score is: ${total}`);



const btn = document.querySelector("#what");

btn.onclick = function(){
   console.log("aa!")
   console.log("hot")
}


function scream (){
   console.log("howdy")
}

btn.onmouseenter = scream;

const btnv2= document.querySelector("#whatv2");

btnv2.addEventListener('click', function(){
   console.log("nevermind, its nothing");
})


const KeyboardEvents = function(evt){
console.log(evt)
}
document.querySelector("#whatv3").addEventListener('click', KeyboardEvents)

const input= document.querySelector('#whatv3');
input.addEventListener('keydown', function(e){
   console.log(e);
   console.log(e.key);
   console.log(e.code)
} )
// input.addEventListener('keyup', function(){
//    console.log("Key Up")
// })



const form = document.querySelector("#SpecificForm");

form.addEventListener("submit", function(e){
   e.preventDefault();
   console.log("submitted")
})

form.addEventListener("change", function(e){
   console.log('input event');
})

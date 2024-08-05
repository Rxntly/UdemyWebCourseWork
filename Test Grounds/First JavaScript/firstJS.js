console.log("Hello World");

const day = 2;
switch(day){
   case 1: 
       console.log("1st");
       break;
   case 2: 
       console.log("2nd");
       break;
   case 3: 
       console.log("3rd");
       break;
   default: 
       console.log("invalid");
}


if(1+1 === 2){
   console.log("Correct");
} else{
   console.log("idiot");
}
for(let x=0; x<10; x++){
let randomGenerator = Math.random();
if(randomGenerator => 0.5){
   console.log(`${randomGenerator} is higher than 0.5`);
} else{ 
   console.log(`${randomGenerator} is lower than 0.5`);
}}

console.log("split between versions");
console.log("split between versions");

for (let x = 0; x < 10; x++) {
   let randomGenerator = Math.random();

   if (randomGenerator >= 0.5) {
       console.log(`${randomGenerator} is higher than 0.5`);
   } else { 
       console.log(`${randomGenerator} is lower than 0.5`);
   }
}

// figure out why this is wrong ^^^^


let ry = [];
console.log(ry);
ry.push('ryan, oliver');
console.log(ry)
ry[3] = "daniel";
console.log(ry);
console.log(ry.pop());
console.log(ry);

ry.push("ali", "williams", "margot");
console.log(ry);
console.log(ry.unshift("VIP"));

console.log(ry.indexOf("notAvailable"));


const RyanObject = {
   favNum: "21",
   favName: "Margot"
}

console.log(RyanObject.favName);
console.log(RyanObject.favNum);

console.log(RyanObject.favName + " is "+RyanObject.favNum+ " years old");

for(x=1; x<=10; x++){
   console.log(x);
}

for(x=0; x<=6; x+=2){
   console.log(x);
}

for(let i=1; i<=10; i++){
   console.log(`i is: ${i}`)
   for(let j=1; j<4; j++){
      console.log(`j is ${j}`)
   }
}
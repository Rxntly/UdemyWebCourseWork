const fakeRequestCallback = (url, success, failure) => {
   const delay = Math.floor(Math.random() * 4500) + 500;
   setTimeout(() => {
       if (delay > 4000) {
           failure("Connection Timeout :(");
       } else {
           success(`Here is your fake data from ${url}`);
       }
   }, delay);
};
// THE PROMISE VERSION

const fakeRequestPromise = (url) => {
   return new Promise((resolve, reject) => {
       const delay = Math.floor(Math.random() * 4500) + 500;
       setTimeout(() => {
           if (delay > 4000) {
               reject("Connecion Timeout :(");
           } else {
               resolve(`Here is your fake data from ${url}`);
           }
       }, delay);
   });
};


// const request = fakeRequestPromise("booking.com/api");
// request.then(()=>{
//     console.log("it worked");
// }).catch(()=> {
// console.log("there was an error")
// })
// fakeRequestCallback('books.com/page1',
//    function(response){
//       console.log("IT WORKED!!")
//    }, function(){

//    console.log("error!!")
//    })

//    const ryan = ["jeans", "sweatshirt", "marg"];
//    const daniel = ryan.map;


fakeRequestPromise('alibaba.com/page1')
.then((data)=>{
    console.log("it worked!");
    console.log(data);
    return fakeRequestPromise('alibaba.com/page2')
}) .then((data)=>{
    console.log("it worked!");
    console.log(data);
}) .catch((eer)=> {
    console.log("its failed! ):")
})
   



// building a html background rainbow through promise method
const delayedColor = (color, delay) => {
    return new Promise((resolve, reject) =>{
        setTimeout(()=> {
            document.body.style.backgroundColor = color;
            resolve();
        }, delay)
    })
}


delayedColor("red", 1000)
.then(()=>
    delayedColor("orange", 1000)
)
.then(()=>
    delayedColor("green", 1000)
)
.then(()=>
    delayedColor("yellow", 1000)
)
.then(()=>
    delayedColor("blue", 1000)
)
.then(()=>
    delayedColor("gray", 1000)
)

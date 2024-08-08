// // // fetch("https://swapi.dev/api/people/1/")
// // //   .then((res) => {
// // //    console.log("resolved i hope", res);
// // //    return res.json();
// // // }) .then((data)=> {
// // //    console.log(data);
// // //    return fetch("https://swapi.dev/api/people/2/")
// // // })
// // // .then((res)=> {
// // //    console.log("second request resolved!");
// // // })
// // // .catch((e)=>{
// // //    console.log("there was an error", e);
// // // });



// // // axios.get("https://swapi.dev/api/people/1/")
// // // .then(res => {
// // //    console.log("response", res);
// // // })


// const getStarWarsPerson = async () => {
//    const res = await axios.get("https://restcountries.com/v3.1/all");
// };

// console.log(getStarWarsPerson());


//  fetch("https://restcountries.com/v3.1/all")
// .then(response=> response.json())
// .then(data=>{
//    console.log(data[2].name.common)
//    console.log(data[2].capital);
//    console.log(data[2].population);
// })

// .catch(error=> console.error(error));

// for(x=1; x<255; x++){
// async function getCountryData() {
//    try {
//      const response = await fetch("https://restcountries.com/v3.1/all");
//      const data = await response.json();
//      const country${x} = data[${x}]
//      console.log(country${x}.name.common)
//      console.log(country${x}.capital)
//      console.log(country[7].population)
//      return country2; 
//    } catch (error) {
//      console.error(error);
//    }
//  }
// }
 

const form = document.querySelector("#searchDB")
form.addEventListener('submit', function(e){
   e.preventDefault();
   const searchTerm = form.elements.query.value;
   axios.get("https://restcountries.com/v3.1/all")
})

function color(r,g,b){
   this.r=r;
   this.g=g;
   this.b=b;
}

color.prototype.rgb = function(){
   const {r,g,b}=this;
   return `rgb(${r},${g},${b})`
};

const newColor = new color(20,20,20);
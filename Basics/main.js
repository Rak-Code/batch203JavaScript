// // // console.log("Hello")
// // // // document.write("Hello world")

// // // if (18 > 15) {
// // //     console.log("true");
// // // }
// // // else{
// // //     console.log("false");
// // // }

// // // age = 19
// // // tickets = age > 18 ? "yes" : "no"
// // // console.log(tickets)

// // // a = 10
// // // b = 20
// // // c = 30
// // // if (a > b && a > c) {
// // //     console.log("a is greater than b and c");
// // // }
// // // else{
// // //     if(b > c){
// // //         console.log("b is greater than c and a");
// // //     }
// // //     else{
// // //         console.log("c is greater than b and a");
// // //     }
    
// // // }


// // // for (let i = 0; i <= 5; i++) {
// // //     console.log(i);
    
    
// // // }

// // // console.log("2" == 2);
// // // console.log("2" === 2);

// // // a = ["start",3,"hello",56,14,]

// // // for(let i = 0; i < a.length; i++){ //mostly used 
// // //     console.log(a[i]);
// // // }

// // // for (const i in a) {  //index return useful in objects return key.
// // //    console.log(i);
   
// // // }

// // // for (const i of a) { //arrays or strings return value 
// // //     console.log(i);
    
// // // }

// // // a.forEach(i => {  //arrays return value
// // //     console.log(i);
    
// // // });

// // i = 1;
// // do {
// //     console.log(i);
// //     i++;
    
// // } while (i < 3);

// // while(i < 5){
// //     console.log(i);
// //     i++;
// // }

// // function greet(name){
// //     console.log(`Hello ${name}`);
// // }

// // greet("Igris")

// // function greet(name = "Igris"){
// //     console.log(`Hello ${name}`);
// //     }

// //     let ab = function(a,b){
// //         return a + b;
// //     }

// // let ac = (a,b) => {
// //     return a + b
// // }
// // console.log(ac);

// //callabcks

// function createObject(){
//     return{
//         name: "",
//         getName: function(){ return this.name},
//         setName: function(name)  { return  this.name = name}
        
        
//     }
// }

// Beru = createObject()
// Beru.setName("Beru")
// console.log(Beru.getName());

// Igris = createObject()
// Igris.setName("Igris")
// console.log(Igris.getName(),Beru.getName());

// Tank = createObject()
// Tank.setName("Tank")
// console.log(Tank.getName(),Tank.getName());

// let d = {
//     name: "Tusk",
//     age: 30,
//     salary: 5000
// }

// console.log(d);
//  console.log(d.salary);
//  console.log(d["salary"]);

//  console.log(d["age"]);



//  let r = {
//     1: "one",
//     2: "two",
//     3: "three",
//  }

//  for(let i in r){
//         console.log(r[i]);
//  }

//  console.log(Object.keys(r));
//  console.log(Object.values(r));
//  console.log(Object.entries(r));

 let obj = {
    name: "Tusk",
    age: 30,
    salary: 5000,
    projects:{
        project1: "AWS",
        project2: "Software"

    }
 }

//  console.log(Object.keys(obj));
//  console.log(Object.values(obj));
//  console.log(Object.entries(obj));

//  for (const key in obj){
 
//     console.log(obj[key]);


//  }

//  console.log([1,2,3].map((n) => n*2));

//  function double(n){
//     return n*2;
//  }
 
//  console.log([2,4,8].map(double));


//  arr = [1,2,3,4]

//  for(let i = 0; i < arr.length; i++){
//     console.log(arr[i]*2);
//  }


//  function arr2(arr,double){
//     for(let i = 0; i < arr.length; i++){
//         console.log(arr[i]*double);
//     }
//     return arr;

    
//  }

// console.log(arr2([1,2,3,4],double(2)))


// function mapToArray(arr,fun){
//     for(let key in arr){
//         arr[key] = fun(arr[key])
//         }
//         return arr;
// }

a = [1,2,3,4,5]
// console.log(mapToArray(a,(n) => n * 2))


// Generator Object 
function* gen(arr,fun){
    for(let val of arr){
        let result = fun(val);
        yield result;
    }
}

console.log(Array.from(gen(a,(n)=>n*3)),a);

 
 







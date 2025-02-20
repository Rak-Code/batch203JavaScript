console.log("Hello")
// document.write("Hello world")

if (18 > 15) {
    console.log("true");
}
else{
    console.log("false");
}

age = 19
tickets = age > 18 ? "yes" : "no"
console.log(tickets)

a = 10
b = 20
c = 30
if (a > b && a > c) {
    console.log("a is greater than b and c");
}
else{
    if(b > c){
        console.log("b is greater than c and a");
    }
    else{
        console.log("c is greater than b and a");
    }
    
}


for (let i = 0; i <= 5; i++) {
    console.log(i);
    
    
}

console.log("2" == 2);
console.log("2" === 2);

a = ["start",3,"hello",56,14,]

for(let i = 0; i < a.length; i++){ //mostly used 
    console.log(a[i]);
}

for (const i in a) {  //index return useful in objects return key.
   console.log(i);
   
}

for (const i of a) { //arrays or strings return value 
    console.log(i);
    
}

a.forEach(i => {  //arrays return value
    console.log(i);
    
});

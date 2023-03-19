//normal function 
function sum(a,b){
    return a+b
}

console.log(sum(5,6));

//Arrow function
let sum2 = (a,b) => a+b
console.log(sum2(4,6));

//normal function
function ispositive(number){
    return number>=0
}
console.log(ispositive(6));

//arrow_function
let ispositive1 = (num) => num>0 
console.log(ispositive1(6));

//normal function
function randomNumber(){
    return Math.random
}

//arrow function
let rand = () => Math.random


document.addEventListner('click',function(){
    console.log('Click')
})

document.addeventListner('click',() => console.log('click'))  //no varibale need to be defined no use 

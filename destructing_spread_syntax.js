let arr = [2,3]
//destructuring
let[a,b]=arr
console.log(a,b)

//normal way
let pqr = [4,5]
let c=pqr[0]
let d =pqr[1]
console.log(c,d)

//destructuring

let xyz=[1,2,3,4,5,6]
let [A,B,C,...rest]=xyz
console.log(A,B,C,rest)

//destructuring

let rs=[1,2,3,4,5,6]
let [t,,v,...rithu]=rs       //after 3 dots u can specify any variable
console.log(t,v,rest)

//destructuring

let sr={o:1,p:2}
let {o,p}=sr
console.log(o,p)

//spread syntax
let m=[1,2,3]
let obj={ ...m }
console.log(obj)

//normal function
function sum(v1,v2,v3){
    return v1+v2+v3;
}
console.log(sum(...m))

//using arrow function just try 
let sum1 = (a1,a2,a3) => a1+a2+a3
console.log(sum1(...m));


//spread syntax

let obj2={
    name:"rithesh",
    company:"xyz",
    address:"XYZ"
};

console.log({...obj2}); //will print

//if u want to change any value in obj2
console.log({ ...obj2 , name:"roman_reigns"});

//will  not work if u interchnage
console.log({ name:"roman_reigns" , ...obj2 ,});


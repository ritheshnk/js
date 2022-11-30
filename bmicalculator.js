function bmi(weight,height)
    {
        var BMI=Math.floor(weight/Math.pow(height,2));
        return BMI;
    }

var  cal=bmi(84,1.75);

console.log("the BMI is "+ cal);

//or 

console.log("the BMI is "+ bmi(75,1.25));

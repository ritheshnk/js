function add(num1,num2)
    {
        return num1+num2;
    }

function multi(num1,num2)
    {
        return num1*num2;
    }

function sub(num1,num2)
    {
        return num1-num2;
    }
function div(num1,num2)
    {
        return num1/num2;
    }

function calculator(num1,num2,operator)   //3rd argument specify if add or sub or div or multi
    {
        return operator(num1,num2);
    }

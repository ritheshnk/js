var output= [];
var  count=1;
function fizzbuzz() {
    output.push(count);
    count=count+1;

    if(count%3==0 && count%5==0)
    {
        output.push("fizzbuzz");
    }else if(count%3===0)
    {
        output.push("FIzz");
    }else if(count%5===0)
    {
        output.push("buzz");
    }else 
    {
        output.push(count);
    }
    console.log(output);
}

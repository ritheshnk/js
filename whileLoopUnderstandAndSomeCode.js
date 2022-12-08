var out=[];
var count=1;

function buzzy() {
    while(count<=100)
        {
           if(count%3===3 && count%5===0)
        {
            out.push("fizzbuzz");
        }
        else if(count%3===0)
        {
            out.push("fizz");
        }else if(count%5===0)
        {
           out.push("buzzy"); 
        }
        else{
        out.push(count)
        }
        count++;
            
        }
   
}


var n =prompt("enter the value of n");
var output=fibani(n);
console.log(output)

function fibani(n) {
    var out=[];
    if(n==1)
    {
        out=[0];
    }else if(n==1){
        out=[0,1];
    }else{
        out=[0,1];
        
        for(var i=2;i<n;i++)
            {
                var a=(out.length)-2;
                var b=(out.length)-1;
                out.push(out[a]+out[b]);
            }
    }
    return out;
}

var term = {
    Canada: 10,
    Germany: 3,
    Spain: 22,
    Belarus: 15,
    
    };

function sumTerm(){
    var sum = 0;
    for (var temperature of Object.values(term)){
        sum += temperature;
    }
    return resultterm = sum / Object.keys(term).length;
}
 
    document.write(+sumTerm(term));
    document.write("<br />");

 function getMaxOfArray(term) {
    var term = Object.values(term);
    return max = Math.max.apply(null, term);
}  
    document.write(+ getMaxOfArray(term));
const sumAll = function(first, last) {
  
  if(typeof(first) !== "number" || typeof(last) !== "number" ){
    return "ERROR"
  }
  if(last <0 || first < 0) return "Error";
  
  if(first > last){
    let temp = first;
    first = last;
    last = temp;
  }
   let totalSum = 0;
    for(let i = first; i<= last; i++){
        totalSum+= i;
    }
    return totalSum;
  
};

// Do not edit below this line
module.exports = sumAll;

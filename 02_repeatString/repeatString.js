const repeatString = function(word , times) {
    if(word< 0) return "Error";
    let ans ="";
    for(let i = 0; i< times ; i++){
        ans +=word ;
    }
    return ans;
};

// Do not edit below this line
module.exports = repeatString;

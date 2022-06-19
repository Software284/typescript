function combine(n1: number | string, n2: number | string,resultConversion:string) {
    let result;
    if(typeof n1 === 'number' && typeof n2 === 'number'){
         result = n1 + n2;
    }else{
        result = n1.toString()+n2.toString();
    }

    if(resultConversion === 'as-number'){
        return +result;
    }
    else{
        return result.toString();
    }
}

const combineAges = combine(30,26,'as-number');
console.log(combineAges);

const combineStringAges = combine('30', '26', "as-number");
console.log(combineStringAges);

const combineNames = combine('Mahesh ', 'Lamichhane','as-text');
console.log(combineNames);

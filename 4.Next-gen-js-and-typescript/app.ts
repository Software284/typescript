const add = (a:number,b:number=1):number =>{
    return a+b;
}
console.log(add(4,4));
console.log(add(4));

const secondary_hobbies = ['Sport','Movie'];
const primary_hobbies = ['Programming'];
// const primary_hobbies = ["Programming",...secondary_hobbies];

primary_hobbies.push(...secondary_hobbies);


const person = {
    fname:"Mahesh",
    age: 27
}

const copied_persion = {...person}

const addd = (...numbers:number[]) => {
    return numbers.reduce((curResult,curValue)=>{
        return curResult+curValue;
    },0);
}

const addNumbers = addd(1,2,3,4,5);
console.log(addNumbers);

const[hobby1,hobby2,...remaining] = primary_hobbies;
console.log(hobby1);
console.log(hobby2);
console.log(remaining);

const {fname,age} = person;
console.log(fname,age);


const names:Array<string> = [];
// names[0].split(' ');

function merge<T extends object,U extends object>(obj1:T,obj2:U){
    return Object.assign(obj1,obj2);
}

console.log(merge({name:'Max'},{age:27}));
// const mergeObj2 = merge({ name: "Max", age: 27 },30);
const mergeObj = merge({ name: "Max" }, { age: 27 });

console.log(mergeObj.name);
console.log(mergeObj.age);

interface Lengthy{
    length:number;
}
function countAndDescribe<T extends Lengthy>(element:T):[T,string]{
    let descriptionText = 'Got no value.';
    if(element.length===1){
        descriptionText='Got one element';
    }
    else if(element.length > 1){
        descriptionText='Got '+element.length+" elements.";
    }
    return[element,descriptionText];
}

console.log(countAndDescribe('Hi there!'));

function extractAndConvert<T extends object, U extends keyof T>(obj:T,key:U){
    return 'Value: '+obj[key];
}

extractAndConvert({name:'Max'},'name');










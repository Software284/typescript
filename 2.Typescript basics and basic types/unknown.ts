let userInput:unknown;
userInput = 5;
userInput = 'mahesh';

function generateError(message:string,code:number){
    throw {message:message,errorCode:code}
}

const result = generateError('An error occcured!!!',500);
console.log(result);
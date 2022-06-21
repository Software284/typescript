interface ErrorContainer{
    [prop:string]:string;
}

const errorBag:ErrorContainer = {
    email:'Not a valid email',
    username:'Must start with a capital character!'
}
console.log(errorBag);

//note we can also use function overloading over type checking in above examples with 
//multiple data type expected
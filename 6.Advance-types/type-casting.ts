// const inputElement = <HTMLInputElement>document.getElementById('input')!;

const inputElement1 = document.getElementById("input") ;
if(inputElement1){
    (inputElement1 as HTMLInputElement).value = "Hi there";
}
const inputElement = document.getElementById("input")! as HTMLInputElement;
inputElement.value = 'Hi there';
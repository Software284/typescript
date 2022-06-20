abstract class Animal{
    abstract drinksName():void;
    displayAttidude():void{
        console.log('they are innocent')
    }
}

class Dog extends Animal{
    drinksName(){
        console.log('drinks water');
    }
}

const dog = new Dog();
dog.displayAttidude();
dog.drinksName();
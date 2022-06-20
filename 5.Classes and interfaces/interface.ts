interface Named {
  readonly name: string;
  outputName?:string
}
interface Greet extends Named{
    greet(phrase:string):void;
}

class Emotions implements Greet{
    name: string;
    age=30;
    constructor(nam:string){
        this.name=nam;
    }
    greet(phrase: string): void {
        console.log(phrase+" "+this.name+" "+this.age);
    }
    
}

const emo:Greet = new Emotions('Mahesh');
emo.greet('iam happy');
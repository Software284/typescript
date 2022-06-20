class MoneyMachine {
  private static instance: MoneyMachine;
  val:number;
  private constructor(money:number) {
    console.log("generate money");
    this.val=money
  }

  static getInstance(mon:number): MoneyMachine {
    if (this.instance) {
      return this.instance;
    }
    this.instance =  new MoneyMachine(mon);
    return this.instance;
  }
}

const dataa = MoneyMachine.getInstance(1);
console.log(dataa);
const dataaa = MoneyMachine.getInstance(2);
console.log(dataaa);
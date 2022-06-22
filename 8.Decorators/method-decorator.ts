function Log3(target:any,name:string | symbol,descriptor:PropertyDescriptor){
     console.log("Method Decorator");
     console.log(target);
     console.log(name);
     console.log(descriptor);
}
class ProductQuantity {
  title: string;
  private _price: number;

  constructor(t: string, p: number) {
    this.title = t;
    this._price = p;
  }

  set Price(val: number) {
    if (val > 0) {
      this._price = val;
    } else {
      throw new Error("Inavlid price should be positive");
    }
  }

  @Log3
  getPriceWithTax(tax: number) {
    return this._price * (1 + tax);
  }
}

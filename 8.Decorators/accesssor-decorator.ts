function Log2(target:any,name:string,descriptor:PropertyDescriptor){
    console.log('Accessor Decorator');
    console.log(target);
    console.log(name);
    console.log(descriptor);
}

class ProductInfo {
  title: string;
  private _price: number;

  constructor(t: string, p: number) {
    this.title = t;
    this._price = p;
  }

  @Log2
  set Price(val: number) {
    if (val > 0) {
      this._price = val;
    } else {
      throw new Error("Inavlid price should be positive");
    }
  }

  getPriceWithTax(tax: number) {
    return this._price * (1 + tax);
  }
}


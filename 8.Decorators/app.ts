function Log4(
  target: any,
  name: string | symbol,
  position: number
) {
  console.log("parameter Decorator");
  console.log(target);
  console.log(name);
  console.log(position);
}

class ProductQuality {
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

  getPriceWithTax(@Log4 tax: number) {
    return this._price * (1 + tax);
  }
}

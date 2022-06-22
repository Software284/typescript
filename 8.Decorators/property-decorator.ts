function Log(target:any,propertyName:string){
    console.log('Property decorator')
    console.log(target,propertyName);
}


class ProductItem{

    @Log
    title:string;
    private _price:number;

    constructor(t:string,p:number){
        this.title = t;
        this._price=p;
    }

    set Price(val:number){
        if(val>0){
            this._price=val;
        }
        else{
            throw new Error('Inavlid price should be positive');
        }
    }

    getPriceWithTax(tax:number){
        return this._price*(1+tax);
    }

}


class Department{
    // private readonly id:string;
    // public name:string;
    private employees:string[]=[];

    constructor(private readonly id:string,public  name:string){
        // this.name=n;
        // this.id=id;
    }

    describe(this:Department){
        console.log('Describe='+this.name+" "+this.id);
    }

    addEmployee(employee:string){
        this.employees.push(employee);
    }

    printEmployeeInformation(){
        console.log(this.employees.length);
        console.log(this.employees);
    }
}

const accounting = new Department('Mahesh',"101");
accounting.addEmployee('max');
accounting.addEmployee('manu');
accounting.name='hero';
// accounting.employees[2] = 'hero';
accounting.printEmployeeInformation();
console.log(accounting);
accounting.describe();
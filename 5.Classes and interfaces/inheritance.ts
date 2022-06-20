class MyDepartment {
  // private readonly id:string;
  // public name:string;
  protected employees: string[] = [];

  constructor(private idx: string, public name: string) {
    // this.name=n;
    // this.id=id;
  }

  describe(this: MyDepartment) {
    console.log(`Department=${this.name}:${this.idx}`);
  }

  addEmployee(employee: string) {
    this.employees.push(employee);
  }

  printEmployeeInformation() {
    console.log(this.employees.length);
    console.log(this.employees);
  }
}

class ItDepartment extends MyDepartment{

    constructor(id:string,public report:string[]){
        super(id,'IT');
    }

    addEmployee(name:string){
        if(name==='Max'){
            return
        }
        this.employees.push(name);
    }

    addReport(text:string){
        this.report.push(text);
    }

    printReports(){
        console.log(this.report);
    }
}

const it = new ItDepartment('d1',['Max']);
it.addEmployee("max");
it.printEmployeeInformation();
console.log(it);
it.describe();
it.addEmployee('Max');
it.addEmployee("Manu");
it.printReports();
it.printEmployeeInformation();

type Admin = {
    name:string;
    privilages:string[];
}

type Employee  = {
    name:string;
    startDate:Date;
}

// interface ElevetedEmployee extends Employee,Admin{

// }

type ElevetedEmployee = Admin & Employee;
const e1: ElevetedEmployee = {
    name:'max',
    privilages:['create-server'],
    startDate:new Date()
};

type combinable = string | number;
type numeric = string | number;
type universal = combinable & numeric;


function add(a:combinable,b:combinable){
    if(typeof a === 'string' || typeof b==='string'){
        return a.toString()+" "+b.toString();
    }
    return a+b;
}

const x1 = add('mahesh','hero') as string;


type UnknownEmployee = Employee & Admin;
function printEmployeeInformation(emp:UnknownEmployee){
    console.log('Name='+emp.name);
    if('privilages' in emp){
        console.log('Privilages='+emp.privilages);
    }
    if ("startDate" in emp) {
      console.log("startDate=" + emp.startDate);
    }
}

printEmployeeInformation(e1);
class School {
    static fiscalyear = 1990;
  static createEmployee(name: string) {
    return {name:name};
  }

  static createStudent(name: string) {
    return { name: name };
  }
}

const emp = School.createEmployee('jeni');
const st = School.createStudent('pits');
console.log(emp,st,School.fiscalyear);
class Data {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  set setName(name: string) {
    this.name = name;
  }
  set setAge(age: number) {
    this.age = age;
  }

  get getName() {
    return this.name;
  }
  get getAge() {
    return this.age;
  }
}

const data = new Data('Mahesh',27);
console.log(data.getName);
console.log(data.getAge)

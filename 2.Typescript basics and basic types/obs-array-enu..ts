// const person:{
//     name:string,
//     age:number
//     } = {
//     name:"Mahesh Lamichhane",
//     age: 27
// };

// const person: {
//     name:string,
//     age:27,
//     hobbies:string[],
//     role:[number,string]
// } =
// {
//     name:"Mahesh Lamichhane",
//     age: 27,
//     hobbies:['Sports','Cooking'],
//     role:[2,'author']
// }

// person.role.push('admin');
// person.role[1] = 10;

enum Role  {ADMIN='ADMIN',READ_ONLY=100,AUTHOR=200};

const person = {
  name: "Mahesh Lamichhane",
  age: 27,
  hobbies: ["Sports", "Cooking"],
  role: Role.ADMIN,
};



let favouriteActivities: string[];
favouriteActivities = ['Sportt','Singing'];

for(const hobby of person.hobbies){
    console.log(hobby.toUpperCase())
}

if(person.role == Role.ADMIN){
    console.log('is read only');
}


console.log(person.name);
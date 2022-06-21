const fetchUserData = {
    id:'u1',
    name:'Max',
    job:{title:'CEO',description:'My own company'}
};

console.log(fetchUserData?.job?.title);

// const userInput = '';
// const storeData = userInput || 'DEFAULT';
const userInput = null;
const storeData = userInput ?? "DEFAULT";
console.log(storeData);
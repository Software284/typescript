class DataStorage<T extends number | string | boolean>{
    private data: T[] = [];

    addItem(item:T){
        this.data.push(item);
    }

    removeItem(item:T){
        if (this.data.indexOf(item) === -1){
            return;
        }
        this.data.splice(this.data.indexOf(item), 1);
    }

    getItems(){
        return [...this.data];
    }
}

const textStorage = new DataStorage<string>();
textStorage.addItem('Max');
textStorage.addItem('Manu');

const numberStorage = new DataStorage<number>();
numberStorage.addItem(10);
numberStorage.addItem(20);

console.log(textStorage.getItems());
console.log(numberStorage.getItems());

interface CourseGoal{
    title:string;
    description:string;
    completeUntil:Date;
}

function createCourseGoal(title:string,description:string,completeUntil:Date):CourseGoal{
    let courseGoal:Partial<CourseGoal>={};
    courseGoal.title = title;
    courseGoal.description=description;
    courseGoal.completeUntil=completeUntil;
    return courseGoal as CourseGoal;
}

console.log(createCourseGoal('programming','it is good for time pass',new Date()))

const namesss: Readonly<string[]> = ['Max','Manu'];
// namesss.push('Hero');
// namesss.pop();

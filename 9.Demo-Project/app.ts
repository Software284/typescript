enum ProjectStatus{
  Active,Finished
}

class Project{
  constructor(
    public id:string,
    public title:string,
    public description:string,
    public people:number,
    public status:ProjectStatus
    ){

    }
}

type Listener<T> = (items: T[]) => void;

class State<T> {
  protected listeners: Listener<T>[] = [];
  addListener(listenerFn: Listener<T>) {
    this.listeners.push(listenerFn);
  }
}
class ProjectState extends State<Project>{
 
  private projects:Project[] = [];
  private static instance:ProjectState;

  private constructor(){
    super();

  }

  static getInstance(){
    if(this.instance){
      return this.instance;
    }
    this.instance = new ProjectState();
    return this.instance;
  }

  

  addProject(title:string,description:string,numOfPeople:number){
    const newProject = new Project(Math.random().toString(),
      title,
      description,
      numOfPeople,
      ProjectStatus.Active
      );
    this.projects.push(newProject);
    for(const listenerFn of this.listeners){
      listenerFn(this.projects.slice());
    }
  }
}

const projectState = ProjectState.getInstance();


interface Validatable{
  value:string | number;
  required?:boolean;
  minLength?:number;
  maxLength?:number;
  min?: number;
  max?: number;
}

function Validate(validatableInput:Validatable){
    let isValid = true;
    if(validatableInput.required){
      isValid = isValid && validatableInput.value.toString().trim().length !== 0;
    }
    if(validatableInput.minLength !=null && typeof validatableInput.value === 'string'){
      isValid = isValid && validatableInput.value.length >= validatableInput.minLength;
    }
     if (
       validatableInput.maxLength != null &&
       typeof validatableInput.value === "string"
     ) {
       isValid =
         isValid && validatableInput.value.length <= validatableInput.maxLength;
     }
     if(validatableInput.min != null && typeof validatableInput.value === 'number'){
        isValid && validatableInput.value >= validatableInput.min;
     }
     if (
       validatableInput.max != null &&
       typeof validatableInput.value === "number"
     ) {
       isValid && validatableInput.value <= validatableInput.max;
     }

     return isValid;
  }

abstract class Component<T extends HTMLElement, U extends HTMLElement> {
  templateElement: HTMLTemplateElement;
  hostElement: T;
  element: U;

  constructor(templateId: string, hostElementId: string,insertAtStart:boolean, newElement?: string) {
    this.templateElement = document.getElementById(
      templateId
    )! as HTMLTemplateElement;
    this.hostElement = document.getElementById("app")! as T;
    const importedNode = document.importNode(
      this.templateElement.content,
      true
    );
    this.element = importedNode.firstElementChild as U;
    if (newElement) {
      this.element.id = newElement;
    }
    this.attach(insertAtStart);
  }
  private attach(insertAtBeginning:boolean) {
    this.hostElement.insertAdjacentElement(insertAtBeginning ? 'afterbegin': 'beforeend', this.element);
  }

  abstract configure() : void;
  abstract renderContent() : void;
}

class ProjectItem extends Component<HTMLUListElement,HTMLLIElement>{
  private project:Project;

  get persons(){
    if(this.project.people === 1){
      return " 1 person";
    }
    else {
      return `${this.project.people} persons`;
    }
  }

  constructor(hostId:string,project:Project){
    super('single-project',hostId,false,project.id);
    this.project=project;
    this.configure();
    this.renderContent();
  }

  configure() {
    
  }

  renderContent(): void {
    this.element.querySelector('h2')!.textContent = this.project.title;
    this.element.querySelector("h3")!.textContent = this.project.description;
    this.element.querySelector("p")!.textContent = this.persons +' assigned';
    
  }
}

class ProjectList extends Component<HTMLDivElement,HTMLElement>{
  assignedProjects: Project[];

  constructor(private type: 'active' | 'finished'){
      super('project-list','app',false,`${type}`);
      this.assignedProjects=[];
      this.configure();
      this.renderContent();
  }

  private renderProjects(){
    const listEl = document.getElementById(`${this.type}-projects-list`)! as HTMLUListElement;
    listEl.innerHTML='';
    for(const prjItem of this.assignedProjects){
      new ProjectItem(this.element.querySelector('ul')!.id,prjItem);
    }
  }

  configure() {
     projectState.addListener((projects: Project[]) => {
       const relevantProjects = projects.filter((prj) => {
         if (this.type === "active") {
           return prj.status === ProjectStatus.Active;
         }
         return prj.status === ProjectStatus.Finished;
       });
       this.assignedProjects = relevantProjects;
       this.renderProjects();
     });
  }

  renderContent(){
    const listId = `${this.type}-projects-list`;
    this.element.querySelector('ul')!.id = listId;
    this.element.querySelector('h2')!.textContent = this.type.toUpperCase()+' PROJECTS';
  }
}

class ProjectInput extends Component<HTMLDivElement, HTMLFormElement> {
  titleInputElement: HTMLInputElement;
  descripitonInputElement: HTMLInputElement;
  peopleInputElement: HTMLInputElement;

  constructor() {
    super("project-input", "app", true, "user-input");
    this.titleInputElement = this.element.querySelector(
      "#title"
    )! as HTMLInputElement;
    this.descripitonInputElement = this.element.querySelector(
      "#description"
    )! as HTMLInputElement;
    this.peopleInputElement = this.element.querySelector(
      "#people"
    )! as HTMLInputElement;
    this.configure();
  }

  configure() {
    this.element.addEventListener("submit", this.submitHandler.bind(this));
  }
  renderContent(): void {
    
  }

  private gatherUserInput(): [string, string, number] | void {
    const enteredTitle = this.titleInputElement.value;
    const enteredDescription = this.descripitonInputElement.value;
    const enteredPeople = this.peopleInputElement.value;

    const titleValidatable: Validatable = {
      value: enteredTitle,
      required: true,
    };

    const descriptionValidatable: Validatable = {
      value: enteredTitle,
      required: true,
      minLength: 5,
    };

    const peopleValidatable: Validatable = {
      value: +enteredTitle,
      required: true,
      min: 1,
      max: 5,
    };

    if (
      !Validate(titleValidatable) ||
      !Validate(descriptionValidatable) ||
      !Validate(peopleValidatable)
    ) {
    }
    if (
      enteredTitle.trim().length === 0 ||
      enteredDescription.trim().length === 0 ||
      enteredPeople.trim().length === 0
    ) {
      alert("Invalid input,please try again");
      return;
    } else {
      return [enteredTitle, enteredDescription, +enteredPeople];
    }
  }

  private clearInput() {
    this.titleInputElement.value = "";
    this.descripitonInputElement.value = "";
    this.peopleInputElement.value = "";
  }

  private submitHandler(event: Event) {
    event.preventDefault();
    console.log(this.titleInputElement.value);
    const userInput = this.gatherUserInput();
    if (Array.isArray(userInput)) {
      const [title, description, people] = userInput;
      projectState.addProject(title, description, people);
    }
    this.clearInput();
  }
}

const input = new ProjectInput();
const activeProjectList = new ProjectList('active');
const finishedProjectList = new ProjectList('finished');
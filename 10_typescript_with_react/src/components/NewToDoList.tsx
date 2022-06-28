import React,{useRef} from "react";
import './NewTodo.css';
type NewToDoProps = {
    onAddToDo: (todoText:string) => void;
}
const NewToDoList : React.FC<NewToDoProps> = (props) => {
    const textInputRef = useRef<HTMLInputElement>(null);
    const todoSubmitHandler = (event:React.FormEvent) => {
        event.preventDefault();
        const enteredText = textInputRef.current!.value;
        props.onAddToDo(enteredText);
    }
    return(
        <form onSubmit={todoSubmitHandler}>
            <div>
                <label htmlFor="todo-text">Todo Text</label>
                <input type="text" id="todo-text" ref={textInputRef}/>
            </div>
            <button type="submit">ADD TODO</button>
        </form>
    );
}
export default NewToDoList;
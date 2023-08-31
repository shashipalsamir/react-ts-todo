import { useState } from "react"
import { useTodos } from "../store/todos";

const AddToDo = () => {
    const [todo, setTodo] = useState("");
    const { handleAddToDo } = useTodos();

    const handleFormSubmit = (e:React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if(todo.trim() != ""){
            handleAddToDo(todo)    
        }        
        setTodo("")
    }

  return (
    <form onSubmit={handleFormSubmit}>
        <input type="text" name="Name" id="todo-name" placeholder="Enter task name" value={todo} onChange={(e) => setTodo(e.target.value)} />
        <button type="submit">Add Todo</button>
    </form>
  )
}

export default AddToDo
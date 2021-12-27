import React,{useState} from 'react'
import TodoForm from './TodoForm'

function TodoList() {
    const [todos, setTodos] = useState([]);

    const addTodos = todo=>{
        if (!todo.text || /^\s*$/.test(todo.text)){
        return;
    }
    const newTodos = [todo, ...todos];

    setTodos(newTodos);
    };
    return (
        <div>
            <h2>What's the plan for today? </h2>
            <TodoForm onSubmit={addTodos}/>
        </div>
    )
}

export default TodoList

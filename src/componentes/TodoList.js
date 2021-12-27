import React,{useState} from 'react'
import TodoForm from './TodoForm'

function TodoList() {
    const [todos, setTodos] = useState([]);
    return (
        <div>
            <h2>What's the plan for today? </h2>
            <TodoForm/>
        </div>
    )
}

export default TodoList

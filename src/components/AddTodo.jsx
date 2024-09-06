import React, {useState} from 'react'
import {useDispatch} from 'react-redux'
import { addTodo } from '../store/todoSlice';

const AddTodo = () => {
    const [input, setInput] = useState("");
    const dispatch = useDispatch();

    const addTodoHandler = (e) => {
        e.preventDefault()
        dispatch(addTodo(input))
        setInput("");
    }

    return (
        <form onSubmit={addTodoHandler} className="space-x-3 mt-12">
            <input
                type="text"
                placeholder="Enter a Todo..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
            />
            <button
                type="submit"
            >
                Add Todo
            </button>
        </form>
    )
}

export default AddTodo;
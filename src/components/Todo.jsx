import React from 'react'
import {useSelector, useDispatch} from 'react-redux'
import { removeTodo } from '../store/todoSlice';


export const Todo = () => {
    const todos = useSelector(state => state.todos)
    const dispatch = useDispatch();
    return (
        <div>
            {todos.map((item) => (
                <li key={item.id}>
                    {item.text}
                    <button onClick={() => dispatch(
                        removeTodo(item.id)
                    )}>
                        delete
                    </button>
                </li>
            ))}
        </div>
    )  
}  
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addToDo } from './ToDoSlice'

const ToDoForm = () => {
    const [toDo, setTodo] = useState([])
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(addToDo(toDo))
        setTodo([])
    }

    return(
        <form onSubmit={handleSubmit}>
            <input value={toDo} placeholder="Enter To-Do" onChange={(e) => setToDo(e.target.value)}/>
        </form>
    )

}

export default ToDoForm;
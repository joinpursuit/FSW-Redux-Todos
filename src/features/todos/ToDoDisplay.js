import { useSelector } from 'react-redux';
import { selectToDoList } from './ToDoSlice'

export default () => {

    const todos = useSelector(selectToDoList);

    return (
        <ul>
            {todos.map(todo => {
                return <li key={todo.id}>{todo.text}</li>
            })}
        </ul>
    )
}
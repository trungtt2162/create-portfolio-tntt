import React, { useState } from 'react';
interface IProps {
    name?: string;
    addNewTodo: (value: ITodo) => void;
}
interface ITodo {
    id: number,
    title: string,
    isComplete: boolean
}
const TodoInput = (props: IProps) => {
    const [todo, setTodo] = useState<string>("");
    const { addNewTodo } = props;
    const handleTextChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setTodo(event.target.value)
    }
    const handleClickAddTodo = () => {
        if (!todo.trim()) {
            alert("Empty")
            return;
        }
        addNewTodo(
            {
                id: Math.floor(Math.random() * 10000),
                title: todo,
                isComplete: false
            }
        )
        setTodo("");
    }
    return (
        <div style={{ display: "flex", gap: 15, marginBottom: 20 }} >
            <label>To do: </label>
            <input
                type="text"
                value={todo}
                onChange={handleTextChange}
            ></input>
            <button onClick={handleClickAddTodo}>Add</button>
        </div>
    )
}

export default TodoInput;
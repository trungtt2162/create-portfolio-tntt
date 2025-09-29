import { useState } from "react";
import TodoData from "./todo.data";
import TodoInput from "./todo.input";

interface ITodo {
    id: number,
    title: string,
    isComplete: boolean
}

const TodoList = () => {
    const todos = [
        {
            id: 1,
            title: "Learn React TypeScript",
            isComplete: false
        },
        {
            id: 2,
            title: "Subscribe Youtube HoiDanIT",
            isComplete: true
        },
        {
            id: 3,
            title: "Learn English",
            isComplete: true
        },
    ]
    const [listTodo, setListTodo] = useState<ITodo[]>(todos)
    const addNewTodo = (todo: ITodo) => {
        setListTodo([...listTodo, todo]);
    }
    const removeTodo = (id: number) => {
        const newListTodo = listTodo.filter((item) => {
            return item.id !== id;
        })
        setListTodo(newListTodo);
    }
    return (
        <div style={{ margin: "50px auto", width: "600px", border: "1px solid #ccc", borderRadius: "10px", padding: 10 }}>
            <div
                style={{
                    padding: "10px 0",
                    borderBottomWidth: 1,
                    borderBottomColor: "#ccc",
                    borderBottomStyle: "solid"
                }}
            >
                My todo list:
            </div>
            <br />
            <TodoInput
                addNewTodo={addNewTodo}

            />
            <TodoData
                todos={listTodo}
                removeTodo={removeTodo}

            />
        </div>)
}

export default TodoList;
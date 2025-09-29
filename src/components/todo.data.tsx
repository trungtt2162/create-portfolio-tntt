
interface IProps {
    todos: {
        id: number,
        title: string,
        isComplete: boolean
    }[],
    owners?: string,
    age?: number,
    isDeveloper?: boolean,
    removeTodo: (value: number) => void
}
const TodoData = (props: IProps) => {
    const { removeTodo } = props;
    const handleDeleteTodo = (id: number) => {
        removeTodo(id);
    }
    const { todos } = props
    return (
        <div>
            {todos.map(item => {
                return (
                    <div key={item.id} style={{ padding: 10 }}>
                        {item.id} - {item.title} - <button onClick={() => handleDeleteTodo(item.id)} >Delete</button>
                    </div>
                )
            }

            )}
        </div>
    )
}

export default TodoData
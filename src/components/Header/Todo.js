import { useState } from 'react';

function Todo(props) {
    let { todo, deleteTodoItem, editTodoItem } = props;

    const [editTodo, setEditTodo] = useState({});

    let isEmptyObj = Object.keys(editTodo).length === 0;

    const handleDlelete = (index) => {
        deleteTodoItem(index);
    };

    const handleEdit = (todo) => {
        setEditTodo(todo);
    };

    const handleSave = () => {
        editTodoItem(editTodo);
        setEditTodo({});
    };

    const handleOnChangeEdit = (e) => {
        const newObj = { ...editTodo };
        newObj.title = e.target.value;
        setEditTodo({
            ...newObj,
        });
    };

    return (
        <div>
            {todo &&
                todo.length > 0 &&
                todo.map((item, index) => {
                    return (
                        <div key={index}>
                            {isEmptyObj === true ? (
                                <span>
                                    {item.id} - {item.title}{' '}
                                    <button onClick={() => handleDlelete(index)}>Delete</button>
                                    <button onClick={() => handleEdit(item)}>Edit</button>
                                </span>
                            ) : (
                                <>
                                    {editTodo.id === item.id ? (
                                        <span>
                                            <input
                                                type="text"
                                                defaultValue={item.title}
                                                onChange={(e) => handleOnChangeEdit(e)}
                                            />
                                            <button onClick={() => handleDlelete(index)}>
                                                Delete
                                            </button>
                                            <button onClick={() => handleSave()}>Save</button>
                                        </span>
                                    ) : (
                                        <span>
                                            {item.id} - {item.title}{' '}
                                            <button onClick={() => handleDlelete(index)}>
                                                Delete
                                            </button>
                                            <button onClick={() => handleEdit(item)}>Edit</button>
                                        </span>
                                    )}
                                </>
                            )}
                        </div>
                    );
                })}
        </div>
    );
}

export default Todo;

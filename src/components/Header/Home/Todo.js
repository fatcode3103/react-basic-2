import { useState } from 'react';

import './Home.scss';

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
                        <div key={index} className="todo">
                            {isEmptyObj === true ? (
                                <span className="todo-item">
                                    <div className="title">
                                        {item.id} - {item.title}{' '}
                                    </div>
                                    <div className="btn">
                                        <button
                                            className="btn-delete"
                                            onClick={() => handleDlelete(index)}
                                        >
                                            Delete
                                        </button>
                                        <button
                                            className="btn-edit"
                                            onClick={() => handleEdit(item)}
                                        >
                                            Edit
                                        </button>
                                    </div>
                                </span>
                            ) : (
                                <>
                                    {editTodo.id === item.id ? (
                                        <span className="todo-item">
                                            <input
                                                className="title"
                                                type="text"
                                                defaultValue={item.title}
                                                onChange={(e) => handleOnChangeEdit(e)}
                                            />
                                            <div className="btn">
                                                <button
                                                    className="btn-delete"
                                                    onClick={() => handleDlelete(index)}
                                                >
                                                    Delete
                                                </button>
                                                <button
                                                    className="btn-save"
                                                    onClick={() => handleSave()}
                                                >
                                                    Save
                                                </button>
                                            </div>
                                        </span>
                                    ) : (
                                        <span className="todo-item">
                                            <div className="title">
                                                {item.id} - {item.title}{' '}
                                            </div>
                                            <div className="btn">
                                                <button
                                                    className="btn-delete"
                                                    onClick={() => handleDlelete(index)}
                                                >
                                                    Delete
                                                </button>
                                                <button
                                                    className="btn-edit"
                                                    onClick={() => handleEdit(item)}
                                                >
                                                    Edit
                                                </button>
                                            </div>
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

import { useState, useEffect } from 'react';

import Todo from './Todo';

function Home() {
    //STATE
    // dia chi
    const [address, setAddress] = useState('');
    // list data
    const [todo, setTodo] = useState([
        { id: 254, title: 'Quet nha' },
        { id: 543, title: 'Rua bat' },
        { id: 325, title: 'Nau com' },
        { id: 619, title: 'Mua thit' },
        { id: 802, title: 'Lam bai' },
    ]);

    const handleAddTodo = () => {
        // setName(name + '1'); // bat dong bo
        if (address) {
            const newObj = {
                id: Math.floor(Math.random() * 1000),
                title: address,
            };
            setTodo([...todo, newObj]);
        }
        setAddress('');
    };

    const handleInput = (e) => {
        setAddress(e.target.value);
    };

    const deleteTodoItem = (index) => {
        const arr = [...todo];
        arr.splice(index, 1);
        setTodo([...arr]);
    };

    const editTodoItem = (item) => {
        const arr = [...todo];
        const index = arr.findIndex((e) => e.id === item.id);
        arr[index] = item;
        setTodo([...arr]);
    };

    // USE effect

    useEffect(() => {
        console.log('...run useEffect');
    }, []);

    return (
        <div>
            <span style={{ fontSize: '20px', fontWeight: '600' }}>Todo list</span> <br />
            <div style={{ margin: '10px 0' }}>
                <input type="text" value={address} onChange={(e) => handleInput(e)} />{' '}
                <button type="button" onClick={() => handleAddTodo()}>
                    Add todo
                </button>
            </div>
            <Todo todo={todo} deleteTodoItem={deleteTodoItem} editTodoItem={editTodoItem} />
        </div>
    );
}

export default Home;

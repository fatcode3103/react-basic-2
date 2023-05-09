import axios from 'axios';
import { useState } from 'react';
import './Blog.scss';

function AddNewBlog(props) {
    const { setShow, handleAddNewBlog } = props;
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!title) {
            alert('error!');
            return;
        }
        if (!content) {
            alert('error!');
            return;
        }
        postData();
        setShow(false);
    };

    let data = {
        title: title,
        body: content,
        userIt: 1,
    };

    async function postData() {
        let res = await axios.post('https://jsonplaceholder.typicode.com/posts', data);
        if (res && res.data) {
            let newBlog = res.data;
            handleAddNewBlog(newBlog);
        }
    }

    return (
        <div className="add-new-container">
            <div className="text-add-new">__________Add new blog__________</div>
            <form className="form-add-new" onSubmit={handleSubmit}>
                <div className="input-add-new">
                    <label className="label-add">Title:</label>
                    <input
                        className="input-add"
                        type="text"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    />
                </div>
                <div className="input-add-new">
                    <label className="label-add">Content:</label>
                    <input
                        className="input-add"
                        type="text"
                        value={content}
                        onChange={(e) => setContent(e.target.value)}
                    />
                </div>

                <button className="submit" type="submit">
                    Submit
                </button>
            </form>
        </div>
    );
}

export default AddNewBlog;

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link, useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useEffect, useState } from 'react';

import useFetch from '~/customize/fetch';
import './Blog.scss';
import AddNewBlog from './AddNewBlog';

function Blog() {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [newData, setNewData] = useState([]);

    const { data, loading } = useFetch('https://jsonplaceholder.typicode.com/posts');

    useEffect(() => {
        const tmp = data.slice(0, 5);
        setNewData(tmp);
    }, [data]);

    const handleAddNewBlog = (blog) => {
        let tmp = [...newData];
        tmp.unshift(blog);
        setNewData(tmp);
        toast.success('Add success !');
    };

    const handleDeleteBlog = (index) => {
        let tmp = [...newData];
        tmp.splice(index, 1);
        setNewData(tmp);
        toast.success('Delete success !');
    };

    return (
        <>
            <div style={{ width: '100%', fontSize: '30px' }}>Get data from API</div>
            <>
                <Button variant="primary" onClick={handleShow} className="my-3">
                    Add new blog
                </Button>

                <Modal show={show} onHide={handleClose}>
                    <Modal.Body>
                        <AddNewBlog setShow={setShow} handleAddNewBlog={handleAddNewBlog} />
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                            Close
                        </Button>
                        {/* <Button variant="primary" onClick={handleClose}>
                            Save Changes
                        </Button> */}
                    </Modal.Footer>
                </Modal>
            </>
            <div className="blog-container">
                {loading ? (
                    <div style={{ margin: 'auto' }} className="loader"></div>
                ) : (
                    <>
                        {newData &&
                            newData.length > 0 &&
                            newData.map((item, index) => {
                                return (
                                    <div key={index} className="single-blog">
                                        <div className="title-blog">
                                            {item.id}. {item.title}
                                        </div>
                                        <div className="body-blog">Body: {item.body}</div>
                                        <button className="btn-blog">
                                            <Link to={`/blog/${item.id}`}>View detail</Link>
                                        </button>
                                        <button
                                            onClick={() => handleDeleteBlog(index)}
                                            className="btn-delete"
                                        >
                                            Delete
                                        </button>
                                    </div>
                                );
                            })}
                    </>
                )}
            </div>
            <ToastContainer theme="dark" />
        </>
    );
}

export default Blog;

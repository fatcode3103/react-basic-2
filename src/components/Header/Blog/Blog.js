import { Link } from 'react-router-dom';
import useFetch from '~/customize/fetch';
import './Blog.scss';

function Blog() {
    const { data, loading } = useFetch('https://jsonplaceholder.typicode.com/posts');
    // const newData = data.slice(0, 10);
    return (
        <div className="blog-container">
            {loading ? (
                <div style={{ margin: 'auto' }} className="loader"></div>
            ) : (
                <>
                    <span style={{ width: '100%', fontSize: '30px' }}>Get data from API</span>
                    {data &&
                        data.length > 0 &&
                        data.map((item, index) => {
                            return (
                                <div key={index} className="single-blog">
                                    <div className="title-blog">
                                        {item.id}. {item.title}
                                    </div>
                                    <div className="body-blog">Body: {item.body}</div>
                                    <button className="btn-blog">
                                        <Link to={`/blog/${item.id}`}>View detail</Link>
                                    </button>
                                </div>
                            );
                        })}
                </>
            )}
        </div>
    );
}

export default Blog;

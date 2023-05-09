import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBackward } from '@fortawesome/free-solid-svg-icons';
import { useParams, useNavigate } from 'react-router-dom';

import useFetch from '~/customize/fetch';

function DetailBlog() {
    // console.log(useParams()); // useParams return an obj {key and value}
    const { id } = useParams();
    let { data, loading } = useFetch(`https://jsonplaceholder.typicode.com/posts/${id}`);

    const navigate = useNavigate();

    const handleBackData = () => {
        navigate('/blog');
    };

    const meme =
        'https://trinhvantuyen.com/wp-content/uploads/2022/05/cheems-j-danh-nhau-khong_081945436.jpg';

    return (
        <>
            {loading ? (
                <>
                    <div className="loader"></div>
                </>
            ) : (
                <div className="detail-blog">
                    <div className="back-blog">
                        <span onClick={() => handleBackData()}>
                            <FontAwesomeIcon icon={faBackward} className="icon-blog" />
                            <span className="text">Back to blog app</span>
                        </span>
                    </div>
                    <div>
                        <p>User id: {data.userId}</p>
                        <p>Id: {data.id}</p>
                        <p>Title: {data.title}</p>
                        <p>Body: {data.body}</p>
                    </div>
                    <img src={meme} alt="meme" />
                </div>
            )}
        </>
    );
}

export default DetailBlog;

import { useNavigate } from 'react-router-dom';

import './NotFound.scss';

function NotFound() {
    const navigate = useNavigate();
    const handleGoToHomePage = () => {
        navigate('/');
    };

    return (
        <>
            <section class="page_404">
                <div class="container">
                    <div class="row">
                        <div class="col-sm-12 ">
                            <div class="col-sm-10 col-sm-offset-1  text-center">
                                <div class="four_zero_four_bg">
                                    <h1 class="text-center ">404</h1>
                                </div>

                                <div class="contant_box_404">
                                    <h3 class="h2">Look like you're lost</h3>

                                    <p>the page you are looking for not avaible!</p>

                                    <button
                                        className="btn btn-primary"
                                        onClick={() => handleGoToHomePage()}
                                    >
                                        Go to home page
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default NotFound;

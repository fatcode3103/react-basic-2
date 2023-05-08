import Nav from '../Header/Nav';
import logo from '~/logo.svg';
import '~/App.css';

function DefaultLayout(props) {
    let { children } = props;
    return (
        <div className="container">
            <Nav />
            <div className="App">
                <img src={logo} className="App-logo" alt="logo" />
                {children}
            </div>
        </div>
    );
}

export default DefaultLayout;

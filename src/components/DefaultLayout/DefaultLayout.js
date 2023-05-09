import Nav from '../Header/Nav';
import logo from '~/logo.svg';
import '~/App.css';
// import './DefaultLayout.scss';

function DefaultLayout(props) {
    let { children } = props;
    return (
        <div>
            <Nav />
            <div className="App">
                <img src={logo} className="App-logo" alt="logo" />
                {children}
            </div>
        </div>
    );
}

export default DefaultLayout;

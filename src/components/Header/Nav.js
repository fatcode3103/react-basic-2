import './Nav.scss';
import { NavLink } from 'react-router-dom';

function Nav() {
    return (
        <div className="topnav">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/example">Countdown</NavLink>
            <NavLink to="/find">Find</NavLink>
            <NavLink to="/cv">Covid-19</NavLink>
            <NavLink to="/blog">Blog App</NavLink>
        </div>
    );
}

export default Nav;

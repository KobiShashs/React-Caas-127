import { NavLink } from "react-router-dom";
import "./Menu.css";

function Menu(): JSX.Element {
    return (
        <div className="Menu">
			<NavLink to="home">Home</NavLink>
            <br/>
			<NavLink to="cats">Cats</NavLink>
            <br/>
            <NavLink to="about">about</NavLink>
            <br/>
            <NavLink to="contact-us">Contact Us</NavLink>
        </div>
    );
}

export default Menu;

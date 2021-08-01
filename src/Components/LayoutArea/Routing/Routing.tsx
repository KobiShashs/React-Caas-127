import { Redirect, Route, Switch } from "react-router-dom";
import Login from "../../AuthArea/Login/Login";
import Logout from "../../AuthArea/Logout/Logout";
import Register from "../../AuthArea/Register/Register";
import AddCat from "../../CatArea/AddCat/AddCat";
import CatDetails from "../../CatArea/CatDetails/CatDetails";
import CatsList from "../../CatArea/CatsList/CatsList";
import About from "../../MenuArea/About/About";
import ContactUs from "../../MenuArea/ContactUs/ContactUs";
import Page404 from "../../SharedArea/Page404/Page404";
import Main from "../Main/Main";
import "./Routing.css";

function Routing(): JSX.Element {
    return (
        <div className="Routing">
			<Switch>
                <Route path="/home" component={Main} exact/>
                <Route path="/cats" component={CatsList} exact/>
                <Route path="/cats/add" component={AddCat} exact/>
                <Route path="/cats/details/:id" component={CatDetails} exact/>
                <Route path="/about" component={About} exact/>
                <Route path="/register" component={Register} exact/>
                <Route path="/login" component={Login} exact/>
                <Route path="/logout" component={Logout} exact/>
                <Route path="/contact-us" component={ContactUs} exact/>
                <Redirect path="/" to="/home" exact/>
                <Route component={Page404} exact/> 
            </Switch>
        </div>
    );
}

export default Routing;

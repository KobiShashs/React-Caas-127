import TotalCats from "../../CatArea/TotalCats/TotalCats";
import "./Footer.css";

function Footer(): JSX.Element {
    return (
        <div className="Footer">
             <TotalCats/>
			<p>All right reserved to <a href="http://johnbrce.co.il">John Bryce Training LTD</a></p>
           
        </div>
    );
}

export default Footer;

import { Link } from "react-router-dom";
// import { campground } from "../../assets";
import { ekotimber2 } from "./assets";
export default function Navbar(){
    return(
        <>
            <nav className="nav__container">
                <img className="nav__logo" src={ekotimber2}/>
                <ul className="nav__menu">
                    <li><Link to={`/`} >HOME</Link></li>
                    <li><Link to={`/door`} >DOOR FRAMES</Link></li>
                    <li><Link to={`/wpc`} >WPC</Link></li>
                    <li><Link to={`/about`} >ABOUT US</Link></li>
                    <li><Link to={`/gallery`} >GALLERY</Link></li>
                    <li><Link to={`/contact`} >CONTACT US</Link></li>
                    <li><Link to={`/blogs`} >BLOGS</Link></li>
                </ul>
            </nav>
        </>
    );
}
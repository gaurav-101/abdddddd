import Icons from "../Icons/Icons";
import Footer from "../footer";
import Navbar from "../navbar";
import Strip from "../strip";
import Strip3 from "../strip3";
import Door_first from "./doorframes/door_first";
import Door_second from "./doorframes/door_second";
import { door_head,door_constant } from "./doorframes/door_third";
import Door_four from "./doorframes/door_four"

export default function Doorframes(){
    return(
        <div className="doorframe">
            <Strip/>
            <Navbar/>
            <Door_first/>
            <Door_second/>
            <Icons head={door_head} content={door_constant}/>
            <Door_four/>
            <Footer/>
            <Strip3/>
        </div>
    );
}
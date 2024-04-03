import Icons from "../Icons/Icons";
import Footer from "../footer";
import Navbar from "../navbar";
import Strip from "../strip";
import Strip3 from "../strip3";
import Wpc_first from "./wpc/Wpc_first";
import Wpc_second from "./wpc/Wpc_second";
import { wpc_constant,wpc_head } from "./wpc/wpc";
import Wpc_third from "./wpc/Wpc_third";
import Wpc_five from "./wpc/Wpc_five";
import Wpc_fourth from "./wpc/Wpc_fourth";
import "../index.css"
import Slider from "./wpc/sliderwpc";

export default function Wpc(){
    return(
        <div className="wpc__page">
            <Strip/>
            <Navbar/>
            <Wpc_first />
            <Wpc_second/>
            <Wpc_third/>
            <Wpc_fourth/>
            <Icons head={wpc_head} content={wpc_constant}/>
            <Wpc_five/>
            <Slider/>
            <Footer/>
            <Strip3/>
        </div>
    )
}
import Navbar from "../navbar";
import Strip from "../strip"
import "../index.css"
import Doorframe from "./home/Doorframe";
import First from "./home/First";
import Second from "./home/Second";
import Doorframe2 from "./home/Doorframe2";
import Footer from "../footer";
import Vision from "./home/Vision";
import Strip2 from "./home/strip2";
import Endorsement from "./home/Endorsement";
import Strip3 from "../strip3";
import Slider from "../WPC_page/wpc/sliderwpc";


export default function Home() {
    return (
        <>
            <div className="home">
                <Strip />
                <Navbar />
                <First/>
                <Doorframe/>    
                <Second/>
                <Doorframe2/>
                <Strip2/>
                <Vision/>
                <Endorsement/>
                <Slider/>
                <Footer/>
                <Strip3/>
            </div>
        </>
    )
}
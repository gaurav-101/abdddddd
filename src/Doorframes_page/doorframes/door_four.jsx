import { doorframe_icon5,doorframe_icon4,doorframe_icon8,doorframe_icon9 } from "../../assets";



export default function Door_four() {
    return (
        <div className="door__four">
            <div className="door__four-in">
                <p className="door__four-head">ADVANTAGES OVER GRANITE/MARBLE</p>
                <div className="door__four-main">
                    <div className="door__four-content">
                        <img src={doorframe_icon5} alt="" />
                        <p className="door__four-content-head">COST-EFFECTIVE AND TIME-SAVING</p>
                        <p className="door__four-content-body">It takes a lot of mason hours to build as there is a 2-part application. Additionally, marble/granite, when bought in blocks, takes up too much working space</p>
                    </div>
                    <div className="door__four-content">
                        <img src={doorframe_icon4} alt="" />
                        <p className="door__four-content-head">EASY INSTALLATION</p>
                        <p className="door__four-content-body">WPC door frames are easier to install, while marble/granite is heavy and needs to be installed carefully to prevent cracking and chipping.</p>
                    </div>
                    <div className="door__four-content">
                        <img src={doorframe_icon9} alt="" />
                        <p className="door__four-content-head">SOUNDPROOF WITH GREAT AESTHETICS</p>
                        <p className="door__four-content-body">The frame looks like wood and can be used for all door frames in the house. It also provides better sound insulation compared to granite frames.</p>
                    </div>
                    <div className="door__four-content">
                        <img src={doorframe_icon8} alt="" />
                        <p className="door__four-content-head">ACID-PROOF</p>
                        <p className="door__four-content-body">Acid is used to clean the toilet. WPC products from EKO Timber remain unaffected by acid.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}


import { doorframe_second, doorframe_third } from "../../assets";

export default function Door_second() {
    return (
        <div className="door__second">
            <div className="door__second-in">
                <div className="door__second-top">
                    <p>Natural wood possesses a high screw holding and nail holding capacity.
                        These door frames come with various advantages over natural wood, as
                        illustrated below, but most importantly, they are cost-effective and
                        resistant to water, termites, and acid.</p>
                </div>
                <div className="door__second-middle">
                    <img src={doorframe_second} alt="" />
                    <div className="door__second-content">
                        <p>ADVANTAGES OF WPC KITTED DOOR FRAMES</p>
                        <div className="door__second-li">
                            <li>Uniform size.</li>
                            <li>Value-engineered design options.</li>
                            <li> Ready to install.</li>
                            <li>Can be installed at any stage of construction.</li>
                            <li>No reworking post-installation.</li>
                            <li>Saves labor costs and time.</li>
                            <li> Compact packaging.</li>
                            <li>Easy handling.</li>
                        </div>
                        <div className="door__second-btn">
                            <button>Build Your Door Frames</button>
                        </div>
                    </div>
                </div>
                <div className="door__second-bottom">
                    <img src={doorframe_third} alt="" />
                    <div className="door__second-bottom-text">
                        <p className="door__second-bottom-head">WPC DOOR FRAMES</p>
                        <p className="door__second-bottom-body">There are a host of benefits to using WPC door frames over wood.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
import { useNavigate } from "react-router-dom";
export default function Vision() {
    const navigate = useNavigate();

    const handleButtonClick = () => {
        navigate('/wpc');
    };
    return (
        <div className="vision">
            <div className="vision__second">
                <div className="vision__box vision__box-side">
                    <div className="vision__top">COMPANY PROFILE</div>
                    <p> Mr. Vikram Aditya Agrawal started his career manufacturing PVC
              material, and his business soon expanded into real estate.</p>
                    <button onClick={handleButtonClick}>KNOW MORE</button>
                </div>
                <div className="vision__box visionbox-middle">
                    <div className="vision__top">WHY US</div>
                    <p> EkOTimber is a leading manufacturer in India of a wide range of
                        WPC building materials made in a state-of-the-art facility that is
                        committed to delivering excellence.</p>
                    <button onClick={handleButtonClick}>KNOW MORE</button>

                </div>
                <div className="vision__box vision__box-side">
                    <div className="vision__top">MISSION & VISION</div>
                    <p>To slowly replace the usage of wood in real estate with quality
                WPC products from EKOtimber.</p>

                    <button onClick={handleButtonClick}>KNOW MORE</button>
                </div>
            </div>
        </div>
    );
}
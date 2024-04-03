import { doorframe2 } from "../../assets"
import { useNavigate } from "react-router-dom";

export default function Doorframe() {
    const navigate = useNavigate();

    const handleButtonClick = () => {
      navigate('/door');
    };

    return (
        <div className="doorframes">
            <div className="doorframes__zero">
                <div className="doorframes__img">
                    <img src={doorframe2} />
                </div>
                <div className="doorframes__first">
                    <h2 className="doorframes__first-h">DOOR FRAMES</h2>
                    <div className="doorframes__first-p">
                        Our door frames are as dense as wood and can be worked with
                        the same tools and techniques. These frames are built solid
                        with excellent screw holding and nail holding capacity. They
                        are moisture-proof, so no more swelling or warping during the
                        monsoons. Most importantly, they're cost-efficient,
                        termite-proof, and acid-proof.
                    </div>
                    <button className="doorframes__btn" onClick={handleButtonClick}>
                        <b className="doorframes__btn-t">KNOW MORE</b>
                    </button>
                </div>
            </div>
        </div>
    )
}
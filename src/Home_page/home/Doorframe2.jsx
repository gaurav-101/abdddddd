
import { doorframe3 } from "../../assets";
import { useNavigate } from "react-router-dom";

export default function Doorframe2() {
    const navigate = useNavigate();

    const handleButtonClick = () => {
        navigate('/door');
    };

    return (
        <div className="doorframes doorframes__outer">
            <div className="doorframes__zero">
                <div className="doorframes__img">
                    <img src={doorframe3} />
                </div>
                <div className="doorframes__first">
                    <h2 className="doorframes__first-h">WHY CHOOSE EKOTIMBER?</h2>
                    <div className="doorframes__first-p doorframes2">
                        With EKOTimber, you are assured of quality WPC products designed
                        with Value Engineering, keeping in mind the strength and
                        shortcomings of wood. EKOTimber is manufactured with virgin
                        materials and high-quality standards, which not only have a
                        wood-like finish but are also eco-friendly, being lead and
                        formaldehyde-free. Our products not only reduce the felling of
                        trees but are also recyclable, making them the most sustainable
                        building material for the real estate industry in the 21st
                        century.
                    </div>
                    <button className="doorframes__btn" onClick={handleButtonClick}>
                        <b className="doorframes__btn-t">KNOW MORE</b>
                    </button>
                </div>
            </div>
        </div>
    );
}
import { rectangle } from "../../assets"
import { useNavigate } from "react-router-dom";
export default function Second() {
    const navigate = useNavigate();

    const handleButtonClick = () => {
      navigate('/wpc');
    };
    return (
        <div className="wpc">
            <img src={rectangle} alt="" />
            <div className="wpc__second">
                <div className="wpc__box">
                    <div className="wpc__top">WHAT IS WPC?</div>
                    <p>WPC is a sustainable alternative to wood as a building material, made
                        by integrating thermoplastics with wood flour. Wood Plastic
                        Composites, as they are called, have the feel and look of wood.</p>
                    <button onClick={handleButtonClick}>KNOW MORE</button>
                </div>
                <div className="wpc__box wpcbox-middle">
                    <div className="wpc__top">WHY IS WPC SO EXCITING?</div>
                    <p>Since WPC is extruded, it can be made in various shapes,
                sizes, and forms. Manufactured in various colors, finishes,
                and textures, its versatility is only limited to the user's
                imagination.</p>
                    <button onClick={handleButtonClick}>KNOW MORE</button>

                </div>
                <div className="wpc__box">
                    <div className="wpc__top">WHY SWITCH TO WPC?</div>
                    <p>WPC looks and feels like wood, allowing carpenters the convenience of
        using the same tools as used on wood. Being a manufactured product, it
        is consistent in design and texture, while having additional properties.</p>

                    <button onClick={handleButtonClick}>KNOW MORE</button>
                </div>
            </div>
        </div>
    )
}
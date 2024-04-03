import { wpc_second } from "../../assets"

export default function Wpc_second() {
    return (
        <div className="wpc__p1">
            <div className="wpc__p1__zero">
                <div className="wpc__p1__first">
                    <h2 className="wpc__p1__first-h">What is WPC?</h2>
                    <div className="wpc__p1__first-p">
                        WPC is a sustainable alternative to wood as a building material, made by integrating thermoplastics with wood flour. Wood Plastic Composites, as they are called, have the feel and look of wood, but they are more durable and can also be recycled.
                    </div>
                </div>
                <div className="wpc__p1__img">
                    <img src={wpc_second} />
                </div>
            </div>
        </div>

    )
}
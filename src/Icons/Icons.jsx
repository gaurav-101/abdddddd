
import "./icons.css"
export default function Icons({ head, content }) {
    return (
        <div className="icons">
            <div className="icons__head">
                <p>{head}</p>
            </div>
            <div className="icons__content">
                <div className="icons__content-align">
                    {content.map(divcontent => (
                        <div className="icons__content-main">
                            <div className="icons__content-img">
                                <img  src={divcontent.icon} alt="" />
                            </div>
                            <div className="icons__content-head">
                                <p >{divcontent.head}</p>
                            </div>
                            <div className="icons__content-body">
                                <p >{divcontent.content}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
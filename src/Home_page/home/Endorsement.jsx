import { endorse,endorse1,endorse2,endorse3,endorse4,endorse5 } from "../../assets"

export default function Endorsement() {
    return (
        <div className="endorse">
            <div className="endorse__in">
                <p className="endorse__head">ENDORESMENT</p>
                <img className="endorse__img" src={endorse} alt="" />
                <div className="endorse__content">
                    <p className="endorse__content-head">MR. HARSHVARDHAN TIBREWAL</p>
                    <p className="endorse__content-body">At Prima Terra, we build some of the most exquisite offices and
                        residencies. Eko Timber has provided a perfect alternative to the
                        wood we use in our interiors and certain parts of architecture
                        because these products last longer and come prefinished for easier
                        installation.</p>
                </div>
                <div className="endorse__footer">
                    <p className="endorse__head">VALUED CUSTOMER</p>
                    <div className="endorse__footer-img">
                        <img src={endorse1} alt="" />
                        <img src={endorse2} alt="" />
                        <img src={endorse3} alt="" />
                        <img src={endorse4} alt="" />
                        <img src={endorse5} alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}
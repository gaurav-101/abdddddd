
import { Link } from "react-router-dom"
import { ekotimber1, footer, twitter, insta, google, t, facebook } from "./assets"

export default function Footer() {
    return (
        <div className="footer">
            <img className="footer__bg" src={footer} alt="" />
            <div className="footer__content">
                <div className="footer__first">
                    <img src={ekotimber1} className="footer__overlay" alt="" />
                    <a href="">CONNECT WITH US</a>
                    <div className="footer__logo">
                        <a href=""><img src={twitter} alt="" /></a>
                        <a href=""><img src={insta} alt="" /></a>
                        <a href=""><img src={google} alt="" /></a>
                        <a href=""><img src={t} alt="" /></a>
                        <a href=""><img src={facebook} alt="" /></a>   
                    </div>
                </div>
                <div className="footer__second">
                    <a href="">GET IN TOUCH</a>
                    <div>

                        <p>
                            <b>EKOTimber Tech Wood </b>
                        </p>
                        <p>
                            <b>Plastic Composites LLP</b>
                        </p>
                        <p >
                            Hari Om Chambers. 6th Floor. 601/602.
                        </p>
                        <p >
                            B/16, Veera Industrial Estate.
                        </p>
                        <p >
                            Off. New Link Road, Andheri West.
                        </p>
                        <p >Mumbai - 400053. India.</p>
                        <p >
                            Mail: admin@ekotimber.in
                        </p>
                        <p >Phone: +91 22 42334444</p>
                    </div>
                </div>
                <div className="footer__third">
                    <a href="">MORE LINKS</a>
                    <div>
                        <a>Order Form</a>
                        <a>Quote</a>
                        <a>Where To Buy</a>
                        <a>Dealership Enquiry</a>
                        <a>Downloads</a>
                        <a>Certificates</a>
                    </div>

                </div>
            </div>
        </div>
    )
}
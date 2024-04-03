import styles from "./CompanyProfile.module.css";
import Strip from "../strip";
import Navbar from "../navbar";
import Strip3 from "../strip3";
import Footer from "../footer";
import First from "./companyProfile/First";
import {companyProfile1,companyProfile2,companyProfile3,companyProfile4} from "../assets";
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

export default function CompanyProfile() {
  return (
    <div className="about">
          <Strip/>
          <Navbar/>
        <div className={styles.companyProfile}>
          
          <First/>
          <div className={styles.mrVikramAadityaContainer}>
            <p className={styles.mrVikramAaditya}>
              Mr. Vikram Aaditya Agarwal started his career manufacturing PVC
              material, and his business soon expanded into real estate.
            </p>
            <p className={styles.showMore}>
              <b>Show more...</b>
            </p>
          </div>
          <div className={styles.raghavAgarwalIsContainer}>
            <p className={styles.raghavAgarwalIs}>
              Raghav Agarwal, is a new new-generation dynamic entrepreneur who is
              spearheading the business and confidently making EkoTimber stay a step
              ahead in this rapidly changing environment. He oversees quality
              control and business development. Ekotimber relies on him to ensure
              that our motto "customer satisfaction first" remains our prime focus.
            </p>
            <p className={styles.showMore1}>
              <b>Show more...</b>
            </p>
          </div>
          <div className={styles.mrVikramAaditya1}>Mr. Vikram Aaditya Agarwal</div>
          <div className={styles.mrRaghavAgarwalContainer}>
            <p className={styles.mrRaghavAgarwal}>Mr. Raghav Agarwal</p>
            <p className={styles.blankLine}>&nbsp;</p>
          </div>
          <div className={styles.mrAyushmanAgarwalContainer}>
            <p className={styles.mrAyushmanAgarwal}>
              Mr. Ayushman Agarwal observed that the construction industry was still
              using wood as a key building material. Exposed to the business world
              through trade by way of imports, Mr. Ayushman Agarwal has been
              sourcing high-quality products with value-engineered design at optimal
              costs, allowing for significant savings within his real estate
              business. He also possesses a lot of knowledge of international
              developments in technology and value engineering.
            </p>
            <p className={styles.showMore2}>
              <b>Show more...</b>
            </p>
          </div>
          <div className={styles.mrAyushmanAgarwal1}>Mr. Ayushman Agarwal</div>
          <div className={styles.address}>Address</div>
          <div className={styles.aboutUs1}>ABOUT US</div>
          <img className={styles.vectorIcon} alt="" src={companyProfile1} />
          <img className={styles.companyProfileChild3} alt="" src={companyProfile1} />
          <img className={styles.companyProfileChild4} alt="" src={companyProfile1} />
          <div className={styles.hariOmChambersContainer}>
            <p className={styles.hariOmChambers}>Hari Om Chambers. 6th Floor.</p>
            <p className={styles.p}>601/602.</p>
            <p className={styles.b16VeeraIndustrial}>
              B/16, Veera Industrial Estate.
            </p>
            <p className={styles.offNewLink}>Off. New Link Road, Andheri West.</p>
            <p className={styles.mumbai400053}>Mumbai - 400053. India.</p>
            <p className={styles.adminekotimberin1}>admin@ekotimber.in</p>
            <p className={styles.p1}>+91 22 42334444)</p>
          </div>
          <div className={styles.companyProfileWhyUsVisionParent}>
            <div className={styles.companyProfileWhyContainer}>
              <p className={styles.companyProfile2}>
                <b><Link to="/cp" className={styles.navLink}>Company Profile</Link></b>
              </p>
              <p className={styles.whyUs}><Link to="/about" className={styles.navLink}>Why Us</Link></p>
              <p className={styles.visionMission}><Link to="/mission-vision" className={styles.navLink}>{`Vision & Mission`}</Link></p>
            </div>
            <img className={styles.groupChild} alt="" src={companyProfile2} />
            <img className={styles.groupItem} alt="" src={companyProfile3} />
            <img className={styles.groupInner} alt="" src={companyProfile3} />
          </div>
          <img className={styles.men1Icon} alt="" src={companyProfile4} />
          
          <img className={styles.men2Icon} alt="" src={companyProfile4} />
          <img className={styles.men3Icon} alt="" src={companyProfile4} />
        </div>
        <Footer/>
        <Strip3/>
      </div>
  );
};

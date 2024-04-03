import styles from "./MissionVision.module.css";
import Strip from "../strip";
import Navbar from "../navbar";
import Strip3 from "../strip3";
import Footer from "../footer";
import First from "./vision/First";

import {  vision1, vision2,vision3,vision4,vision5, vision_first } from "../assets"
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

const MissionVision = () => {
  return (
    <div className="vision">
          <Strip/>
          <Navbar/>
          <div className={styles.missionVision}>
          <First/>
            <div className={styles.frameDiv} />
            <div className={styles.toBuildAContainer}>
              <p className={styles.toBuildA}>
                To build a business that provides the construction industry with
                better economical options in terms of building materials while
                conserving our forests and significantly impacting our environment in
                a positive way.
              </p>
              <p className={styles.blankLine}>&nbsp;</p>
            </div>
            <div className={styles.toSlowlyReplaceContainer}>
              <p className={styles.toSlowlyReplace}>
                To slowly replace the usage of wood in construction with quality WPC
                products from EKOTimber and further our research and development in
                order to develop better quality products while simultaneously
                maintaining an effort to conserve trees and protect the environment.
                Finally, with all this, we aim to stay a step ahead in a rapidly
                changing industry.
              </p>
              <p className={styles.blankLine1}>&nbsp;</p>
            </div>
            <div className={styles.vision}>Vision</div>
            <div className={styles.mission}>Mission</div>
            <div className={styles.address}>Address</div>
            <div className={styles.aboutUs1}>ABOUT US</div>
            <img className={styles.vectorIcon} alt="" src={vision1} />
            <img className={styles.missionVisionChild1} alt="" src={vision1} />
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
                <p className={styles.companyProfile}><Link to="/cp" className={styles.navLink}>Company Profile</Link></p>
                <p className={styles.whyUs}>
                  <b><Link to="/about" className={styles.navLink}>Why Us</Link></b>
                </p>
                <p className={styles.visionMission}><Link to="/mission-vision" className={styles.navLink}>{`Vision & Mission`}</Link></p>
              </div>
              <img className={styles.groupChild} alt="" src={vision2} />
              <img className={styles.groupItem} alt="" src={vision3} />
              <img className={styles.groupInner} alt="" src={vision3} />
            </div>
            <img className={styles.goal1Icon} alt="" src={vision4} />
            <img className={styles.vision1Icon} alt="" src={vision5} />
            
            <div className={styles.visionMission1}>{`Vision & Mission`}</div>
            
          </div>
          <Footer/>
          <Strip3/>
          </div>
  );
};

export default MissionVision;

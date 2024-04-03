import styles from "./About1.module.css";
import Strip from "../strip";
import Navbar from "../navbar";
import Strip3 from "../strip3";
import Footer from "../footer";
import First from "./about/First";
import { about_vector5 } from "../assets"
import { about_vector9 } from "../assets"
import { about_vector10 } from "../assets"
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

export default function About1(){
  return(
      <div className="about">
          <Strip/>
          <Navbar/>
          <div className={styles.about}>
      
          <First/>
      <div className={styles.ekotimberIsAContainer}>
        <p className={styles.ekotimberIsA}>
          EKOTimber is a leading manufacturer in India of a wide range of WPC
          building materials made in a state-of-the-art facility committed to
          delivering excellence. The WPC building materials we manufacture are
          also formaldehyde and lead-free, caring for you and the environment.
        </p>
        <p className={styles.blankLine}>&nbsp;</p>
      </div>
      <div className={styles.whyUsContainer}>
        <p className={styles.whyUs1}>WHY US</p>
        <p className={styles.blankLine1}>&nbsp;</p>
      </div>
      <div className={styles.address}>Address</div>
      <div className={styles.aboutUs1}>ABOUT US</div>
      <img className={styles.vectorIcon} alt="" src={about_vector5} />
      <img className={styles.aboutChild1} alt="" src={about_vector5} />
      <div className={styles.withAVeteranContainer}>
        <p className={styles.withAVeteran}>
          With a veteran like Vikram Agrawal at the helm, EKOTimber benefits
          from his foresight in the construction industry. This has transformed
          cutting-edge innovation and development to meet and exceed the demands
          of the industry. Consumers are thereby assured of quality WPC products
          that not only have a wood-like finish but are also eco-friendly, being
          lead-free and formaldehyde-free.
        </p>
        <p className={styles.blankLine2}>&nbsp;</p>
        <p className={styles.ourWpcProducts}>
          Our WPC products not only reduce the felling of trees but are also
          recyclable, making them the most sustainable building material for the
          construction industry in the 21st century. Our products are a boon for
          offices looking to create a low carbon footprint and gain carbon
          credits for their business.
        </p>
        <p className={styles.blankLine3}>&nbsp;</p>
      </div>
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
      <div className={styles.whyChooseEkotimberContainer}>
        <p className={styles.whyChooseEkotimber}>WHY CHOOSE EKOTIMBER</p>
        <p className={styles.blankLine4}>&nbsp;</p>
      </div>
      <img className={styles.aboutChild2} alt="" src={about_vector5} />
      <img className={styles.aboutChild3} alt="" src={about_vector5} />
      <div className={styles.companyProfileWhyUsVisionParent}>
        <div className={styles.companyProfileWhyContainer}>
          <p className={styles.companyProfile}><Link to="/cp" className={styles.navLink}>Company Profile</Link></p>
          <p className={styles.whyUs2}><Link to="/about" className={styles.navLink}>Why Us</Link></p>
          <p className={styles.visionMission}><Link to="/mission-vision" className={styles.navLink}>{`Vision & Mission`}</Link></p>
        </div>
        <img className={styles.groupChild} alt="" src={about_vector9} />
        <img className={styles.groupItem} alt="" src={about_vector10} />
        <img className={styles.groupInner} alt="" src={about_vector10} />
      </div>
      
    </div>
          <Footer/>
          <Strip3/>
      </div>
  );
}
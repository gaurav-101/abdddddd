import styles from "./Contact.module.css";
import Strip from "../strip";
import Navbar from "../navbar";
import Strip3 from "../strip3";
import Footer from "../footer";
import First from './contact/First'
import {contact2,contact3,contact4,contact5,contact6,contact7,contact8,contact9} from "../assets"

export default function Contact(){
  return (
    <div className="contact">
        <Strip/>
        <Navbar/>
      <div className={styles.contact}>
        <First/>
        <div className={styles.contactInner} />
        
        <div className={styles.rectangleDiv} />
        <div className={styles.contactChild1} />
        <div className={styles.hariOmChambersContainer}>
          <p className={styles.hariOmChambers6thFloor6}>
            <span className={styles.hariOmChambers}>
              Hari Om Chambers, 6th Floor, 601/602, B/16, Veera Industrial Estate,
              Andheri West, Mumbai-396195, Maharashtra, India
            </span>
          </p>
          <p className={styles.mailAdminekotimberin}>
            <b className={styles.mail}>MAIL</b>
            <span className={styles.span}>{`: `}</span>
            <a
              className={styles.adminekotimberin1}
              href="mailto:admin@ekotimber.in"
              target="_blank"
            >
              <span className={styles.adminekotimberin2}>
                <span className={styles.adminekotimberin3}>
                  admin@ekotimber.in
                </span>
              </span>
            </a>
          </p>
          <p className={styles.phone912242334444}>
            <b className={styles.phone}>Phone</b>
            <span className={styles.span1}>: +91 22 42334444</span>
          </p>
          <p className={styles.blankLine}>
            <span className={styles.blankLine1}>&nbsp;</span>
          </p>
        </div>
        <div className={styles.yourName}>Your Name* :</div>
        <div className={styles.yourEmail}>Your Email* :</div>
        <div className={styles.contact1}>Contact* :</div>
        <div className={styles.interestedIn}>Interested In* :</div>
        <div className={styles.productInformation}>Product Information</div>
        <div className={styles.businessDevelopment}>Business Development</div>
        <div className={styles.others}>Others</div>
        <div className={styles.dealershipEnquiry}>Dealership Enquiry</div>
        <div className={styles.jobOpportunity}>Job Opportunity</div>
        <div className={styles.iAm}>I Am* :</div>
        <b className={styles.ekotimberTechWood}>
          EKOTimber Tech Wood Plastic Composites LLP.
        </b>
        <div className={styles.getInTouch}>Get in Touch</div>
        <div className={styles.ourOffice}>OUR OFFICE</div>
        <img className={styles.vectorIcon} alt="" src={contact8} />
        <img className={styles.contactChild2} alt="" src={contact8} />
        <div className={styles.contactChild3} />
        <img className={styles.rectangleIcon} alt="" src={contact5} />
        <div className={styles.contactChild4} />
        <div className={styles.contactChild5} />
        <div className={styles.contactChild6} />
        <div className={styles.groupDiv}>
          <div className={styles.rectangleParent}>
            <div className={styles.groupChild} />
            <b className={styles.submit}>SUBMIT</b>
          </div>
        </div>
        <div className={styles.inputField}>
          <input type="text" className={styles.xyzxyzcom} placeholder="xyz@xyz.com" />
          <input type="text" className={styles.xyz} placeholder="xyz" />
          <select className={styles.select}>
            <option value="">Select</option>
            <option value="productInformation">Product Information</option>
            <option value="businessDevelopment">Business Development</option>
            <option value="others">Others</option>
            <option value="dealershipEnquiry">Dealership Enquiry</option>
            <option value="jobOpportunity">Job Opportunity</option>
          </select>
          <input type="text" className={styles.xxxxxxxxxx} placeholder="xxxxxxxxxx" />
        </div>
        <img className={styles.contactChild7} alt="" src={contact5} />
        <img className={styles.vectorIcon1} alt="" src={contact9} />
        <div className={styles.isolationMode} />
        <img className={styles.vectorIcon2} alt="" src={contact6} />
        <img className={styles.groupIcon} alt="" src={contact3} />
        <div className={styles.isolationMode1} />
        <img className={styles.vectorIcon3} alt="" src={contact7} />
        <div className={styles.hyderabadJaiBhavaniDecorsParent}>
          <div className={styles.hyderabadJaiBhavaniContainer}>
            <p className={styles.hyderabad}>
              <b>Hyderabad</b>
            </p>
            <p className={styles.blankLine2}>
              <b>&nbsp;</b>
            </p>
            <p className={styles.jaiBhavaniDecors}>
              Jai Bhavani Decors (Timer Deck)
            </p>
            <p className={styles.sreePraakaamyaSree}>
              Sree Praakaamya Sree Ramaaramam, Plot no. 2-87/3, Narsingi Main
              Road, Manchieruvula village, Narsingi, Hyderabad- 500050 &nbsp; &nbsp; Mobile Number: 9989168596
            </p>
            <p className={styles.blankLine3}>&nbsp;</p>
          </div>
          <div className={styles.kolkataLokenathGlassContainer}>
            <p className={styles.kolkata}>
              <b className={styles.kolkata1}>Kolkata</b>
            </p>
            <p className={styles.blankLine4}>
              <b className={styles.blankLine5}>&nbsp;</b>
            </p>
            <p className={styles.lokenathGlassIndustries}>
              <span className={styles.lokenathGlassIndustries1}>
                Lokenath Glass Industries
              </span>
            </p>
            <p className={styles.muraruPukurRoadKolkata7}>
              <span className={styles.muraruPukurRoadKolkata71}>
                16, Muraru Pukur Road, Kolkata - 700067
              </span>
            </p>
            <p className={styles.emailLokenathglassindustries}>
              <span className={styles.email}>{`Email: `}</span>
              <a
                className={styles.lokenathglassindustriesgmail}
                href="mailto:lokenathglassindustries@gmail.com"
                target="_blank"
              >
                <span className={styles.lokenathglassindustriesgmail1}>
                  <span className={styles.lokenathglassindustriesgmail2}>
                    lokenathglassindustries@gmail.com
                  </span>
                </span>
              </a>
            </p>
            <p className={styles.mobileNumber980405600698}>
              <span className={styles.mobileNumber9804056006981}>
                Mobile Number: 9804056006 / 9836552322
              </span>
            </p>
            <p className={styles.blankLine6}>
              <span className={styles.blankLine7}>&nbsp;</span>
            </p>
            <p className={styles.blankLine8}>
              <span className={styles.blankLine9}>&nbsp;</span>
            </p>
          </div>
          
          <div className={styles.bhutanGaneshEnterprisesContainer}>
            <p className={styles.bhutan}>
              <b className={styles.bhutan1}>Bhutan</b>
            </p>
            <p className={styles.ganeshEnterprises}>
              <b className={styles.blankLine10}>&nbsp;</b>
              <span className={styles.ganeshEnterprises1}>
              Ganesh Enterprises
              </span>
            </p>
            <p className={styles.dalsingpaarBazarPsJaigaon}>
              <span className={styles.dalsingpaarBazarPsJaigaon1}>
                Dalsingpaar Bazar, Ps-Jaigaon, Dist- Alipurduar,
              </span>
            </p>
            <p className={styles.westBengal735208India}>
              <span className={styles.westBengal735208India1}>
                West Bengal - 735208, India
              </span>
            </p>
            <p className={styles.emailGaneshjaiswal726gmail}>
              <span className={styles.email1}>{`Email: `}</span>
              <a
                className={styles.ganeshjaiswal726gmailcom}
                href="mailto:ganeshjaiswal726@gmail.com"
                target="_blank"
              >
                <span className={styles.ganeshjaiswal726gmailcom1}>
                  <span className={styles.ganeshjaiswal726gmailcom2}>
                    ganeshjaiswal726@gmail.com
                  </span>
                </span>
              </a>
            </p>
            <p className={styles.phone77403052}>
              <span className={styles.phone774030521}>Phone: 77403052</span>
            </p>
            <p className={styles.mobile9800827380}>
              <span className={styles.mobile98008273801}>Mobile: 9800827380</span>
            </p>
            <p className={styles.blankLine11}>
              <span className={styles.blankLine12}>&nbsp;</span>
            </p>
            <p className={styles.blankLine13}>
              <span className={styles.blankLine14}>&nbsp;</span>
            </p>
            <p className={styles.blankLine15}>
              <span className={styles.blankLine16}>&nbsp;</span>
            </p>
          </div>
        </div>
        <div className={styles.ourDealers}>OUR DEALERS</div>
        <img className={styles.contactChild8} alt="" src={contact8} />
        <img className={styles.contactChild9} alt="" src={contact2} />
        
      </div>
      <Footer/>
      <Strip3/>
    </div>
  );
};



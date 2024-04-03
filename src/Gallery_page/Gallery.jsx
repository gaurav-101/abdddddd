import styles from "./Gallery.module.css";
import Strip from "../strip";
import Navbar from "../navbar";
import Strip3 from "../strip3";
import Footer from "../footer";
import { gallery_vector5, gallery1, gallery2, gallery3, gallery4, gallery5, gallery6, gallery7, gallery8 } from "../assets"

export default function Gallery() {
  return (
    <div className="gallery">

    <Strip/>
    <Navbar/>
    <div className={styles.gallery}>
      
      <div className={styles.gallery2}>GALLERY</div>
      <img className={styles.vectorIcon} alt="" src={gallery_vector5} />
      <img className={styles.maskGroupIcon} alt="" src={gallery1} />
      <img className={styles.maskGroupIcon1} alt="" src={gallery2} />
      <img className={styles.maskGroupIcon2} alt="" src={gallery3} />
      <img
        className={styles.maskGroupIcon3}
        alt=""
        src={gallery4}
      />
      <img
        className={styles.maskGroupIcon4}
        alt=""
        src={gallery5}
      />
      <img
        className={styles.maskGroupIcon5}
        alt=""
        src={gallery6}
      />
      <img
        className={styles.maskGroupIcon6}
        alt=""
        src={gallery7}
      />
      <img
        className={styles.maskGroupIcon7}
        alt=""
        src={gallery8}
      />
      
    </div>
    <Footer/>
    <Strip3/>
    </div>
  );
};

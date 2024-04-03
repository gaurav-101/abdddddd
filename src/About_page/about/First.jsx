import { about_first } from "../../assets"
import styles from "../About1.module.css";
export default function First() {
    return (
        <div className="second__item ">
            <img className="first__top" src={about_first} />
            <div className="second__item-text" style={{
  position: 'absolute',

  letterSpacing: '-0.02em',
  lineHeight: '29px',
  fontFamily: 'var(--font-navine-demo)',
  color: 'var(--color-white)',
  display: 'inline-block',
  width: '145px',
  height: '29px'
}}>
    <p>
        Why Us
    </p>
</div>
        </div>
    )
}
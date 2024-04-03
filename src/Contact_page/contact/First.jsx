import { contact1 } from "../../assets"
export default function First() {
    return (
        <div className="second__item ">
            <img className="first__top" src={contact1} />
            <div className="second__item-text" style={{
  position: 'absolute',

  letterSpacing: '-0.02em',
  lineHeight: '29px',
  fontFamily: 'var(--font-navine-demo)',
  color: 'var(--color-white)',
  display: 'inline-block',

  height: '29px'
}}>
    <p>
        Contact Us
    </p>
</div>
        </div>
    )
}
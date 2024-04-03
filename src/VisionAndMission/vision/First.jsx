import { vision_first } from "../../assets"
export default function First() {
    return (
        <div className="second__item ">
            <img className="first__top" src={vision_first} />
            <div className="second__item-text" style={{
                position: 'absolute',
                letterSpacing: '-0.02em',
                lineHeight: '29px',
                fontWeight:'400px',
                fontFamily: 'var(--font-navine-demo)',
                color: 'var(--color-white)',
                display: 'inline-block',
                // width: '145px',
                height: '29px'
            }}>
    <p>
    Vision & Mission
    </p>
</div>
        </div>
    )
}
import kudaSatu from '../../assets/svg/democrat_7653183.svg'
import kudaDua from '../../assets/svg/democrat_7653440.svg'
import line from '../../assets/svg/line.svg'
import './Carousel.scss'

const Carousel = (props:any) => {
    const renderHorse = (src:string) => {
        return(
            <div className='wrap-horse'>
                <img src={line}/>
                <img src={src} />
            </div>
        )        
    }

    return(
        <div className={props.size + ' carousel-container'}>
            <div></div>
            <div>
                {renderHorse(kudaSatu)}
                {renderHorse(kudaDua)}
                {renderHorse(kudaSatu)}
                {renderHorse(kudaDua)}
            </div>
        </div>
    )
}

export default Carousel;
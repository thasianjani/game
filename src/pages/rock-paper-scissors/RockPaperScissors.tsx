import { useState } from 'react'
import './RockPaperScissors.scss'
import paper from '../../assets/rock-paper-scissors/icon-paper.svg'
import rock from '../../assets/rock-paper-scissors/icon-rock.svg'
import scissors from '../../assets/rock-paper-scissors/icon-scissors.svg'
import bgTriangle from '../../assets/rock-paper-scissors/bg-triangle.svg'
import imgRules from '../../assets/rock-paper-scissors/image-rules.svg'

const RockPaperScissors = () => {

    const [score,setScore] = useState(0)
    const [player,setPlayer ] = useState('')
    const [showRules,setShowRules] = useState(true)

    const renderRules = () => {
        return (
            <div className='center-container bg-modal'>
                <div className='rules'>
                    <div className='header-rules'>
                        <div>RULES</div>
                        <button className='btn-close' onClick={()=>setShowRules(prev=>prev=!prev)}>X</button>
                    </div>
                    <div>
                        <img src={imgRules} />
                    </div>
                </div>
            </div>
        )
    }

    const showItems = () => {
        return(
            <div className='wrap-items'>
                <div className='show-item-background'>
                    <img src={bgTriangle} alt='triangle background'/>
                </div>
                <div className='icon-circle paper'>
                    <img src={paper} alt='Paper' />
                </div>
                <div className='icon-circle scissors'>
                    <img src={scissors} alt='Scissors'/>
                </div>
                <div className='icon-circle rock'>
                    <img src={rock} alt='Rock' />
                </div>
            </div>
        )
    }

    const renderHeader = () => {
        return(
            <div className='header-rsp'>
                <div className='fs-20'>
                    <div>ROCK</div>
                    <div>PAPER</div>
                    <div>SCISSORS</div>
                </div>
                <div>
                    <div className='fs-11'>SCORE</div>
                    <div className='fs-34'>{score}</div>
                </div>
            </div>
        )

    }



    return(
        <div className="rock-paper-scissors">
            {/* {renderRules()} */}
            {renderHeader()}
            {showItems()}
            {showRules && renderRules()}
            <div className='btn-rules'>
                <button onClick={()=>setShowRules(prev=>prev=!prev)}>RULES</button>
            </div>
        </div>
    )
}

export default RockPaperScissors
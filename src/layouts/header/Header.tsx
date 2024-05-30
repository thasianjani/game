import { NavLink } from "react-router-dom"
import Carousel from "../../components/carousel/Carousel"
import rock from '../../assets/rock-paper-scissors/icon-rock.svg'
import scissors from '../../assets/rock-paper-scissors/icon-scissors.svg'
import './Header.scss'

const Header = () => {

    const renderRockPaperScissors = () => {
        return(
            <div className="rock-paper-scissors-icon vertically-center" >
                <img src={scissors} alt="scissors" />
                <span>vs</span>
                <img src={rock} alt="rock" />
            </div>
        )
    }

    const renderTicTacToe = () => {
        return(
            <div className="tic-tac-toe-icon" >
                <div>
                        <span>X</span>
                        <span>O</span>
                </div>
                <div>
                        <span>O</span>
                        <span>X</span>
                </div>
                <div className="line-1"></div>
                <div className="line-2"></div>
            </div>
        )
    }

    return(
        <div className="header vertically-center">
            <Carousel size='small' />
            <div className="wrap-menu vertically-center">
                <NavLink to={'/tic-tac-toe'}>
                    {renderTicTacToe}
                </NavLink>
                <NavLink to={'/rock-paper-scissors'}>
                    {renderRockPaperScissors}
                </NavLink>
            </div>
        </div>
    )
}

export default Header
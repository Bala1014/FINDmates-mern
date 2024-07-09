import logo from '../images/X-Logo.png'
import colorLogo from '../images/X-logo-color.png'


export const Nav = ({minimal, authToken, setShowModal})=>{

    return(
        <nav>
            <div className="logo-container">
                <img className="logo" src={minimal ? colorLogo : logo} alt="" />
            </div>
            {!authToken && !minimal && <button className='nav-button' onClick={()=> setShowModal(true)}>log in</button>}
        </nav>
    )
}
import logo from '../images/X-Logo.png'
import colorLogo from '../images/X-logo-color.png'


export const Nav = ({minimal, authToken, setShowModal, showModal, setSignUp})=>{

    const handleClick = ()=>{
        setShowModal(true);
        setSignUp(false);
        

    } 

    return(
        <nav>
            <div className="logo-container">
                <img className="logo" src={minimal ? colorLogo : logo} alt=""    />
            </div>
            {!authToken && !minimal && 
                <button className='nav-button' onClick={handleClick} disabled={showModal}>
                    log in
                </button>}
        </nav>
    )
}
import { useState } from 'react';
import {Nav} from '../components/Nav'
import AuthModal from '../components/AuthModal';

export const Home = ()=>{
    const [showModal, setShowModal] = useState(false);

    const [signUp, setSignUp] = useState(true);


    const authToken = false;

    const handleclick = ()=>{
        console.log("clicked");
        setShowModal(true);
        setSignUp(true);
    }

    return(
        <>
            <div className="overlay">
                <Nav minimal={false} authToken={authToken} setShowModal = {setShowModal} showModal={showModal} setSignUp = {setSignUp}></Nav>
                <div className="home">
                    <h1  className="primary-title" >Swipe Right</h1>
                    <button className="primary-button" onClick={handleclick}>
                        {authToken ? "signin" : "create account"}
                    </button>

                    {showModal && (<AuthModal setShowModal = {setShowModal}  signUp={signUp} setSignUp={setSignUp}/>)}

                </div>
            </div>                
        </>
        
    )
}
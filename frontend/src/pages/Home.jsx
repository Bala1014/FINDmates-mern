import { useState } from 'react';
import {Nav} from '../components/Nav'
import AuthModal from '../components/AuthModal';

export const Home = ()=>{
    const [showModal, setShowModal] = useState(false);

    const authToken = false;

    const handleclick = ()=>{
        console.log("clicked");
        setShowModal(true);
    }

    return(
        <>
            <div className="overlay">
                <Nav minimal={false} authToken={authToken} setShowModal = {setShowModal}></Nav>
                <div className="home">
                    <h1>Swipe Right</h1>
                    <button className="primary-button" onClick={handleclick}>
                        {authToken ? "signin" : "create account"}
                    </button>

                    {showModal && (<AuthModal setShowModal = {setShowModal}  />)}

                </div>
            </div>                
        </>
        
    )
}
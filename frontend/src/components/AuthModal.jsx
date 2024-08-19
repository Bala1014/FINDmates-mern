import { useState } from "react";
import axios from 'axios';
import {useNavigate} from 'react-router-dom'
import {useCookies} from 'react-cookie';

const AuthModal = ({setShowModal, signUp, setSignUp})=>{
    const [email, setEmail] = useState(null);
    const [password, setPassword] = useState(null);
    const [confirmPassword, setConfirmPassword] = useState(null);
    const [error, setError] = useState(null);
    const [cookies, setCookie, removeCookie] = useCookies(null);


    let navigate = useNavigate();


    
    const handleclick = ()=>{
    
        setShowModal(false);
    }



    const handleSubmit = async (e)=>{
        
        e.preventDefault();
        try{
            if(signUp && (password !== confirmPassword)){
                setError("U FKIN CUNT!!! passwords do not match ")
                return
            }

            const response = await axios.post(`http://localhost:8001/${signUp?'signup':'login'}`, {email, password});
            
            // setCookie('Email' , response.data.email)
            // setCookie('UserId' , response.data.userId);
            setCookie('authToken', response.data.token)


            // console.log(response);

            const success = response.status === 201;

            if(success && signUp){
                navigate('/onboarding')
            }
            if(success && !signUp){
                navigate('/dashboard')
            }

        }catch(error){
            console.log(error);
        }

    }

    




    return (
        <div className="auth-modal">
            <div className="close-icon" onClick={handleclick}>❌</div>


            <h2>{signUp ? "Create account":"log in"}</h2>
            <p>nnbehjqjh njirwnjnjnjqdnijwn fnijwnijrnwijnijqnijq rnwijnijrnwijnijqnir qniufnwieniurw neiqneijniqni</p>
            
            <form onSubmit={handleSubmit}>
                <input  
                    type="email" id="email" name="email" placeholder="Email" 
                    required = {true} 
                    onChange={(e)=>{
                        setEmail(e.target.value);
                    }} 
                />

                <input  
                    type="password" id="password" name="password" placeholder="password"
                    required = {true} 
                    onChange={(e)=>{
                        setPassword(e.target.value);
                    }} 
                />

                {signUp && <input  
                    type="password" id="password-confirm" name="password-confirm" placeholder="confirm password"
                    required = {true} 
                    onChange={(e)=>{
                        setConfirmPassword(e.target.value);
                    }} 
                />}

                <input className="secondary-button" type="submit"/>

                <p>{error}</p>


            </form>


            AUTH MODAL
        </div>
    )
}

export default AuthModal;
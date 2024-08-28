import { useState } from "react";
import { Nav } from "../components/Nav"
import { useCookies } from "react-cookie";
import {useNavigate} from 'react-router-dom'
import axios from 'axios';




export const Onboarding = ()=>{
    const [cookies, setCookie, removeCookie] = useCookies(null);

    let navigate = useNavigate();

    const [formData, setFormData] = useState({
        user_id: cookies.UserId,
        first_name :'',
        dob_day:'',
        dob_month:'',
        dob_year:'',
        show_gender:false,
        gender:'',
        roommate_gender_interest:'',
        // email:'',
        img_url1:'',
        about:'',
        matches:[]
    })

    const handleChange = (e)=>{  
        const name = e.target.name;
        const value = e.target.value
        setFormData((prevState)=>({...prevState, [name]:value}));

    }
    console.log(formData)
    

    const handleSubmit = async(e)=>{
        console.log("submitted")
        e.preventDefault() // prevent from relaoding
        
        try{
            const response = await axios.put('http://localhost:8001/user', {formData})

            const success = response.status == 201

            if(success)navigate('/dashboard');
        }catch(err){
            console.log(err);
        }
    }



    return(
        <>  
            <Nav minimal = {true} 
            authtoken = {false}  // dont want to show "login button on onbaording page"
            setShowModal = {()=>{}} // and that button cant open the modal, so passing false setShowModal
            showModal={false}  // showModal is false as no modal showing
            // setSignUp={setSignUp} 
            />
            <div className="onboarding">
                <h2>Create Account</h2>

                <form onSubmit={handleSubmit}>
                    <section>
                        <label htmlFor="first_name">First Name</label>
                        <input type="text" id="first_name"  name="first_name"
                            placeholder="first name" required={true} 
                            value={formData.first_name}
                            onChange={handleChange}
                        />

                        
                        <label htmlFor="DOB">birthday</label>

                        <div className="multi-input-container">
                            <input type="number" id="dob_day"  name="dob_day"
                                placeholder="DD" required={true} 
                                value={formData.dob_day}
                                onChange={handleChange} 
                            />    
                            <input type="number" id="dob_month"  name="dob_month"
                                placeholder="MM" required={true} 
                                value={formData.dob_month}
                                onChange={handleChange} 
                            />    
                            <input type="number" id="dob_year"  name="dob_year"
                                placeholder="YYYY" required={true} 
                                value={formData.dob_year}
                                onChange={handleChange} 
                            />    

                        </div>

                        <label htmlFor="gender">Gender</label>
                        <div className="multi-input-container">

                            <input type="radio" id="man-gender-identity"  name="gender"
                                // placeholder="DD" 
                                value="man"
                                onChange={handleChange} 
                                checked={formData.gender === 'man'}
                            />  
                            <label htmlFor="man-gender-identity">man</label>


                            <input type="radio" id="women-gender-identity"  name="gender"
                                // placeholder="DD" 
                                value="women"
                                onChange={handleChange} 
                                checked={formData.gender === 'women'}
                            />    
                            <label htmlFor="women-gender-identity">women</label>


                            <input type="radio" id="gay-gender-identity"  name="gender"
                                // placeholder="DD" 
                                value="gay"
                                onChange={handleChange} 
                                checked={formData.gender === 'gay'}
                            />    
                            <label htmlFor="gay-gender-identity">gay</label>

                               

                        </div>

                        <label htmlFor="show-gender">want to display gender?</label>
                        <input type="checkbox" id="show-gender"  name="show_gender"
                                // placeholder="DD"     
                                // value="gay"
                                onChange={() =>{
                                    const val = formData.show_gender
                                    setFormData((prevState)=>({...prevState, ["show_gender"]:!val}));
                                }} 
                                checked={formData.show_gender}
                        />  

                        <label >show me</label>
                        <div className="multi-input-container">

                            <input type="radio" id="man-gender-interest"  name="roommate_gender_interest"
                                // placeholder="DD" 
                                value="man"
                                onChange={handleChange} 
                                checked={formData.roommate_gender_interest === 'man'}
                            />  
                            <label htmlFor="man-gender-interest">man</label>


                            <input type="radio" id="women-gender-interest"  name="roommate_gender_interest"
                                // placeholder="DD" 
                                value="women"
                                onChange={handleChange} 
                                checked={formData.roommate_gender_interest === 'women'}
                            />    
                            <label htmlFor="women-gender-interest">women</label>


                            <input type="radio" id="everyone-gender-interest"  name="roommate_gender_interest"
                                // placeholder="DD" 
                                value="everyone"
                                onChange={handleChange} 
                                checked={formData.roommate_gender_interest === 'everyone'}
                            />    
                            <label htmlFor="everyone-gender-interest">gay</label>

                               

                        </div>


                        <label htmlFor="about">about me</label>

                        <input type="text" id="about"  name="about"
                                placeholder="ir1807" 
                            value={formData.about}  
                            required={true}
                            onChange={handleChange} 

                            // checked={false}
                        /> 

                        <input type="submit" />   
                        
                    </section>


                    <section>

                        <label >profile photo</label>

                        <input type="url" id="url"  name="img_url1"
                                // placeholder="ir1807" 
                            // value={""}
                            required={true}
                            onChange={handleChange} 

                            // checked={false}
                        />   

                        <div className="photo-container">
                            <img src={formData.img_url1} alt="photo preview" />
                        </div>

                    </section>

                    


                    {/* 1:58 */}



                </form>
            </div>

        </>
    )
}
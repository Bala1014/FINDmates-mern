import { Nav } from "../components/Nav"

export const Onboarding = ()=>{

    const handleChange = ()=>{
        console.log("njuinw1");

    }

    const handleSubmit = ()=>{  
        console.log("njuinw2");
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
                            value={""}
                            onChange={handleChange}
                        />

                        
                        <label htmlFor="DOB">birthday</label>

                        <div className="mutli-input-container">
                            <input type="number" id="dob_day"  name="dob_day"
                                placeholder="DD" required={true} 
                                value={""}
                                onChange={handleChange} 
                            />    
                            <input type="number" id="dob_month"  name="dob_month"
                                placeholder="MM" required={true} 
                                value={""}
                                onChange={handleChange} 
                            />    
                            <input type="number" id="dob_year"  name="dob_year"
                                placeholder="YYYY" required={true} 
                                value={""}
                                onChange={handleChange} 
                            />    

                        </div>

                        <label htmlFor="gender">Gender</label>
                        <div className="mutli-input-container">

                            <input type="radio" id="man-gender-identity"  name="gender"
                                // placeholder="DD" 
                                value="man"
                                onChange={handleChange} 
                                checked={false}
                            />  
                            <label htmlFor="man-gender-identity">man</label>


                            <input type="radio" id="women-gender-identity"  name="gender"
                                // placeholder="DD" 
                                value="women"
                                onChange={handleChange} 
                                checked={false}
                            />    
                            <label htmlFor="women-gender-identity">women</label>


                            <input type="radio" id="gay-gender-identity"  name="gender"
                                // placeholder="DD" 
                                value="gay"
                                onChange={handleChange} 
                                checked={false}
                            />    
                            <label htmlFor="gay-gender-identity">gay</label>

                               

                        </div>

                        <label htmlFor="show-gender">want to display gender?</label>
                        <input type="checkbox" id="show-gender"  name="show_gender"
                                // placeholder="DD"     
                                // value="gay"
                                onChange={handleChange} 
                                checked={false}
                        />  




                        // 1"28
                        
                    </section>
                </form>
            </div>

        </>
    )
}
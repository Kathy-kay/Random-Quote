import { useState } from "react";


const Login = () => {

    const [formData, setFormData] = useState({
        firstName:"",
        lastName:"",
        phoneNumber:"",
        email:"",
        password:"",
        comments:"",
        iAgree:false

    })

    

    const handleChange = (e) =>{
        const {name, value, type, checked} = e.target
        setFormData(prevData => {
            return {
                ...prevData,
                [name]: type === 'checkbox'? checked : value
            }
        })

        
     
    }

    const handleSubmit = (e) =>{
        e.preventDefault();
        console.log(formData);
    }

    return ( 
        <>
            <div>
                <h1 id="heading"><span>REG</span>ISTRATION INFORMATION</h1>
            </div>
            <form onSubmit={handleSubmit}>
            
                  <div className="class1">
                      <label>First Name</label>
                      <input
                       type="text" 
                      name="firstName" 
                      placeholder="First Name" 
                      onChange={handleChange }
                      value={formData.firstName}/>
                  </div>

                  <div className="class2">
                      <label>Last Name</label>
                      <input type="text"
                       name="lastName"
                        placeholder="Last Name" 
                        onChange={handleChange }
                        value={formData.lastName}/>
                  </div>

                  <div className="class1">
                      <label>Phone Number</label>
                      <input type="tel"
                       name="phoneNumber"
                        placeholder="Enter Phone Number" 
                        onChange={handleChange }
                        value={formData.phoneNumber}
                        />
                  </div>

                  <div className="class2">
                      <label>Email Address</label> 
                      <input type="email"
                       name="email"
                        placeholder="Enter Email"
                        onChange={handleChange }
                        value={formData.email}/>
                  </div>

                  <div className="class3">
                      <label>Password</label> 
                      <input type="password"
                       name="password"
                        placeholder="Password" 
                        onChange={handleChange }
                        value={formData.password}/>
                  </div>
                  <div className="class4">
                    <textarea 
                    name="comments"
                    placeholder="Comments..."
                    onChange={handleChange}
                    value={formData.comment}/>
                  </div>

                  <input  
                  type="checkbox"
                  id="iAgree"
                  name="iAgree"
                  checked={formData.iAgree}
                  onChange={handleChange}/>
                  <label htmlFor="iAgree">I have read the terms and condition apply </label>
                  <div>
                    <button >Submit</button>
                  </div>
                  
            </form>

            {/* <Table 
            firstName={firstName}
            lastName={lastName}
            phoneNumber={phoneNumber}
            email={email}/> */}

            {/*<Table data={data} />*/}


        </>
     );
}
 
export default Login;
import React, { useState } from 'react';
import { Link, Navigate } from 'react-router-dom';
import NavBar from '../Components/NavBar';
import { RegisterApi } from '../Services/Api';
import { isAuthenticated } from '../Services/Auth';
import { storeUserData } from '../Services/storage';
import './Regpage.css'
export default function RegisterPage(){
    const InitialstageErr ={email:{required:false},
    password:{required:false},
    name:{required:false},
    customerr:null

}
    const [error,setError]=useState(InitialstageErr)
    const [inputs,setInputs] = useState({
        name:'',
        password:'',
        email:'',
    }) 
    const [Loading,setLoading]=useState(false);
    const handlesubmit=(event)=>{
         event.preventDefault();
         let errors = InitialstageErr;
         let Haserr = false;
         if(inputs.name===''){
            errors.name.required=true;
          Haserr = true;

         }
         if(inputs.email ===''){
            errors.email.required=true;
          Haserr = true;

         }if(inputs.password ===''){
            errors.password.required=true;
          Haserr = true;

         }
         if(!Haserr){
            setLoading(true)
            RegisterApi(inputs).then((Response)=>{
                // console.log(Response);
                storeUserData(Response.data.idToken)


            }).catch((err)=>{
                if(err.response.data.error.message ==="EMAIL_EXISTS"){
                  setError({...error,customerr:"Email has been Already Exists"})
                }
                else if(String(err.response.data.error.message).includes("WEAK_PASSWORD")){
                  setError({...error,customerr:"Password should be at least 6 characters"})

                }
            }).finally(()=>{
                setLoading(false)
            })
         }
         setError({...errors})
    }
    const handleChange=(event)=>{
        setInputs({...inputs,[event.target.name]:event.target.value})
    }
    if(isAuthenticated()){
      // Redirecting to dashBoard
      return <Navigate to="/dashboard" />
    }
        return(
        <>
        <NavBar/>
        <section className="register-block">
        <div className="container">
           <div className="row ">
              <div className="col register-sec">
                 <h2 className="text-center">Register Now</h2>
                 <form className="register-form" action="" onSubmit={handlesubmit}>
                  <div className="form-group">
                    <label htmlFor="exampleInputEmail1" className="text-uppercase">Name</label>
      
                    <input type="text" className="form-control" name="name" id="" onChange={handleChange} / >
                   { error.name.required?
                   (<span className="text-danger" >
                        Name is required.
                    </span>):null
                    }
                 </div>
                  <div className="form-group">
                    <label htmlFor="exampleInputEmail1" className="text-uppercase">Email</label>
      
                    <input type="text"  className="form-control" name="email" id="" onChange={handleChange}/ >
                    {error.email.required?(<span className="text-danger" >
                        Email is required.
                    </span>)
                    :null
                    }
                 </div>
                 <div className="form-group">
                    <label htmlFor="exampleInputPassword1" className="text-uppercase">Password</label>
                    <input  className="form-control" type="password"  name="password" id="" onChange={handleChange}/>
                    {error.password.required?(<span className="text-danger" >
                        Password is required.
                    </span>)
                    :null
                    }
                 </div>
                 <div className="form-group">
      
                    {error.customerr?(<span className="text-danger" >
                       <p>{error.customerr}</p>
                    </span>):null
                    
                    }
                    {
                    Loading?
                    (<div  className="text-center">
                      <div className="spinner-border text-primary " role="status">
                        <span className="sr-only"></span>
                      </div>
                    </div>):null
                    }
      
                    <input type="submit" className="btn btn-login float-right" disabled={Loading} value="Register"/>
                 </div>
                 <div className="clearfix"></div>
                 <div className="htmlForm-group">
                   Already have account ? Please <Link to='/login'>Login</Link>
                 </div>
      
      
                 </form>
      
      
              </div>
      
           </div>
      
      
        </div>
      </section>
    </>

   
    )
}
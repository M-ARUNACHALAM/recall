import './Loginpage.css'
import { useState } from 'react'
import { LoginApi } from '../Services/Api';
import { storeUserData } from '../Services/storage';
import { isAuthenticated } from '../Services/Auth';
import { Navigate,Link } from 'react-router-dom';
import NavBar from '../Components/NavBar';
export const Loginpage=()=>{
    const InitialstageErr ={email:{required:false},
    password:{required:false},
    customerr:null
}
const [error,setError]=useState(InitialstageErr);
const [Loading,setLoading]=useState(false);
const [inputs,setInputs] = useState({

    password:'',
    email:'',
}) 
const handleChange=(event)=>{
    setInputs({...inputs,[event.target.name]:event.target.value})
}
const handlesubmit=(event)=>{
    console.log(inputs)
    event.preventDefault();
    let errors = InitialstageErr;
    let Haserr = false;
 
    if(inputs.email ===''){
       errors.email.required=true;
     Haserr = true;

    }if(inputs.password ===''){
       errors.password.required=true;
     Haserr = true;

    }
    if(!Haserr){
       setLoading(true)
       LoginApi(inputs).then((Response)=>{
           // sending login Api request
           storeUserData(Response.data.idToken)


       }).catch((err)=>{
         if(err.code ==="ERR_BAD_REQUEST"){
            setError({...errors,customerr:"Invalid Crendials"})
         }
       }).finally(()=>{
           setLoading(false)
       })
    }
    setError({...errors})
}
if(isAuthenticated()){
    // Redirecting to dashBoard
    return <Navigate to="/dashboard" />
  }

    return(<>
        <NavBar/>
        <section className="login-block">
            <div className="container">
                <div className="row ">
                    <div className="col login-sec">
                        <h2 className="text-center">Login Now</h2>
                        <form className="login-form" action="" onSubmit={handlesubmit}>
                        <div className="form-group">
                            <label htmlFor="exampleInputEmail1" className="text-uppercase">Email</label>
                            <input type="email"  className="form-control" name="email"  id="" placeholder="email" onChange={handleChange}/  >
                            {error.email.required?(<span className="text-danger" >
                                   Email is required.
                                     </span>)
                                    :null
                            }
                        </div>
                        <div className="form-group">
                            <label htmlFor="exampleInputPassword1" className="text-uppercase">Password</label>
                            <input  className="form-control" type="password"  name="password" placeholder="password" id="" onChange={handleChange} />
                            {error.password.required?(<span className="text-danger" >
                             Password is required.
                            </span>)
                            :null
                             }
                        </div>
                        <div className="form-group">
                       { Loading?
                    (<div  className="text-center">
                      <div className="spinner-border text-primary " role="status">
                        <span className="sr-only"></span>
                      </div>
                    </div>):null
                        }
                            <span className="text-danger" >
                            {error.customerr?<p>{error.customerr}</p>:null}
                            </span>
                            <input  type="submit" className="btn btn-login float-right"  value="Login" disabled={Loading} />
                        </div>
                        <div className="clearfix"></div>
                        <div className="form-group">
                        Create new account ? Please <Link to='/register'>Register</Link>
                        </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    </>

    )
}
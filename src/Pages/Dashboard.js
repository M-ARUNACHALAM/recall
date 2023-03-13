import { useEffect, useState } from "react"
import { Navigate, useNavigate } from "react-router-dom";
import NavBar from "../Components/NavBar";
import { UserDetailApi } from "../Services/Api";
import { isAuthenticated, logout } from "../Services/Auth";

export const DashBoardPage=()=>{
    const navigate = useNavigate()

    const [user,setUser] =useState({name:'',email:'',localID:'' });

    useEffect(()=>{
        if(isAuthenticated()){
    UserDetailApi().then((res)=>{
        

        setUser({
            name:res.data.users[0].displayName,
            email:res.data.users[0].email,
            localID:res.data.users[0].localId,

        })
    })}
},[])
const logoutuser =()=>{
    logout();
    navigate('/login')
}
if (!isAuthenticated()){
    return <Navigate to = '/login'/>
}
    return(
        <>
        <NavBar logoutuser={logoutuser}/>
        <main role="main" class="container mt-5">
        <div class="container">
          <div class="text-center mt-5">
            <h3>Dashboard page</h3>
            {
            user.name && user.email && user.localID?
            <>
            <p class="text-bold " >Hi {user.name} user, your Firebase ID is {user.localID}</p>
            <p>your email is {user.email}</p>
            </>:<p>Loading...</p>
             }
          </div>
        </div>
    </main>
    </>
    )
}
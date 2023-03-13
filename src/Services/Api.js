import axios from "axios"
import { getUserData } from "./storage";

axios.defaults.baseURL="https://identitytoolkit.googleapis.com/v1";

const API_KEY ="AIzaSyCiQ3RB0s4TUWLDDkP0oa8qHxTttA5E2iY"

const Reg_Url = `/accounts:signUp?key=${API_KEY}`
const Login_Url = `/accounts:signInWithPassword?key=${API_KEY}`
const User_Detail_Url = `/accounts:lookup?key=${API_KEY}`


export const RegisterApi = (inputs) =>{
  let data ={
    displayName:inputs.name,
    email:inputs.email,
    password:inputs.password
  }
  return axios.post(Reg_Url,data)
}
export const LoginApi = (inputs) =>{
  let data ={
    email:inputs.email,
    password:inputs.password
  }
  return axios.post(Login_Url,data)
}
export const UserDetailApi =()=>{
  let data = {idToken:getUserData()}
  return axios.post(User_Detail_Url,data)
}
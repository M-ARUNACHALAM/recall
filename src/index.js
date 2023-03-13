// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';
 

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App/>
//   </React.StrictMode>
  
// );


// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
// import React,{Component} from 'react';
// import ReactDOM from 'react-dom';
// import './'
// import stye from "./demo.module.css"

// class Reactstyle extends Component {
//   render(){
    
//     return(
//       <div>
//         <h1>hello World</h1>
//         <h1>hello World</h1>
//         <h1 >hello World</h1>
//       </div>
//     )
//   }
// }
// ReactDOM.render(<Reactstyle />, document.getElementById('root'));
// import React from "react";
// import ReactDOM from "react-dom/client";
// import {
//   createBrowserRouter,
//   RouterProvider,
// } from "react-router-dom";
// import "./index.css";

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <div>Hello world!</div>,
//   },
// ]);

// ReactDOM.createRoot(document.getElementById("root")).render(
//   <React.StrictMode>
//     <RouterProvider router={router} />
//   </React.StrictMode>
// );
import React  from "react";
import ReactDOM from "react-dom";
import App from './App'
import { BrowserRouter } from "react-router-dom";
ReactDOM.render(
  <BrowserRouter>
  <App/>
  </BrowserRouter>
  ,document.getElementById('root'))
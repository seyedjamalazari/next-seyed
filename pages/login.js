// login page

import React, { useState } from "react";
import LoginForm from "../components/LoginForm";



const Login = () => {
  const [formData, setFormData] = useState({});


  const handleLogin = (data) => {
    setFormData(data);
  };

  console.log("formData", formData)
  

  return (
    <>
      <LoginForm onSubmit={handleLogin}  />
      <br/>
      {/* <span>first name: {formData.firstName}</span> */}
      {/* <Select/> */}
  
   
    </>
  );
};

export default Login;

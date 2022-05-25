import React ,{useState}from 'react';

import RegisterForm from '../components/RegisterForm';



const Register = () => {

const [registerData,setRegisterData]=useState({});


    const handleRegisterSubmit=(data)=>{

// setRegisterData(data);

        console.log(data);
    }
    // console.log(registerData)

    return (
        <>
            <RegisterForm  onSubmit={handleRegisterSubmit}/>
            {/* <span>{registerData.userName}</span> */}
   
        </>
    );
};

export default Register;
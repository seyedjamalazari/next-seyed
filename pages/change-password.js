import React from 'react';
import ChangePasswordForm from '../components/ChangePasswordForm';


const ChangePassword = () => {
    const handleChangePassword=()=>{

    }
    return (
        <div>
          <ChangePasswordForm onSubmit={handleChangePassword}/>
        </div>
    );
};

export default ChangePassword;
import { Button } from 'antd';
import React from 'react';
import { useForm } from 'react-hook-form';
import Input from "./DataEntry/Input";

const ForgotPasswordForm = ({onSubmit}) => {

const{control,handleSubmit}=useForm({
    defaultValues:{
        name:"email"

    }
});

    return (
       <>
           <form onSubmit={handleSubmit(onSubmit)}>
               <Input
               control={control}
               name="email"
               label="email"
               placeholder="Enter Your Email"
               />
              
<Button htmlType='submit'>submit</Button>
           </form>
       </>
    );
};

export default ForgotPasswordForm;


import { useForm } from "react-hook-form";
import Input from "./DataEntry/Input";
import { Button ,notification} from "antd";

const ChangePasswordForm = ({ onSubmit }) => {
  const {control,handleSubmit}=useForm({
      defaultValues:{
          password:"",
          confirmpassword: ""
      },

  });

  const openNotification = () => {
    notification.open({
      message: 'seyed',
      description:
        'AdamOl',
      onClick: () => {
     
      },
    });
  };


  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
      
<Input 
control={control}
name="password"
label="Password"
placeholder="Enter Your Password"
/>
<Input 
control={control}
name="confirmpassword"
label="ConfirmPassword"
placeholder="Enter Your ConfirmPassword"
/>
<Input 
control={control}
name="confirmpassword"
label="ConfirmPassword"
placeholder="Enter Your ConfirmPassword"
/>
<Button htmlType="submit" onClick={openNotification }>Submit</Button>

       
      </form>
    </>
  );
};

export default ChangePasswordForm;

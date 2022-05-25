import { Button, notification } from "antd";
import { useForm } from "react-hook-form";

import Input from "./DataEntry/Input";
import Password from "./DataEntry/Password";
import Select from "./DataEntry/Select";

const RegisterForm = ({ onSubmit }) => {
  const { control, handleSubmit } = useForm({
    defaultValues: {
      firstname: "",
      lastname: "",
      gender: "",
      username: "",
      password: "",
      confirmpassword: "",
    },
  });

  const openNotification = () => {
    notification.open({
      message: "seyed",
      description: "AdamOl",
      onClick: () => {},
    });
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Input
          control={control}
          name="firstname"
          label="First Name:"
          placeholder="Enter Your First Name"
        />
        <Input
          control={control}
          name="lastname"
          label="Last Name:"
          placeholder="Enter Your Last Name"
        />
        <Input
          control={control}
          name="username"
          label="Username:"
          placeholder="Enter Your Username"
        />

        <Password
          control={control}
          name="password"
          label="Password:"
          placeholder="Enter Your Password"
        />
        <Password
          control={control}
          name="confirmpassword"
          label="ConfirmPassword:"
          placeholder="Enter Your Confirm Password"
        />
        <br />
        <Select
          control={control}
          name="gender"
          label="Gender:"
          placeholder="Select Gender"
          options={[
            { label: "Male", value: "male" },
            { label: "Female", value: "female" },
            { label: "Other", value: "other" },
          ]}
        />
        <br />
          Put checkbox here
        <br/>
        <Button htmlType="submit" onClick={openNotification}>
          Submit
        </Button>
      </form>
    </>
  );
};

export default RegisterForm;

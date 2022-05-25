import { useForm } from "react-hook-form";
import { Button } from "antd";
import Input from "./DataEntry/Input";
import Password from "./DataEntry/Password";

const LoginForm = ({ onSubmit }) => {
  const { control, handleSubmit } = useForm({
    defaultValues: {
      username: "",
      password: "",
    },
  });

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Input
        control={control}
        name="username"
        label="UserName"
        placeholder="Enter your UserName"
      />

      <Password
        control={control}
        name="password"
        label="Password"
        placeholder="Enter Your Password"
      />

      <Button htmlType="submit"> Login</Button>
    </form>
  );
};

export default LoginForm;

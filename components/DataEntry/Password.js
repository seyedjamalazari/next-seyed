import { Controller } from "react-hook-form";
import { Input } from "antd";
import { EyeInvisibleOutlined, EyeTwoTone } from "@ant-design/icons";

const Password = ({ control, name, label, ...props }) => {
  return (
    <>
      <label>{label}</label>
      <Controller
        control={control}
        name={name}
        render={({ field }) => (
          <Input.Password
            {...props}
            {...field}
            iconRender={(visible) =>
              visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
            }
          />
        )}
      />
    </>
  );
};

export default Password;

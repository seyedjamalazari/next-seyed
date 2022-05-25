import { Input  ,space} from "antd";
import { Controller } from "react-hook-form";

const InputComponent = ({ control, label, name, ...props }) => {
  return (
    <>
      <label>{label}</label>

      <Controller
        control={control}
        name={name}
        render={({ field }) => <Input {...props} {...field} />}
      />
    </>
  );
};

export default InputComponent;

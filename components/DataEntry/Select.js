import { Controller } from "react-hook-form";
import { Select } from "antd";

const SelectComponent = ({ name, label, control, ...props }) => {
  return (
    <>
      <label>{label}</label>

      <Controller
        control={control}
        name={name}
        render={({ field }) => <Select {...props} {...field} />}
      />
    </>
  );
};

export default SelectComponent;

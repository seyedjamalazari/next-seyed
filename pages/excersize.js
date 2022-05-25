import React from 'react';
import { Input } from 'antd';
import { Controller, useForm } from 'react-hook-form';
import Select from "react-select";



const Excersize = () => {
    const{control,handleSubmit}=useForm({
      defaultValues:{
          firstName:'',
          select:{

          }
      }  
    });
    const onSubmit=data=>console.log(data);
    
    return (
       <form onSubmit={handleSubmit(onSubmit)}>
           <Controller
           name="firstName"
           control={control}
         
        render={({field}) => <Input{...field}/>}
/>



<Controller
        name="select"
        control={control}
        render={({ field }) => <Select 
          {...field} 
          options={[
            { value: "chocolate", label: "Chocolate" },
            { value: "strawberry", label: "Strawberry" },
            { value: "vanilla", label: "Vanilla" }
          ]} 
        />}
      />

<Controller
        name="select"
        control={control}
        render={({ field }) => <Select 
          {...field} 
          options={[
            { value: "firstName", label: "LastName" },
            { value: "Password", label: "Password" },
            { value: "vanilla", label: "Vanilla" }
          ]} 
        />}
      />
       <input type="submit" />
       </form>
    );
};

export default Excersize;

// import Input from "@material-ui/core/Input";

//   return (
//     <form onSubmit={handleSubmit(onSubmit)}>
//       <Controller
//         name="firstName"
//         
//         render={({ field }) => <Input {...field} />}
//       />
//       <Controller
//         name="select"
//         control={control}
//         render={({ field }) => <Select 
//           {...field} 
//           options={[
//             { value: "chocolate", label: "Chocolate" },
//             { value: "strawberry", label: "Strawberry" },
//             { value: "vanilla", label: "Vanilla" }
//           ]} 
//         />}
//       />
//       <input type="submit" />
//     </form>
//   );
// };

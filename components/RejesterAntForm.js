import React, { useState } from "react";
import {
  Form,
  Input,
  InputNumber,
  Cascader,
  Select,
  Row,
  Col,
  Checkbox,
  Button,
  AutoComplete,
} from "antd";
const tailFormItemLayout = {
  wrapperCol: {
    xs: {
      span: 24,
      offset: 0,
    },
    sm: {
      span: 16,
      offset: 8,
    },
  },
};

const RejesterAntForm = () => {
  const [form] = Form.useForm();

  const onFinish = (valuse) => {
    console.log("Recived vlues of form :", valuse);
  };
  const prefixSelector = (
    <Form.Item name="prefix" noStyle>
      <Select style={{ width: 70 }}>
      <Option value="86">+86</Option>
        <Option value="87">+87</Option>
   
      </Select>
    </Form.Item>
  );
  const [autoComppleteResult, setAutoCompleteResult] = useState([]);

  const onWebsitCahang = (value) => {
    if (!value) {
      setAutoCompleteResult([]);
    } else {
      setAutoCompleteResult(
        [".com", ".org", ".net"].map((domain) => `${value}${domain}`)
      );
    }
  };
  const websiteOptions = autoComppleteResult.map((website) => ({
    lable: website,
    value: website,
  }));

  return (
    <>
      <Form
        form={form}
        name="register"
        onFinish={onFinish}
        initialValues={{
          residences: ["zhejiang", "hangzhou", "xihu"],
          prefix: "86",
        }}
        scrollToFirstError
      >
        <div style={{ width: 240 }}>
          <Form.Item
            name="emai"
            lable="email"
            rules={[
              {
                type: "email",
                message: "The input is not valide E-mail",
              },
              {
                required: true,
                message: "Please  input your E-mail",
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            name="password"
            label="Password"
            rules={[
              {
                required: true,
                message: "Please your password!",
              },
            ]}
            hasFeedback
          >
            <Input.Password />
          </Form.Item>

          <Form.Item
            name="confirm"
            label="Confirm Password"
            dependencies={["password"]}
            hasFeedback
            rules={[
              {
                required: true,
                message: "Please confirm your password!",
              },
              ({ getFieldValue }) => ({
                validator(_, value) {
                  if (!value || getFieldValue("password") === value) {
                    return Promise.resolve();
                  }

                  return Promise.reject(
                    new Error(
                      "The two passwords that you entered do not match!"
                    )
                  );
                },
              }),
            ]}
          >
            <Input.Password />
          </Form.Item>

          <Form.Item
            name="nickname"
            label="Nickname"
            tooltip="What do you want others to calls you?"
            rules={[
              {
                required: true,
                message: "please input youre nickname!",
                whitespace: true,
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            name="phone"
            label="Phone Number"
            rules={[
              {
                required: true,
                message: "Please input your phone number!",
              },
            ]}
          >
            <Input addonBefore={prefixSelector} />
          </Form.Item>
          <Form.Item
            name="website"
            label="Website"
            rules={[
              {
                required: true,
                message: "Please input website!",
              },
            ]}
          >
            <AutoComplete
              options={websiteOptions}
              onChange={onWebsitCahang}
              placeholder="WebSite"
            >
              <Input />
            </AutoComplete>
          </Form.Item>

          <Form.Item
            name="gender"
            label="Gender"
            rules={[
              {
                required: true,
                message: "Please select gender!",
              },
            ]}
          >
            <Select placeholder="Please select your gender">
              <Option value="male">Male</Option>
              <Option value="female">Female</Option>
              <Option value="other">Other</Option>
            </Select>
          </Form.Item>
          <Form.Item name="agreement"
          valuePropName="checked"
          rules={[{
            validator:(_,value)=>
              value ? Promise.resolve() : Promise.reject(new Error('Should accept agreement')),
            
          }]}{...tailFormItemLayout}
          > <Checkbox>
          I have read the <a href="">agreement</a>
        </Checkbox>

          </Form.Item>
          <Form.Item {...tailFormItemLayout}>
        <Button type="primary" htmlType="submit">
          Register
        </Button>
      </Form.Item>
        </div>
      </Form>
    </>
  );
};
export default RejesterAntForm;

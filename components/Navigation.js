import Link from "next/link";

import { Menu } from "antd";
import { NavigationStyle } from "./Navigation.style";

const Navigation = () => {
  return (
    <NavigationStyle>
      <div className="navigationWrapper">
        <Menu theme="dark" mode="horizontal">
          <Menu.Item key="1">
            <Link href="/">Home</Link>
          </Menu.Item>
          <Menu.Item key="7">
            <Link href="/registerant">REGISTERANT</Link>
          </Menu.Item>
          <Menu.Item key="2">
            <Link href="/login">Login</Link>
          </Menu.Item>
          <Menu.Item key="4">
            <Link href="/change-password">CHANGE_PASSWORD</Link>
          </Menu.Item>
          <Menu.Item key="5">
            <Link href="/register">REGISTER</Link>
          </Menu.Item>
          <Menu.Item key="6">
            <Link href="/forgot-password">FORGOT-PASSWORD</Link>
          </Menu.Item>
        </Menu>
      </div>
    </NavigationStyle>
  );
};

export default Navigation;

import { useState } from "react";
import { Menu, Button } from "antd";

import { MenuUnfoldOutlined, MenuFoldOutlined } from "@ant-design/icons";
import Link from "next/link";
import { SideMenuStyle } from "./SideMenu.style";

function getItem(label, key, icon, children, type) {
  return {
    key,
    icon,
    children,
    label,
    type,
  };
}

const items = [
  getItem(<Link href="/">home</Link>),
  getItem(<Link href="/login">Login</Link>),
  getItem(<Link href="/change-password">ChangePassword</Link>),
  getItem(<Link href="/register">Register</Link>),
  getItem(<Link href="/forgot-password">ForGot-Password</Link>),
];

const SideMenu = () => {
  const [collapsed, setCollapsed] = useState(false);

  const toggleCollapsed = () => {
    console.log("clicked", collapsed);
    setCollapsed(!collapsed);
  };

  return (
    <>
    <SideMenuStyle>
      <div
     className="SideMenuWrapper"
      >
        <Button
          type="primary"
          onClick={toggleCollapsed}
          style={{
            marginBottom: 16,
          }}
        >
          {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
        </Button>

        <Menu
          defaultSelectedKeys={["1"]}
          mode="inline"
          // mode="horizontal"
          theme="dark"
          inlineCollapsed={collapsed}
          items={items}
        />
      </div>
      </SideMenuStyle>
    </>
  );
};

export default SideMenu;

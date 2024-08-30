// import { useState } from "react";
// import { DatePicker, message, Alert } from "antd";

// import "./index.css";
// import { Dayjs } from "dayjs";

// const App = () => {
//   const [date, setDate] = useState<Dayjs | null>(null);
//   const handleChange = (value: Dayjs) => {
//     message.info(`Selected : ${value ? value.format("YYYY-MM-DD") : "None"}`);
//     setDate(value);
//   };
//   return (
//     <div className="flex flex-col w-screen h-screen justify-center items-center">
//       <DatePicker onChange={handleChange} />
//       <div className="mt-2">
//         <Alert
//           message="Selected Date"
//           description={date ? date.format("YYYY-MM-DD") : "None"}
//         />
//       </div>
//     </div>
//   );
// };
// export default App;

import {
  LaptopOutlined,
  NotificationOutlined,
  UserOutlined,
} from "@ant-design/icons";
import type { MenuProps } from "antd";
import { Breadcrumb, Layout, Menu } from "antd";
import React from "react";

const { Header, Content, Sider } = Layout;

const items1: MenuProps["items"] = ["1", "2", "3"].map((key) => ({
  key,
  label: `nav ${key}`,
}));

const items2: MenuProps["items"] = [
  UserOutlined,
  LaptopOutlined,
  NotificationOutlined,
].map((icon, index) => {
  const key = String(index + 1);

  return {
    key: `sub${key}`,
    icon: React.createElement(icon),
    label: `subnav ${key}`,

    children: new Array(4).fill(null).map((_, j) => {
      const subKey = index * 4 + j + 1;
      return {
        key: subKey,
        label: `option${subKey}`,
      };
    }),
  };
});

const App: React.FC = () => (
  <Layout>
    <Header className="header">
      <div className="logo" />
      <Menu
        theme="dark"
        mode="horizontal"
        defaultSelectedKeys={["2"]}
        items={items1}
      />
    </Header>
    <Layout>
      <Sider width={200} className="site-layout-background">
        <Menu
          mode="inline"
          defaultSelectedKeys={["1"]}
          defaultOpenKeys={["sub1"]}
          style={{ height: "100%", borderRight: 0 }}
          items={items2}
        />
      </Sider>
      <Layout style={{ padding: "0 24px 24px" }}>
        <Breadcrumb style={{ margin: "16px 0" }}>
          <Breadcrumb.Item>Home</Breadcrumb.Item>
          <Breadcrumb.Item>List</Breadcrumb.Item>
          <Breadcrumb.Item>App</Breadcrumb.Item>
        </Breadcrumb>
        <Content
          className="site-layout-background"
          style={{
            padding: 24,
            margin: 0,
            minHeight: 280,
          }}
        >
          Content
        </Content>
      </Layout>
    </Layout>
  </Layout>
);

export default App;

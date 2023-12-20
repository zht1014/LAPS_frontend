import React, { createContext, useContext, useState } from 'react';
import {
  AppstoreOutlined,
  BarChartOutlined,
  CloudOutlined,
  ShopOutlined,
  TeamOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from '@ant-design/icons';
import { Layout, Menu, theme } from 'antd';
import SubmitLeave from '../../components/submitLeave';
import ViewHistory from '../../components/viewHistory';

const { Header, Content, Footer, Sider } = Layout;

const items = [
  { key: '1', icon: <UserOutlined />, label: 'Submit', component: () => <SubmitLeave /> },
  { key: '2', icon: <VideoCameraOutlined />, label: 'Manage', component: () => <h1>Component 2</h1> },
  { key: '3', icon: <UploadOutlined />, label: 'View History', component: () => <ViewHistory/> },
  { key: '4', icon: <BarChartOutlined />, label: 'Nav 4', component: () => <h1>Component 4</h1> },
  { key: '5', icon: <CloudOutlined />, label: 'Nav 5', component: () => <h1>Component 5</h1> },
  { key: '6', icon: <AppstoreOutlined />, label: 'Nav 6', component: () => <h1>Component 6</h1> },
  { key: '7', icon: <TeamOutlined />, label: 'Nav 7', component: () => <h1>Component 7</h1> },
  { key: '8', icon: <ShopOutlined />, label: 'Nav 8', component: () => <h1>Component 8</h1> },
];

const NavContext = createContext();

const NavProvider = ({ children }) => {
  const [selectedNav, setSelectedNav] = useState('1');

  return (
    <NavContext.Provider value={{ selectedNav, setSelectedNav }}>
      {children}
    </NavContext.Provider>
  );
};

const NavContent = () => {
  const { selectedNav } = useContext(NavContext);

  const selectedNavObj = items.find((item) => item.key === selectedNav);

  return selectedNavObj.component();
};

const Home = () => {


  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  return (
    <NavProvider>
      <Layout hasSider>
        <Sider
          style={{
            overflow: 'auto',
            height: '100vh',
            position: 'fixed',
            left: 0,
            top: 0,
            bottom: 0,
            flex: '0 0 200px'
          }}
        >
          <div className="demo-logo-vertical" />
          <NavMenu />
        </Sider>
        <Layout style={{ marginLeft: 200 }}>
          <Header style={{ padding: 0, background: colorBgContainer, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <h1>Leave Application Processing System</h1>
          </Header>
          <Content style={{ margin: '24px 16px 0', overflow: 'initial', position: 'relative' }}>
            <div
              style={{
                padding: 24,
                textAlign: 'center',
                background: colorBgContainer,
                borderRadius: borderRadiusLG,
              }}
            >
              <NavContent />
            </div>
          </Content>
          <Footer style={{ textAlign: 'center' }}>Ant Design ©2023 Created by Ant UED</Footer>
        </Layout>
      </Layout>
    </NavProvider>
  );
};

const NavMenu = () => {
  const { selectedNav, setSelectedNav } = useContext(NavContext);

  const handleClick = ({ key }) => {
    setSelectedNav(key);
  };

  return (
    <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']} onClick={handleClick}>
      {items.map((item) => (
        <Menu.Item key={item.key} icon={item.icon}>
          {item.label}
        </Menu.Item>
      ))}
    </Menu>
  );
};

export default Home;
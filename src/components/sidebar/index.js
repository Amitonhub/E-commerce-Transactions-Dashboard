import React from 'react';
import { Image, Layout, Menu } from 'antd';
import { useLocation } from 'react-router-dom'; 
import styles from './sidebar.module.css';
import Logo from '../../assets/logo.png'
const { Header } = Layout;

const items = [
  { key: 1, label: 'Dashboard' },
  { key: 2, label: 'Products' },
  { key: 3, label: 'Customers' },
  { key: 4, label: 'Analytics' },
  { key: 5, label: 'Reports' },
  { key: 6, label: 'Settings' },
  { key: 7, label: 'Help/Support' },
  { key: 8, label: 'Logout' }
];

function Navbar() {
  const location = useLocation(); 

  const currentPath = location.pathname.toLowerCase();

  const selectedKey = items.find(item => currentPath.includes(item.label.toLowerCase()))?.key.toString();

  return (
    <Header
      style={{
        position: 'relative',
        top: 0,
        zIndex: 1,
        display: 'flex',
        alignItems: 'center',
        backgroundColor: 'white',
        margin: '22px',
        borderRadius: '10px',
        marginBottom: 0,
        padding: 0
      }}
    >
      <Image height={50} width={50} src={Logo} alt='logo' style={{ display: 'flex', marginLeft: '20px'}}/>
      <div className="demo-logo" />
      <Menu
        theme="light"
        mode="horizontal"
        defaultSelectedKeys={[selectedKey]} 
        items={items}
        style={{
          flex: 1,
          minWidth: 0,
          borderRadius: '20px',
          justifyContent: 'center'
        }}
      />
    </Header>
  );
}

export default Navbar;
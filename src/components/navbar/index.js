import React, { useEffect, useState } from 'react';
import { Image, Layout, Menu } from 'antd';
import { Link, useLocation } from 'react-router-dom'; 
import styles from './sidebar.module.css';
import Logo from '../../assets/logo.png'
import { useSelector } from 'react-redux';
const { Header } = Layout;

const items = [
  { key: 1, label: 'Dashboard', route: '/dashboard' },
  { key: 2, label: 'Products', route: '/products' },
  { key: 3, label: 'Customers', route: '/customers' },
  { key: 8, label: 'Logout', route: '/logout' }
];

function Navbar() {
  const [isLogin, setIsLogin] = useState(false)
  const location = useLocation(); 
  const currentPath = location.pathname.toLowerCase();
  const isLoginState = useSelector((state) => state.login.isLogin);

  useEffect(() => {
    if(isLoginState){
      setIsLogin(isLoginState)
    }
  },[isLoginState])

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
        style={{
          flex: 1,
          minWidth: 0,
          borderRadius: '20px',
          justifyContent: 'center'
        }}
      >
        {isLogin ? 
        items.map(item => (
          <Menu.Item key={item.key}>
            <Link to={item.route}>{item.label}</Link>
          </Menu.Item>
        )) : <span className={styles.auth}>Auth</span>}
      </Menu> 
    </Header>
  );
}

export default Navbar;
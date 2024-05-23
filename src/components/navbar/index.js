import React, { useEffect, useState } from 'react';
import { Image, Layout, Menu, Modal } from 'antd';
import { Link, useLocation, useNavigate } from 'react-router-dom'; 
import styles from './navbar.module.css';
import Logo from '../../assets/logo.png';
import { useDispatch, useSelector } from 'react-redux';
import { setIsLogin } from '../../redux/reducers/loginSlice';

const { Header } = Layout;

const items = [
  { key: 1, label: 'Dashboard', route: '/dashboard' },
  { key: 2, label: 'Products', route: '/products' },
  // { key: 3, label: 'Customers', route: '/customers' },
  { key: 8, label: 'Logout', route: '/logout' }
];

function Navbar() {
  const [isLoginLocal, setIsLoginLocal] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  // const [selectedKey, setSelectedKey] = useState('');
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const currentPath = location.pathname.toLowerCase();
  const isLoginState = useSelector((state) => state.login.isLogin);

  useEffect(() => {
    if (isLoginState) {
      setIsLoginLocal(isLoginState);
    }
  }, [isLoginState]);

  useEffect(() => {
    navigate(currentPath)
  },[])

  // useEffect(() => {
  //   if(location.pathname){
  //     setSelectedKey(items.find(item => currentPath.includes(item.label.toLowerCase()))?.key.toString())
  //   }
  // },[location.pathname])

  const selectedKey = items.find(item => currentPath.includes(item.label.toLowerCase()))?.key.toString();

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
    localStorage.removeItem('accessToken');
    setIsLoginLocal(false);
    dispatch(setIsLogin(false));
    navigate('/login');
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

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
      <Image height={50} width={50} src={Logo} alt='logo' style={{ display: 'flex', marginLeft: '20px'}} />
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
        {isLoginLocal ? 
          items.map(item => (
            item.key === 8 ? 
              <Menu.Item key={item.key} onClick={showModal}>
                {item.label}
              </Menu.Item> :
              <Menu.Item key={item.key}>
                <Link to={item.route}>{item.label}</Link>
              </Menu.Item>
          )) : 
          <span className={styles.auth}>Auth</span>
        }
      </Menu>
      
      <Modal title="Logout Confirmation" open={isModalOpen} okText="Log out" onOk={handleOk} onCancel={handleCancel}>
        Are you sure you want to logout?
      </Modal>
    </Header>
  );
}

export default Navbar;

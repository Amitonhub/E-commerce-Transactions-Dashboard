import React from 'react';
import { Layout, Menu } from 'antd';
import { DashboardOutlined, TransactionOutlined, ShoppingOutlined, UserOutlined, BarChartOutlined, FileTextOutlined, SettingOutlined, QuestionCircleOutlined, LogoutOutlined } from '@ant-design/icons';
import styles from './sidebar.module.css';

const { Header } = Layout;

function Navbar() {
  return (
    <Header
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 1,
        display: 'flex',
        alignItems: 'center',
        backgroundColor: 'white',
        margin: '22px',
        borderRadius: '10px',
        marginBottom: 0
      }}
    >
      <Menu theme="light" mode="horizontal" defaultSelectedKeys={['1']} style={{
        display: 'flex',
        width: '100%',
        justifyContent: 'space-between',
        borderBottom: 0
      }}>
        <div style={{display: 'flex'}}>
        <CustomMenuItem icon={<DashboardOutlined />} text="Dashboard" />
        <CustomMenuItem icon={<TransactionOutlined />} text="Transactions" />
        <CustomMenuItem icon={<ShoppingOutlined />} text="Products" />
        <CustomMenuItem icon={<UserOutlined />} text="Customers" />
        <CustomMenuItem icon={<BarChartOutlined />} text="Analytics" />
        <CustomMenuItem icon={<FileTextOutlined />} text="Reports" />
        </div>
        <div style={{display: 'flex'}}>
        <CustomMenuItem icon={<SettingOutlined />} text="Settings" />
        <CustomMenuItem icon={<QuestionCircleOutlined />} text="Help/Support" />
        <CustomMenuItem icon={<LogoutOutlined />} text="Logout" />
        </div>
      </Menu>
    </Header>
  );
}

export default Navbar;

const CustomMenuItem = ({ icon, text }) => {
    return (
      <button className={styles.menuItem}>
        {icon}
        <span style={{ padding: '0 10px'}}>{text}</span>
      </button>
    );
  };
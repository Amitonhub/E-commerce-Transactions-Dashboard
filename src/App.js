import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Dashboard from './pages/dashboard';
import { Layout } from 'antd';
import Navbar from './components/navbar';
import Register from './components/auth/Register';
import Login from './components/auth/login';
import { useGetUserDetailsQuery } from './redux/api';
import { setIsLogin, setUserDetails } from './redux/reducers/loginSlice';
import { batch, useDispatch } from 'react-redux';
import Products from './pages/products';

function App() {
  const { data, isSuccess } = useGetUserDetailsQuery();
  const dispatch = useDispatch()
  
  useEffect(() => {
    if(data && isSuccess){
      batch(() => {
        dispatch(setUserDetails(data?.user))
        dispatch(setIsLogin(true))
      })
    }
  },[data, isSuccess])

  return (
    <Router>
      <div className='main'>
      <Layout style={{backgroundColor: '#E8E7EE'}}>
      <Navbar />
        <Routes>
        <Route path='/' element={<Register />} />
        <Route path='/login' element={<Login />} />
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/products' element={<Products />} />
        </Routes>
    </Layout>

      </div>
    </Router>
  );
}

export default App;
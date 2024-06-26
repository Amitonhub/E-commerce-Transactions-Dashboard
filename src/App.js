import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes, Navigate, redirect } from "react-router-dom";
import Dashboard from "./pages/dashboard";
import { Layout } from "antd";
import Navbar from "./components/navbar";
import Register from "./components/auth/Register";
import Login from "./components/auth/login";
import { useGetUserDetailsQuery } from "./redux/api";
import { setIsLogin, setUserDetails } from "./redux/reducers/loginSlice";
import { batch, useDispatch, useSelector } from "react-redux";
import Products from "./pages/products";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const { data, isSuccess, error, isLoading } = useGetUserDetailsQuery();
  const dispatch = useDispatch();
  const [isLoginLocal, setIsLoginLocal] = useState(null)
  const isLoginState = useSelector((state) => state.login.isLogin);
  
  useEffect(() => {
    if(isLoginState){
      setIsLoginLocal(isLoginState)
    }
  },[isLoginState])

  useEffect(() => {
    if (data && isSuccess) {
      batch(() => {
        dispatch(setUserDetails(data?.user));
        dispatch(setIsLogin(true));
        redirect('/dashboard')
      });
    }

    if(error){
      dispatch(setIsLogin(false));
      redirect('/')
    }
  }, [data, isSuccess, error]);

  if(isLoading) return <div>Loading...</div>;

  return (
    <Router>
      <div className="main">
      <ToastContainer />
        <Layout style={{ backgroundColor: "#E8E7EE" }}>
          <Navbar />
          <Routes>
            <Route path="/" element={!isLoginLocal ? <Register /> : <Navigate to="/dashboard" />} />
            <Route path="/login" element={<Login />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/products" element={<Products />} />
          </Routes>
        </Layout>
      </div>
    </Router>
  );
}

export default App;
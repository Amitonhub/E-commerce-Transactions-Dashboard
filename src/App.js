import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Dashboard from './pages/dashboard';
import Sidebar from './components/sidebar';

function App() {
  return (
    <Router>
      <div className='main'>
        {/* <Sidebar /> */}
        <Routes>
        <Route path='/dashboard' element={<Dashboard />} />
          {/* <Route exact path="/dashboard" component={Dashboard} /> */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
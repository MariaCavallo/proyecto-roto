import React, { useEffect } from 'react';
import HeaderComponet from './components/commons/HeaderComponet';
import Footer from './components/commons/Footer';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';


function App() {

  const location = useLocation;
  const navigate = useNavigate();

  useEffect(() => {
    if (location.pathname === '/') {
      navigate('/Home')
    }
  })

  return (
    <div className='App'>
      <HeaderComponet />
      <Outlet />
      <Footer />
    </div>
  );
}

export default App;

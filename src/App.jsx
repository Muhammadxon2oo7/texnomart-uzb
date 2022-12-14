import './App.css';
import React, { useState, useEffect } from 'react';
import Routes from './Routes';
import Ofline from './components/offline/Ofline';
function App() {
  const [isOnline, setIsOnline] = useState(navigator.onLine);
  useEffect(() => {
    window.addEventListener("blur", () => {
      document.title = "Come back :("
    })
    window.addEventListener("focus", () => {
      document.title = "Texnomart"
    })
  });
  useEffect(() => {
    const handleStatusChange = () => {
      setIsOnline(navigator.onLine);
    };
    window.addEventListener('online', handleStatusChange);
    window.addEventListener('offline', handleStatusChange);
    return () => {
      window.removeEventListener('online', handleStatusChange);
      window.removeEventListener('offline', handleStatusChange);
    };
  }, [isOnline]);
  return (
    isOnline ?
       <div className="App">
        <Routes />
      </div>

      :<Ofline />
  );
}

export default App;

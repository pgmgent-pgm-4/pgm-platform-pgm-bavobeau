import { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';

import { ThemeProvider } from './context';

import './App.scss';

function App() {
  // const { currentUser, signInWithEmailAndPassword} = useAuth();  

  // useEffect(() => {
  //   const fetchData = async () => {
  //     await signInWithEmailAndPassword('Eileen39', 'w84pgmGent');
  //   }
  //   fetchData();

  // }, []);

  // useEffect(() => {
  //   console.log(currentUser);
  // }, [currentUser]);

  return (
    <ThemeProvider>
      <div className="app">
        <Outlet />    
      </div>
    </ThemeProvider>
  );
}

export default App;
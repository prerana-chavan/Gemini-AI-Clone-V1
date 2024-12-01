import React from 'react';
import Sidebar from './components/sidebar/Sidebar';
import Main from './components/main/main';
import ContextProvider from './context/context';

const App = () => {
  return (
    <ContextProvider>
    <Sidebar/>
    <Main></Main>
    </ContextProvider>
  )
}

export default App;
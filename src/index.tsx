import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
// import styled from 'styled-components';

// internal imports
import { Home, Auth, Cart, Shop } from './components'; 
import './index.css'
import { theme } from './Theme/themes';


// was trying to style 'Lenai Motors'.. didn't work ;-;
// const StyledHome = styled(Home)`
//   margin-top: 10;
//   margin-left: 20px;
// `;

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider theme = {theme}>
    <Router>
      <Routes>
        <Route path='/' element = {<Home title = {"Lenai Motors"}/>}  />
        <Route path='/auth' element = {<Auth/>} />
        <Route path='/cart' element = {<Cart/>} />
        <Route path='/shop' element = {<Shop/>} />
      </Routes>
    </Router>
    </ThemeProvider>
  </React.StrictMode>,
)

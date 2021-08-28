import React from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css'; 
import {ThemeProvider} from 'styled-components'
import './style/base.css'
import App from './App';
import theme from './style/Theme';

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </ThemeProvider>,
  document.getElementById('root')
);


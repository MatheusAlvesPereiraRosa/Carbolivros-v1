import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {Home} from './templates/home';
import { Cadastro } from './templates/cadastro';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Menu } from './components/menu';

ReactDOM.render(
  <Router>
    <Menu />
    <Routes >
      <Route path="/" exact element={<Home />} />
      <Route path="/Cadastro" exact element={<Cadastro />} />
    </Routes>
  </Router>,
  document.getElementById('root')
);

/*ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
*/

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'; import "./App.css";
import Header from './Header.js';
import Main from './Main.js';
import Modal from './Modal.js';
import Editor from './Editor.js';
import reportWebVitals from './reportWebVitals';

function App() {

  return (
    <div>
      <Modal />
      <Header />
      <Main />
      <Editor />
    </div>
  )
}
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

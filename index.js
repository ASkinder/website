import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './src/App/App';
import Header from './src/Header/Header';
import reportWebVitals from './src/reportWebVitals';
import Footer from './src/Footer/Footer';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <Header/>
        <App />
        <Footer />
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

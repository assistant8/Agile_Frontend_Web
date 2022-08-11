import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
//import "./style.css"; 는 css 파일 임포트 하지만 모든 버튼을 다 동일하게 만드므로 prop을 사용해서 할것

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <App /> //{/*App.js를 사용하겠다*/}
);

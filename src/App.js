import React from 'react';
import './App.css';
import Data from './components/Data';

function App() {
  return (
    <div className="App">
      <Data pathname="loading" description="Индикатор загрузки" />
      <Data pathname="error" description="Получение ошибки" />
      <Data pathname="data" description="Успешное получение данных" />
    </div>
  );
}

export default App;
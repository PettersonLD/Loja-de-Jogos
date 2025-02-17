//imports do projeto
import React, {useState} from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

//Funçao de estrutura
function App() {

 const [values,setValues] = useState();

  return (
    <>
      <div className='app-container'>
        <div className='Register--container'>
          <h1 className='Register--title'>Game Space</h1>
        
          <input
          type="text" 
          name="name" 
          placeholder='Nome'
          />
          <input
          type="text" 
          name="cost" 
          placeholder='Preço' 
          className='Register--input' 
          />
          <input
          type="text" 
          name="category" 
          placeholder='Categoria' 
          className='Register--input' 
          />
          <button className='Register--button'>Cadastrar</button>
          </div>
      </div>
    </>
  )
}

export default App

import React, { createContext } from 'react';
import ReactDOM from 'react-dom/client'; 
import App from './App'; 
import './index.css'
import { StoreProvider } from './utils/Store';


export const Context = createContext(null) 

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <> 
    <StoreProvider> 
          <App /> 
    </StoreProvider>
  </>
); 
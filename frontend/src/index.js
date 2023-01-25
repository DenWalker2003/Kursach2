import React, { createContext } from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import AutoStore from './store/AutoStore';
import UserStore from './store/UserStore';

export const Context = createContext(null)




const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
<Context.Provider value={{
  user: new UserStore(),
  auto: new AutoStore(),
}}>
  <App />
</Context.Provider>
)





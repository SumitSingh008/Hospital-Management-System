import { createContext, StrictMode, useState } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

export const Context = createContext({isAuthenticated: false});

const AppWrapper = () => {
  const [isAuthenticated, setIsAthenticated] = useState(false);
   const [admin, setAdmin] = useState({});

  return (
    <Context.Provider value={{isAuthenticated, setIsAthenticated, admin, setAdmin}}>
      <App/>
    </Context.Provider>
  )
}


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AppWrapper />
  </StrictMode>,
)

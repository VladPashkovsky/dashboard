import { createContext, useReducer } from 'react'
import DarkModReducer from './darkModReducer'

const INITIAL_STATE = {
  darkMod: false,
}

export const DarkModContext = createContext(INITIAL_STATE)

export const DarkModContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(DarkModReducer, INITIAL_STATE)

  return (
    <DarkModContext.Provider value={{ darkMod: state.darkMod, dispatch }}>
      {children}
    </DarkModContext.Provider>
  )
}
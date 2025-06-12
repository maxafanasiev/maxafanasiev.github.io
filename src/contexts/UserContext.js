// contexts/UserContext.js
import { createContext, useContext } from 'react';

const UserContext = createContext();

export const UserProvider = UserContext.Provider;
export const useUser = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error('useUser must be used within UserProvider');
  }
  return context;
};
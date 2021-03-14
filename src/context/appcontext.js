import { createContext, useContext, useState } from 'react';

const AppContext = createContext();

export function AppWrapper({ children }) {
  let sharedState = {
      boobs: 'awesome',
      website: '#'
  }

  const [boobs, setBoobs] = useState(sharedState.boobs); 

  let value =[sharedState, {boobs, setBoobs}];
  
  return (
    <AppContext.Provider value={value}>
      {children}
    </AppContext.Provider>
  );
}

export function useAppContext() {
  return useContext(AppContext);
}
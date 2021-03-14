import { createContext, useContext, useState } from 'react';

const AppContext = createContext();

export function AppWrapper({ children }) {
  let sharedState = {
      boobs: 'awesome',
      website: '#'
  }
  
  const [ isModalOpen, setIsModalOpen ] = useState(false);
  const [ showModalContent, setShowModalContent ] = useState({});
  const [boobs, setBoobs] = useState(sharedState.boobs); 
   
    let state = {
        boobs,
        isModalOpen,
        showModalContent
    };

    let handlers = {
        setBoobs,
        setIsModalOpen,
        setShowModalContent
    }; 

    const provider = [{state, handlers}]
  
  return (
    <AppContext.Provider value={provider}>
      {children}
    </AppContext.Provider>
  );
}

export function useAppContext() {
  return useContext(AppContext);
}
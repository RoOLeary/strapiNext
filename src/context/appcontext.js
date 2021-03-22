import { createContext, useContext, useState } from 'react';

const AppContext = createContext();

export function AppWrapper({ children }) {
  let sharedState = {
      boobs: 'awesome',
      website: '#',
      modalData: []
  }
  
  const [ isModalOpen, setIsModalOpen ] = useState(false);
  const [ modalData, setModalData ] = useState({});
  const [ boobs, setBoobs ] = useState(sharedState.boobs); 
   
    let state = {
        boobs,
        isModalOpen,
        modalData
    };

    let handlers = {
        setBoobs,
        setIsModalOpen,
        setModalData
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
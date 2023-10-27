// GlobalContext.tsx
import  { createContext, useContext, useState, ReactNode } from 'react';

type GlobalContextType = {
  count: number;
  setCount: (count: number) => void;
  taskCheckCount: number;
  setTaskCheckCount: (count: number) => void;
};

const GlobalContext = createContext<GlobalContextType | undefined>(undefined);

export function GlobalProvider({ children }: { children: ReactNode }) {
  const [count, setCount] = useState(0);    
  const [taskCheckCount, setTaskCheckCount]= useState(0)

  return (
    <GlobalContext.Provider value={{ count, setCount, taskCheckCount, setTaskCheckCount}}>
      {children}
    </GlobalContext.Provider>
  );
}

export function useGlobalCount() {
  const context = useContext(GlobalContext);

  if (!context) {
    throw new Error('useGlobalCount must be used within a GlobalProvider');
  }

  return context;
}
import { ReactNode, createContext, useState } from "react";
import React from "react";
import { TraitName } from "../Traits/TraitData";


export const TraitsContext = createContext<TraitContextProps | undefined>(undefined);

export interface TraitContextProps {
    traits: TraitName[];
    setTraits: React.Dispatch<React.SetStateAction<TraitName[]>>;
    champNames: string[]
    setChampNames: React.Dispatch<React.SetStateAction<string[]>>
  }
  
  export const TraitsProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [traits, setTraits] = useState<TraitName[]>([]);
    const [champNames, setChampNames] = useState<string[]>([]);
  
    return (
      <TraitsContext.Provider value={{ traits, setTraits, champNames, setChampNames }}>
        {children}
      </TraitsContext.Provider>
    )
  }
  
  export const useTraits = () => {
    const context = React.useContext(TraitsContext);
    if (context === undefined) {
      throw new Error('useTraits must be used within a TraitsProvider');
    }
    return context;
  }
  
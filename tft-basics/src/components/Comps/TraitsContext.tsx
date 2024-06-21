import { ReactNode, createContext, useState } from "react";
import { TraitName } from "../Champions/Champions";
import React from "react";


export const TraitsContext = createContext<TraitContextProps | undefined>(undefined);

export interface TraitContextProps {
    traits: TraitName[];
    setTraits: React.Dispatch<React.SetStateAction<TraitName[]>>;
  }
  
  export const TraitsProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [traits, setTraits] = useState<TraitName[]>([]);
  
    return (
      <TraitsContext.Provider value={{ traits, setTraits }}>
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
  
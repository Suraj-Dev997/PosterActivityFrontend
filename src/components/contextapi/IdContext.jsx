 
 import { createContext, useState } from "react";

 export const IdContext= createContext();
 
 export const IdContextProvider=({children})=>{
     
      const [id, setId]=useState(0)
 
      const handelchange=(item)=>{
        setId(item)
      }
 
     
 
 
   return <IdContext.Provider value={{handelchange,id}}>{children}</IdContext.Provider>
 }
 
 
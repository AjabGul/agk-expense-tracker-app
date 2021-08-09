import React, { createContext, useReducer} from "react";
import AppReducer from "./AppReducer";


const initialState = {
    transactions : [
        {id : 1, description : "incom 1", transactionAmount: 5000},
        {id : 2, description : "expense 1", transactionAmount: 500},
        {id : 3, description : "incom 2", transactionAmount: 3000},
        {id : 4, description : "expense 3", transactionAmount: 50},
    ]
}

// create Context 
export const GlobalContext = createContext(initialState);

// create global provider 
export const GlobalProvider = ({children})=>{

    const [state, dispatch] = useReducer(AppReducer, initialState);

    return (
        <GlobalContext.Provider value= {{
            transactions : state.transactions
        }}>
            {children}
        </GlobalContext.Provider>
    )
}
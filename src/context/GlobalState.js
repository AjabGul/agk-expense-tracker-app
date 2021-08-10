import React, { createContext, useReducer} from "react";
import AppReducer from "./AppReducer";


const initialState = {
    transactions : []
}

// create Context 
export const GlobalContext = createContext(initialState);

// create global provider 
export const GlobalProvider = ({children})=>{

    const [state, dispatch] = useReducer(AppReducer, initialState);

    // Actions for Transactions

        // Delete Existing Transaction Action
        function delTransaction(id) {
            dispatch({
                type: 'DELETE_TRANSACTION',
                payload: id
            });
        }

        // Add New Transaction Action
        function addTransaction(transaction) {
            dispatch({
                type: 'ADD_TRANSACTION',
                payload: transaction
            })
        }

    return (
        <GlobalContext.Provider value= {{
            transactions : state.transactions,
            delTransaction,
            addTransaction
        }}>
            {children}
        </GlobalContext.Provider>
    )
}
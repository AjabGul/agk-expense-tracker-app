import React,{useContext} from 'react'
import { GlobalContext } from '../context/GlobalState';

export const Balance = () => {
    const {transactions} = useContext(GlobalContext);
    const amounts = transactions.map((trasaction)=> (trasaction.transactionAmount));
    const totalBalance = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2);
    return (
        <div>
            <h3>Current Balance</h3>
            <h1>${totalBalance}</h1>
        </div>
    )
}
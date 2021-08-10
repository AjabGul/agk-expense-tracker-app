import React, {useContext} from 'react';
import { GlobalContext } from '../context/GlobalState';

export const Transaction = ({transaction}) => {
    const { delTransaction } = useContext(GlobalContext);
    const sign = transaction.transactionAmount > 0 ? "+" : "-";
    return (
        <li className={transaction.transactionAmount > 0 ? "plus" : "minus"}>
            {transaction.description}
            <span>{sign} ${Math.abs(transaction.transactionAmount)}</span>
             <button onClick={()=> delTransaction(transaction.id)} className="delete-btn">X</button>
        </li>
    )
}

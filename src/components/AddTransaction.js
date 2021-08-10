import React, {useState, useContext} from 'react';
import { GlobalContext } from '../context/GlobalState';

export const AddTransaction = () => {

    const [description, SetDescription] = useState();
    const [transactionAmount, SetTransactionAmount] = useState();

    const { addTransaction } = useContext(GlobalContext)

    const onSubmit = (e) => {
        e.preventDefault();

        const newTransaction = {
            id: new Date().getTime(),
            description,
            transactionAmount : +transactionAmount
        }

        addTransaction(newTransaction);

        // once you submite the description and trasactionAmount clear the input fields

        SetDescription('');
        SetTransactionAmount('');

    }

    return (
        <div>
            <h3>Add New Transction</h3>
            <form onSubmit={onSubmit}>
                <div className="form-control">
                    <label htmlFor="description">Description</label>
                    <input type="text" 
                            id="description" 
                            placeholder="Detail of Transaction" 
                            value= {description}
                            onChange={(e)=> SetDescription(e.target.value)}
                    />
                </div>
                <div className="form-control">
                    <label htmlFor="transactionamount">Transction Amount</label>
                    <input type="number" 
                            id="tansactionamount" 
                            placeholder="Inter Transaction Amount"
                            value={transactionAmount}
                            onChange={(e)=>SetTransactionAmount(e.target.value)} 
                    />
                </div>
                <button className="btn">Add Transaction</button>
            </form>
        </div>
    )
}
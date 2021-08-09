import React, {useState} from 'react'

export const AddTransaction = () => {

    const [description, SetDescription] = useState();
    const [trasactionamount, SetTransactionamount] = useState();

    return (
        <div>
            <h3>Add New Transction</h3>
            <form>
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
                            value={trasactionamount}
                            onChange={(e)=>SetTransactionamount(e.target.value)} 
                    />
                </div>
                <button className="btn">Add Transaction</button>
            </form>
        </div>
    )
}
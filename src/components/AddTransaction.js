import React from 'react'

const AddTransaction = () => {
    return (
        <div>
            <h3>Add New Transction</h3>
            <form>
                <div className="form-control">
                    <label htmlFor="description">Description</label>
                    <input type="text" id="description" placeholder="Detail of Transaction" />
                </div>
                <div className="form-control">
                    <label htmlFor="transactionamount">Transction Amount</label>
                    <input type="number" id="tansactionamount" placeholder="Inter Transaction Amount" />
                </div>
                <button className="btn">Add Transaction</button>
            </form>
        </div>
    )
}

export default AddTransaction

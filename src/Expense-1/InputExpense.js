import React, { useState } from 'react'

export const InputExpense = ({addtransaction}) => {

  const [Amount,setAmount]=useState('')
  const [Description,setDescription]=useState('');

  const Addtransaction = (e) => {
    const transaction={
        id:Math.floor(Math.random()*10000),
        Description:Description,
        Amount:Amount
     }
     addtransaction(transaction)
  }

  return (
   
    <div className='Inputfield'>
        <input type="text" value={Description} placeholder="Enter Your Description" onChange={(e) => {
            setDescription(e.target.value)
        }} style={{width:'300px'}}/>
        <input type="text" value={Amount} placeholder="Enter Your Amount" onChange={(e) => {
            setAmount(e.target.value)
        }} style={{width:'300px'}}/>
        <button onClick={Addtransaction}>Add Transaction</button>
    </div>
  )
}

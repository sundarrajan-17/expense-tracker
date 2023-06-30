import React from 'react'


export const Transaction = (props) => {
  
    const transactions=props.transactions;
    const DeleteTransaction=props.DeleteTransaction;

  return (
    <div className='Transaction'>
        <h2 style={{display:'flex',alignItems:'center',justifyContent:'center'}}>Transaction History</h2>
          <div className='container-fluid'>
        {transactions.map((item) => {
            return (
            <div className='row' key={item.id}>
              <div className='col-6'>
              <h1>{item.Description} <span>{item.Amount}</span></h1>
              </div>
              <div className='col-4 d-flex justify-content-end'> <button
           onClick={() => DeleteTransaction(item)} style={{color:'black',backgroundColor:'aliceblue',borderRadius:'20px',padding:'10px',width:'110px',fontSize:'22px',fontWeight:'600'}}>Remove</button></div>
              </div>)
        })}
        </div>
    </div>
  )
}

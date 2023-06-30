import './App.css';
import React,{useReducer, useState} from 'react';
import { InputExpense } from './Expense-1/InputExpense';
import { Transaction } from './Expense-1/Transaction';
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend
} from 'chart.js';
import {Bar} from 'react-chartjs-2';
import Header from './Header/Header';

ChartJS.register(
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend
)

const initialvalue={
  Total:0,Expense:0
}

function Reducer(state,action){
  var value=action.type;
  if(value > 0){
    return {...state,Total:state.Total+action.payload}
  }else{
    return {...state,Total:state.Total+action.payload,Expense:state.Expense-action.payload}
  }
}

function App() {

  const [state,dispatch]=useReducer(Reducer,initialvalue)
  const [transactions,setTransaction]=useState([])

  const addtransaction = (transaction) => {
      setTransaction(transactions => [transaction,...transactions])
      const Amount=parseInt(transaction.Amount)
      dispatch({type:Amount,payload:Amount})
  }
  const DeleteTransaction = (item) => {
    console.log(item.Amount)
    setTransaction(transactions.filter((transaction) => transaction.id!==item.id))
    var amount=Math.abs(item.Amount)
    dispatch({type:item.amount,payload:amount})
  }
  const data={
    labels:transactions.map((item) => item.Description),
    datasets:[{
      data:transactions.map((item) => (item.Amount)),
      backgroundColor:'aliceblue',
      borderColor:'aliceblue',
      borderWidth:'5px',
    }]
  }

  return (
    <>
    <Header/><br/>
    <div className="container-fluid">
       <div className='row' >
          <div className='col-6' style={{display:'flex',flexDirection:'column',justifyContent:'flex-start',alignItems:'center'}}>
            <div style={{padding:'50px',border:'5px solid black'}}>
            <div className="row">
              <div className='Balance'>
                <div className='Balance-Name'>
                  <h1>Balance: {state.Total}</h1> 
               </div>
               <div className='Balance-Details'>
                 <h1> Expense: {state.Expense}</h1>
               </div>
              </div>
            </div>
            <div className='row'>
               <InputExpense addtransaction={addtransaction}/>
            </div>
          </div>
          </div>
          <div className='col'>
          <div style={{padding:'50px',border:'5px solid black'}}>
            <div className='row'>
              <Transaction transactions={transactions} DeleteTransaction={DeleteTransaction}/>
            </div>
            </div>
          </div>
        </div>
        <br/>
       <h1>Watch Your Expense In The Bar Graph Analysis Below.</h1>
       <h1 style={{display:'flex',justifyContent:'center',alignItems:'center'}}>Bar Graph</h1>
       <Bar
           data={data}
       ></Bar>
    </div>
    </>
  );
}

export default App;

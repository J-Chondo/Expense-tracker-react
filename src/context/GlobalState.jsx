import React,{createContext, useReducer} from "react";
import AppReducer from "./AppReducer";


//intial state

const intialState ={
    transactions: [
  { id: 2, text: 'Salary', amount: 35000},
  { id: 4, text: 'food', amount: -10000}
 ]
}

//create context

export const GlobalContext = createContext(intialState);

//provider component

export const GlobalProvider = ({children}) =>{
    const[state, dispatch] = useReducer(AppReducer, intialState);
//actions

function deleteTransaction(id){
    dispatch({
        type: 'DELETE_TRANSACTION',
        payload: id
    })
}

function addTransaction(transaction){
    dispatch({
        type: 'ADD_TRANSACTION',
        payload: transaction
    })
}


    return (
    <GlobalContext.Provider 
    value= {{transactions: state.transactions,
        deleteTransaction,
        addTransaction
     }}> 
        {children} 
    </GlobalContext.Provider>);
}
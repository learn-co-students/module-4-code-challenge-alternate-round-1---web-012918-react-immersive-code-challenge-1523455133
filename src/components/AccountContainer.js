import React, { Component } from 'react'
import TransactionsList from './TransactionsList'
import CategorySelector from './CategorySelector'
import {transactions} from '../transactionsData'

class AccountContainer extends Component {
  // constructor() {
  //   super()
  //   //... your code here
  // }
  state={
    transactions:[],
    filteredTransactions:[],
    radioButton:''
  }



  componentDidMount(){
    fetch(" https://boiling-brook-94902.herokuapp.com/transactions")
    .then(res=>res.json())
    .then(json=>this.setTransactions(json))
  }

  setTransactions=(json)=>{
    this.setState({
      transactions:json
    },()=>console.log(this.state.transactions))
  }

  handleChange=(category)=> {
    this.setState({
      radioButton:category
    },()=>this.filterTransactions())
  }

  filterTransactions=()=>{
    console.log(this.state.radioButton)
    console.log(this.state.transactions)
    const filteredArray=[]
    this.state.transactions.map((transaction)=>{
      if (transaction.category==this.state.radioButton){
        filteredArray.push(transaction)
      }
    })
    this.setState({
      filteredTransactions:filteredArray
    },()=>console.log(filteredArray))

  }

  render() {
    return (
      <div className="ui grid container">

        <CategorySelector handleChange={this.handleChange} radioButton={this.state.radioButton}/>

        {this.state.filteredTransactions.length>0 ? <TransactionsList transactions={this.state.filteredTransactions}/> : <TransactionsList transactions={this.state.transactions}/>}

      </div>
    )
  }
}

export default AccountContainer

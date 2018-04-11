import React, { Component } from 'react'
import TransactionsList from './TransactionsList'
import CategorySelector from './CategorySelector'
import data from '../transactionsData'

class AccountContainer extends Component {
  state = {
    data: [],
    category:'all',
    otherData: []
  }

  componentDidMount = () => {
    fetch(`https://boiling-brook-94902.herokuapp.com/transactions`)
    .then(res => res.json())
    .then(json => this.setState({
      data: json,
      otherData: json
    }))
  }

  grabCategory = (props) => {
    // let newarray;
    //
    // newarray= this.state.data.filter(d => {
    //   return d === props.category
    // })
    this.setState({
      category: props.category

    })
  }

  handleChange() {
    //... your code here
  }

  render() {
    return (
      <div className="ui grid container">

        <CategorySelector grabCategory={this.grabCategory} />

        <TransactionsList clickedValue={this.state.category} items={this.state.data}/>

      </div>
    )
  }
}

export default AccountContainer

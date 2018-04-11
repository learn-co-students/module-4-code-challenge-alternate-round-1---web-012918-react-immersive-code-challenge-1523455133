import React, { Component } from 'react'
import TransactionsList from './TransactionsList'
import CategorySelector from './CategorySelector'
import data from '../transactionsData'

class AccountContainer extends Component {
  state = {
    data: [],
    category:'',
    otherData: [],
    clicked: false,
    unTouchedData: []
  }

  componentDidMount = () => {
    fetch(`https://boiling-brook-94902.herokuapp.com/transactions`)
    .then(res => res.json())
    .then(json => this.setState({
      data: json,
      otherData: json,
      unTouchedData: json
    }))
  }

  grabCategory = (props) => {
    console.log(props);
    console.log(props.checked);
    // let newarray;
    //
    // newarray= this.state.data.filter(d => {
    //   return d === props.category
    // })
    let newArray;




    if(props.category){
       newArray = this.state.otherData.filter(d => {
        console.log(d.category);
        console.log(props.category === d.category);

        // return props.category === d.category
        if(props.category==='All'){
          return this.state.otherData;
        }
        else if(props.category !=='All'){
          return props.category === d.category
        }
        // return props.category === true
      })
    }





    else {
      newArray = this.state.unTouchedData
    }



    this.setState({
      category: props.category,
      data: newArray,
      clicked: !props.category.clicked

    })
  }



  handleChange() {
    //... your code here
  }

  render() {

    console.log(this.state.unTouchedData);
    console.log(this.state.data);
    return (
      <div className="ui grid container">

        <CategorySelector grabCategory={this.grabCategory} />

        <TransactionsList clickedValue={this.state.category} items={this.state.data}/>

      </div>
    )
  }
}

export default AccountContainer

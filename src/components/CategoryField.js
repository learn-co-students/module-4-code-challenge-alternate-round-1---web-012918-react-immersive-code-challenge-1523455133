import React, {Component} from 'react'

class CategoryField extends Component{
  // const { category, checked } = props
  state={
    checked:false
  }

  handleChange=()=>{
    this.props.handleChange(this.props.category)
    // this.setState({
    //   checked:!this.state.checked
    // },()=>this.props.handleChange(this.props.category))
  }


  render (){
    // console.log(this.handleChange)
    return (
      <div className=" four wide field">
        <div className="ui radio checkbox" >

          <input
            type="radio"
            name="category"

            onChange={this.handleChange}

          />
          <label>{this.props.category}</label>

        </div>
      </div>
    )
  }
}

export default CategoryField

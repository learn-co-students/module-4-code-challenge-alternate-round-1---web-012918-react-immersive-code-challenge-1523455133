import React from 'react'

class CategoryField extends React.Component {
  // const { category, checked } = props
  // console.log(props.checked);

  state = {
    clicked: false
  }

  render(){
    console.log(this.props.checked);
    const onClick = () => {

      this.props.grabCategory(this.props)
      this.setState({
        clicked: !this.state.clicked
      })
    }
    return (
      <div className=" four wide field">
        <div className="ui radio checkbox">

          <input
            type="radio"
            name="category"
            checked={ this.props.checked }
            onClick={onClick}
          />
        <label>{ this.props.category }</label>

        </div>
      </div>
    )
  }

}

export default CategoryField


// import React from 'react'
//
// const CategoryField = (props) => {
//   // const { category, checked } = props
//   console.log(props.checked);
//
//   const onClick = () => {
//
//     props.grabCategory(props)
//     // this.setState({
//     //   clicked: !this.state.clicked
//     // })
//   }
//
//   return (
//     <div className=" four wide field">
//       <div className="ui radio checkbox">
//
//         <input
//           type="radio"
//           name="category"
//           checked={ props.checked }
//           onClick={onClick}
//         />
//       <label>{ props.category }</label>
//
//       </div>
//     </div>
//   )
// }
//
// export default CategoryField

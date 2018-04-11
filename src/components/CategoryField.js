import React from 'react'

const CategoryField = (props) => {
  const { category, checked } = props

  const onClick = () => {
    props.grabCategory(props)
  }

  return (
    <div className=" four wide field">
      <div className="ui radio checkbox">

        <input
          type="radio"
          name="category"
          checked={ checked }
          onClick={onClick}
        />
        <label>{ category }</label>

      </div>
    </div>
  )
}

export default CategoryField

import React from 'react'

const Transaction = (props) => {
  return (
    <tr>
      <td>{props.item.posted_at}</td>
      <td>{props.item.description}</td>
      <td>{props.item.category}</td>
      <td>{props.item.amount}</td>
    </tr>
  )
}

export default Transaction

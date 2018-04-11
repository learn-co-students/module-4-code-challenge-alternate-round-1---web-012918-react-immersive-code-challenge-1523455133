import React from 'react'
import Transaction from './Transaction'

const TransactionsList = (props) => {

  // let filt

  let mappedItems = props.items.map(i => {
    return <Transaction item={i} key={i.id} />
  })

  return (
    <table className="ui celled striped padded table">
      <tbody>
        <tr>
          <th>
            <h3 className="ui center aligned header">
              Posted At
            </h3>
          </th>
          <th>
            <h3 className="ui center aligned header">
              Description
            </h3>
          </th>
          <th>
            <h3 className="ui center aligned header">
              Category
            </h3>
          </th>
          <th>
            <h3 className="ui center aligned header">
              Amount
            </h3>
          </th>
        </tr>
        {mappedItems}

      </tbody>
    </table>
  )
}

export default TransactionsList

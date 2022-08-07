import React from 'react'

const ListItem = ({number,stack,language,item,deleteItem,editItem}) => {
  return (
    <tr>
        <th>{number}</th>
        <td>{stack}</td>
        <td>{language}</td>
        <td>
            <button onClick={()=> editItem(item)} className='btn btn-success'>Edit</button>
        </td>
        <td>
            <button onClick={()=> deleteItem(item.id)} className='btn btn-danger'>Delete</button>
        </td>
    </tr>
  )
}

export default ListItem
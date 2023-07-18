import React from 'react'
import Items from '../Items/Items'
import "./ItemList.css"

const ItemList = ({data = []}) => {
  return (
    <>
    <div className="ItemContainer">
      {data.map(product => <Items key={product.id} info={product}/>)}
    </div>
    </>
  )
}

export default ItemList
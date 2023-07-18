import React from 'react'
import { Link } from 'react-router-dom'
import {BiRightArrowAlt} from "react-icons/bi"
import './Item.css'

const Items = ({ info }) => {
  return (
    <Link to={`detail/${info.id}`} style={{textDecoration: "none"}}>
      <div className='containerCard'>
        <div className="card">
          <div className="card-img">
            <img src={info.img} alt="img" className='img' />
          </div>
          <div className="card-title">{info.name}</div>
          <div className="card-subtitle">{info.descriptionSmall}</div>
          <hr className="card-divider" />
          <div className="card-footer">
            <div className="card-price"><span>$</span>{info.price}</div>
            <button className="card-btn">
              <BiRightArrowAlt className='pulsate-bck'/>
            </button>
          </div>
        </div>
      </div>
    </Link>
  )
}

export default Items
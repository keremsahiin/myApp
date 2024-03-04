import React from 'react'
import "./HeroStyle.css"


function Hero(props) {
  return (
    <div className={props.cName}>
        <div className='hero-text'>
            <h1>{props.title}</h1>
            <p>
            {props.text}
            </p>
            <hr className='vr'/>
            <div className='search'>
              <i className="search-icon fa-solid fa-magnifying-glass"></i>
              <input className='search-input' type='search' placeholder='Search'></input> 
            </div>
        </div>
    </div>
    //search barı responsive hale getirilecek!
  )
}
export default Hero
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
            <input className={props.inputClass} placeholder={props.inputPlaceHolder}></input>
            <i className={props.IclassName}></i>
        </div>
    </div>
  )
}
export default Hero
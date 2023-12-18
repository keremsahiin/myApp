import React from 'react'
import NavBar from "../components/NavBar"
import Hero from '../components/Hero';
import ServiceImg from "../assets/u4.png";
function Service() {
  return (
    <>
      <NavBar/>
      <Hero
      cName = "hero-mid"
      heroImg = {ServiceImg}
      title = "SERVİCE"
      buttonClass = "hide"
      />
    </>
  )
}
export default Service
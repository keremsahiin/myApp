import React from 'react'
import NavBar from "../components/NavBar"
import Hero from '../components/Hero';
import ServiceImg from "../assets/u4.png";
function Service() {
  return (
    <>
      <NavBar/>
      <Hero
      cName = "hero"
      heroImg = {ServiceImg}
      title = "SERVİCE"
      text = "Keep the Save"
      buttonText = "Scanning Type"
      url = "/"
      buttonClass = "show"
      />
    </>
  )
}
export default Service
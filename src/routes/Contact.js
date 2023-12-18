import React from 'react'
import NavBar from "../components/NavBar"
import Hero from '../components/Hero';
import ContactImg from "../assets/u3.jpg";
function Contact() {
  return (
    <>
      <NavBar/>
      <Hero
      cName = "hero-mid"
      heroImg = {ContactImg}
      title = "CONTACT"
      buttonClass = "hide"
      />
    </>
  )
}
export default Contact
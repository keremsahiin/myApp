import React from 'react'
import NavBar from "../components/NavBar"
import Hero from '../components/Hero';
import ContactImg from "../assets/u3.jpg";
function Contact() {
  return (
    <>
      <NavBar/>
      <Hero
      cName = "hero"
      heroImg = {ContactImg}
      title = "CONTACT"
      text = "Keep the Save"
      buttonText = "Scanning Type"
      url = "/"
      buttonClass = "show"
      />
    </>
  )
}
export default Contact
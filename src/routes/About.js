import React from 'react'
import NavBar from "../components/NavBar"
import Hero from '../components/Hero';
import AboutImg from "../assets/u2.jpg";
function About() {
  return (
    <>
      <NavBar/>
      <Hero
      cName = "hero-mid"
      heroImg = {AboutImg}
      title = "ABOUT"
      buttonClass = "hide"
      />
    </>
  )
}
export default About
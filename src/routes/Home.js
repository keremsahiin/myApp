import React from 'react'
import NavBar from "../components/NavBar"
import Hero from '../components/Hero';
import HomeImg from "../assets/u1.jpg";
function Home() {
  return (
    <>
      <NavBar/>
      <Hero
      cName = "hero"
      heroImg = {HomeImg}
      title = "SECURITY"
      text = "Keep the Save"
      buttonText = "Scanning Type"
      url = "/"
      buttonClass = "show"
      />
    </>
  )
}
export default Home;

import './App.css'
import React, { useState, useEffect } from 'react'
import Footer from './footer/Footer'
import Navbar from './Navbar/Navbar'
import HeroCard from './heroCard/HeroCard'
import TicketCard from './ticketCard/TicketCard'
import { Suspense } from 'react'
import TicketStatuSection from './ticketStatusSection/TicketStatuSection'

function App() {
  

  return (
    <div className="max-w-[90%] mx-auto">
      <Navbar></Navbar>
      <HeroCard></HeroCard>
      <TicketStatuSection></TicketStatuSection>
      <Footer></Footer>
    </div>
  )
}

export default App

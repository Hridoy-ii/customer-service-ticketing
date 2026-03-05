
import './App.css'
import React, { useState, useEffect } from 'react'
import Footer from './footer/Footer'
import Navbar from './Navbar/Navbar'
import HeroCard from './heroCard/HeroCard'
import TicketCard from './ticketCard/TicketCard'
import { Suspense } from 'react'
import TicketStatuSection from './ticketStatusSection/TicketStatuSection'

const getTicketsData = fetch('/tickets.json').then((response) => response.json());


function App() {

  console.log(getTicketsData);


  return (
    <div className="max-w-[90%] mx-auto">
      <Navbar></Navbar>
      <HeroCard getTicketsData={getTicketsData}></HeroCard>
      <TicketStatuSection getTicketsData={getTicketsData}  ></TicketStatuSection>
      <Footer></Footer>
    </div>
  )
}

export default App

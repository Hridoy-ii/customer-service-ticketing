
import './App.css'
import Footer from './footer/Footer'
import HeroCard from './heroCard/HeroCard'
import Navbar from './navbar/Navbar';
import TicketStatuSection from './ticketStatusSection/TicketStatuSection'
import { Suspense } from 'react'

const getTicketsData = fetch('/tickets.json').then((response) => response.json());


function App() {

  console.log(getTicketsData);


  return (
    <div className="max-w-[90%] mx-auto">
      <Navbar></Navbar>
      <HeroCard getTicketsData={getTicketsData}></HeroCard>
      <Suspense fallback={<span className="loading loading-bars loading-xl"></span>}>
        <TicketStatuSection getTicketsData={getTicketsData}  ></TicketStatuSection>
      </Suspense>
      <Footer></Footer>
    </div>
  )
}

export default App

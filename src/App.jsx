
import './App.css'
import Footer from './footer/Footer'
import HeroCard from './heroCard/HeroCard'
import Navbar from './navbar/Navbar';
import TicketStatuSection from './ticketStatusSection/TicketStatuSection'
import { Suspense, useEffect, useState } from 'react'



function App() {

  const [tickets, setTickets] = useState([]);

  useEffect(() => {
    fetch("/tickets.json")
      .then(res => res.json())
      .then(data => setTickets(data.tickets));
  }, []);

  return (
    <div >
      <div className="max-w-[94%] mx-auto">
        <Navbar />

        <HeroCard tickets={tickets} />

        <TicketStatuSection
          tickets={tickets}
          setTickets={setTickets}
        />
      </div>
      <Footer />
    </div>
  );
}

export default App

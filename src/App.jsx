
import './App.css'
import Footer from './footer/Footer'
import Navbar from './Navbar/Navbar'
import HeroCard from './heroCard/HeroCard'
import TicketCard from './ticketCard/TicketCard'
import { Suspense } from 'react'
import TicketStatuSection from './ticketStatusSection/TicketStatuSection'

const fetchTickets = async () => {
  try {
    const response = await fetch('/tickets.JSON');
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    console.log(data);
    return data;
  } catch (error) {
    console.error('Error fetching tickets:', error);
    return [];
  }
};

function App() {

  const ticketsPromise = fetchTickets();

  return (
    <div className="max-w-6xl mx-auto">
      <Navbar></Navbar>
      <HeroCard></HeroCard>
      <Suspense fallback={<span className="loading loading-ring loading-xl"></span>}>
        <TicketStatuSection ticketsPromise={ticketsPromise}></TicketStatuSection>
      </Suspense>
      <Footer></Footer>
    </div>
  )
}

export default App

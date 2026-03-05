import { use } from 'react';
import TicketCard from '../ticketCard/TicketCard';

const CustomerTickets = ({getTicketsData}) => {

    const ticketsData = use(getTicketsData);
    const tickets = ticketsData.tickets;
   

    return (
        <div className="space-y-4">
            {tickets.map((ticket) => (
                <TicketCard key={ticket.id} ticket={ticket} />
            ))}
        </div>
    );
};

export default CustomerTickets;
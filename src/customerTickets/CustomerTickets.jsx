import { use } from 'react';
import TicketCard from '../ticketCard/TicketCard';

const CustomerTickets = ({ getTicketsData, handleTaskStatusUpdate }) => {

    const ticketsData = use(getTicketsData);
    const tickets = ticketsData.tickets;


    return (
        <div className="space-y-4">
            {tickets.map((ticket) => (
                <TicketCard
                    key={ticket.id}
                    ticket={ticket}
                    onClick={() => handleTaskStatusUpdate(ticket)}
                />
            ))}
        </div>
    );
};

export default CustomerTickets;
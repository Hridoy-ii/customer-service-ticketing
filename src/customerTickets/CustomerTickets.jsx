import React from 'react';
import TicketCard from '../ticketCard/TicketCard';

const CustomerTickets = ({ tickets = [] }) => {
    return (
        <div>
            {tickets.map((ticket) => (
                <TicketCard key={ticket.id} ticket={ticket} />
            ))}
        </div>
    );
};

export default CustomerTickets;
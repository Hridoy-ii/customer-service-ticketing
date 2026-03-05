import React from 'react';
import CustomerTickets from '../customerTickets/CustomerTickets';

const TicketStatuSection = ({ ticketsPromise }) => {
    console.log(ticketsPromise);
    return (
        <div>
            <CustomerTickets ticketsPromise={ticketsPromise}></CustomerTickets>
        </div>
    );
};

export default TicketStatuSection;
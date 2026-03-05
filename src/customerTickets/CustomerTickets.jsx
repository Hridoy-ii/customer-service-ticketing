import TicketCard from '../ticketCard/TicketCard';

const CustomerTickets = () => {
    
const tickets = [1, 2, 3, 4, 5];
    

    return (
        <div className="space-y-4">
            {tickets.map((ticket) => (
                <TicketCard key={ticket} ticket={{ id: `#100${ticket}` }} />
            ))}
        </div>
    );
};

export default CustomerTickets;
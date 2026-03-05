import TicketCard from "../ticketCard/TicketCard";

const CustomerTickets = ({ tickets, handleTaskStatusUpdate }) => {

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
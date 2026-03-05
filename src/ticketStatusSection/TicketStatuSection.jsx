import { useState } from "react";
import CustomerTickets from "../customerTickets/CustomerTickets";
import TaskStatus from "../taskStatus/TaskSatatus";

const TicketStatuSection = ({ tickets, setTickets }) => {

    const updateTicketStatus = (id, status) => {

        const updatedTickets = tickets.map(ticket =>
            ticket.id === id ? { ...ticket, status } : ticket
        );

        setTickets(updatedTickets);
    };

    const handleTaskStatusUpdate = (ticket) => {

        updateTicketStatus(ticket.id, "In Progress");

        alert("Ticket moved to In Progress");
    };

    return (
        <div className="flex flex-col md:flex-row gap-6 py-8">

            {/* LEFT SIDE */}
            <div className="w-full md:w-2/3">

                <h2 className="text-2xl font-bold text-gray-800 mb-6">
                    Customer Tickets
                </h2>

                <CustomerTickets
                    tickets={tickets}
                    handleTaskStatusUpdate={handleTaskStatusUpdate}
                />

            </div>

            {/* RIGHT SIDE */}
            <div className="w-full md:w-1/3">

                <h2 className="text-2xl font-bold text-gray-800 mb-6">
                    Task Status
                </h2>

                <TaskStatus
                    tickets={tickets}
                    updateTicketStatus={updateTicketStatus}
                />

            </div>

        </div>
    );
};

export default TicketStatuSection;
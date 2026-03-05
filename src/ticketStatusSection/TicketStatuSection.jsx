import { Suspense, useState } from 'react';
import CustomerTickets from '../customerTickets/CustomerTickets';
import TaskStatus from '../taskStatus/TaskSatatus';

const TicketStatuSection = ({ getTicketsData }) => {

    const [taskStatuses, setTaskStatuses] = useState([]);

    const handleTaskStatusUpdate = (ticket) => {

        const updatedTicket = {
            ...ticket,
            status: "In Progress"
        };

        setTaskStatuses((prev) => [...prev, updatedTicket]);

        alert("Ticket moved to In Progress");
    };

    return (
        <div className="flex flex-col md:flex-row gap-6 py-8">

            <div className="w-full md:w-2/3">
                <h2 className="text-2xl font-bold text-gray-800 mb-6">
                    Customer Tickets
                </h2>

                <CustomerTickets
                    getTicketsData={getTicketsData}
                    handleTaskStatusUpdate={handleTaskStatusUpdate}
                />
            </div>

            <div className="w-full md:w-1/3">
                <h2 className="text-2xl font-bold text-gray-800 mb-6">
                    Task Status
                </h2>

                <TaskStatus taskStatuses={taskStatuses} />
            </div>

        </div>
    );
};

export default TicketStatuSection;
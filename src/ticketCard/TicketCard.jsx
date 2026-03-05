import React from 'react';
import { MdCalendarToday } from 'react-icons/md';

const TicketCard = ({ ticket }) => {
    return (
        <div className="bg-white rounded-lg shadow-md p-6 border border-gray-200 hover:shadow-lg transition-shadow">
            {/* Header with Title and Status */}
            <div className="flex justify-between items-start mb-3">
                <h3 className="text-lg font-semibold text-gray-800 flex-1">
                    {ticket.title}
                </h3>
                <span className="badge badge-success text-white gap-2">
                    <span className="w-2 h-2 bg-white rounded-full"></span>
                    {ticket.status}
                </span>
            </div>

            {/* Description */}
            <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                {ticket.description}
            </p>

            {/* Footer with Details */}
            <div className="flex flex-wrap items-center justify-between gap-3 pt-4 border-t border-gray-200">
                <div className="flex items-center gap-4">
                    {/* Ticket ID */}
                    <div>
                        <span className="text-gray-500 text-xs">Ticket ID</span>
                        <p className="text-gray-800 font-semibold">{ticket.id}</p>
                    </div>

                    {/* Priority */}
                    <div>
                        <span className="text-red-500 font-semibold text-xs uppercase">
                            {ticket.priority}
                        </span>
                    </div>
                </div>

                <div className="flex items-center gap-4 text-sm">
                    {/* Assigned To */}
                    <span className="text-gray-600">{ticket.assignedTo}</span>

                    {/* Date */}
                    <div className="flex items-center gap-1 text-gray-600">
                        <MdCalendarToday size={16} />
                        <span>1/15/2024</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TicketCard;
import { MdCheckCircle } from 'react-icons/md';
import { useState } from "react";


const TaskStatus = ({ tickets, updateTicketStatus  }) => {

    const [selectedTicket, setSelectedTicket] = useState(null);

    const inProgressTickets = tickets.filter(
        (ticket) => ticket.status === "In Progress"
    );

    const resolvedTickets = tickets.filter(
        (ticket) => ticket.status === "Resolved"
    );

    const handleCompleteClick = (ticket) => {
        setSelectedTicket(ticket);
        document.getElementById("resolve_modal").showModal();
    };

    const confirmResolve = () => {
        updateTicketStatus(selectedTicket.id, "Resolved");
        alert("Task marked as resolved");
        setSelectedTicket(null);
        document.getElementById("resolve_modal").close();
    };

    return (
        <div className="space-y-8">

            {/* In Progress Section */}
            <div className="space-y-4">
                {inProgressTickets.length === 0 ? (
                    <p className="text-gray-500">No tasks in progress.</p>
                ) : (
                    inProgressTickets.map((ticket) => (
                        <div
                            key={ticket.id}
                            className="bg-white rounded-lg shadow-md p-5 border"
                        >
                            <h3 className="text-lg text-black font-semibold">
                                {ticket.title}
                            </h3>

                            <button
                                onClick={() => handleCompleteClick(ticket)}
                                className="w-full bg-[#02A53B] hover:bg-[#028c30] cursor-pointer text-white py-2 rounded mt-3"
                            >
                                Complete
                            </button>
                        </div>
                    ))
                )}
            </div>

            {/* Resolved Section */}
            <div className="border-t pt-6">
                <h2 className="text-xl font-bold text-gray-800 mb-4">
                    Resolved Tasks
                </h2>

                {resolvedTickets.length === 0 ? (
                    <p className="text-gray-500">No resolved tasks yet.</p>
                ) : (
                    <div className="space-y-4">
                        {resolvedTickets.map((ticket) => (
                            <div
                                key={ticket.id}
                                className="bg-white rounded-lg shadow-md p-5 border"
                            >
                                <h3 className="text-lg text-black font-semibold">
                                    {ticket.title}
                                </h3>

                                <span className="text-green-600 text-sm font-semibold">
                                    Resolved
                                </span>
                            </div>
                        ))}
                    </div>
                )}
            </div>

            {/* Modal */}
            <dialog id="resolve_modal" className="modal">
                <div className="modal-box">
                    <h3 className="font-bold text-lg">
                        Confirm Resolution
                    </h3>

                    <p className="py-4">
                        Are you sure this task is resolved?
                    </p>

                    <div className="modal-action">
                        <button
                            onClick={confirmResolve}
                            className="btn btn-success"
                        >
                            Yes, Resolve
                        </button>

                        <button
                            onClick={() =>
                                document
                                    .getElementById("resolve_modal")
                                    .close()
                            }
                            className="btn"
                        >
                            Cancel
                        </button>
                    </div>
                </div>
            </dialog>

        </div>
    );
};

export default TaskStatus;
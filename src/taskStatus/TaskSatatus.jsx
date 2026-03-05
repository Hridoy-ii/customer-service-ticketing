import React from 'react';
import { MdCheckCircle } from 'react-icons/md';

const TaskStatus = () => {
    // Sample tasks data
    const tasks = [
        {
            id: 1,
            title: 'Payment Failed - Card Declined',
            status: 'pending'
        },
        {
            id: 2,
            title: 'Incorrect Billing Address',
            status: 'pending'
        }
    ];

    const resolvedTasks = [];

    const handleComplete = (id) => {
        console.log(`Task ${id} marked as complete`);
        // Will be replaced with actual logic
    };

    return (
        <div className="w-full pb-8">
            {/* Pending Tasks Section */}
            <div className="mb-12">
                <div className="grid grid-cols-1 gap-4">
                    {tasks.map((task) => (
                        <div key={task.id} className="bg-white rounded-lg shadow-md p-5 border border-gray-200 hover:shadow-lg transition-shadow">
                            <h3 className="text-lg font-semibold text-gray-800 mb-4">
                                {task.title}
                            </h3>
                            <button
                                onClick={() => handleComplete(task.id)}
                                className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-4 rounded-lg transition-colors"
                            >
                                Complete
                            </button>
                        </div>
                    ))}
                </div>
            </div>

            {/* Resolved Tasks Section */}
            <div className="border-t pt-8">
                <h2 className="text-2xl font-bold text-gray-800 mb-6">Resolved Task</h2>
                {resolvedTasks.length === 0 ? (
                    <p className="text-gray-500 text-center py-8">No resolved tasks yet.</p>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {resolvedTasks.map((task) => (
                            <div key={task.id} className="bg-white rounded-lg shadow-md p-5 border border-gray-200">
                                <div className="flex items-center gap-3">
                                    <MdCheckCircle className="text-green-500 text-2xl flex-shrink-0" />
                                    <h3 className="text-lg font-semibold text-gray-800">
                                        {task.title}
                                    </h3>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default TaskStatus;
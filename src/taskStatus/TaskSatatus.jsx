import { MdCheckCircle } from 'react-icons/md';

const TaskStatus = ({ taskStatuses }) => {

    
    return (
        <div className="space-y-4">

            {taskStatuses.map((task) => (
                <div
                    key={task.id}
                    className="bg-white rounded-lg shadow-md p-5 border"
                >
                    <h3 className="text-lg text-black font-semibold">
                        {task.title}
                    </h3>

                    <button className="w-full bg-green-500 text-white py-2 rounded mt-3">
                        Complete
                    </button>
                </div>
            ))}

        </div>
    );
};

export default TaskStatus;
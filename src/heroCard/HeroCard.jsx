import leftBg from '../assets/vectorIMGleft.png';
import rightBg from '../assets/vectorIMGRight.png';

const HeroCard = ({ tickets }) => {

  const inProgressCount = tickets.filter(
    ticket => ticket.status === "In Progress"
  ).length;

  const resolvedCount = tickets.filter(
    ticket => ticket.status === "Resolved"
  ).length;

  return (
        <div className="flex flex-col md:flex-row gap-4 py-4">
            {/* In-progress card */}
            <div className="relative flex-1 rounded-lg overflow-hidden shadow-lg bg-linear-to-r from-[#422AD5] to-[#9F62F2] text-white">
                <img
                    src={leftBg}
                    alt="background left"
                    className="absolute left-0 top-0 h-full w-1/2 object-cover "
                />
                <img
                    src={rightBg}
                    alt="background right"
                    className="absolute right-0 top-0 h-full w-1/2 object-cover "
                />
                <div className="relative flex flex-col items-center justify-center h-48">
                    <p className="text-lg">In-Progress</p>
                    <p className="text-5xl font-bold">{inProgressCount}</p>
                </div>
            </div>

            {/* Resolved card */}
            <div className="relative flex-1 rounded-lg overflow-hidden shadow-lg bg-linear-to-r from-[#54CF68] to-[#00827A] text-white">
                <img
                    src={leftBg}
                    alt="background left"
                    className="absolute left-0 top-0 h-full w-1/2 object-cover "
                />
                <img
                    src={rightBg}
                    alt="background right"
                    className="absolute right-0 top-0 h-full w-1/2 object-cover "
                />
                <div className="relative flex flex-col items-center justify-center h-48">
                    <p className="text-lg">Resolved</p>
                    <p className="text-5xl font-bold">{resolvedCount}</p>
                </div>
            </div>
        </div>
    );
};

export default HeroCard;
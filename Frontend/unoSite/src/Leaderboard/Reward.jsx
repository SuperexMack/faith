export function Reward({ name, description, points }) {
    return (
        <div className="h-[150px] md:h-[180px] w-full max-w-[90%] md:max-w-[600px] bg-gradient-to-r from-gray-800 to-gray-900 shadow-lg hover:shadow-2xl rounded-lg flex flex-col md:flex-row items-center p-4 md:p-6 hover:scale-105 transition-transform duration-300 transform-gpu">
            <div className="flex-1 flex flex-col text-center md:text-left">
                <p className="text-lg md:text-xl font-bold text-white tracking-wide">{name}</p>
                <p className="text-sm md:text-base text-gray-400 mt-1">{description}</p>
            </div>
            <div className="flex flex-col items-center justify-center mt-4 md:mt-0 md:ml-4">
                <span className="text-4xl md:text-5xl text-yellow-400">🏆</span>
                <p className="text-xl md:text-2xl font-semibold text-yellow-300 mt-2">{points} pts</p>
            </div>
        </div>
    );
}

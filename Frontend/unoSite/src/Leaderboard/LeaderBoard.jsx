import { Nav } from "../NavBar/Nav";
import { Reward } from "./Reward";

export function LeaderBoard() {
    return (
        <>
        <Nav></Nav>
        <div className="min-h-screen w-full bg-gradient-to-r from-gray-900 to-gray-800 flex flex-col items-center py-10 px-4">
            <h1 className="text-center text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-8 md:mb-12 tracking-wide">Leaderboard</h1>
            <div className="bg-gray-700 p-6 md:p-10 space-y-6 md:space-y-8 w-full max-w-[90%] md:max-w-[800px] lg:max-w-[1000px] rounded-3xl shadow-2xl flex flex-col items-center">
                <Reward name="Mohit Sati" description="Planted 1000 trees" points="100" />
                <Reward name="Tanuj Nainwal" description="Helped poor people" points="90" />
                <Reward name="John Doe" description="Saved people from flood" points="80" />
                <Reward name="Major Rs" description="Built a school" points="80" />
                <Reward name="Kirat Singh" description="Decomposed 1000kg of garbage" points="70" />
                <Reward name="Harpreet Singh" description="Saved earth from aliens" points="70" />
                <Reward name="Preet Singh" description="Helped police in a mission" points="50" />
            </div>
        </div>
        </>
    );
}

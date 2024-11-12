import { Nav } from "../NavBar/Nav";
import photo from "./imageooo.webp";

export function Login() {
    const inputStyle = "p-3 w-[80%] bg-[#3C4858] text-white border border-transparent rounded-lg focus:outline-none focus:border-blue-500 transition-all duration-200 placeholder-gray-400";

    return (
        <>
            <Nav />
            <div className="h-screen w-full flex justify-center items-center bg-gradient-to-r from-blue-800 via-purple-700 to-purple-800">
                <div className="w-full h-auto flex justify-center items-center space-x-6 lg:space-x-12">
                    {/* Image */}
                    <div className="hidden lg:block">
                        <img src={photo} className="h-[900px] w-[1000px] object-cover" />
                    </div>

                    {/* Form Section */}
                    <div className="bg-[#2E3A4D] shadow-2xl rounded-3xl w-[80%] sm:w-[90%] lg:w-[500px] p-8 flex flex-col items-center space-y-6">
                        <h1 className="text-3xl font-bold text-white mb-2">Welcome to SDGConnect</h1>
                        <p className="text-gray-400 text-center mb-4">Sign in to access your workspace</p>

                        <input className={inputStyle} placeholder="Enter your name" type="text" />
                        <input className={inputStyle} placeholder="Enter your Email" type="email" />
                        <input className={inputStyle} placeholder="Enter your location" type="text" />
                        <input className={inputStyle} placeholder="Enter your gender" type="text" />
                        <input className={inputStyle} placeholder="Enter your age" type="number" />

                        <button className="w-[80%] py-3 font-semibold text-white bg-[#4A90E2] rounded-lg hover:bg-[#357ABD] transition-all duration-200">
                            Login
                        </button>
                        <button className="w-[80%] py-3 font-semibold text-[#4A90E2] border border-[#4A90E2] rounded-lg hover:bg-[#3C4858] transition-all duration-200">
                            Don’t have an account? Sign up
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
}

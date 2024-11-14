import { Nav } from "../NavBar/Nav";
import photo from "./imageooo.webp";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useNavigate } from "react-router-dom";


export function Signup() {

    const navigate = useNavigate()
    
    const login = ()=>{
        navigate("/login")
    }

    AOS.init({
        // Global settings:
        disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
        startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
        initClassName: 'aos-init', // class applied after initialization
        animatedClassName: 'aos-animate', // class applied on animation
        useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
        disableMutationObserver: false, // disables automatic mutations' detections (advanced)
        debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
        throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)
        
      
        // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
        offset: 120, // offset (in px) from the original trigger point
        delay: 0, // values from 0 to 3000, with step 50ms
        duration: 2000, // values from 0 to 3000, with step 50ms
        easing: 'ease', // default easing for AOS animations
        once: false, // whether animation should happen only once - while scrolling down
        mirror: false, // whether elements should animate out while scrolling past them
        anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation
      
      });

    const inputStyle = "p-3 w-[80%] bg-[#3C4858] text-white border border-transparent rounded-lg focus:outline-none focus:border-blue-500 transition-all duration-200 placeholder-gray-400";

    return (
        <>
            <Nav />
            <div className="h-screen w-full flex justify-center items-center bg-gradient-to-r from-blue-800 via-purple-700 to-purple-800">
                <div className="w-full h-auto flex justify-center items-center space-x-6 lg:space-x-12">
                  
                    <div data-aos="slide-down" className="hidden lg:block">
                        <img src={photo} className="h-[900px] w-[1000px] object-cover" />
                    </div>

                  
                    <div data-aos="slide-down" className="bg-[#2E3A4D] shadow-2xl rounded-3xl w-[80%] sm:w-[90%] lg:w-[500px] p-8 flex flex-col items-center space-y-6">
                        <h1 className="text-3xl font-bold text-white mb-2">Welcome to SDGConnect</h1>
                        <p className="text-gray-400 text-center mb-4">Sign up to access your workspace</p>

                        <input className={inputStyle} placeholder="Enter your name" type="text" />
                        <input className={inputStyle} placeholder="Enter your Email" type="email" />
                        <input className={inputStyle} placeholder="Enter your location" type="text" />
                        <input className={inputStyle} placeholder="Enter your gender" type="text" />
                        <input className={inputStyle} placeholder="Enter your age" type="number" />

                        <button  className="w-[80%] py-3 font-semibold text-white bg-[#4A90E2] rounded-lg hover:bg-[#357ABD] transition-all duration-200">
                            Signup
                        </button>
                        <button onClick={login} className="w-[80%] py-3 font-semibold text-[#4A90E2] border border-[#4A90E2] rounded-lg hover:bg-[#3C4858] transition-all duration-200">
                            Already have an account? login
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
}

import { Nav } from "../NavBar/Nav";
import AOS from 'aos';
import 'aos/dist/aos.css';
import helping from "./helpingTwo.png";
import { About } from "../About/About";

export function Landing() {
    AOS.init({
        disable: false,
        startEvent: 'DOMContentLoaded',
        initClassName: 'aos-init',
        animatedClassName: 'aos-animate',
        useClassNames: false,
        disableMutationObserver: false,
        debounceDelay: 50,
        throttleDelay: 99,
        offset: 120,
        delay: 0,
        duration: 2000,
        easing: 'ease',
        once: false,
        mirror: false,
        anchorPlacement: 'top-bottom',
    });

    return (
        <>
            <Nav />
            <div className="h-auto bg-gradient-to-b from-blue-800 via-purple-700 to-purple-800 w-full flex flex-col justify-center items-center space-y-9 px-4 md:px-8 lg:px-12">
                <div className="w-full h-auto flex flex-col lg:flex-row justify-evenly items-center lg:space-x-6">
                    <div data-aos="slide-up" className="flex flex-col justify-center items-center lg:items-start p-7 space-y-9 max-w-lg text-center lg:text-left">
                        <h1 className="text-[60px] sm:text-[70px] md:text-[80px] lg:text-[80px] font-extrabold text-white">Welcome to <span className="text-yellow-300">SDGConnect</span></h1>
                        <p className="text-[16px] sm:text-[18px] md:text-[20px] lg:text-[20px] text-white font-semibold">A platform dedicated to creating social impact, inspired by a vision to bring sustainable change.</p>
                        <button className="bg-blue-600 p-2 w-full text-[30px] sm:text-[25px] md:text-[30px] lg:text-[30px] font-bold text-white rounded-lg">Explore More</button>
                    </div>
                    <div className="flex justify-center lg:justify-end w-full lg:w-auto">
                        <img data-aos="slide-up" src={helping} className="h-[300px] sm:h-[500px] md:h-[600px] lg:h-[700px] w-full lg:w-auto rounded-lg" alt="Helping"/>
                    </div>
                </div>
                <About></About>
            </div>
           
        </>
    );
}

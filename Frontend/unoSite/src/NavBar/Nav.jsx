import unoImage from "./UNO.png"
import AOS from 'aos';
import 'aos/dist/aos.css';
import {Link} from "react-router-dom";
export function Nav(){
    
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
    
    return(
        <>
        <div data-aos="slide-down"  className="bg-blue-800 h-[90px] w-full flex items-center">
          <img src={unoImage} className="h-[70px] w-[70px] rounded-full ml-[100px]"></img>
          <div className="list-none text-white font-bold text-[25px] h-[100px] w-auto space-x-16 absolute right-[100px] flex items-center justify-center">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/reward">LeaderBoard</Link></li>
            <li><Link to="profile">Profile</Link></li>
            <li><Link to="/login">Login</Link></li>
            <li><Link to="/post">Show Your work</Link></li>
            <li><Link to="/search">Search People's work</Link></li>
          </div>
         
        </div>
        </>
    )
}
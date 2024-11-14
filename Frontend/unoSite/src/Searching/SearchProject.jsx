import { Nav } from "../NavBar/Nav";

import poor from "./poor.jpg"
import planted from "./planted.jpg"
import flood from "./flood.jpg"
import garbage from "./garbage.webp"
import { Cards } from "./NewCards";
import { useState } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';


export function SearchProject(){

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


   const [finder,setFinder] = useState("")
   
   const allItem = [
    {
      title : "planted 1000 trees",
      photo : planted
    },
    {
      title : "Help poor pople by donating 10000rs",
      photo : poor
    },
    {
      title : "Helped poor people in flood",
      photo :  flood
    },
    {
        title : "Helped to decompose 1000kg of garbage",
        photo : garbage
    }
   ]

   const findPost = allItem.filter((value)=>
    value.title.toLowerCase().includes(finder.toLowerCase())
   )

    return(
        <>
        <Nav></Nav>
        <div className="w-full h-[100px] flex flex-col items-center mt-8">
            <div className="flex space-x-4 w-[60%]">
           <input onChange={(e)=>setFinder(e.target.value)} className="w-[70%] p-2 rounded-xl border-2 border-blue-700" placeholder="Search Project"></input>
           <button onClick={findPost} className="bg-red-500 p-3 text-white font-bold text-[20px] w-[300px] rounded-lg transition-transform hover:delay-100 hover:scale-105">Check post <i className="fas fa-paper-plane ml-2"></i></button>
           </div>

          <div data-aos="slide-up" className=" w-[70%] h-auto mt-[50px] flex flex-col justify-between">
          {findPost.length > 0 ? (
            findPost.map((item, index) => (
              <Cards key={index} imageo={item.photo} head={item.title} />
            ))
          ) : (
            <p>No projects found</p>
          )}
           </div>
        </div>
        </>
    )
}
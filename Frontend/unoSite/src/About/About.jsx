import AOS from 'aos';
import 'aos/dist/aos.css';

export function About() {
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
    
    return (
      <>
        <div className="h-auto mt-[200px] w-full flex flex-col items-center  text-white space-y-16 py-12 px-4 sm:px-8">
          <h1 data-aos="slide-up" className="text-4xl sm:text-6xl font-bold text-center text-white underline">About</h1>
  
          <p data-aos="slide-up" className="w-full sm:w-[800px] text-center text-lg sm:text-xl leading-relaxed">
            <span className="font-semibold text-red-500">Amplifying Impact</span>. Connecting Changemakers. Building a Better Future.
            In a world full of noise, it’s hard to hear the voices of those working to make a real difference. At SDGConnect, we believe social good deserves a dedicated space to shine. A platform where ideas, projects, and actions are aligned with the United Nations Sustainable Development Goals (SDGs)—the blueprint for creating a better world.
            Join us in amplifying social impact and building a community that celebrates meaningful change, one post at a time.
          </p>
  
          <div data-aos="slide-up" className="w-full sm:w-[800px] text-center text-lg sm:text-xl space-y-6">
            <p>
              <span className="text-2xl sm:text-3xl font-semibold">What SDGConnect Offers:</span>
              <br />
              <strong className="text-orange-600">Showcase Your Impact</strong>
              <br />
              Share your journey, mission, and progress. Whether you're an individual, NGO, or organization, SDGConnect helps you highlight your work on the issues that matter most—from poverty reduction to environmental conservation.
            </p>
  
            <p>
              <strong data-aos="slide-up" className="text-orange-600">AI-Powered Verification</strong>
              <br />
              Let our AI help you ensure that your content truly aligns with the SDGs. Before your post goes live, it’ll be reviewed to make sure it’s making a real contribution to a better future.
            </p>
  
            <p>
              <strong data-aos="slide-up" className="text-orange-600">Foster Collaboration</strong>
              <br />
              Connect with like-minded changemakers and organizations, share insights, and collaborate on impactful projects to create lasting change.
            </p>
  
            <p>
              <strong data-aos="slide-up" className="text-orange-600">Rewarding Real Change</strong>
              <br />
              On SDGConnect, it’s not about likes or followers—it’s about the impact you make. Earn recognition, rewards, and funding for projects that drive meaningful social change.
            </p>
  
            <p>
              <strong data-aos="slide-up" className="text-orange-600">Learn & Grow</strong>
              <br />
              Whether you're new to the SDGs or an experienced changemaker, SDGConnect provides resources and feedback to help you grow. Learn how to make your efforts more impactful and inspire others to take action.
            </p>
  
            <p>
              <strong data-aos="slide-up" className="text-orange-600">Global Visibility for Local Efforts</strong>
              <br />
              Your work deserves to be seen. SDGConnect increases visibility for initiatives that are tackling global challenges, helping to attract funding, support, and volunteers for your cause.
            </p>
          </div>
  
          <div data-aos="slide-up" className="w-full sm:w-[800px] text-center text-lg sm:text-xl space-y-6">
            <p>
              <span data-aos="slide-up" className="text-2xl sm:text-3xl font-semibold">How It Works:</span>
              <br />
              <span data-aos="slide-up" className="text-orange-600">Post Your Work:</span> Share projects, updates, and ideas that align with one or more of the SDGs. Your content could be an action, a story, or a call to action.
            </p>
  
            <p>
              <span data-aos="slide-up" className="text-orange-600">AI Review:</span> Our AI system checks your post for alignment with the SDGs, providing suggestions to improve and ensuring it's ready to inspire.
            </p>
  
            <p>
              <span data-aos="slide-up" className="text-orange-600">Earn Recognition:</span> When your content creates real change, you’re rewarded—not by popularity, but by the positive impact you generate.
            </p>
  
            <p>
              <span data-aos="slide-up" className="text-orange-600">Collaborate & Grow:</span> Connect with others on similar missions. Build partnerships and collaborate for greater change.
            </p>
  
            <p data-aos="slide-up" className="font-semibold">
              <span data-aos="slide-up" className="text-orange-600">Inspiring a World of Change:</span> Every effort matters. Every action counts. Whether you’re planting trees, teaching young minds, or supporting clean energy, your work is part of something bigger.
              <br />
              At SDGConnect, we don’t just celebrate success—we celebrate the journey toward a more sustainable, equitable, and compassionate world.
            </p>
          </div>
  
          <p data-aos="slide-up" className="text-2xl sm:text-3xl text-center font-bold w-full sm:w-[800px] text-yellow-400">
            Ready to Make Your Impact? Join SDGConnect today and be part of a global movement working to build a better world.
          </p>
        </div>
      </>
    );
  }
  
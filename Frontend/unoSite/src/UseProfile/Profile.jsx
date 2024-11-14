import { Cards } from "./Cards";
import profilePhoto from "./savingman.jpg";
import poor from "./poor.jpg"
import planted from "./planted.jpg"
import flood from "./flood.jpg"
import garbage from "./garbage.webp"




export function Profile() {
  return (
    <div className="h-auto bg-gradient-to-r from-gray-100 via-blue-50 to-gray-100 flex flex-col items-center py-10">
      <div className="w-full max-w-6xl flex flex-col lg:flex-row items-center lg:justify-around bg-white shadow-lg rounded-xl p-8 space-y-6 lg:space-y-0 lg:space-x-8">
        <div className="w-60 h-60">
          <img src={profilePhoto} alt="Profile" className="h-full w-full rounded-full border-4 border-blue-300 shadow-lg object-cover"/>
        </div>
        <div className="lg:w-3/5 space-y-5 text-center lg:text-left">
          <h1 className="text-3xl font-semibold text-gray-800">
            Hello, I'm Elon Musk
          </h1>
          <p className="text-gray-700 leading-relaxed">
            While I’m often recognized for my work in technology and innovation, I’m equally dedicated to making a difference through social work. I believe true progress lies in lifting up communities and tackling challenges that affect people directly. My work goes beyond business; it’s about promoting sustainable solutions, supporting education, and creating opportunities for those in need. Together, let’s make a lasting impact for the greater good.
          </p>
          <div className="flex space-x-8 justify-center lg:justify-start text-gray-600">
            <i className="fa-brands fa-twitter text-2xl hover:text-blue-500 transition"></i>
            <i className="fa-brands fa-facebook text-2xl hover:text-blue-600 transition"></i>
            <i className="fa-brands fa-square-instagram text-2xl hover:text-pink-500 transition"></i>
            <i className="fa-brands fa-linkedin text-2xl hover:text-blue-700 transition"></i>
          </div>
        </div>
      </div>

      <div className="w-full max-w-6xl mt-10 flex flex-col lg:flex-row bg-white shadow-lg rounded-xl p-8 space-y-6 lg:space-y-0 lg:space-x-8">
        <div className="flex flex-col bg-blue-50 rounded-lg p-6 space-y-4 w-full lg:w-1/3">
          <h2 className="text-2xl font-semibold text-blue-800">User Details</h2>
          <p className="text-gray-700 font-bold">Username: Elon Mack</p>
          <p className="text-gray-700 font-bold">Email: mack.eth@gmail.com</p>
          <p className="text-gray-700 font-bold">Age: 22</p>
          <p className="text-gray-700 font-bold">Country: India</p>
          <p className="text-gray-700 font-bold">Phone: +91 7417835678</p>
        </div>
        <div className="w-full lg:w-2/3 space-y-6">
          <Cards imageo={planted} head={"planted 1000 trees"} />
          <Cards imageo={poor} head={"Help poor pople by donating 10000rs "}/>
          <Cards imageo={flood} head={"Helped poor people in flood"}/>
          <Cards imageo={garbage} head={"Helped to decompose 1000kg of garbage"}/>
          <Cards imageo={planted} head={"planted 1000 trees"}/>
        </div>
      </div>
    </div>
  );
}
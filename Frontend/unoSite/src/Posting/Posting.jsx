import { Nav } from "../NavBar/Nav";

export function Posting() {
  const inputStyle =
    "border-2 border-transparent bg-gradient-to-r from-purple-500 via-blue-500 to-indigo-500 text-lg rounded-lg focus:ring-2 text-black font-bold focus:ring-indigo-600 w-[80%] p-3 text-white placeholder-gray-200 transition-all duration-200 ease-in-out hover:shadow-lg mt-6";

  return (
    <>
      <Nav />
      <div className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-700 h-screen w-full flex flex-col items-center">
        <h1 className="text-center text-[64px] mt-8 font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-600 drop-shadow-lg">
          Share Your Creation
        </h1>
        <p className="text-center text-gray-300 mt-2 mb-8 text-lg w-[80%] max-w-xl">
          Upload your project details, add a description, and include media to showcase your amazing work.
        </p>
        <div className="bg-gray-800 shadow-2xl rounded-lg w-[90%] max-w-2xl p-10 flex flex-col items-center space-y-6">
          <input
            className={inputStyle}
            placeholder="Project Title"
            type="text"
          />
          <textarea rows={8} className={`${inputStyle} resize-none`} placeholder="Describe your work in detail"
          />
          <input type="file" className={`${inputStyle} cursor-pointer`} accept="image/*,video/*"
          />
          <button className="w-[80%] py-3 bg-gradient-to-r from-green-400 to-blue-600 text-white text-lg rounded-lg font-semibold transform transition-transform duration-200 hover:scale-105 hover:bg-opacity-90 hover:shadow-lg">
            Publish <i className="fas fa-paper-plane ml-2"></i>
          </button>
        </div>
      </div>
    </>
  );
}

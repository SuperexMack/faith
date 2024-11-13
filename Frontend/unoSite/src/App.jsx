import { BrowserRouter, Routes, Route } from "react-router-dom";

import './App.css'
import { Landing } from "./Landing/Landing";
import { Login } from "./Auth/Login";
import { Profile } from "./UseProfile/Profile";

function App() {

  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing></Landing>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/profile" element={<Profile></Profile>}></Route>
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App

import { BrowserRouter, Routes, Route } from "react-router-dom";

import './App.css'
import { Landing } from "./Landing/Landing";
import { Login } from "./Auth/Login";

function App() {

  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing></Landing>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App

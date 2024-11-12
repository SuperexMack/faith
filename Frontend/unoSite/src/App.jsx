import { BrowserRouter, Routes, Route } from "react-router-dom";

import './App.css'
import { Landing } from "./Landing/Landing";

function App() {

  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing></Landing>}></Route>
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App

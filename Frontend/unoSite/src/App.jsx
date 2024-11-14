import { BrowserRouter, Routes, Route } from "react-router-dom";

import './App.css'
import { Landing } from "./Landing/Landing";
import { Login } from "./Auth/Login";
import { Profile } from "./UseProfile/Profile";
import { LeaderBoard } from "./Leaderboard/LeaderBoard";
import { Posting } from "./Posting/Posting";
import { SearchProject } from "./Searching/SearchProject";
import { Signup } from "./Auth/Signup";

function App() {

  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing></Landing>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/signup" element={<Signup></Signup>}></Route>
        <Route path="/profile" element={<Profile></Profile>}></Route>
        <Route path="/reward" element={<LeaderBoard></LeaderBoard>}></Route>
        <Route path="/post" element={<Posting></Posting>}></Route>
        <Route path="/search" element={<SearchProject></SearchProject>}></Route>
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App

import { Routes, Route, Link } from "react-router-dom"
import About from "./About.jsx"
import Home from "./Home.jsx"
import Events from "./Events.jsx"
import Story from "./Story.jsx"

function App() {

  return (
    <>
      <div id="header">
        <h1>Robert Berotti Memorial Foundation Inc.</h1>
      <div id="navbar">
        <Link to="/">
          Home
        </Link>
        <Link to="/story">
          Our Story
        </Link>
        <Link to="/events">
          Upcoming Events
        </Link>
        <Link to="/about">
          Our Mission
        </Link>
      </div>
      <div id="main-section">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/story" element={<Story />} />
          <Route path="/events" element={<Events />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
      </div>
     </>
  )
}

export default App
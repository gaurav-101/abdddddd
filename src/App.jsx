
// React Router
import { Route, Routes, useNavigate } from "react-router-dom"

// Pages
import Home from "./Home_page/Home"
import Doorframe from "./Doorframes_page/Doorframes"
import Wpc from "./WPC_page/Wpc"
import About1 from "./About_page/About1"
import Gallery from "./Gallery_page/Gallery"
import CompanyProfile from "./CompanyProfile_page/CompanyProfile"
import MissionVision from "./VisionAndMission/MissionVision"
import WPCDoors from "./WPCDoor_page/WPCDoors"
import Contact from "./Contact_page/Contact"

function App() {

  return (
    <div className="flex min-h-screen w-screen flex-col bg-richblack-900 font-inter">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/door" element={<Doorframe />} />
        <Route path="/wpc" element={<Wpc />} />
        <Route path="/about" element={<About1 />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/cp" element={<CompanyProfile />} />
        <Route path="/mission-vision" element={<MissionVision />} />
        <Route path="/wpc-door" element={<WPCDoors />} />
        <Route path="/contact" element={<Contact />} />
    

        {/* 404 Page */}
        {/* <Route path="*" element={<Error />} /> */}
      </Routes>
    </div>
  )
}

export default App

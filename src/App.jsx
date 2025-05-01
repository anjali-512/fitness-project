import Home from "./component/Home"
import Navbar from "./component/Navbar"
import Program from "./component/Program"
import {BrowserRouter, Routes, Route} from "react-router-dom"
import{ToastContainer} from "react-toastify"
import Trainers from "./component/Trainers"
import Blog from "./component/Blog"
import ContactUs from "./component/ContactUs"
import JoinNow from "./component/JoinNow"
import Footer from "./component/Footer"
import OurTrainee from "./component/OurTrainee"
import OurContact from "./component/OurContact"
import JoinSession from "./component/JoinSession"
import OurSession from "./component/OurSession"
function App(){
 return(
  <>
  <BrowserRouter>
  <Navbar/>
  <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/Program' element={<Program/>}/>
    <Route path='/Trainers' element={<Trainers/>}/>
    <Route path='/Blog' element={<Blog/>}/>
    <Route path='/ContactUs' element={<ContactUs/>}/>
    <Route path="/join-now" element={<JoinNow/>}/>
    <Route path="/ourtrainee" element={<OurTrainee/>}/>
    <Route path="/ourcontact" element={<OurContact/>}/>
    <Route path="/join-session" element={<JoinSession/>}/>
    <Route path="/oursession" element={<OurSession/>}/>
  </Routes>
  <Footer/>
  <ToastContainer
  position="top-center"/>
  </BrowserRouter>

  </>
 )
}
export default App
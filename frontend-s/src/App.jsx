import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import { Dropdown } from 'bootstrap'
import Navbar from './Components/Navbar'
import './Components/style.css'

import NavbarStudent from './Components/NavbarStudent';
import NavbarAdmin from './Components/NavbarAdmin';
import NavbarFaculty from './Components/NavbarFaculty';
import Hero from './Components/Hero';
import HCourse from './Components/HCourse';
import Reviews from './Components/Reviews';
import Footer from './Components/Footer';

import AdmSideNavRoute from './Components/AdminConsole/AdmSideNavRoute';
import Testimonial from './Components/Testimonial'
import StuFeedback from './Components/Feedback.jsx/StuFeedback'
import FRouting from './Components/Feedback.jsx/FRouting'
import AddDataForm from './Components/Feedback.jsx/AddDataForm'
import DataDisplay from './Components/Feedback.jsx/DataDisplay'
import FHome from './Components/Feedback.jsx/FHome'
import Faculty from './Components/Grade/Faculty';

function App() {

  return (
    <>
      <Navbar></Navbar>
      
      {/* <NavbarStudent></NavbarStudent> */}
     <NavbarAdmin></NavbarAdmin> 
      {/* <NavbarFaculty></NavbarFaculty> */}

      <AdmSideNavRoute/> 

      {/* <Faculty></Faculty> */}

      {/* <FRouting/> */}
     {/* <FHome/>*/}
      {/* <AddDataForm/> */}
      {/* <DataDisplay/> */}


      {/* <StuFeedback/> */}
            
      {/* <HCourse></HCourse>
      <Hero></Hero> 
      <Reviews></Reviews> 
      <Testimonial/> */}


      {/* <Footer></Footer> */}

    </>
  )
}

export default App

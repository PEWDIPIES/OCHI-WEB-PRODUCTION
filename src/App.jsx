import {  Routes, Route } from "react-router-dom";
import Header from "./Components/Header"; 
import LocomotiveScroll from 'locomotive-scroll';
import Home from "./Components/pages/Home/Home";
import Services from "./Components/pages/Services/Services";
import Ourwork from "./Components/pages/Ourwork/Ourwork";
import Aboutus from "./Components/pages/Aboutus/Aboutus";
import Contact from "./Components/pages/Contact/Contact";
import Loader from "./Components/Loader/Loader";
const App = () => {
  // eslint-disable-next-line no-unused-vars
  const locomotiveScroll = new LocomotiveScroll();

  return (
    <div className="Main">

      <Loader />
      <Header />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Services" element={<Services />} />
          <Route path="/Ourwork" element={<Ourwork />} />
          <Route path="/Aboutus" element={<Aboutus />} />
          <Route path="/Contact" element={<Contact />} />


        </Routes>


    </div>
  );
};

export default App;

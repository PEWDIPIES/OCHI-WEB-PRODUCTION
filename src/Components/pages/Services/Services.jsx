import HomeAbout from "../Home/HomeAbout/HomeAbout"
import Hoslticprocess from "./Hoslticprocess/Hoslticprocess"
import ServicesLandingpage from "./Serviceslandingpage/ServicesLandingpage"
import SerivcesClientRewview from "./SerivcesClientRewview/SerivcesClientRewview"
import Servicesmarqueecards from "./ServicesMarqueeandcards/Servicesmarqueecards"
import Readyproject from "../Home/Readyproject/Readyproject"
import Footer from "../../Footer"
const Services = () => {
    return (
      <div className="Services">
       <ServicesLandingpage/>
       <Hoslticprocess/>
       <HomeAbout/>
       <SerivcesClientRewview/>
       <Servicesmarqueecards/>
      <Readyproject/>
      <Footer/>

      </div>
    )
  }
  
  export default Services
  
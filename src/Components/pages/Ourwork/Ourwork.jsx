import Footer from "../../Footer"
import Featuredcards from "../Home/Featured/Featuredcards"
import Readyproject from "../Home/Readyproject/Readyproject"
import Ourworkheading from "./Ourworkheading/Ourworkheading"
import Ourworklanding from "./Ourworklanding/Ourworklanding"
import Ourworkmaruqueeandcards from "./OurworkMarqueeandcards/Ourworkmaruqueeandcards"
const Ourwork = () => {
    return (
      <div className="Ourwork">
        <Ourworklanding/>
        <Ourworkheading/>
        <Featuredcards/>
        <Ourworkmaruqueeandcards/>
        <Readyproject/>
        <Footer/>
      </div>
    )
  }
  
  export default Ourwork
  
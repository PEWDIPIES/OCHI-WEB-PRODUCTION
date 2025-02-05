import Footer from "../../Footer"
import Clientcards from "../Home/ClientReview/Clientcards"
import Readyproject from "../Home/Readyproject/Readyproject"
import Aboutuslanding from "./Aboutlanding/Aboutuslanding"
import Aboutprinciples from "./Aboutprinciples/Aboutprinciples"
import Aboutusgroup from "./Aboutusgroup/Aboutusgroup"
import AboutusMarqueeandteam from "./AboutusMarqueeandteam/AboutusMarqueeandteam"
const Aboutus = () => {
    return (
      <div className="AboutAboutus">
        <Aboutuslanding title="We are" showTitle={true}/>
        <Aboutusgroup/>
        <AboutusMarqueeandteam/>
        <Aboutprinciples/>
        <Clientcards/>
        <Readyproject/>
        <Footer/>
      </div>
    )
  }
  
  export default Aboutus
  
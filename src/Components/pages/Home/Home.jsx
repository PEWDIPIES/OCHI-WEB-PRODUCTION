import Featuredproject from "./Featured/Featuredproject"
import HomeAbout from "./HomeAbout/HomeAbout"
import Landingpage from "./Landingpage/Landingpage"
import Marquee from "./Marquee/Marquee"
import ClientReview from "./ClientReview/ClientReview"
import Animationeyes from "./Eyesplay/Animationeyes"
import Readyproject from "./Readyproject/Readyproject"
import Footer from "../../Footer"

const Home = () => {
  const homeText = ['We are ochi','We are ochi', 'We are ochi'];

  return (
    <div  className="Homepage">
      <Landingpage/>
      <Marquee data={homeText} />
      <HomeAbout/>
      <Animationeyes/>
      <Featuredproject/>
      <ClientReview/>
      <Readyproject/>
      <Footer/>
   
    </div>
  )
}

export default Home

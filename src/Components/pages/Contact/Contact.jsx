import Footer from "../../Footer";
import Aboutuslanding from "../Aboutus/Aboutlanding/Aboutuslanding";
import Readyproject from "../Home/Readyproject/Readyproject";
import Contactform from "./Contactform";
const Contact = () => {
  return (
    <div className="Contact">
      <Aboutuslanding 
        title="Let's start a project with" 
        imgSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHfvBszBplSit6JsjXm_XL-H47BXyTQQy_xQ&s" 
        subTitle="We are OCHI design"
      />
<Contactform/>
<Readyproject />
<Footer />
    </div>
  );
}

export default Contact;

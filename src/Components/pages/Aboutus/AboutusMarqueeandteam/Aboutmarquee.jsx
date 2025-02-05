import Marquee from "../../Home/Marquee/Marquee";
import Aboutteam from "./Aboutteam"

const Aboutmarquee = () => {
  const servicesText = ['our team','our team','our team','our team'];

  return (
    <div className="Aboutmarquee">
      <Marquee data={servicesText} />
      <Aboutteam/>

    </div>
  );
}

export default Aboutmarquee

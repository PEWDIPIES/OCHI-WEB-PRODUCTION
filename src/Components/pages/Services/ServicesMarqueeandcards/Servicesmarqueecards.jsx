import Marquee from "../../Home/Marquee/Marquee";
import Servicescards from "./Servicescards";

const Servicesmarqueecards = () => {
  const servicesText = ['Why us other','Why us other','Why us other','Why us other'];

  return (
    <div className="Servicesmarqueecards">
      <Marquee data={servicesText} />
      <Servicescards/>
    </div>
  );
}

export default Servicesmarqueecards;

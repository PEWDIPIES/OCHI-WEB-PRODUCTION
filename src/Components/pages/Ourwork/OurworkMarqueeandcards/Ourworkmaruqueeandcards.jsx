import Marquee from "../../Home/Marquee/Marquee";
import Ourworkcards from "./Ourworkcards";

const Ourworkmaruqueeandcards = () => {
    const servicesText = ['Behance','Behance','Behance','Behance'];

    return (
      <div className="Ourworkmaruqueeandcards">
        <Marquee data={servicesText} />
        <Ourworkcards  />
      </div>
    );
  }


export default Ourworkmaruqueeandcards

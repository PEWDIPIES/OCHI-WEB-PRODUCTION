import ochiLogo from '/src/assets/images/ochi.svg';
import clutchLogo from '/src/assets/images/clutch.svg';
import logo003 from '/src/assets/images/logo003.png';

const Clientcards = () => {
  const clientobj = [
    {
      img: ochiLogo,
      img2: clutchLogo,
      img3: logo003,
    },
  ];

  return (
    <div className="Clientcards">
      {clientobj.map((elem, index) => {
        return (
          <div key={index} className="threcards">
            <div className="cardleft">
              <img src={elem.img} alt="Ochi Logo" />
            </div>
            <div className="cardbottom">
              <img src={elem.img2} alt="Clutch Logo" />
            </div>
            <div className="cardright">
              <img src={elem.img3} alt="Logo 003" />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Clientcards;

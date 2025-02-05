import Eyes from "./Eyes"
import backgroundImage from '/src/assets/images/Backgorund.jpg';

const Eyesbackground = () => {
  return (
    
    <div className="Eyesbackground">

        <div className="image">
      <Eyes/>
      <img src={backgroundImage} alt="background" />
      </div>
      
    </div>
  )
}

export default Eyesbackground

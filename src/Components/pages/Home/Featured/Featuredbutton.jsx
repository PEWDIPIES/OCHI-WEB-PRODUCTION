import { Link } from "react-router-dom"


const Featuredbutton = () => {
  return (
    <div className="Featuredbutton">
    <Link to={'/Ourwork'}> <button>View all case studio</button></Link> 
    </div>
  )
}

export default Featuredbutton

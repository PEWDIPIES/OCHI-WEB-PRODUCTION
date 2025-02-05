import { Link } from "react-router-dom"

const Landingpage = () => {

    const landingbottoms = [
        {
            h3:'For public and private companies',
            h33:'From the first pitch to IPO',
            button:'start the project',

        }

    ]
  return (
    <div data-scroll data-scroll-speed='-0.1'  className="Landingpage">
        <div className="Landingpageupper">
            {['We create ','eyes-opening ','presentation'].map((elem,index)=>{
                return(
                    <div key={index} className="div">
                    <h1><br /><br />{elem}</h1>
    
                    </div>
                )
               
            })}

        </div>

        <div className="Landingpagebottom">
            {landingbottoms.map((elem,index)=>{
                return(
                    <div key={index} className="connect">
                        <h3>{elem.h3}</h3>
                        <h3>{elem.h33}</h3>
                   <Link to={'/Contact'}> <button>{elem.button}</button></Link>     
                    </div>
                )
            })}
        </div>
      
    </div>
  )
}

export default Landingpage

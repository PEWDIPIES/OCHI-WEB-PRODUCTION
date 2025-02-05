
const Servicescards = () => {
    const servicescardobj = [
        {
            h1:'01',
            h2:'Communication',
            h3:'Read',
        },
        {
            h1:'02',
            h2:'Ukrainian Business',
            h3:'Read',
        },
        {
            h1:'03',
            h2:'Holistic Approach',
            h3:'Read',
        },
        {
            h1:'04',
            h2:'One point of contact',
            h3:'Read',
        },
        {
            h1:'05',
            h2:'Constantly imporving',
            h3:'Read',
        },
        {
            h1:'06',
            h2:'Liminted amount of clients',
            h3:'Read',
        },
    ]
  return (
    <div className='Servicescards'>
        {
            servicescardobj.map((elem,index)=>{
                return(
                    <div key={index} className="Servicescard">
                    <h1>{elem.h1}</h1>
                    <div className="servicescardinnerbottom">
                    <h2>{elem.h2}</h2>
                    <h3>{elem.h3}</h3>
                    </div>
        
                </div>
                )
            
            })
        }
    </div>
  )
}

export default Servicescards

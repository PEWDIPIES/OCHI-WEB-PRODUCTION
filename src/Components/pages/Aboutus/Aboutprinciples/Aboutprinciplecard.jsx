
const Aboutprinciplecard = () => {
    const Aboutcardobj = [
        {
            img:'https://ochi.design/wp-content/uploads/2022/05/Asset-52@2x-20-1-663x551.jpg',
            h5:'Whether the presentation needs to convince or educate it always has to change audience perception. We seek insights to make decks unexpectedly enlightening for our audience.'
        },

        {
            img:'https://ochi.design/wp-content/uploads/2022/05/Asset-51@2x-20-1-663x551.jpg',
            h5:'The presentation helps to see what hidden, unseen, or simply never known before. We use design to drive their attention, focus them to clearly see, and help them feel the message.'
        }
    ]
  return (
    <div className="Aboutprinciplecard">
        {
            Aboutcardobj.map((elem,index)=>{
                return(
                    <div key={index} className="Aboutcard">
                    <div className="Aboutimage">
                        <img src={elem.img} alt="" />
                    </div>
                    <h5>{elem.h5}</h5>
                </div>
                )
             
            })
        }
      

      
    </div>
  )
}

export default Aboutprinciplecard

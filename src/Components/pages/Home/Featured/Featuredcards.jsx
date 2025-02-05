
const Featuredcards = () => {
    const featuredcardbj = [
        {
            h1:'Cardboard Spaceship',
            img:'https://ochi.design/wp-content/uploads/2024/08/CS_Website_1-663x551.png',
            button1:'Branded Template',
            button2:'Sales Packs',
            button3:'Social media Template',
        },

        {
            h1:'AH2 & Matt Horn',
            img:'https://ochi.design/wp-content/uploads/2024/08/Frame-481692-1-663x551.png',
            button1:'Branded Template',
            button2:'Sales Packs',
            button3:'Social media Template',
        },
        {
            h1:'Fyde',
            img:'https://ochi.design/wp-content/uploads/2023/10/Fyde_Illustration_Crypto_2-663x551.png',
            button1:'Branded Template',
            button2:'Sales Packs',
            button3:'Social media Template',
        },
        {
            h1:'Vise',
            img:'https://ochi.design/wp-content/uploads/2022/09/Vise_front2-663x551.jpg',
            button1:'Branded Template',
            button2:'Sales Packs',
            button3:'Social media Template',
        },
        {
            h1:'Trawa ',
            img:'https://ochi.design/wp-content/uploads/2023/08/Frame-3875-663x551.jpg',
            button1:'Branded Template',
            button2:'Sales Packs',
            button3:'Social media Template',
        },
        {
            h1:'Premium Blend',
            img:'https://ochi.design/wp-content/uploads/2022/12/PB-Front-4-663x551.png',
            button1:'Branded Template',
            button2:'Sales Packs',
            button3:'Social media Template',
        },
    ]
  return (
    <div className="Featuredcards">

        {featuredcardbj.map((elem,index)=>{
            return(
                <div key={index} className="cards">
                <h2>{elem.h1}</h2>
                <div className="cardsimg">
                    
                    <img src={elem.img} alt="" />
                </div>
                <div className="cardsbtn">
                    <button>{elem.button1}</button>
                    <button>{elem.button2}</button>
                    <button>{elem.button3}</button>
                </div>
            </div>
            )
        })}

      
    </div>
  )
}

export default Featuredcards

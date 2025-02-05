const Ourworkcards = () => {
    const ourworkcard = [
      {
        ourworkimg: "https://ochi.design/wp-content/uploads/2022/05/Frame-3878-325x325.jpg",
        ourworkh6: "Officevibe PPT template",
        link: "https://www.behance.net/gallery/144915203/Presentation-template-for-Officevibe", // Add link here
      },
      {
        ourworkimg: "https://ochi.design/wp-content/uploads/2023/02/Trawa-Energy-1-325x325.png",
        ourworkh6: "Trawa Energy pitch deck",
        link: "https://www.behance.net/gallery/164519479/Brand-identity-pitch-deck-design-for-Trawa", // Add link here
      },
      {
        ourworkimg: "https://ochi.design/wp-content/uploads/2023/02/Teach-for-Ukraine-3-325x325.png",
        ourworkh6: "Teach for Ukraine",
        link: "https://www.behance.net/gallery/163514933/Teach-for-Ukraine-presentation", // Add link here
      },
    ];
  
    // Function to handle card click
    const handleCardClick = (link) => {
      window.open(link, "_blank"); // Open link in a new tab
    };
  
    return (
      <div className="Ourworkcards">
        {ourworkcard.map((elem, index) => (
          <div
            key={index}
            className="Ourworkcard"
            onClick={() => handleCardClick(elem.link)} // Add onClick handler
            style={{ cursor: "pointer" }} // Change cursor to pointer
          >
            <div className="ourworkimage">
              <img src={elem.ourworkimg} alt={elem.ourworkh6} />
            </div>
            <h6>{elem.ourworkh6}</h6>
          </div>
        ))}
      </div>
    );
  };
  
  export default Ourworkcards;
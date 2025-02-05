const Serviceslandingbottom = () => {
    const serviceData = [
        {
          h6: 'Goal defines it all',
          h5: 'What do you want to achieve? Understanding the purpose of your presentation allows us to tailor it to ensure it hits the mark and drives results.',
        },
        {
          h6: 'Audience is the hero',
          h5: 'Who is it for? What do they want? Why does it matter to them? We need to know your audience well enough to deliver a personalized presentation that they truly care about.',
        },
        {
          righth6: 'Context makes a difference',  
          righth5: 'When do you present? Online or live? At a sales meeting, at a conference, or just sending a cold email? We knit the context together to decide the style of the presentation.',
        }
    ];

    return (
        <div className="Serviceslandingbottom">
            <div className="bottomleft">
                <h1>
                    We do this by following <br />
                    simple approach:
                </h1>
            </div>

            <div className="bottomcenter">
                {serviceData.map((item, index) => (
                    <div key={index} className="service-step">
                        <h6>{item.h6}</h6> 
                        <h5>{item.h5}</h5>  
                    </div>
                ))}
            </div>

            <div className="bottomright">
                {serviceData.map((item, index) => (
                    item.righth6 && item.righth5 && (  
                        <div key={index} className="service-step">
                            <h6>{item.righth6}</h6> 
                            <h5>{item.righth5}</h5>  
                        </div>
                    )
                ))}
            </div>
        </div>
    );
};

export default Serviceslandingbottom;

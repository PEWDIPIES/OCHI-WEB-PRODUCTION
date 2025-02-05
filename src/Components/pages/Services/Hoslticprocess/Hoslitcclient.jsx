
const Hoslitcclient = () => {
    const Hositlicprocessobj = [
        { h1: '02. Phase', h2: 'Storytelling', h3: 'Read' },
        { h1: '04. Phase', h2: 'Feedback', h3: 'Read' },    
        { h1: '04. Phase', h2: 'Feedback', h3: 'Read' },    
        { h1: '04. Phase', h2: 'Feedback', h3: 'Read' },    
    ];

    return (
        <div className="Hoslitcclient">
            {/* Mapping over the data */}
            {Hositlicprocessobj.map((elem, index) => {
                return (
                    <div key={index} className="client">
                        <h1>{elem.h1}</h1>
                        <h2>{elem.h2}</h2>
                        <h3>{elem.h3}</h3>
                    </div>
                );
            })}
        </div>
    );
};

export default Hoslitcclient;

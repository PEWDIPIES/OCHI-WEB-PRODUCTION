const Ourclient = () => {
    const ourclientobj = [
        { h1: 'planty', h2: 'Nina Walloch', h3: 'Read' },
        { h1: 'Workiz Easy', h2: 'Tomer Levy', h3: 'Read' },
        { h1: 'Premium Blend', h2: 'Ellen Kim', h3: 'Read' },
        { h1: 'Hypercare Systems', h2: 'Brendan Goss', h3: 'Read' },
        { h1: 'Officevibe', h2: 'Raff Labrie', h3: 'Read' },
        { h1: 'Orderlion', h2: 'Stefan Strohmer', h3: 'Read' },
        { h1: 'Black Book', h2: 'Jaci Smith', h3: 'Read' },
        { h1: 'Trawa Energy', h2: 'black arrow', h3: 'Read' },
    ];

    return (
        <div className="Ourclient">
            
            {
                
                ourclientobj.map((elem, index) => {
                    return (
                        <div key={index} className="clients">
                            <>
                            </>
                            <h1>{elem.h1}</h1>
                            <h2>{elem.h2}</h2>
                            <h3>{elem.h3}</h3>
                        </div>
                    );
                })
            }

            
        </div>
    );
};

export default Ourclient;

import { motion } from 'framer-motion';

const Eyes = () => {
    const eyepbj = [
        {
         
            text: 'play',
        },
        {
            text: 'play',
        },
    ];

    return (
        <div className="backgroundEyes">
            {
                eyepbj.map((elem) => {
                    return (
                        <motion.div
                            key={elem.id}
                            className="eye"
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}
                            whileDrag={{ scale: 0.9, rotate: 10 }}
                            drag
                            dragConstraints={{ top: 0, left: 0, right: 0, bottom: 0 }}  // Drag constraints
                        >
                            <div className="circle">
                                <div className="innercircle">
                                    <h2>{elem.text}</h2>
                                </div>
                            </div>
                        </motion.div>
                    );
                })
            }
        </div>
    );
}

export default Eyes;

/* eslint-disable react/prop-types */
import { motion } from 'framer-motion';

const Marquee = ({ data }) => {
  console.log(data);

  return (
    <div data-scroll data-scroll-speed='0.1' className="Marquee">
      {data.map((elem, index) => {
        return (
          <motion.h3 
            key={index}
            initial={{ x: '10%' }} // Start off-screen to the right
            animate={{ x: '-100%' }} // Move to the left
            transition={{
              ease: 'linear',
              repeat: Infinity,
              duration: 12,
              delay: index * 2, // Add delay for each repeated text to stagger animation
            }}
          >
            {elem}
          </motion.h3>
        );
      })}
    </div>
  );
};

export default Marquee;

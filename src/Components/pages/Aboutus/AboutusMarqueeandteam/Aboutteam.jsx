// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCube, Pagination } from 'swiper/modules';

const AboutTeam = () => {
    return (
        <>
        <div className="Aboutteam">
        <Swiper
            effect={'cube'}
            grabCursor={true}
            cubeEffect={{
              shadow: true,
              slideShadows: true,
              shadowOffset: 20,
              shadowScale: 0.94,
            }}
            pagination={true}
            modules={[EffectCube, Pagination]}
            className="mySwiper"
          >
            <SwiperSlide>
              <img src="https://ochi.design/wp-content/uploads/2023/08/Group-4683-304x330.jpg" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="https://ochi.design/wp-content/uploads/2022/05/Olena-Zderka-2-304x330.png" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="https://ochi.design/wp-content/uploads/2022/05/IMG_3112-1-304x330.jpg" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="https://ochi.design/wp-content/uploads/2022/05/Kseniia-Palamarchuk-304x330.jpg" />
            </SwiperSlide>
          </Swiper>
        </div>
     
        </>
      );
 
}

export default AboutTeam;

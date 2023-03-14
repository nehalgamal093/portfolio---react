import React, { useState, useEffect } from "react";
import axios from "axios";
import "./certificates.css";
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from "swiper";
import "react-slideshow-image/dist/styles.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css";

type certificates = {
  certImages: string;
  _id: string;
};

export const Certificates = () => {
  const [data, getData] = useState<certificates[]>([]);

  useEffect(() => {
    axios
      .get("https://portfolio-d3gj33sv9-nehalgamal093.vercel.app/projects/get-cert")
      .then((response) => {
   
        getData(response.data);
      })
      .catch((error) => {
 
      });
  }, []);

  return (
    <div className="cert-container">
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
        slidesPerView={1}
        navigation
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{ clickable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
      >
        {data.length ? (
          data.map((item) => (
            <SwiperSlide>
              <img className="certs" src={item.certImages} alt="certificate" />
            </SwiperSlide>
          ))
        ) : (
          <div></div>
        )}
      </Swiper>
    </div>
  );
};

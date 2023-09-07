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
import { Skeleton, Box } from "@mui/material";

type certificates = {
  image: string;
  _id: string;
};

export const Certificates = () => {
  const [data, getData] = useState<certificates[]>([]);

  useEffect(() => {
    axios
      .get("https://ginger-nono-qwar.vercel.app/certificates")
      .then((response) => {
        getData(response.data["result"]);
      })
      .catch((error) => {});
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
              <img className="certs" src={item.image} alt="certificate" />
            </SwiperSlide>
          ))
        ) : (
          <div>
            <Box className="cert-container">
              <Skeleton className="skeleton-container" variant="rounded" />
            </Box>
          </div>
        )}
      </Swiper>
    </div>
  );
};

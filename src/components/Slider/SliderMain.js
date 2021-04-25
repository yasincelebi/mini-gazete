import SwiperCore, { Thumbs, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import React, { useState, useContext } from "react";
import "swiper/swiper-bundle.css";
import "swiper/components/thumbs/thumbs.scss";
import "./Slider.scss";
import { NewsContext } from "../../context/NewsContext";
import { withRouter } from "react-router-dom";
SwiperCore.use([Thumbs, Navigation]);
const SliderMain = ({ history }) => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const { response } = useContext(NewsContext);

  return (
    <div>
      <Swiper
        id="main"
        thumbs={{ swiper: thumbsSwiper }}
        tag="section"
        wrapperTag="ul"
        navigation
      >
        {response.map((e, i) => {
          const {
            title,
            description,
            urlToImage,
            author,
            source,
            publishedAt,
            content,
            url,
          } = e;
          const handleClick = () => {
            const newsUrl = e.title
              .split(" ")
              .join("-")
              .substring(0, 100)
              .toLowerCase()
              .replace(/[^a-zA-Z-0-9öğçı]/g, "");
            console.log(newsUrl);
            history.push(`/${newsUrl}`, {
              title,
              description,
              urlToImage,
              author,
              source,
              publishedAt,
              content,
              url,
            });
          };
          return (
            <>
              <SwiperSlide tag="li" onClick={handleClick} key={i}>
                <p style={{ fontSize: "20px" }}>
                  <strong>{title.split("-")[0].substring(0, 200)}</strong>
                </p>
                <img src={urlToImage} alt={`slide ${i}`} />
              </SwiperSlide>
            </>
          );
        })}
      </Swiper>
      <Swiper
        onSwiper={setThumbsSwiper}
        watchSlidesVisibility
        watchSlidesProgress
        id="thumbs"
        spaceBetween={5}
        slidesPerView={4}
      >
        {response.map((e, i) => {
          const {
            title,
            description,
            urlToImage,
            author,
            source,
            publishedAt,
            content,
            url,
          } = e;
          const handleClick = () => {
            const newsUrl = e.title
              .split(" ")
              .join("-")
              .substring(0, 100)
              .toLowerCase()
              .replace(/[^a-zA-Z-0-9öğçı]/g, "");
            console.log(newsUrl);
            history.push(`/${newsUrl}`, {
              title,
              description,
              urlToImage,
              author,
              source,
              publishedAt,
              content,
              url,
            });
          };
          return (
            <SwiperSlide onClick={handleClick}>
              <img src={urlToImage} alt={`slide ${i}`} />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default withRouter(SliderMain);

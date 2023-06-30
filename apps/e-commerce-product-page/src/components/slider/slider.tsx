import { useState, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Swiper as SwiperCore } from "swiper/types";
import { FreeMode, Navigation, Thumbs, EffectFade } from "swiper";
import * as Styled from "./slider.style";
import productImage1 from "../../images/image-product-1.jpg";
import productImage2 from "../../images/image-product-2.jpg";
import productImage3 from "../../images/image-product-3.jpg";
import productImage4 from "../../images/image-product-4.jpg";
import productThumbnail1 from "../../images/image-product-1-thumbnail.jpg";
import productThumbnail2 from "../../images/image-product-2-thumbnail.jpg";
import productThumbnail3 from "../../images/image-product-3-thumbnail.jpg";
import productThumbnail4 from "../../images/image-product-4-thumbnail.jpg";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import "swiper/css/effect-fade";
import Thumbnail from "../thumbnail";

interface SliderProps {
  isLightbox: boolean;
  action?: () => void;
}

function Slider({ isLightbox, action }: SliderProps) {
  const [thumbsSwiper, setThumbsSwiper] = useState(undefined);
  const swiperRef = useRef<SwiperCore>();

  return (
    <>
      <Styled.SliderContainer onClick={action}>
        <Styled.Slider>
          <Swiper
            allowTouchMove={false}
            effect="fade"
            loop={true}
            navigation={false}
            thumbs={{
              swiper:
                thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null,
            }}
            modules={[FreeMode, Navigation, Thumbs, EffectFade]}
            onBeforeInit={(swiper) => {
              swiperRef.current = swiper;
            }}
            className="swiper-gallery"
          >
            <SwiperSlide>
              <img src={productImage1} alt="" draggable="false" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={productImage2} alt="" draggable="false" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={productImage3} alt="" draggable="false" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={productImage4} alt="" draggable="false" />
            </SwiperSlide>
          </Swiper>
        </Styled.Slider>
        <Styled.LeftButton
          onClick={() => swiperRef.current?.slidePrev()}
          $isLightbox={isLightbox}
        >
          <Styled.PreviousIcon />
        </Styled.LeftButton>
        <Styled.RightButton
          onClick={() => swiperRef.current?.slideNext()}
          $isLightbox={isLightbox}
        >
          <Styled.NextIcon />
        </Styled.RightButton>
      </Styled.SliderContainer>
      <Styled.Thumbnails $isLightbox={isLightbox}>
        <Swiper
          onSwiper={setThumbsSwiper}
          loop={true}
          spaceBetween={32}
          slidesPerView={4}
          freeMode={true}
          watchSlidesProgress={true}
          modules={[FreeMode, Navigation, Thumbs]}
        >
          <SwiperSlide>
            <Thumbnail thumbnail={productThumbnail1} />
          </SwiperSlide>
          <SwiperSlide>
            <Thumbnail thumbnail={productThumbnail2} />
          </SwiperSlide>
          <SwiperSlide>
            <Thumbnail thumbnail={productThumbnail3} />
          </SwiperSlide>
          <SwiperSlide>
            <Thumbnail thumbnail={productThumbnail4} />
          </SwiperSlide>
        </Swiper>
      </Styled.Thumbnails>
    </>
  );
}

export default Slider;

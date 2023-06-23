import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade } from "swiper";
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
import "swiper/css/effect-fade";

const thumbnails = [
  { src: productThumbnail1, alt: "" },
  { src: productThumbnail2, alt: "" },
  { src: productThumbnail3, alt: "" },
  { src: productThumbnail4, alt: "" },
];

const images = [
  { src: productImage1, alt: "" },
  { src: productImage2, alt: "" },
  { src: productImage3, alt: "" },
  { src: productImage4, alt: "" },
];

function Slider() {
  return (
    <Swiper modules={[EffectFade]} effect="fade">
      {images.map((image, index) => {
        return (
          <SwiperSlide key={index}>
            <img src={image.src} alt={image.alt} />
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
}

export default Slider;

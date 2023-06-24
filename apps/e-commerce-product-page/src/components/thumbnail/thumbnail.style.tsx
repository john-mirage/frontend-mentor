import styled from "styled-components";

export const Container = styled.li`
  position: relative;
  width: 100%;
  aspect-ratio: 1/1;
  cursor: pointer;
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: ${({ theme }) => theme.pxToRem(10)};
`;

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: transparent;
  border-radius: ${({ theme }) => theme.pxToRem(10)};

  .swiper-slide-thumb-active & {
    box-shadow: inset 0 0 0 2px ${({ theme }) => theme.color.primary.orange};
  }

  @media screen and (hover: hover) {
    &:hover {
      background-color: rgba(255, 255, 255, 0.5);
    }
  }

  @media screen and (prefers-reduced-motion: no-preference) {
    transition-property: box-shadow, background-color;
    transition-duration: 150ms;
  }
`;

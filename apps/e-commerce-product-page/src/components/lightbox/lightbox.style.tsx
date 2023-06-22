import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: auto;
  padding-top: 12rem;
  padding-bottom: 5rem;
`;

const Dialog = styled.div`
  position: relative;
  width: 70rem;
  height: auto;
  margin: auto;
`;

const Featured = styled.div`
  position: relative;
  width: 100%;
  height: auto;
  padding-top: 100%;
`;

const Slider = styled(BaseSlider)`
  border-radius: 2rem;
`;

const Thumbnails = styled.ul`
  display: grid;
  grid-template-columns: repeat(${(props) => props.thumbnailNumber}, 1fr);
  gap: 3rem;
  margin-top: 3rem;
  padding-left: 6rem;
  padding-right: 6rem;
`;

const CloseButton = styled(IconButton)`
  position: absolute;
  top: -1rem;
  right: 0;
  transform: translateY(-100%);
  width: 6rem;
  height: 6rem;
  margin-right: -2rem;
`;

const CloseIcon = styled(BaseCloseIcon)`
  width: 2rem;
  height: auto;
  fill: ${(props) => props.theme.color.neutral.white};
  transition: fill 300ms;

  ${CloseButton}:hover & {
    fill: ${(props) => props.theme.color.primary.orange};
  }
`;

const ctrlButton = css`
  position: absolute;
  z-index: 20;
  top: 50%;
  background-color: ${(props) => props.theme.color.neutral.white};
`;

const ctrlIcon = css`
  width: 1.2rem;
  height: auto;
  fill: none;
  stroke: ${(props) => props.theme.color.neutral.black};
  transition: stroke 300ms;
`;

const PreviousButton = styled(IconButton)`
  ${ctrlButton}
  left: 0;
  transform: translate(-50%, -50%);
`;

const PreviousIcon = styled(BasePreviousIcon)`
  ${ctrlIcon}

  ${PreviousButton}:hover & {
    stroke: ${(props) => props.theme.color.primary.orange};
  }
`;

const NextButton = styled(IconButton)`
  ${ctrlButton}
  right: 0;
  transform: translate(50%, -50%);
`;

const NextIcon = styled(BaseNextIcon)`
  ${ctrlIcon}

  ${NextButton}:hover & {
    stroke: ${(props) => props.theme.color.primary.orange};
  }
`;

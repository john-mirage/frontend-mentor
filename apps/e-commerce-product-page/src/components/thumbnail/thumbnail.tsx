import * as Styled from "./thumbnail.style";
import { motion } from "framer-motion";

const overlayOnHover = {
  hover: {
    opacity: 1,
    transition: {
      type: "spring",
      duration: 0.3,
    },
  },
};

function Thumbnail({ className, thumbnail, action, isActive }) {
  return (
    <Container className={className} onClick={action} whileHover="hover">
      <Background
        initial={false}
        animate={{ scale: isActive ? 1.05 : 0.8 }}
        transition={{ type: "spring", duration: 0.3 }}
      />
      <Image src={thumbnail.src} alt={thumbnail.alt} />
      <Overlay
        initial={false}
        animate={{ opacity: isActive ? 1 : 0 }}
        transition={{ type: "spring", duration: 0.3 }}
        variants={overlayOnHover}
      />
    </Container>
  );
}

export default Thumbnail;

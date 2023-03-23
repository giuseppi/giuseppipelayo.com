import React, { useState } from "react";
import ProjectCards from "../ProjectCards";
import Overlay from "../Overlay";
import Modal from "../Modal";
import { AnimatePresence } from "framer-motion";

import "./index.scss";

const Card = ({ data }) => {
  const [open, setOpen] = useState(false);

  const openModal = () => {
    setOpen(true);
  };

  const closeModal = () => {
    setOpen(false);
  };

  return (
    <>
      <ProjectCards data={data} open={openModal} />
      {open && <Overlay close={closeModal}>{<Modal data={data} close={closeModal} />}</Overlay>}
    </>
  );
};

export default Card;

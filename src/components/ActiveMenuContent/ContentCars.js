import React, { useState } from "react";
import "./ActiveMenuContentStyles.css";
import { CrossCars } from "../../constants/constants";
import { ModalMenuButton, MenuModalStyles } from "../../constants/constants";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import rkrlogo from "./ActiveMenuContentImages/rkrlogo.png";

const ContentCars = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [carHp, setCarHp] = useState("");
  const [carType, setCarType] = useState("");
  const [carPrice, setCarPrice] = useState("");

  return (
    <div>
      <div className="active-menu__content">
        {CrossCars.map((car) => {
          return (
            <div>
              <ModalMenuButton
                onClick={() => {
                  setIsOpen(true);
                  setCarHp(car.hp);
                  setCarType(car.type);
                  setCarPrice(car.price);
                }}
                key={car}
              >
                {car.class}
              </ModalMenuButton>
            </div>
          );
        })}
      </div>

      <Modal
        open={isOpen}
        onClose={() => {
          setIsOpen(false);
        }}
        closeAfterTransition
      >
        <Fade in={isOpen}>
          <Box sx={MenuModalStyles}>
            <div className="active-menu__modal">
              <img src={rkrlogo} alt=" "></img>
              <div className="modal__info">
                <div className="info__element">
                  <h1 className="element__name">МОЩНОСТЬ:</h1>
                  <p className="element__value">{carHp}</p>
                </div>
                <div className="info__element">
                  <h1 className="element__name">ПРИВОД:</h1>
                  <p className="element__value">{carType}</p>
                </div>
                <div className="info__element">
                  <h1 className="element__name">ЦЕНА:</h1>
                  <p className="element__value">{carPrice}</p>
                </div>
              </div>
              <ModalMenuButton
                onClick={() => {
                  setIsOpen(false);
                }}
              >
                ПОНЯТНО ПРО МАШИНУ
              </ModalMenuButton>
            </div>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
};

export default ContentCars;
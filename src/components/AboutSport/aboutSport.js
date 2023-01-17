import React from "react";
import "./AboutSportStyles.css";
import Menu from "../Menu/Menu";



function AboutSport() {
  return (
    <div>
      <div className="info__container">
        <p className="info__text">
          Автокросс и ралли-кросс - виды автомобильного спорта. Представляет
          собой кольцевые заезды по трассе, не имеющей асфальто-бетонного
          покрытия, либо частично покрытой асфальтом. Все пилоты стартуют
          одновремменно, в соответствии с результатами квалификации. Все
          автомобили делятся на несколько классов, согласно уровню подготовки.
          Считаются одними из самых зрелищных видов автогонок.
        </p>
      </div>
      <Menu />
    </div>
  );
}

export default AboutSport;

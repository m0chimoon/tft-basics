import { useState } from "react";
import ChampionHexModal from "./ChampionHexModal";
import ChampionTooltip from "../Champions/ChampionTooltip";
import { Champion } from "../Champions/ChampionData";
import { setChampBackgroundColor } from "../shared/ChampionColor";

const ChampionHex = () => {
  const [showModal, setShowModal] = useState(false);
  const [champion, setChampion] = useState<Champion>();

  const handleOpenModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <>
      {champion ? (
        <ChampionTooltip champion={champion}>
          <button className={`hexagon ${setChampBackgroundColor(champion.cost)} w-20 flex place-items-center justify-center max-md:w-14 max-sm:w-11 max-[500px]:w-6`} onClick={handleOpenModal}>
            <img className="w-[74px] h-[80px] hexagon grid max-md:h-[54px] max-md:w-[49px] max-sm:h-[44px] max-sm:w-[40px] max-[500px]:w-[20px] max-[500px]:h-[22px]" src={`/src/assets/champions/${champion.name}.png`} alt={champion.name} />
          </button>
        </ChampionTooltip>
      ) : (
        <button className={`hexagon bg-gray-600 w-20 flex place-items-center justify-center max-md:w-14 max-sm:w-11 max-[500px]:w-6`} onClick={handleOpenModal}></button>
      )}
      <ChampionHexModal champion={champion} show={showModal} onClose={handleCloseModal} setChampion={setChampion} />
    </>
  )
}
export default ChampionHex

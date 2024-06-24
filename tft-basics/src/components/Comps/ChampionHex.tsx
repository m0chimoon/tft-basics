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
          <button className={`hexagon ${setChampBackgroundColor(champion.cost)} w-20 flex place-items-center justify-center`} onClick={handleOpenModal}>
            <img className="w-[74px] h-[80px] hexagon grid" src={`/src/assets/champions/${champion.name}.png`} alt={champion.name} />
          </button>
        </ChampionTooltip>
      ) : (
        <button className={`hexagon bg-gray-600 w-20 flex place-items-center justify-center`} onClick={handleOpenModal}></button>
      )}
      <ChampionHexModal champion={champion} show={showModal} onClose={handleCloseModal} setChampion={setChampion} />
    </>
  )
}
export default ChampionHex

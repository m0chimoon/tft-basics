import { useState } from "react";
import { Champion, Cost} from "../Champions/Champions";
import ChampionHexModal from "./ChampionHexModal";
import ChampionTooltip from "../Champions/ChampionTooltip";

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

const costToColorMap: Record<Cost, string> = {
  [Cost.One]: "bg-gray-400",
  [Cost.Two]: "bg-green-600",
  [Cost.Three]: "bg-blue-500",
  [Cost.Four]: "bg-purple-500",
  [Cost.Five]: "bg-yellow-400"
};
  
const setChampBackgroundColor = (cost: Cost): string => {
  return costToColorMap[cost];
};
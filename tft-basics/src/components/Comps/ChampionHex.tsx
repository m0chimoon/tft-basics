import { useState } from "react";
import { Champion } from "../Champions/Champions";
import ChampionHexModal from "./ChampionHexModal";

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
      <button className="hexagon bg-gray-500 w-20 flex place-items-center" onClick={handleOpenModal}>
        {champion && (
          <img className="w-max h-max scale-125" src={`/src/assets/champions/${champion.name}.png`} alt={champion.name} />
        )}
      </button>
      <ChampionHexModal champion={champion} show={showModal} onClose={handleCloseModal} setChampion={setChampion} />
    </>
  )
}
export default ChampionHex
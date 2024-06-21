import { Champion, champions } from "../Champions/Champions";
import { useTraits } from "./TraitsContext";

interface ModalProps {
  show: boolean;
  onClose: () => void;
  champion: Champion | undefined
  setChampion: React.Dispatch<React.SetStateAction<Champion | undefined>>;
}

const ChampionHexModal = ({ show, onClose, setChampion, champion }: ModalProps) => {
  if (!show) {
    return null;
  }

  const { traits, setTraits } = useTraits();
  const newTraits = [...traits];

  const addChampToHex = (champ: Champion): void => {
    setTraits((traits) => [...traits, ...champ.traits]);
    setChampion(champ);
    onClose();
  }

  const removeChampFromHex = (): void => {
    if (champion) {

      champion.traits.forEach(trait => {
        const index = newTraits.indexOf(trait);
        if (index > -1) {
          newTraits.splice(index, 1);
        }
      });

      setTraits(newTraits);
      setChampion(undefined);
    }
    onClose();
  }

  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white p-8 rounded shadow-md">
        <button onClick={onClose} className="absolute top-0 right-0 m-4">
          &times;
        </button>
        <div className="grid grid-cols-8 place-items-center">
          <div onClick={removeChampFromHex} className="text-black text-justify">
            <div className="hexagon w-12 bg-gray-600"></div>
            <p className="text-black text-start">Empty</p>
          </div>
          {champions.map(champ => (
            <div key={champ.name} onClick={() => addChampToHex(champ)}>
              <img className=" h-12 w-12" src={`/src/assets/champions/${champ.name}.png`} />
              <p className="text-black text-start">{champ.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
export default ChampionHexModal
import { useEffect, useState } from "react";
import { Champion, champions, setChampColor } from "../Champions/Champions";
import { useTraits } from "./TraitsContext";
import ChampionTooltip from "../Champions/ChampionTooltip";

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

  const [filteredChampions, setFilteredChampions] = useState<Champion[]>(champions);
  const [filter, setFilter] = useState<string>("");
  const { traits, setTraits, champNames, setChampNames } = useTraits();
  const removedTraits = [...traits];

  const addChampToHex = (champ: Champion): void => {
    if (champion) {
      removeChampFromHex();
    }

    if (champNames.every(name => name !== champ.name)) {
      setTraits((traits) => [...traits, ...champ.traits]);
    } 
    setChampNames(names => [...names, champ.name])
    setChampion(champ);
    onClose();
  }

  const removeChampFromHex = (): void => {
    if (champion) {

      const nameIndex = champNames.indexOf(champion.name);
      const removedName = champNames;
      removedName.splice(nameIndex, 1)
      setChampNames(removedName);

      if (!removedName.some(name => name === champion.name)) {
        champion.traits.forEach(trait => {
          const index = removedTraits.indexOf(trait);
          removedTraits.splice(index, 1);
        });
        setTraits(removedTraits);
      }

      setChampion(undefined);
    }
    onClose();
  }

  useEffect(() => {
    setFilteredChampions(champions.filter((champ) => champ.name.toLocaleLowerCase().includes(filter)))
  },[filter])


  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-gray-200 p-8 rounded shadow-md w-[680px] h-[720px]">
        <div className="flex justify-between place-items-center mb-2 mx-5">
          <input value={filter} onInput={(value) => setFilter(value.currentTarget.value.toLocaleLowerCase())} className="px-2 py-0.5 bg-gray-700 text-white rounded w-4/12" type="text" placeholder="Search.." />
          <button onClick={onClose} className="text-black text-xl font-bold text-end">
            &times;
          </button>
        </div>
        <div className="grid grid-cols-8 grid-rows-8 place-items-center">
          <div onClick={removeChampFromHex} className="text-black grid place-items-center cursor-pointer hover:opacity-70">
            <div className="hexagon w-12 bg-gray-600"></div>
            <p className="text-black text-start">Empty</p>
          </div>
          {filteredChampions.map(champ => (
            <ChampionTooltip key={champ.name} champion={champ}>
              <div className="grid place-items-center cursor-pointer hover:opacity-70" onClick={() => addChampToHex(champ)}>
                <img className={`h-12 w-12 border-2 ${setChampColor(champ.cost)}`} src={`/src/assets/champions/${champ.name}.png`} />
                <p className="text-black">{champ.name}</p>
              </div>
            </ChampionTooltip>
          ))}
        </div>
      </div>
    </div>
  )
}
export default ChampionHexModal
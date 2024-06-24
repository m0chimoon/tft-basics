import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ChampionTooltip  from "./ChampionTooltip";
import { Champion, champions } from "./ChampionData";
import { setChampColor } from "../shared/ChampionColor";

const Champions = () => {
  const [filteredChampions, setFilteredChampions] = useState<Champion[]>(champions);
  const [filter, setFilter] = useState<string>("");
  const [costFilter, setCostFilter] = useState<boolean>(false);

  const filterAlphabetically = (): void => {
    const reversedChampions = [...filteredChampions].reverse();
    setFilteredChampions(reversedChampions);
  }

  const filterByCost = (): void => {
    let sorted;
    if (!costFilter) {
      sorted = [...filteredChampions].sort((a, b) => b.cost - a.cost);
      setCostFilter(true);
    } else {
      sorted = [...filteredChampions].sort((a, b) => a.cost - b.cost);
      setCostFilter(false);
    }
      setFilteredChampions(sorted);
    }

  const resetFilters = () => {
    setFilter("");
    setFilteredChampions(champions);
  }
    
  useEffect(() => {
    setFilteredChampions(champions.filter((champ) => champ.name.toLocaleLowerCase().includes(filter)))
  },[filter])

  return (
    <div>
      <h2 className="text-4xl font-bold uppercase my-5 text-[#f6b03f]">Champions</h2>
      <div className="flex flex-row justify-center gap-4 m-2 place-items-center max-sm:gap-0">
        <input value={filter} onInput={(value) => setFilter(value.currentTarget.value.toLocaleLowerCase())} className="px-2 py-0.5 bg-white text-black rounded" type="text" placeholder="Search.." />
        <button onClick={filterByCost} className="px-2 py-1 bg-[#f6b03f] rounded-lg text-black">Cost</button>
        <button onClick={filterAlphabetically} className="px-2 py-1 bg-[#f6b03f] rounded-lg text-black">Name</button>
        <button onClick={resetFilters} className="px-2 py-1 bg-[#f6b03f] rounded-lg text-black">Reset</button>
      </div>
      <div className="flex justify-center">
        <div className="grid grid-cols-8 grid-rows-8 place-items-center gap-y-2 gap-x-2 max-md:grid-cols-7 max-sm:grid-cols-6 max-[520px]:grid-cols-4">
          {filteredChampions && filteredChampions.map(champ => (
            <ChampionTooltip champion={champ} key={champ.name}>
              <Link to={`/champions/${champ.name}`} className="grid place-items-center cursor-pointer hover:opacity-70 h-20 w-20">
                <img className={`h-14 w-14 rounded-sm border-2 ${setChampColor(champ.cost)}`} src={`/src/assets/champions/${champ.name}.png`} alt={champ.name} />
                <p>{champ.name}</p>
              </Link>
            </ChampionTooltip>
          ))}
          {filteredChampions.length === 0  ? <p>No results...</p> : <></>}
        </div>
      </div>
    </div>
  )
}
export default Champions

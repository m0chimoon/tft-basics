import { useTraits } from "./TraitsContext";
import { TraitName } from "../Traits/TraitData";
import { TraitsToolTip } from "../Traits/TraitsToolTip";

const TraitsView = () => {
  const { traits } = useTraits();

  const traitMap = new Map<TraitName, number>();
  traits.forEach(trait => {
    traitMap.set(trait, (traitMap.get(trait) || 0) + 1);
  });

  const activeTraits = Array.from(traitMap.entries()).map(([traitName, count]) => ({
    traitName,
    count,
  }));

  return (
    <div className="w-72">
      {traits.length > 0 ? (
        activeTraits
          .sort((a, b) => b.count - a.count)
          .map((trait, index) => (
            <TraitsToolTip traitName={trait.traitName}>
              <div className="flex place-items-center gap-2">
                <img className="h-8 w-8" src={`/src/assets/traits/${trait.traitName}.png`}/>
                <p className="text-4xl" key={index}>{trait.traitName}: {trait.count}</p>
            </div>
            </TraitsToolTip>
          ))
      ) : (
        <p className="text-4xl">No active traits</p>
      )}
    </div>
  )
}
export default TraitsView


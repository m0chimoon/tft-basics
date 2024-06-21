import { TraitName } from "../Champions/Champions";
import { useTraits } from "./TraitsContext";

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
    <>
      {traits.length > 0 ? (
        activeTraits
          .sort((a, b) => b.count - a.count)
          .map((trait, index) => (
            <p className="text-4xl" key={index}>{trait.traitName}: {trait.count}</p>
          ))
      ) : (
        <p className="text-4xl">Traits</p>
      )}
    </>
  )
}
export default TraitsView

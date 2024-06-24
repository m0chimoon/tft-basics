import { useState } from "react";
import { TraitName } from "../Champions/Champions";
import { useTraits } from "./TraitsContext";
import { TraitActive, getTraitByName } from "../Traits/Traits";

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
        <p className="text-4xl">Traits</p>
      )}
    </div>
  )
}
export default TraitsView



interface TraitToolTipProps {
  children: string | JSX.Element | JSX.Element[]
  traitName: TraitName
}
const TraitsToolTip = (props: TraitToolTipProps) => {
  let timeout: number;
  const [active, setActive] = useState(false);
  const trait = getTraitByName(props.traitName);

  const showTip = (): void => {
    timeout = setTimeout(() => {
      setActive(true);
    }, 200);
  }

  const hideTip = (): void => {
    clearInterval(timeout);
    setActive(false);
  }

  return (
    <div className="inline-block relative" onMouseEnter={showTip} onMouseLeave={hideTip}>
      {props.children}
        {active && (
          <div className="absolute rounded left-1/2 -translate-x-1/2 mb-2 text-white bg-indigo-800 z-10 whitespace-nowrap flex flex-col w-80 text-wrap text-base">
            <div className="my-4 rounded py-1 text-left px-5">
              <div className="flex gap-3 place-items-center">
                <img className="h-8 w-8" src={`/src/assets/traits/${trait.name}.png`}/>
                <p className="text-xl">{trait.name}</p>
              </div>
              <p className="m-1">{trait.description}</p>
              {trait.steps.map((step, index) => (
                <div className="flex m-1 gap-1" key={index}>
                  <p className="text-white text-xl px-1 font-bold text-center">{step.amount}</p>
                  <p>{step.description}</p>
                </div>
              ))}
            </div>
          </div>
         )}
    </div>
  )
}
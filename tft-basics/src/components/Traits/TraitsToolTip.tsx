import { useState } from "react";
import { TraitName, getTraitByName } from "./TraitData";

export interface TraitToolTipProps {
  children: string | JSX.Element | JSX.Element[]
  traitName: TraitName
}

export const TraitsToolTip = (props: TraitToolTipProps) => {
  let timeout: number;
  const [active, setActive] = useState(false);
  const trait = getTraitByName(props.traitName);

  const showTip = (): void => {
    timeout = setTimeout(() => {
      setActive(true);
    }, 200);
  };

  const hideTip = (): void => {
    clearInterval(timeout);
    setActive(false);
  };

  return (
    <div className="inline-block relative" onMouseEnter={showTip} onMouseLeave={hideTip}>
      {props.children}
      {active && (
        <div className="absolute rounded left-1/2 -translate-x-1/2 mb-2 text-white bg-indigo-800 z-10 whitespace-nowrap flex flex-col w-80 text-wrap text-base">
          <div className="my-4 rounded py-1 text-left px-5">
            <div className="flex gap-3 place-items-center">
              <img className="h-8 w-8" src={`/src/assets/traits/${trait.name}.png`} />
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
  );
};

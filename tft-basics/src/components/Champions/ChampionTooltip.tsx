import { useState, useRef, useEffect } from "react";
import { setChampColor, Champion } from "./Champions";

interface ToolTipProps {
  children: string | JSX.Element | JSX.Element[]
  champion: Champion
}

const ChampionTooltip = (props: ToolTipProps) => {
  let timeout: number;
  const champion = props.champion;
  const [active, setActive] = useState(false);
  const [position, setPosition] = useState('bottom');
  const triggerRef = useRef<HTMLDivElement>(null);
  const tooltipRef = useRef<HTMLDivElement>(null);

  const showTip = () => {
    timeout = setTimeout(() => {
      setActive(true);
    }, 200);
  };

  const hideTip = () => {
    clearInterval(timeout);
    setActive(false);
  };

  useEffect(() => {
    if (active && triggerRef.current && tooltipRef.current) {
      const triggerRect = triggerRef.current.getBoundingClientRect();
      const tooltipRect = tooltipRef.current.getBoundingClientRect();
      const spaceAbove = triggerRect.top;
      const spaceBelow = window.innerHeight - triggerRect.bottom;

      if (spaceBelow < tooltipRect.height && spaceAbove >= tooltipRect.height) {
        setPosition('top');
      } else {
        setPosition('bottom');
      }
    }
  }, [active]);

  return (
    <div className="inline-block relative" onMouseEnter={showTip} onMouseLeave={hideTip} ref={triggerRef}>
      {props.children}
      {active && (
        <div
          ref={tooltipRef}
          className={`absolute rounded left-1/2 -translate-x-1/2 ${position === 'bottom' ? 'top-full mt-2' : 'bottom-full mb-2'} text-white bg-[#0d1d2d] text-xl z-10 whitespace-nowrap flex flex-col w-[350px] items-center`}
        >
          <img className={`w-16 h-16 rounded-sm border-2 mt-4 ${setChampColor(champion.cost)}`} src={`/src/assets/champions/${champion.name}.png`} />
          <p className="text-[20px] text-[#f6b03f]">{champion.name}</p>
          <ul className="p-2 text-base">
            {champion.traits.map(trait => (
              <li className="flex place-items-center pr-4" key={trait}>
                <img className="h-4 w-4 mr-1" src={`/src/assets/traits/${trait}.png`} />
                <p>{trait}</p>
              </li>
            ))}
            <li className="flex">
              <img src="/src/assets/coin.svg"/>
              <p className="pl-2">{champion.cost}</p>
            </li>
          </ul>
          <p className="text-lg">{champion.ability.name}</p>
          <p className="text-base text-wrap w-[300px] mb-4">{champion.ability.description}</p>
        </div>
      )}
    </div>
  )
}
export default ChampionTooltip;
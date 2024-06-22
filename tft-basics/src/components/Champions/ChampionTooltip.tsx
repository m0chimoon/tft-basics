import { useState, useRef, useEffect } from "react";
import { setChampColor, Cost, Champion } from "./Champions";

interface IToolTipProps {
    children: string | JSX.Element | JSX.Element[]
    champion: Champion
}

const ChampionTooltip = (props: IToolTipProps) => {
    let timeout: any;
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
                    className={`absolute rounded left-1/2 -translate-x-1/2 ${position === 'bottom' ? 'top-full mt-2' : 'bottom-full mb-2'} text-white bg-indigo-800 text-xl z-10 whitespace-nowrap flex flex-col w-32`}
                >
                    <img className={`w-32 h-32 rounded border-2 ${setChampColor(champion.cost)}`} src={`/src/assets/champions/${champion.name}.png`} />
                    <div className="p-2 text-base">
                        {champion.traits.length !== 0 && (
                            <>
                                <div className="">
                                    {champion.traits.map(trait => (
                                        <div className="flex place-items-center pr-4" key={trait}>
                                            <img className="h-4 w-4 mr-1" src={`/src/assets/traits/${trait}.png`} />
                                            <p>{trait}</p>
                                        </div>
                                    ))}
                                </div>
                            </>
                        )}
                        <div className="flex gap-1">
                            <p>{champion.name}</p>
                            {champion.cost === Cost.Summon ? (
                                <p>{Cost[champion.cost]}</p>
                            ) : (
                                <>
                                    <p>{champion.cost}</p>
                                    <img src="/src/assets/coin.svg" />
                                </>
                            )}
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}
export default ChampionTooltip;
import { useState } from "react";
import { setChampColor, Cost, Champion } from "./Champions";

interface IToolTipProps {
    children: string | JSX.Element | JSX.Element[] 
    champion: Champion
}

const ChampionTooltip = (props: IToolTipProps) => {
    let timeout: any;
    const champion = props.champion;
    const [active, setActive] = useState(false);

    const showTip = () => {
        timeout = setTimeout(() => {
            setActive(true);
        }, 200);
    };

    const hideTip = () => {
        clearInterval(timeout);
        setActive(false);
    };

    return (
        <div className="inline-block relative" onMouseEnter={showTip} onMouseLeave={hideTip}>
            {props.children}
            {active && (
                <div className={`absolute rounded left-1/2 -translate-x-1/2 text-white bg-indigo-800 text-xl z-10 whitespace-nowrap mt-2 flex flex-col w-32`}>
                    <img className={`w-32 h-32 rounded border-2 ${setChampColor(champion.cost)}`} src={`/src/assets/champions/${champion.name}.png`} />
                    <div className="p-2 text-base">
                        {champion.traits.length !== 0 && (
                            <>
                                {/* <div className="border-l mx-2"/> */}
                                <div className="">
                                    {champion.traits.map(trait => (
                                        <div className="flex place-items-center pr-4">
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
                                    <img className="" src="/src/assets/coin.svg" />
                                </>
                            )}
                        </div>
                    </div>

                </div>
            )}
        </div>
    )
}
export default ChampionTooltip
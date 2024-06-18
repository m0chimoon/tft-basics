import { useParams } from 'react-router-dom';
import { Champion, Cost, getSet11Champions } from '../Champions/Champions';
import Traits from '../Traits/Traits';

const ChampionView = () => {
    const { name } = useParams();
    const champion: Champion = getSet11Champions(name!);
    const championColor = setChampColor(champion.cost);

    return (
        <div className='flex flex-col gap-y-10'>

            <div className='flex justify-center place-items-center gap-x-40'>
                <img className={`border ${championColor}`} src={`/src/assets/champions/${name}.png`} />
                <h2 className='text-4xl font-bold mb-5 text-[#f6b03f]'>{name}</h2>
            </div>
            
            <div className='flex justify-center gap-x-2'>
                <div className="bg-gray-600 p-4 rounded shadow-lg">
                    <h3 className="text-2xl font-bold text-[#f6b03f]">Ability</h3>
                    <p className="text-xl">{champion.ability.name}</p>
                    <p>{champion.ability.description}</p>
                </div>
                <div className="bg-gray-600 p-4 rounded shadow-lg">
                    <p>Cost: {champion.cost}</p>
                    <p>Traits</p>
                    {champion.traits.map(trait => (
                        <Traits key={trait} trait={trait}></Traits>
                    ))}
                </div>
            </div>

        </div>
    )
}
export default ChampionView

const costToColorMap: Record<Cost, string> = {
    [Cost.Summon]: "border-amber-600",
    [Cost.One]: "border-gray-400",
    [Cost.Two]: "border-green-800",
    [Cost.Three]: "border-blue-500",
    [Cost.Four]: "border-purple-500",
    [Cost.Five]: "border-yellow-400"
};
    
const setChampColor = (cost: Cost): string => {
    return costToColorMap[cost];
};
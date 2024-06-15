import { useParams } from 'react-router-dom';
import { Champion, Cost, getSet11Champions } from '../Champions/Champions';

const ChampionView = () => {
    const { name } = useParams();
    const champion: Champion = getSet11Champions(name!);
    const championColor = setChampColor(champion.cost);

    return (
        <>
            <h2 className='text-4xl'>{name}</h2>
            <p>Abillity</p>
            <p>{champion.abillity.name}</p>
            <p>{champion.abillity.description}</p>
            <img className={`border ${championColor}`} src={`/src/assets/champions/${name}.png`} />
            <p>Cost: {champion.cost}</p>
            <p>Traits</p>
            {champion.traits.map(trait => (
                <p key={trait}>{trait}</p>
            ))}
        </>
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
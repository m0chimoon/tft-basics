import { useParams } from 'react-router-dom';
import Traits from '../Traits/Traits';
import { setChampColor } from '../shared/ChampionColor';
import { Champion, getSet11Champions } from '../Champions/ChampionData';

const ChampionView = () => {
  const { name } = useParams();
  const champion: Champion = getSet11Champions(name!);
  const championColor = setChampColor(champion.cost);

  return (
    <div className='flex flex-row gap-x-10 max-sm:flex-col max-sm:place-items-center lg:w-[1080px]'>

      <div className='flex flex-col place-items-center gap-y-4 w-4/12 max-sm:w-full'>
        <img className={`border-2 ${championColor}`} src={`/src/assets/champions/${name}.png`} />
        <h2 className='text-4xl font-bold mb-5 text-[#f6b03f]'>{name}</h2>
        <div className="p-4 rounded">
          <h3 className="text-2xl font-bold text-[#f6b03f]">Ability</h3>
          <p className="text-xl">{champion.ability.name}</p>
          <p>{champion.ability.description}</p>
        </div>
      </div>

      <div className='flex flex-col justify-center gap-x-2 w-8/12 max-sm:w-full'>
        <div className="p-4 rounded">
          <p className="text-xl">Cost: {champion.cost}</p>
          <hr className='m-2 bg-gray-400 h-0.5 border-none' />
          <p className="text-2xl">Traits</p>
          {champion.traits.map(trait => (
            <Traits key={trait} trait={trait}></Traits>
          ))}
        </div>
      </div>

    </div>
  )
}
export default ChampionView

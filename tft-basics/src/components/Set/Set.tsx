import tftmode from "../../assets/tftmode.png"
import tftinkborn from "../../assets/tftinkborn.png"

const Set = () => {
 return (
  <div className='flex flex-col m-auto max-w-2xl items-center'>
    <img src={tftmode} className="w-40 mb-5" />
    <h2 className="text-4xl font-bold uppercase mb-5">Sets</h2>
    <p className="text-lg text-justify">
      Every game of TFT takes place in the Convergence, and centers around a specific theme and story called a set.
      Every few months TFT introduces you to a new universe with new champions, traits, and characters to play.
      In terms of gameplay, new sets also come with a new Ranked ladder to climb, new team compositions, and new item possibilities.
    </p>
    <h3 className="text-2xl font-bold uppercase my-5">Current Set</h3>
    <img src={tftinkborn} className="rounded-lg shadow-lg mb-5" />
    <p className="text-lg text-justify">
    Inkborn Fables is Teamfight Tactic's 11th set and it brings with it a jam-packed series of changes including random encounters,
    new unique champions to TFT like Alune and Kobuko, a trait with a random champions every game, new Inkshadow items, and more.
    </p>
  </div>
 )
}

export default Set
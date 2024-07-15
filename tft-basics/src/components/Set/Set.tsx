import tftinkborn from "../../assets/tftinkborn.png"

const Set = () => {
  return (
    <div className='flex flex-col m-auto max-w-[839px] items-center'>
      <h2 className="text-3xl font-bold uppercase text-[#f6b03f] self-start"> About Sets</h2>
      <p className="text-lg text-justify mb-10 mt-5">
        Every game of TFT takes place in the Convergence, and centers around a specific theme and story called a set.
        Every few months TFT introduces you to a new universe with new champions, traits, and characters to play.
        In terms of gameplay, new sets also come with a new Ranked ladder to climb, new team compositions, and new item possibilities.
      </p>
      <img src={tftinkborn} className="rounded-lg shadow-lg mb-10" />
      <p className="text-lg text-justify">
      Inkborn Fables is Teamfight Tactic's 11th set and it brings with it a jam-packed series of changes including random encounters,
      new unique champions to TFT like Alune and Kobuko, a trait with a random champions every game, new Inkshadow items, and more.
      </p>
    </div>
  )
}

export default Set
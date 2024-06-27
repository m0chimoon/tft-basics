import silver from "../../assets/augmentsilver.png"
import gold from "../../assets/augmentgold.png"
import prismatic from "../../assets/augmentprismatic.png"

const Augments = () => {
 return (
  <div className="flex flex-col m-auto max-w-[650px]">
    <h2 className="text-4xl font-bold uppercase mb-5 text-[#f6b03f] self-start">Augments</h2>
    <p className="mb-5 text-justify text-lg">
      Augments in Teamfight Tactics icon Teamfight Tactics are permanent bonuses that are added to
      the player's hexcore. They are the featured mechanic that has been implemented since the sixth
      set of Teamfight Tactics: Gizmos & Gadgets.
    </p>
    <h3 className="text-2xl font-bold uppercase mb-5 text-[#f6b03f] self-start">Augment choices</h3>
    <p className="text-justify text-lg">
      At stages 2-1, 3-2, and 4-2, the player is offered three choices of augments.
      During each choice the player must select one out of three augments. Each augment has a rarity
      (silver, gold, or prismatic).
      The first augment choice has a timer of 43 seconds.
      The second and third augment choices have a timer of 58 seconds.
    </p>
    <ul className="flex mt-10 gap-4">
      <li className="flex flex-col items-center max-w-[206px] rounded-sm shadow-lg px-3 pb-2">
        <img src={silver} className="w-40"/>
        <p className="text-[#f6b03f] text-xl font-semibold mb-2">Tiny Titans</p>
        <p className="text-lg">Increase your current and maximum player health by 30.</p>
      </li>
      <li className="flex flex-col items-center max-w-[206px] rounded-sm shadow-lg px-3 pb-4">
        <img src={gold} className="w-40"/>
        <p className="text-[#f6b03f] text-xl font-semibold mb-2">Pandora's Items II</p>
        <p className="text-lg">Round start: items on your bench are randomized (excluding Tactician's Crown and Spatula).</p>
      </li>
      <li className="flex flex-col items-center max-w-[206px] shadow-lg rounded-sm px-3">
        <img src={prismatic} className="w-40"/>
        <p className="text-[#f6b03f] text-xl font-semibold mb-2">New Recruit</p>
        <p className="text-lg">Gain +1 max team size and a Champion Duplicator.</p>
      </li>
    </ul>
  </div>
 )
}

export default Augments
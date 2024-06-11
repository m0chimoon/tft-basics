

const Introduction = () => {
 return (
  <div className='flex flex-col m-auto max-w-2xl'>
    <h2 className='text-4xl font-bold uppercase mb-5'>What is Teamfight Tactics?</h2>
    <p className="text-lg text-justify">
      Teamfight Tactics is a strategic free-for-all game of attrition featuring iconic champions from League of Legends.
      Your goal? Grow your team and protect your board to become the last player standing. Here you'll find the basic information
      you need to get started:
    </p>
    <h3 className="text-2xl font-bold uppercase my-5">Gameplay</h3>
    <p className="text-lg text-justify">
    Teamfight Tactics is an autobattler: a round-based PvP game where you’ll draft a team that battles automatically on your behalf.
    If you've never played an autobattler before, don't worry! TFT borrows from many of the concepts you know and love about other strategy games,
    like drafting from a shared pool of resources, team building, economy management, and positioning.

    Here's how it works: Individuals face off in 1-on-1 matches until only one player remains. You win by drafting the best team of champions from a shared pool,
    equipping them with powerful items, managing your gold income to buy out the competition, and positioning your team in winning battle formations.
    There are unlimited winning strategies, so you’ll have to adapt to different situations in every game to come out on top.
    </p>
  </div>
 )
}

export default Introduction
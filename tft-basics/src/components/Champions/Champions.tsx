import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Champions = () => {
    const [filteredChampions, setFilteredChampions] = useState<Champion[]>(champions);
    const [filter, setFilter] = useState<string>("");
    const [costFilter, setCostFilter] = useState<boolean>(false);

    const filterAlphabetically = (): void => {
        const reversedChampions = [...filteredChampions].reverse();
        setFilteredChampions(reversedChampions);
    }

    const filterByCost = (): void => {
        let sorted;
        if (!costFilter) {
            sorted = [...filteredChampions].sort((a, b) => a.cost - b.cost);
            setCostFilter(true);
        } else {
            sorted = [...filteredChampions].sort((a, b) => b.cost - a.cost);
            setCostFilter(false);
        }
        setFilteredChampions(sorted);
    }

    const resetFilters = () => {
        setFilteredChampions(champions);
    }
    
    useEffect(() => {
        if (filter === "") {
            setFilteredChampions(champions);
        } else {
            setFilteredChampions((fc) => fc.filter((champ) => champ.name.toLocaleLowerCase().includes(filter)))
        }
    },[filter])

    return (
        <>
            <h2 className="text-4xl">Champions</h2>
            <div className="flex flex-row justify-center gap-4 m-2 place-items-center">
                <label>Filters</label>
                <input onInput={(value) => setFilter(value.currentTarget.value.toLocaleLowerCase())} className="pl-2 bg-white text-black rounded" type="text" placeholder="Search.." />
                <button onClick={filterByCost} className="p-1 bg-indigo-800 rounded-lg">Cost</button>
                <button onClick={filterAlphabetically} className="p-1 bg-indigo-800 rounded-lg">Name</button>
                <button onClick={resetFilters} className="p-1 bg-indigo-800 rounded-lg">Reset</button>
            </div>
            <div className="flex justify-center">
                <div className="grid grid-cols-8 grid-rows-8 place-items-center gap-y-2 gap-x-2">
                {filteredChampions && filteredChampions.map(champ => (
                    <Link to={`/champions/${champ.name}`} key={champ.name} className="grid place-items-center cursor-pointer hover:opacity-70 h-18 w-18">
                        <img className={`h-14 w-14 rounded-full border-2 ${setChampColor(champ.cost)}`} src={`/src/assets/champions/${champ.name}.png`} alt={champ.name} />
                        <p>{champ.name}</p>
                    </Link>
                ))}
                {filteredChampions.length === 0  ? <p>No results...</p> : <></>}
                </div>
            </div>
        </>
    )
}
export default Champions


export interface Champion {
    name: string
    cost: Cost,
    abillity: Abillity
    traits: Trait[]
}

type Trait =
    | "Heavenly"
    | "Fated"
    | "Ghostly"
    | "Behemoth"
    | "Bruiser"
    | "Reaper"
    | "Mythic"
    | "Inkshadow"
    | "Altruist"
    | "Arcanist"
    | "Warden"
    | "Lovers"
    | "Artist"
    | "Great"
    | "Sniper"
    | "Porcelain"
    | "Invoker"
    | "Trickshot"
    | "Fortune"
    | "Duelist"
    | "Storyweaver"
    | "Dryad"
    | "Umbral"
    | "Sage"
    | "Dragonlord"
    | "Exalted"
    | "SpiritWalker";


export enum Cost {
    Summon = 0,
    One = 1,
    Two = 2,
    Three = 3,
    Four = 4,
    Five = 5
}

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

interface Abillity {
    name: string
    description: string
}

// fated, annie, alune etc... description no goood
export const getSet11Champions = (name: string) => {
    const champion: Champion | undefined = champions.find((champion) => champion.name === name);
    return champion ? champion : champions[0];
}

const traits: Trait[] = [
    "Heavenly",
    "Fated",
    "Ghostly",
    "Behemoth",
    "Bruiser",
    "Reaper",
    "Mythic",
    "Inkshadow",
    "Altruist",
    "Arcanist",
    "Warden",
    "Lovers",
    "Artist",
    "Great",
    "Sniper",
    "Porcelain",
    "Invoker",
    "Trickshot",
    "Fortune",
    "Duelist",
    "Storyweaver",
    "Dryad",
    "Umbral",
    "Sage",
    "Dragonlord",
    "Exalted",
    "SpiritWalker"
];

const champions: Champion[] = [
    {name: "Aatrox", cost: Cost.Two, traits: ["Ghostly", "Inkshadow", "Bruiser"], abillity: {name: "Phantom Blade", description: "20% Shred the current target for 4 seconds and deal magic damage to them. Heal yourself."}},
    {name: "Ahri", cost: Cost.One, traits: ["Fated", "Arcanist"], abillity: {name: "Love Bomb", description: "Deal magic damage to the current target and magic damage to adjacent enemies."}},
    {name: "Alune", cost: Cost.Three, traits: ["Umbral", "Invoker"], abillity: {name: "Lunar Barrage", description: "Rain meteors through the row with the most total enemy Health. Meteors deal magic damage split between all enemies hit. Deal magic damage to the current target. All enemies hit are 20% Shredded for 6 seconds."}},
    {name: "Amumu", cost: Cost.Three, traits: ["Porcelain", "Warden"], abillity: {name: "Herbal Tea-rs", description: "Over the next 3 seconds, heal Health and cry on adjacent units. Tears heal allies for Health and deal magic damage to enemies."}},
    {name: "Annie", cost: Cost.Four, traits: ["Fortune", "Invoker"], abillity: {name: "Get 'em, Tibbers!", description: "Active: On first cast, hop on Tibbers, gaining 15% HP + % AP max Health and Stunning enemies within 2 hexes for 1.5 seconds."}},
    {name: "Aphelios", cost: Cost.Three, traits: ["Fated", "Sniper"], abillity: {name: "Duskwave", description: "20% Sunder the nearest 3 enemies for 7 seconds. Then fire 3 shots at them, dealing % AD + % AP physical damage each."}},
    {name: "Ashe", cost: Cost.Four, traits: ["Porcelain", "Sniper"], abillity: {name: "Rain of Shards", description: "Active: Fire a volley split between the current target and the 3 closest enemies within range, dealing physical damage per arrow."}},
    {name: "Azir", cost: Cost.Five, traits: ["Dryad", "Invoker"], abillity: {name: "Blight", description: "Fire a beam through the current target, dealing magic damage to enemies hit. Spawn a Guardian adjacent to the first enemy hit. The Guardian does not move or attack."}},
    {name: "Bard", cost: Cost.Three, traits: ["Mythic", "Trickshot"], abillity: {name: "Meep Meep!", description: "For the next seconds, attacks instead throw 2 Meeps, each dealing physical damage and magic damage."}},
    {name: "Caitlyn", cost: Cost.One, traits: ["Ghostly", "Sniper"], abillity: {name: "Ace in the Hole", description: "Fire a bullet towards the farthest enemy, dealing 800% AD + % AP physical damage to the first enemy hit."}},
    {name: "Chogath", cost: Cost.One, traits: ["Mythic", "Behemoth"], abillity: {name: "Eruption", description: "Gain Shield for 4 seconds and breathe a cone of fire, dealing magic damage, Burning, and Wounding enemies hit for 9 seconds."}},
    {name: "Darius", cost: Cost.One, traits: ["Umbral", "Duelist"], abillity: {name: "Decimate", description: "Deal magic damage to adjacent enemies. For the next 4 seconds, attacks deal bonus magic damage."}},
    {name: "Diana", cost: Cost.Three, traits: ["Dragonlord", "Sage"], abillity: {name: "Purification Rites", description: "Heal and create a 1-hex sacred zone around Diana for 4 seconds, taking 20% reduced damage from enemies outside the zone. While the zone is up, Diana's attacks deal bonus magic damage."}},
    {name: "Galio", cost: Cost.Four, traits: ["Storyweaver", "Bruiser"], abillity: {name: "Savior's Protection", description: "Taunt enemies within 3 hexes and gain 50% AR + Armor and 50% MR + Magic Resist for 4 seconds. Galio is immobile and unstoppable during this time."}},
    {name: "Garen", cost: Cost.One, traits: ["Storyweaver", "Warden"], abillity: {name: "Courage", description: "Gain Shield for 5 seconds. Garen's next attack deals additional damage."}},
    {name: "Gnar", cost: Cost.Two, traits: ["Dryad", "Warden"], abillity: {name: "Boulder Toss", description: "Active: Fling a boulder at the current target, dealing physical damage to targets in a line."}},
    {name: "Hwei", cost: Cost.Five, traits: ["Mythic", "Artist"], abillity: {name: "A Brush with Fate", description: "Create an expanding paint pool around the most units that heals allies within for Health every second for 3 seconds. After 3 seconds, it explodes, healing allies within for Health and dealing magic damage to enemies."}},
    {name: "Illaoi", cost: Cost.Three, traits: ["Ghostly", "Arcanist", "Warden"], abillity: {name: "Prophet of Spirits", description: "Gain Shield and summon a tentacle near the current target for 4 seconds. The tentacle slams every second, dealing magic damage in a line and healing Illaoi."}},
    {name: "Irelia", cost: Cost.Five, traits: ["Storyweaver", "Duelist"], abillity: {name: "lade Dance", description: "Active: Command the blades to swiftly strike the three lowest Health enemies, dealing 100% AP + % AD and applying on-hit effects physical damage."}},
    {name: "Janna", cost: Cost.Two, traits: ["Dragonlord", "Invoker"], abillity: {name: "Heavenly Winds", description: "Grant Shield to Janna and the lowest Health ally for 4 seconds. Then, deal magic damage to the 2 nearest enemies."}},
    {name: "Jax", cost: Cost.One, traits: ["Inkshadow", "Warden"], abillity: {name: "Counter Strike", description: "Gain 60 Armor and Magic Resist for the next 2 seconds. Afterwards, deal magic damage to adjacent enemies. The current target takes magic damage and is Stunned for 1.5 seconds."}},
    {name: "Kaisa", cost: Cost.Four, traits: ["Inkshadow", "Trickshot"], abillity: {name: "Inkstorm", description: "Fire 20 waves at the current target over 2 seconds, each dealing % AD + % AP physical damage to the first enemy hit. If an enemy is hit by 10 waves, they take % AD + % AP physical damage per wave instead."}},
    {name: "Kayle", cost: Cost.Summon, traits: [], abillity: {name: "Celestial Flames", description: "Active: Fire a wave at the current target that deals magic damage to all enemies hit."}},
    {name: "Kayn", cost: Cost.Four, traits: ["Ghostly", "Reaper"], abillity: {name: "Shadow Assassin", description: "On first cast, transform, dealing physical damage to nearby enemies. While transformed, gain 30% Critical Strike Chance and critical attacks damage adjacent enemies. If the spin only hits one enemy, the damage is increased by 50%."}},
    {name: "Khazix", cost: Cost.One, traits: ["Heavenly", "Reaper"], abillity: {name: "Leap!", description: "Leap towards the lowest Health enemy within 3 hexes and deal % AD + % AP physical damage."}},
    {name: "Kindred", cost: Cost.Two, traits: ["Dryad", "Fated", "Reaper"], abillity: {name: "Flourish of Arrows", description: "Dash away from the current target and deal magic damage to them and magic damage to the nearest enemy."}},
    {name: "Kobuko", cost: Cost.One, traits: ["Fortune", "Bruiser"], abillity: {name: "Money Dance", description: "Active: Heal Health over 2 seconds. Kobuko's next attack deals bonus magic damage."}},
    {name: "KogMaw", cost: Cost.One, traits: ["Mythic", "Invoker", "Sniper"], abillity: {name: "Raining Artillery", description: "Deal magic damage to the lowest Health enemy within range. Every 2 casts, gain +1 Attack Range."}},
    {name: "LeeSin", cost: Cost.Four, traits: ["Dragonlord", "Duelist"], abillity: {name: "Dragon's Dance", description: "Kick the target's spirit out of their body, dealing physical damage increased by 50% of bonus Attack Speed, 30% Mana Reaving them, and Stunning them. Enemies hit by the spirit take physical damage. Gain Shield for 3 seconds."}},
    {name: "Lillia", cost: Cost.Four, traits: ["Mythic", "Invoker"], abillity: {name: "Eep!", description: "Hurl an orb towards the current target, dealing magic damage to the first enemy hit and adjacent enemies. It continues rolling as a smaller orb, dealing magic damage to enemies it hits."}},
    {name: "Lissandra", cost: Cost.Five, traits: ["Porcelain", "Arcanist"], abillity: {name: "Let 'em Brew", description: "Steep the current target in a teapot, Stunning and dealing magic damage over time. If they die, Lissandra turns them into a loot orb. Otherwise, Lissandra throws the teapot at the largest group of enemies, dealing magic damage to all enemies hit. (Rewards are doubled in Hyper Roll)"}},
    {name: "Lux", cost: Cost.Two, traits: ["Porcelain", "Arcanist"], abillity: {name: "Bunny Binding", description: "Throw a spirit bunny towards the farthest enemy, dealing magic damage to enemies along the way, reduced by 30% each time it hits an enemy. The first 2 enemies hit are Stunned for 1.5 seconds."}},
    {name: "Malphite", cost: Cost.One, traits: ["Heavenly", "Behemoth"], abillity: {name: "Topaz Skin", description: "For 8 seconds, gain Armor and attacks deal magic damage to enemies in a cone."}},
    {name: "Morgana", cost: Cost.Four, traits: ["Ghostly", "Sage"], abillity: {name: "The Tempest's Torment", description: "Create an expanding blizzard at the largest clump of enemies within range that deals magic damage over 3 seconds and Chills for 1 second."}},
    {name: "Nautilus", cost: Cost.Four, traits: ["Mythic", "Warden"], abillity: {name: "Depth Charge", description: "Send 3 shockwaves towards the most enemies in a line, dealing magic damage and Stunning all enemies hit."}},
    {name: "Neeko", cost: Cost.Two, traits: ["Heavenly", "Mythic", "Arcanist"], abillity: {name: "Hop Blossom", description: "Hop into the air, reducing damage taken and Healing over 2 seconds. After, slam down and deal magic damage to adjacent enemies."}},
    {name: "Ornn", cost: Cost.Four, traits: ["Dryad", "Behemoth"], abillity: {name: "Forge of the Forest", description: "Gain 15% HP + % AP shield for 4 seconds. Channel and forge upstoppably over 2 seconds, dealing magic damage to adjacent enemies over the duration. After, toss an ephemeral Completed item to the nearest ally."}},
    {name: "Qiyana", cost: Cost.Two, traits: ["Heavenly", "Duelist"], abillity: {name: "Supreme Display of Talent", description: "For 4 seconds, attacks deal 135% AD + % AP bonus physical damage to the target and 75% of the damage as physical damage to enemies behind them. Qiyana will dash to find the best angle."}},
    {name: "Rakan", cost: Cost.Five, traits: ["Dragonlord", "Lovers", "Altruist"], abillity: {name: "Grand Entrance", description: "Dash into the largest group of enemies and deal magic damage to enemies in a 2-hex range. Gain Shield for each enemy hit for 2 seconds and reduce their damage by 10% for 4 seconds."}},
    {name: "RekSai", cost: Cost.One, traits: ["Dryad", "Bruiser"], abillity: {name: "Uproot", description: "Gain 50 Armor and Magic Resist for 5 seconds. Stun nearby enemies for 1 second and deal 12% HP + % AP magic damage."}},
    {name: "Riven", cost: Cost.Two, traits: ["Storyweaver", "Altruist", "Bruiser"], abillity: {name: "Broken Wings", description: "Deal physical damage to the current target. Every 3rd cast, also deal physical damage to adjacent enemies and heal."}},
    {name: "Senna", cost: Cost.Two, traits: ["Inkshadow", "Sniper"], abillity: {name: "Absolution", description: "Fire a laser 2 Hexes beyond the current target, dealing physical damage to enemies hit. Grant Attack Damage to Senna and allies to the left and right for 4 seconds."}},
    {name: "Sett", cost: Cost.Five, traits: ["Fated", "Umbral", "Warden"], abillity: {name: "Light and Shadow", description: "Active: Slam the current target forward, Stunning them and dealing physical damage. Deal 200% AD + % AP + % of the target's maximum health as physical damage to enemies within 2.5 hexes."}},
    {name: "Shen", cost: Cost.Two, traits: ["Ghostly", "Behemoth"], abillity: {name: "Spirit's Refuge", description: "or 4 seconds, reduce damage taken by for Shen and for adjacent allies. Shen's next 3 attacks deal bonus true damage."}},
    {name: "Sivir", cost: Cost.One, traits: ["Storyweaver", "Trickshot"], abillity: {name: "On the Hunt", description: "Gain Attack Damage and grant Attack Speed to self and adjacent allies for 5 seconds."}},
    {name: "Soraka", cost: Cost.Three, traits: ["Heavenly", "Altruist"], abillity: {name: "Divine Judgement", description: "Active: Mana Reave the largest group of enemies within range. Deal magic damage to the center enemy and magic damage to adjacent enemies."}},
    {name: "Sylas", cost: Cost.Four, traits: ["Umbral", "Bruiser"], abillity: {name: "Unchain The Demon", description: "Dash around the target and slam, dealing magic damage and healing. Swipe after, dealing magic damage to nearby enemies."}},
    {name: "Syndra", cost: Cost.Four, traits: ["Fated", "Arcanist"], abillity: {name: "Phantom Butterflies", description: "Active: Throw all butterflies at the current target, dealing magic damage for each butterfly."}},
    {name: "TahmKench", cost: Cost.Three, traits: ["Mythic", "Bruiser"], abillity: {name: "Tongue Lash", description: "Gain 18% HP Shield for 6 seconds and deal magic damage to the current target. If Tahm Kench has more Health than them, deal 250% of the damage instead. Otherwise, gain bonus Shield."}},
    {name: "Teemo", cost: Cost.Two, traits: ["Fortune", "Trickshot"], abillity: {name: "Dim-Sum Delivery", description: "Throw a spoiled dumpling at the nearest non-poisoned enemy, poisoning them for magic damage over 10 seconds."}},
    {name: "Thresh", cost: Cost.Three, traits: ["Fated", "Behemoth"], abillity: {name: "Guided Passage", description: "Grant Shield to Thresh and the lowest Health ally for 4 seconds and deal magic damage to enemies adjacent to both. Thresh shares % of his Armor and Magic Resist with the shielded ally for 6 seconds."}},
    {name: "Tristana", cost: Cost.Three, traits: ["Fortune", "Duelist"], abillity: {name: "Firecracker Frenzy", description: "Gain Attack Damage for 6 seconds. Jump on the lowest Health enemy within range and deal % AD + % AP physical damage to adjacent enemies, before bouncing to a safe location."}},
    {name: "Udyr", cost: Cost.Five, traits: ["Inkshadow", "Behemoth", "SpiritWalker"], abillity: {name: "Ram Slam / Tiger Strikes", description: "Ram Slam: Gain Shield for 3 seconds and charge through the current target, briefly knocking up any enemies he hits. Grab the nearest enemy and slam them into the ground, dealing total magic damage to them and adjacent enemies."}},
    {name: "Volibear", cost: Cost.Three, traits: ["Inkshadow", "Duelist"], abillity: {name: "Ink Smash", description: "Empower the next three attacks. The first two heal and deal bonus magic damage. The final attack deals 10% HP + % AP magic damage and Stuns the target for 1 second."}},
    {name: "Wukong", cost: Cost.Five, traits: ["Heavenly", "Great", "Sage"], abillity: {name: "Legendary Prowess", description: "Cycle through the following abilities: Throw staff out, dealing physical damage to the current target and Stunning them. Spin, dealing physical damage to enemies within 1-hex range. Dash to hit the most enemies in a 3-hex line, then slam down staff dealing % AD + % AP physical damage to enemies hit."}},
    {name: "Xayah", cost: Cost.Five, traits: ["Dragonlord", "Lovers", "Trickshot"], abillity: {name: "Feathers Fly!", description: "Throw feathers at the 4 closest enemies, each dealing physical damage. Then, recall the feathers, dealing % AD + % AP physical damage to enemies they pass through."}},
    {name: "Yasuo", cost: Cost.One, traits: ["Fated", "Duelist"], abillity: {name: "Steel Tempest", description: "Active: Gain Shield for 5 seconds and deal magic damage to the current target."}},
    {name: "Yone", cost: Cost.Three, traits: ["Umbral", "Reaper"], abillity: {name: "Fate Sealed", description: "Dash in spirit form to the furthest enemy within Hexes for 3 seconds, dealing physical damage and Wounding enemies along the way for 5 seconds. While in spirit form, gain Shield and 80% Attack Speed. Afterwards, Yone returns to his starting position."}},
    {name: "Yorick", cost: Cost.Two, traits: ["Umbral", "Behemoth"], abillity: {name: "Dark Despoil", description: "Sap power from the 2 nearest enemies, gaining max Health and dealing magic damage to them over 3 seconds."}},
    {name: "Zoe", cost: Cost.Three, traits: ["Fortune", "Storyweaver", "Arcanist"], abillity: {name: "Calculated!", description: "Active: Fire a missile dealing magic damage to the current target. The missile ricochets to the farthest unit within 2 hexes, dealing magic damage."}},
    {name: "Zyra", cost: Cost.Two, traits: ["Storyweaver", "Sage"], abillity: {name: "Paper Thorns", description: "ummon 2 Vine Lashers that attack the nearest enemy 3 times. Their attacks deal magic damage and Wound their targets for 6 seconds."}},
]
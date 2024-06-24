
export const getTraitByName = (name: string): Trait => {
    const trait : Trait | undefined = traits.find(trait => trait.name == name);
    return trait ? trait : traits[0];
}

export interface Trait {
    name: TraitName
    description: string
    steps: TraitActive[]
}

export interface TraitActive {
    amount: number
    description: string
}

export type TraitName =
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

export const traits: Trait[] = [
    { name: "Ghostly", description: "Upon dealing or taking damage 6 times, Ghostly units send 2 spectres to haunt nearby enemies and heal 2% max Health every 2 seconds. Haunted enemies take bonus damage for each spectre on them, and pass spectres on death.", steps: [{ amount: 2, description: "5% per spectre" }, { amount: 4, description: "12% per spectre" }, { amount: 6, description: "20% per spectre" }, { amount: 8, description: "35% per spectr" }] },
    { name: "Inkshadow", description: "Gain unique Inkshadow items. Inkshadow champions gain 5% bonus damage and damage reduction. Which Inkshadow items you get changes each game.", steps: [{ amount: 3, description: "An Inkshadow item (Different from each game)" }, { amount: 5, description: "An Inkshadow item (Different from each game), and 5% more bonus damage and damage reduction." }, { amount: 7, description: "An Inkshadow item (Different from each game)" }] },
    { name: "Bruiser", description: "Your team gains 100 maximum Health. Bruisers gain additional maximum Health.", steps: [{ amount: 2, description: "20% Health" }, { amount: 4, description: "40% Health" }, { amount: 6, description: "65% Health" }, { amount: 8, description: "80% max Health, Every 3 seconds, Bruisers deal 6% Health bonus physical damage on their next attack." }] },
    { name: "Sniper", description: "Innate: Snipers gain 1 Attack Range. Snipers deal more damage to targets farther away.", steps: [{ amount: 2, description: "7% damage per hex." }, { amount: 4, description: "15% damage per hex." }, { amount: 6, description: "30% damage per hex. Snipers gain an additional 2 Attack Range." }] },
    { name: "Arcanist", description: "Arcanists gain Ability Power and grant Ability Power to allies.", steps: [{ amount: 2, description: "20 to all allies" }, { amount: 4, description: "45 for Arcanists, 20 for others" }, { amount: 6, description: "80 for Arcanists, 40 for others" }, { amount: 8, description: "125 for Arcanists, 125 for others" }] },
    { name: "Warden", description: "Wardens take less damage. For the first 10 seconds of combat, they take an additional 15% less damage.", steps: [{ amount: 2, description: "10% Damage Reduction" }, { amount: 4, description: "20% Damage Reduction" }, { amount: 6, description: "33% Damage Reduction" }] },
    { name: "Reaper", description: "", steps: [{ amount: 2, description: "Reapers' Abilities can critically strike and they gain 20% Critical Strike Chance." }, { amount: 4, description: "Additionally, Reapers' bleed enemis for 50% true damage over 3 seconds." }] },
    { name: "Sage", description: "Combat start: Allies in the front 2 rows gain Omnivamp. Allies in the back 2 rows gain Ability Power.", steps: [{ amount: 2, description: "12% Omnivamp, 15 Ability Power" }, { amount: 3, description: "20% Omnivamp, 30 Ability Power" }, { amount: 4, description: "30% Omnivamp, 45 Ability Power" }, { amount: 5, description: "45% Omnivamp, 75 Ability Power" }] },
    { name: "Behemoth", description: "Behemoths gain increased Armor and Magic Resist. Whenever a Behemoth dies, the nearest Behemoth gains 50% more for 5 seconds.", steps: [{ amount: 2, description: "25 Armor, 25 Magic Resist" }, { amount: 4, description: "55 Armor, 55 Magic Resist" }, { amount: 6, description: "80 Armor, 80 Magic Resist" }] },
    { name: "Mythic", description: "Mythic champions gain Health, Ability Power, and Attack Damage. After 4 player combats, they become Epic, increasing the bonus by 50%.", steps: [{ amount: 3, description: "8% Heath, 10% Ability Power and Attack Damage." }, { amount: 5, description: "18% Heath, 20% Ability Power and Attack Damage." }, { amount: 7, description: "25% Heath, 32% Ability Power and Attack Damage." }, { amount: 10, description: "Instantly become Epic. The bonus is increased by 250% instead." }] },
    { name: "Trickshot", description: "Trickshots' abilities ricochet. Each ricochet deals a percentage of the previous bounce's damage.", steps: [{ amount: 2, description: "1 ricochet; 40% of previous damage" }, { amount: 4, description: "2 ricochets, 60% of previous damage" }] },
    { name: "Artist", description: "", steps: [{ amount: 1, description: "The Artist paints the champion you place in a special bench slot. Get a 1-star copy of the champion placed there when the Artist's work is complete. Rounds to Complete = Unit Cost" }] },
    { name: "Invoker", description: "Every 3 seconds, your units gain Mana.", steps: [{ amount: 2, description: "5 Mana to all allies." }, { amount: 4, description: "20 Mana to Invokers; 5 Mana to others." }, { amount: 6, description: "35 Mana to Invokers; 20 Mana to others" }] },
    { name: "Heavenly", description: "Heavenly champions grant a unique stat bonus to your team, increased by their star level and each Heavenly unit in play. Kha'Zix - +15% Crit chance Malphite - +8 AR/MR Neeko - +60 HP Qiyana - +10% AD Soraka - +10% AP Wukong - +12% AS Emblem - +3% Omnivamp 2-stars grant 30% more. 3-stars grant 50% more.", steps: [{ amount: 2, description: "100% bonus." }, { amount: 3, description: "115% bonus" }, { amount: 4, description: "135% bonus" }, { amount: 5, description: "165% bonus" }, { amount: 6, description: "200% bonus" }, { amount: 7, description: "240% bonus" }] },
    { name: "Duelist", description: "Duelists gain Attack Speed on each attacks, stacking up to 12 times.", steps: [{ amount: 2, description: "5% Attack Speed" }, { amount: 4, description: "9% Attack Speed" }, { amount: 6, description: "13% Attack Speed, Duelists take 12% less damage" }, { amount: 8, description: "18% Attack Speed, Duelists take 18% less damage" }] },
    { name: "Altruist", description: "Altruists heal the lowest Health ally for 15% of damage they deal. Your team gains Armor and Magic Resist.", steps: [{ amount: 2, description: "10 Armor and Magic Resist" }, { amount: 3, description: "25 Armor and Magic Resist" }, { amount: 4, description: "45 Armor and Magic Resist" }] },
    { name: "Great", description: "", steps: [{ amount: 1, description: "Every 3 casts, Wukong grows his weapon, modifying his Abilities." }] },
    { name: "Dragonlord", description: "After 8 seconds of combat, the Dragon strikes the board, dealing true damage to enemies and granting all allies Attack Speed for the rest of combat.", steps: [{ amount: 2, description: "5% Health damage, 12% Attack Speed." }, { amount: 3, description: "10% Health damage, 18% Attack Speed." }, { amount: 4, description: "12% Health damage, and Stuns for 1.5 seconds." }, { amount: 5, description: "18% Health damage, 45% Attack Speed." }] },
    { name: "Lovers", description: "", steps: [{ amount: 1, description: "Change which Lover takes the field depending on whether they are placed in the front or back 2 rows. When the fielded Lover casts, the other provides a bonus effect. Front: Trickshot Xayah Back: Altruist Rakan" }] },
    { name: "Storyweaver", description: "Storyweavers summon a Hero named Kayle and evolve her. Storyweavers gain max Health. Each Storyweaver star level increases Kayles Health and Ability Power. Kayle gets 15% Attack Speed for each game Stage.", steps: [{ amount: 3, description: "Pick a supportive effect. +60 Heath." }, { amount: 5, description: "Pick a combat effect. +100 Heath." }, { amount: 7, description: "Pick a combat effect. +150 Heath." }, { amount: 10, description: "Ascend. +250 Heath." }] },
    { name: "Fortune", description: "When you lose a fight, gain Luck. The more fights in a row you lose, the more Luck you get. Lose Luck when you win.", steps: [{ amount: 3, description: "Roll a die; in that many player combats, hold a Festival! At the Festival, you have the option to convert your Luck into rewards." }, { amount: 5, description: "Heal 3 player health at the start of each player combat." }, { amount: 7, description: "Fortune smiles! Gain extra rewards and more luck every turn no matter what, and hold a Festival every turn." }] },
    { name: "Porcelain", description: "After casting, Porcelain champions boil, gaining Attack Speed and taking less damage for 4 seconds.", steps: [{ amount: 2, description: "30% Attack Speed; 20% reduced damage" }, { amount: 4, description: "60% Attack Speed; 35% reduced damage" }, { amount: 6, description: "125% Attack Speed; 60% reduced damage" }] },
    { name: "Fated", description: "Hover one Fated unit over another to form a pair and unlock a Fated Bonus. Your pair gains 20% Health.", steps: [{ amount: 3, description: "Pairs gets the Fated Bonus." }, { amount: 5, description: "All Fated champions get 200% of the Fated Bonus." }, { amount: 7, description: "All Fated champions get 300% of the Fated Bonus." }, { amount: 10, description: "All Fated champions gain 300% of EVERY Fated Bonus." }] },
    { name: "Dryad", description: "Dryads gain Ability Power and 150 Health. Each enemy death grants additional Health.", steps: [{ amount: 2, description: "15 Ability Power; 3 Health per enemy death" }, { amount: 4, description: "30 Ability Power; 7 Health per enemy death" }, { amount: 6, description: "65 Ability Power; 11 Health per enemy death" }] },
    { name: "Umbral", description: "The moon illuminates hexes, Shielding units placed in them at the start of combat. Umbral units in illuminated hexes execute low Health enemies.", steps: [{ amount: 2, description: "200 Shield; 10% Health execute" }, { amount: 4, description: "500 Shield; 18% Health execute" }, { amount: 6, description: "1000 Shield and illuminate the whole board" }, { amount: 8, description: "Executed enemies have a 100% chance to drop loot; 40% Health execute" }] },
    { name: "SpiritWalker", description: "", steps: [{ amount: 1, description: "The first time the Spirit Walker drops below 50% Health, he unleashes the rage within, healing to full Health, gaining increased movement speed, and changing his Ability from Ram Slam to Tiger Strikes." }] },
    { name: "Exalted", description: "Something xp orb and damage", steps: [{ amount: 3, description: "Gain 1xp per player combat, 3% damage" }, { amount: 5, description: "Gain 2xp, 7% damage" }] }
];

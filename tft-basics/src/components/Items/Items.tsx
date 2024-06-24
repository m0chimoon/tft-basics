import { useState } from "react";
import ItemTooltip from "./ItemTooltip"

const Items = () => {
  const components: Component[] = getComponents(); // refers to the Type Component[] that contains all components
  const items: Item[] = getItemInfo();

  // filter items by components
  const [filteredItems, setFilteredItems] = useState(items)
  
  const filterItems = (componentName: Component) => {
    const filter = componentName
    setFilteredItems(items.filter((item) => item.components.includes(filter)))
  }

  const resetFilter = (): void => {
    setFilteredItems(items)
  }
    
  return (
    <div className="flex flex-col items-center">
      <div className="flex flex-col mb-6">
        <h3 className="text-xl uppercase text-[#f6b03f] font-semibold mb-6 self-start">Components</h3>
        <div className="flex gap-3 justify-center">
          {components.map(component => (
            <img key={component} onClick={() => filterItems(component)} className="h-14 w-14 cursor-pointer hover:opacity-80 rounded-sm" src={`/src/assets/items/${component.split(" ").join("")}.png`} />
          ))}
        </div>
      </div>
        
      <div className="flex flex-col w-[650px]">
        <h3 className="text-xl uppercase text-[#f6b03f] font-semibold self-start pl-6 mb-6">Items</h3>
        <p className="w-14 cursor-pointer uppercase text-[#f6b03f] font-semibold pb-2 hover:underline ml-[-50px] mb-[-60px]" onClick={resetFilter}>Show All</p>
        <div className="flex gap-3 flex-wrap justify-center">
          {filteredItems.map((item, index) => (
            <ItemTooltip key={index} item ={item}>
              <img className=" h-14 w-14 rounded-sm hover:opacity-80" src={`/src/assets/items/${item.name.split(" ").join("")}.png`} />
            </ItemTooltip>
          ))}
        </div>
      </div>
    </div>
 )
}

export default Items

type Component =
  "BF Sword" |
  "Chain Vest" |
  "Giant's Belt" |
  "Needlessly Large Rod" |
  "Negatron Cloak" |
  "Recurve Bow" |
  "Sparring Gloves" |
  "Spatula" |
  "Tear of the Goddess" |
  "none";

type ItemName = 
  "Dryad Emblem" |
  "Fated Emblem" |
  "Ghostly Emblem" |
  "Heavenly Emblem" |
  "Mythic Emblem" |
  "Porcelain Emblem" |
  "Storyweaver Emblem" |
  "Umbral Emblem" |
  "Adaptive Helm" |
  "Archangel's Staff" |
  "Bloodthirster" |
  "Blue Buff" |
  "Bramble Vest" |
  "Crownguard" |
  "Deathblade" |
  "Dragon's Claw" |
  "Edge of Night" |
  "Evenshroud" |
  "Gargoyle Stoneplate" |
  "Giant Slayer" |
  "Guardbreaker" |
  "Guinsoo's Rageblade" |
  "Hand of Justice" |
  "Hextech Gunblade" |
  "Infinity Edge" |
  "Ionic Spark" |
  "Jeweled Gauntlet" |
  "Last Whisper" |
  "Morellonomicon" |
  "Nashor's Tooth" |
  "Protector's Vow" |
  "Quicksilver" |
  "Rabadon's Deathcap" |
  "Red Buff" |
  "Redemption" |
  "Runaan's Hurricane" |
  "Spear of Shojin" |
  "Statikk Shiv" |
  "Steadfast Heart" |
  "Sterak's Gage" |
  "Sunfire Cape" |
  "Tactician's Crown" |
  "Thief's Gloves" |
  "Titan's Resolve" |
  "Warmog's Armor"

 export interface Item {
  name: ItemName
  description: string
  components: Component[]
}

const getComponents = (): Component[] => {
  const components: Component[] = [
    "BF Sword",
    "Chain Vest",
    "Giant's Belt",
    "Needlessly Large Rod",
    "Negatron Cloak",
    "Recurve Bow",
    "Sparring Gloves",
    "Spatula",
    "Tear of the Goddess"
  ]
  return components;
}

const getItemInfo = (): Item[] => {
  const items: Item[] = [
    {name: "Dryad Emblem", description: "The holder gains the Dryad trait.", components: ["Spatula", "Giant's Belt"] },
    {name: "Fated Emblem", description: "The holder gains the Fated trait.", components: ["Spatula", "Needlessly Large Rod"]},
    {name: "Ghostly Emblem", description: "The holder gains the Ghostly trait.", components: ["Spatula", "BF Sword"]},
    {name: "Heavenly Emblem", description: "The holder gains the Heavenly trait.", components: ["Spatula", "Negatron Cloak"]},
    {name: "Mythic Emblem", description: "The holder gains the Mythic trait.", components: ["Spatula", "Tear of the Goddess"]},
    {name: "Porcelain Emblem", description: "The holder gains the Porcelain trait.", components: ["Spatula", "Recurve Bow"]},
    {name: "Storyweaver Emblem", description: "The holder gains the Storyweaver trait.", components: ["Spatula", "Chain Vest"]},
    {name: "Umbral Emblem", description: "The holder gains the Umbral trait.", components: ["Spatula", "Sparring Gloves"]},
    {name: "Adaptive Helm", description: "Combat Start: Gain different bonuses based on starting position. Front Two Rows: 40 Armor and Magic Resist. Gain 1 Mana when struck by an attack. Back Two Rows: 20 Ability Power. Gain 10 Mana every 3 seconds.", components: ["Negatron Cloak", "Tear of the Goddess"]},
    {name: "Archangel's Staff", description: "Combat start: Gain 30 Ability Power every 5 seconds in combat.", components: ["Needlessly Large Rod", "Tear of the Goddess"]},
    {name: "Bloodthirster", description: "Gain 20% Omnivamp. Once per combat at 40% Health, gain a 25% max Health Shield that lasts up to 5 seconds. Omnivamp: heal for some of damage dealt.", components: ["BF Sword", "Negatron Cloak"]},
    {name: "Blue Buff", description: "Max mana reduced by 10. When the holder gets a takedown, they deal 7% more damage for 8 seconds. [Unique - only 1 per champion.]", components: ["Tear of the Goddess", "Tear of the Goddess"]},
    {name: "Bramble Vest", description: "Gain 5% max health. Take 7% reduced damage from attacks. When struck by any attack, deal 100 magic damage to all adjacent enemies. Cooldown: 2 seconds.", components: ["Chain Vest", "Chain Vest"]},
    {name: "Crownguard", description: "Combat start: Gain a 30% max Health Shield for 8 seconds. When the shield expires, gain 35 Ability Power.", components: ["Chain Vest", "Needlessly Large Rod"]},
    {name: "Deathblade", description: "Deal 7% bonus damage.", components: ["BF Sword", "BF Sword"]},
    {name: "Dragon's Claw", description: "Gain 9% max health. Every 2 seconds, heal 5% max Health.", components: ["Negatron Cloak", "Negatron Cloak"]},
    {name: "Edge of Night", description: "Once per combat: At 60% Health, briefly become untargetable and shed negative effects. Then, gain 15% bonus Attack Speed. [Unique - only 1 per champion.]", components: ["BF Sword", "Chain Vest"]},
    {name: "Evenshroud", description: "30% Sunder enemies within 2 hexes. Gain 25 Armor and Magic Resist for the first 10 seconds of combat. Sunder: Reduce Armor.", components: ["Giant's Belt", "Negatron Cloak"]},
    {name: "Gargoyle Stoneplate", description: "Gain 10 Armor and 10 Magic Resist for each enemy targeting the holder.", components: ["Chain Vest", "Negatron Cloak"]},
    {name: "Giant Slayer", description: "Deal 25% more damage to enemies with more than 1600 maximum Health.", components: ["BF Sword", "Recurve Bow"]},
    {name: "Guardbreaker", description: "After damaging a Shield, deal 25% more damage for 3 seconds.", components: ["Giant's Belt", "Sparring Gloves"]},
    {name: "Guinsoo's Rageblade", description: "Attacks grant 5% stacking Attack Speed.", components: ["Needlessly Large Rod", "Recurve Bow"]},
    {name: "Hand of Justice", description: "Gain 2 effects: 15% Attack Damage and 15 Ability Power, 15% Omnivamp. Each round, randomly double 1 of these effects. Omnivamp: heal for some of damage dealt.", components: ["Tear of the Goddess", "Sparring Gloves"]},
    {name: "Hextech Gunblade", description: "Grant 22% Omnivamp, which also heals the lowest percent Health ally. Omnivamp: heal for some of damage dealt.", components: ["BF Sword", "Needlessly Large Rod"]},
    {name: "Infinity Edge", description: "Abilities can critically strike. If the holder's abilities can already critically strike, gain 10% Critical Strike Damage instead.", components: ["BF Sword", "Sparring Gloves"]},
    {name: "Ionic Spark", description: "30% Shred enemies within 2 hexes. When enemies cast an Ability, deal magic damage equal to 160% of their maximum Mana. Shred: Reduce Magic Resist.", components: ["Needlessly Large Rod", "Negatron Cloak"]},
    {name: "Jeweled Gauntlet", description: "Abilities can critically strike. If the holder's abilities can already critically strike, gain 10% Critical Strike Damage instead.", components: ["Needlessly Large Rod", "Sparring Gloves"]},
    {name: "Last Whisper", description: "Physical damage 30% Sunders the target for 3 seconds. This effect does not stack. [Unique - only 1 per champion]. Sunder: Reduce Armor.", components: ["Recurve Bow", "Sparring Gloves"]},
    {name: "Morellonomicon", description: "Attacks and Abilities deal 1% Burn and 33% Wound to enemies for 10 seconds. [Unique - only 1 per champion]. Burn: Deals a percent of the target's maximum Health as true damage every second. Wound: Reduces healing received.", components: ["Giant's Belt", "Needlessly Large Rod"]},
    {name: "Nashor's Tooth", description: "After casting an Ability, gain 40% Attack Speed for 5 seconds.", components: ["Giant's Belt", "Recurve Bow"]},
    {name: "Protector's Vow", description: "Once per combat at 40% Health, gain a 25% max Health Shield that lasts 5 seconds and gain 20 Armor and 20 Magic Resist.", components: ["Chain Vest", "Tear of the Goddess"]},
    {name: "Quicksilver", description: "Combat start: Gain immunity to crowd control for 14 seconds. During this time, gain 3% Attack Speed every 2 seconds. [Unique - only 1 per champion.]", components: ["Negatron Cloak", "Sparring Gloves"]},
    {name: "Rabadon's Deathcap", description: "Deal 20% bonus damage.", components: ["Needlessly Large Rod", "Needlessly Large Rod"]},
    {name: "Red Buff", description: "Deal 5% bonus damage. Attacks and Abilities 1% Burn and 33% Wound enemies for 5 seconds. Burn: Deals a percent of the target's maximum Health as true damage every second. Wound: Reduces healing received.", components: ["Recurve Bow", "Recurve Bow"]},
    {name: "Redemption", description: "Heal allies within 1 hex for 15% of their missing Health every 5 seconds. They also take 10% less damage for 5 seconds (damage reduction does not stack). [Aura item.]", components: ["Giant's Belt", "Tear of the Goddess"]},
    {name: "Runaan's Hurricane", description: "Attacks fire a bolt at a nearby enemy, dealing 55% Attack Damage as physical damage.", components: ["Negatron Cloak", "Recurve Bow"]},
    {name: "Spear of Shojin", description: "Attacks grant 5 bonus Mana.", components: ["BF Sword", "Tear of the Goddess"]},
    {name: "Statikk Shiv", description: "Every 3rd attack deals 35 magic damage and 30% Shreds 4 enemies for 5 seconds. Shred: Reduce Magic Resist.", components: ["Recurve Bow", "Tear of the Goddess"]},
    {name: "Steadfast Heart", description: "Take 8% less damage. While above 50% Health, take 15% less damage instead.", components: ["Chain Vest", "Sparring Gloves"]},
    {name: "Sterak's Gage", description: "Once per combat at 60% Health, gain 20% max Health and 35% Attack Damage.", components: ["BF Sword", "Giant's Belt"]},
    {name: "Sunfire Cape", description: "Every 2 seconds, deal 1% Burn and 33% Wound to an enemy within 2 hexes for 10 seconds. [Unique - only 1 per champion]. Burn: Deals a percent of the target's maximum Health as true damage every second. Wound: Reduces healing received.", components: ["Chain Vest", "Giant's Belt"]},
    {name: "Tactician's Crown", description: "Your team gains +1 maximum team size.", components: ["Spatula", "Spatula"]},
    {name: "Thief's Gloves", description: "Each round: Equip 2 random items. [Consumes 3 item slots.]", components: ["Sparring Gloves", "Sparring Gloves"]},
    {name: "Titan's Resolve", description: "Gain 1% Attack Damage and 1 Ability Power when attacking or taking damage, stacking up to 25 times. At full stacks, gain 20 Armor and 20 Magic Resist.", components: ["Chain Vest", "Recurve Bow"]},
    {name: "Warmog's Armor", description: "Gain 7% max health.", components: ["Giant's Belt", "Giant's Belt"]},
  ]
  return items;
}

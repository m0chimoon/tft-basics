import { useState } from "react";

const Items = () => {
  const components: Component[] = getComponents();
  const items: string[] = getItemNames();

  // filter items by components
  const [filteredItems, setFilteredItems] = useState(items);

 return (
  <div className="flex flex-row gap-10">
    <div className="flex flex-col justify-center gap-2">
    <h3 className="text-2xl mb-2">Components</h3>
      {components.map(component => (
        <div key={component}>
          <img className="cursor-pointer hover:opacity-70" src={`/src/assets/items/${component.split(" ").join("")}.png`}/>
        </div>
      ))}
    </div>

    <div className="flex flex-wrap place-content-start">
      {items.map(item => (
        <div key={item}>
          <img className=" h-12 w-12" src={`/src/assets/items/${item.split(" ").join("")}.png`}/>
        </div>
      ))}
    </div>
  </div>
 )
}

export default Items

type Component =
  "BF Sword" |
  "Chain Vest" |
  "Giants Belt" |
  "Needlessly Large Rod" |
  "Negatron Cloak" |
  "Recurve Bow" |
  "Sparring Gloves" |
  "Spatula" |
"Tear of the Goddess";

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

interface Item {
  name: ItemName
  description: string
  components: Component[]
}

const getComponents = (): Component[] => {
  const components: Component[] = [
    "BF Sword",
    "Chain Vest",
    "Giants Belt",
    "Needlessly Large Rod",
    "Negatron Cloak",
    "Recurve Bow",
    "Sparring Gloves",
    "Spatula",
    "Tear of the Goddess"
  ]
  return components;
}

// Do Type here
const getItemNames = (): string[] => {
  const yo = ["Dryad Emblem",
  "Fated Emblem",
  "Ghostly Emblem",
  "Heavenly Emblem",
  "Mythic Emblem",
  "Porcelain Emblem",
  "Storyweaver Emblem",
  "Umbral Emblem",
  "Adaptive Helm",
  "Archangel's Staff",
  "Bloodthirster",
  "Blue Buff",
  "Bramble Vest",
  "Crownguard",
  "Deathblade",
  "Dragon's Claw",
  "Edge of Night",
  "Evenshroud",
  "Gargoyle Stoneplate",
  "Giant Slayer",
  "Guardbreaker",
  "Guinsoo's Rageblade",
  "Hand of Justice",
  "Hextech Gunblade",
  "Infinity Edge",
  "Ionic Spark",
  "Jeweled Gauntlet",
  "Last Whisper",
  "Morellonomicon",
  "Nashor's Tooth",
  "Protector's Vow",
  "Quicksilver",
  "Rabadon's Deathcap",
  "Red Buff",
  "Redemption",
  "Runaan's Hurricane",
  "Spear of Shojin",
  "Statikk Shiv",
  "Steadfast Heart",
  "Sterak's Gage",
  "Sunfire Cape",
  "Tactician's Crown",
  "Thief's Gloves",
  "Titan's Resolve",
"Warmog's Armor"]
return yo;
}

const tgetItemNames = (): Item[] => {
  const items: Item[] = [
    { name: "Dryad Emblem", description: "+1 dryd", components: ["Spatula", "Giants Belt"] },
  
  
  ]
  return items;
}
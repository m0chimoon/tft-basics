const Items = () => {
  const components: Component[] = getComponents();
  const items: string[] = getItemNames();

 return (
  <div>
    <h3 className="text-2xl mb-2">Components</h3>
    <div className="flex justify-center">
      {components.map(component => (
        <div key={component}>
          <img src={`/src/assets/items/${component.replace(" ", "")}.png`}/>
        </div>
      ))}
    </div>

    <div className="flex flex-wrap justify-center">
      {items.map(item => (
        <div key={item}>
          <img src={`/src/assets/items/${item.replace(" ", "")}.png`}/>
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
"Tear Of The Godess";

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
  name: string
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
    "Tear Of The Godess"
  ]
  return components;
}

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
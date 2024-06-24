import { useState } from "react";
import ItemTooltip from "./ItemTooltip"
import { Component, Item, getComponents, getItemInfo } from "./ItemData";

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

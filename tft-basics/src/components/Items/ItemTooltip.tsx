import { useState } from "react";
import { Item } from "./ItemData";

interface TooltipProps {
  children: JSX.Element | JSX.Element[]
  item: Item
}

const ItemTooltip = (props: TooltipProps) => {
  let timeout: number;
  const [tooltipActive, setTooltipActive] = useState(false)
  const item = props.item

  const showTooltip = (): void => {
    timeout = setTimeout(() => {
      setTooltipActive(true)
    }, 150)
  }

  const hideTooltip = (): void => {
    clearInterval(timeout)
    setTooltipActive(false)
  }

  return (
    <div className="inline-block relative" onMouseEnter={showTooltip} onMouseLeave={hideTooltip}>
      {props.children}
      {tooltipActive && (
        <div className="absolute left-1/2 -translate-x-1/2 bg-[#0d1d2d] z-10 whitespace-nowrap flex flex-col w-[328px] items-center rounded-sm bottom-full mb-3">
          <p className="text-[#f6b03f] pt-2 text-lg mb-1">{item.name}</p>
          <p className="text-base w-[295px] text-wrap text-center mb-3">{item.description}</p>
          <ul className="flex flex-col gap-3 mb-4">
            {item.components.map((component, index) => (
              <li key={index} className="flex flex-row items-center">
                <img src={`/src/assets/items/${component.split(" ").join("")}.png`} className="w-11 rounded-sm" />
                <p className="text-base text-wrap text-center pl-2 text-[#f6b03f]">{component}</p>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  )
}

export default ItemTooltip
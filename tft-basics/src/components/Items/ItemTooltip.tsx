import { useState } from "react";
import { Item } from "./Items"

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
        <div className="absolute left-1/2 -translate-x-1/2 bg-[#0d1d2d] z-10 whitespace-nowrap flex flex-col w-[350px] items-center rounded-sm bottom-full mb-3">
          <p className="text-[#f6b03f] pt-2 text-lg">{item.name}</p>
          <p className="text-base w-[300px] text-wrap text-center mb-3">{item.description}</p>
          <ul className="flex flex-col gap-3 mb-3">
            {item.components.map((component, index) => (
              <li key={index} className="flex flex-row items-center">
                <img src={`/src/assets/items/${component.split(" ").join("")}.png`} className="w-11 rounded-sm" />
                <p className="text-base text-wrap text-center pl-2">{component}</p>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  )
}

export default ItemTooltip
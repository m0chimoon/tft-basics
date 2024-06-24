import { Cost } from "../Champions/ChampionData";

const costToColorMapBorder: Record<Cost, string> = {
    [Cost.Summon]: "border-amber-600",
    [Cost.One]: "border-gray-400",
    [Cost.Two]: "border-green-600",
    [Cost.Three]: "border-blue-500",
    [Cost.Four]: "border-purple-500",
    [Cost.Five]: "border-yellow-400"
};
    
export const setChampColor = (cost: Cost): string => {
    return costToColorMapBorder[cost];
};

const costToColorMapBackground: Record<Cost, string> = {
    [Cost.Summon]: "border-amber-600",
    [Cost.One]: "bg-gray-400",
    [Cost.Two]: "bg-green-600",
    [Cost.Three]: "bg-blue-500",
    [Cost.Four]: "bg-purple-500",
    [Cost.Five]: "bg-yellow-400"
  };
    
export const setChampBackgroundColor = (cost: Cost): string => {
    return costToColorMapBackground[cost];
};
import ChampionHex from "./ChampionHex";


interface BoardRow {
  class?: string
}

export const BoardRow = (props: BoardRow) => {
  return (
    <div className={`${props.class} flex gap-2`}>
      <ChampionHex />
      <ChampionHex />
      <ChampionHex />
      <ChampionHex />
      <ChampionHex />
      <ChampionHex />
      <ChampionHex />
    </div>
  );
};

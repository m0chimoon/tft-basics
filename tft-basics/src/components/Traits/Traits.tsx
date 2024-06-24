import { Trait, TraitName, getTraitByName } from "./TraitData";

interface IProps {
  trait: TraitName
}

const Traits = (props: IProps) => {

  const trait: Trait = getTraitByName(props.trait);

  return (
    <div className="my-6 rounded py-4 text-left px-10">
      <div className="flex gap-3 place-items-center">
        <img className="h-8 w-8" src={`/src/assets/traits/${trait.name}.png`} />
        <h2 className="text-xl">{trait.name}</h2>
      </div>
      <p className="m-1">{trait.description}</p>
      {trait.steps.map((step, index) => (
        <p className="m-1" key={index}>{step.amount}: {step.description}</p>
      ))}
    </div>
  )
}
export default Traits

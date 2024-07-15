import { TraitsProvider } from "./TraitsContext"
import TraitsView from "./TraitsView"
import { BoardRow } from "./BoardRow"

const Comps = () => {

 return (
  <TraitsProvider>
    <section className="flex justify-center max-lg:flex-col-reverse max-lg:gap-10 max-lg:place-items-center">
      <div>
        <TraitsView />
      </div>
      <div className="flex flex-col place-items-center">
        <BoardRow />
        <BoardRow class="ml-20 max-md:ml-14 max-sm:ml-11 max-[500px]:ml-6" />
        <BoardRow />
        <BoardRow class="ml-20 max-md:ml-14 max-sm:ml-11 max-[500px]:ml-6" />
      </div>
    </section>
  </TraitsProvider>
 )
}
export default Comps


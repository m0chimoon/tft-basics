import { TraitsProvider } from "./TraitsContext"
import TraitsView from "./TraitsView"
import { BoardRow } from "./BoardRow"

const Comps = () => {

 return (
  <TraitsProvider>
    <section className="flex justify-center">
      <div>
        <TraitsView />
      </div>
      <div className="flex flex-col place-items-center">
        <BoardRow />
        <BoardRow class="ml-20" />
        <BoardRow />
        <BoardRow class="ml-20" />
      </div>
    </section>
  </TraitsProvider>
 )
}
export default Comps


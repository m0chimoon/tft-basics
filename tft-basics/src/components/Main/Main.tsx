import tftlanding from "../../assets/tftlanding.png"
import tftpengu from "../../assets/tftpengu.png"
import tfthorn from "../../assets/tfthorn.png"

const Main = () => {
  return (
    <main className="flex max-w-[1280px] justify-center mt-14">
      <img src={tftpengu} className="max-w-[280px] max-h-[280px] animate-wiggle animate-infinite animate-duration-[3400ms] animate-ease-in-out" />
      <img src={tftlanding} className="max-w-[750px] max-h-[220px] mx-12 "/>
      <img src={tfthorn} className="max-w-[200px] max-h-[200px] animate-wiggle animate-infinite animate-duration-[3400ms] animate-ease-in-out pl-3" />
    </main>
 )
}

export default Main
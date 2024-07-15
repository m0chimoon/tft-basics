import tftlanding from "../../assets/tftlanding.png"
import tftpengu from "../../assets/tftpengu.png"
import tfthorn from "../../assets/tfthorn.png"

const Main = () => {
  return (
    <main className="flex justify-center mt-[10%]">
      <img src={tftpengu} className="w-[10%] animate-wiggle animate-infinite animate-duration-[3400ms] animate-ease-in-out" />
      <img src={tftlanding} className="w-6/12 h-2/4 mx-12 "/>
      <img src={tfthorn} className="w-[10%] h-[14%] animate-wiggle animate-infinite animate-duration-[3400ms] animate-ease-in-out animate-reverse" />
    </main>
 )
}

export default Main
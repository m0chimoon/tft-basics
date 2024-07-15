import tftlanding from "../../assets/tftlanding.png"
import tftpengu from "../../assets/tftpengu.png"
import tfthorn from "../../assets/tfthorn.png"

const Main = () => {
  return (
    <main className="flex justify-center mt-14">
      <img src={tftpengu} className="w-[160px] animate-wiggle animate-infinite animate-duration-[3400ms] animate-ease-in-out" />
      <img src={tftlanding} className="w-6/12 h-2/4 mx-12 max-md:mx-5"/>
      <img src={tfthorn} className="w-[180px] h-[200px] animate-wiggle animate-infinite animate-duration-[3400ms] animate-ease-in-out animate-reverse" />
    </main>
 )
}

export default Main
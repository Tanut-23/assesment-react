import img from "../../picture/imageMyself.png";

export default function Owner() {
  return (
    <div className="pt-16 bg-[#e8e8e8] h-screen flex flex-col items-center gap-[50px]">
      <h1 className="text-3xl font-bold">27_Tanut(Nut/นัท) - Group dragon-tempura 68</h1>
      <img src={img} className="w-[270px] h-[270px]"/>
      <p className="text-lg">Hi My name is Nut , Now i'm learn and do assessment react , I'm gonna crazy please leave me alone</p>
    </div>
  )
}

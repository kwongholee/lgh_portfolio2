import Contentbox from "@/app/_components/(question)/Contentbox";
import Naverbtn from "@/app/_components/(question)/Naverbtn";
import Naverdropdown from "@/app/_components/(question)/Naverdropdown";
import Naverinput from "@/app/_components/(question)/Naverinput";
import Specialbtn from "@/app/_components/(question)/Specialbtn";
import Textbox from "@/app/_components/Textbox";
import { connectMongo } from "@/app/_utils/connectMongo";

export default async function Question() {
  const db = (await connectMongo).db('lgh_portfolio')

  return(
    <div>
      <Textbox english={"Any Questions about me?"} korean={"무엇이든 물어보세요!"}></Textbox>

      <div>
        <div>
          <Naverdropdown></Naverdropdown>
          <Naverinput></Naverinput>
          <Naverbtn></Naverbtn>
        </div>

        <div>
          <Specialbtn flag={true}></Specialbtn>
          <Specialbtn flag={false}></Specialbtn>
        </div>
      </div>

      <Contentbox></Contentbox>
    </div>
  )
}
import Contentbox from "@/app/_components/(question)/list/Contentbox";
import Naverbtn from "@/app/_components/(question)/list/Naverbtn";
import Naverdropdown from "@/app/_components/(question)/list/Naverdropdown";
import Naverinput from "@/app/_components/(question)/list/Naverinput";
import Specialbtn from "@/app/_components/(question)/list/Specialbtn";
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

      <div>
        <Contentbox answered={true}></Contentbox>
        <Contentbox answered={false}></Contentbox>
      </div>
    </div>
  )
}
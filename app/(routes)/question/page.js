import Contentbox from "@/app/_components/(question)/Contentbox";
import Textbox from "@/app/_components/Textbox";
import { connectMongo } from "@/app/_utils/connectMongo";

export default async function Question() {
  const db = (await connectMongo).db('lgh_portfolio')

  return(
    <div>
      <Textbox english={"Any Questions about me?"} korean={"무엇이든 물어보세요!"}></Textbox>

      <div>
        드롭다운
        검색창
        검색버튼
      </div>

      <div>
        질문 전 안내사항
        질문 작성
      </div>

      <Contentbox></Contentbox>
    </div>
  )
}
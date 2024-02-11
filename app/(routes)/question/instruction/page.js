import ITimeline from "@/app/_components/(question)/instruction/timeline/ITimeline";
import Textbox from "@/app/_components/Textbox";

export default function Page() {
  return(
    <div>
      <Textbox english={"Before ask to me..."} korean={"질문 하기 전 주의사항!"} />
      
      <ITimeline />
    </div>
  )
}
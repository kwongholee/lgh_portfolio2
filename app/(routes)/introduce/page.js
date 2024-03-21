import TimelineComponent from "@/app/_components/(introduce)/timeline/TimelineComponent";
import Textbox from "@/app/_components/Textbox";

export default function Introduce() {
  return(
    <div>
      <Textbox english={"The Story of GwanghoLee..."} korean={"이광호 일대기 (계속 채워질 예정)"} />

      <div style={{width: "70%", marginLeft: "15%"}}>
        <TimelineComponent />
      </div>
    </div>
  )
}
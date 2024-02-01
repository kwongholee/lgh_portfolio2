import Arrowicon from "@/app/_components/(work)/Arrowicon";
import Circleicon from "@/app/_components/(work)/Circleicon";
import Contentbox from "@/app/_components/(work)/Contentbox";
import Textbox from "@/app/_components/Textbox";
import style from '../../../styles/work.module.css';

export default function Work() {
  return(
    <div>
      <Textbox  english={"My Works"}></Textbox>

      <div className={style.workContentBox}>
        <Arrowicon direction={"Left"}></Arrowicon>
        <Contentbox></Contentbox>
        <Arrowicon direction={"Right"}></Arrowicon>
      </div>

      <div>
        <Circleicon flag={true}></Circleicon>
        <Circleicon flag={false}></Circleicon>
      </div>
    </div>
  )
}
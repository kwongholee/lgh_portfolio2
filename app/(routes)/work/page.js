'use client';

import Arrowicon from "@/app/_components/(work)/Arrowicon";
import Circleicon from "@/app/_components/(work)/Circleicon";
import Contentbox from "@/app/_components/(work)/Contentbox";
import Textbox from "@/app/_components/Textbox";
import style from '../../../styles/work.module.css';
import { useState } from "react";

export default function Work() {
  let [show, setShow] = useState([true, false]);

  return(
    <div>
      <Textbox  english={"My Works"}></Textbox>

      <div className={style.workContentBox}>
        <Arrowicon direction={"Left"}></Arrowicon>
        <Contentbox></Contentbox>
        <Arrowicon direction={"Right"}></Arrowicon>
      </div>

      <div style={{textAlign: "center"}}>
        {
          show.map((a,i) => <Circleicon flag={a} key={i} />)
        }
      </div>
    </div>
  )
}
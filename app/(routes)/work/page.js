'use client';

import Textbox from "@/app/_components/Textbox";
import style from '../../../styles/work.module.css';
import WorkSwiper from "@/app/_components/(work)/WorkSwiper";

export default function Work() {

  return(
    <div>
      <Textbox  english={"My Works"}></Textbox>

      <div>
        <WorkSwiper />
      </div>
    </div>
  )
}
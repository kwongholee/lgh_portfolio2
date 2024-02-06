'use client';

import Textbox from "@/app/_components/Textbox";
import WorkSwiper from "@/app/_components/(work)/WorkSwiper";
import '../../globals.css'

export default function Work() {

  return(
    <div>
      <Textbox  english={"My Works"}></Textbox>

      <div className="mt-20 mb-20">
        <WorkSwiper />
      </div>
    </div>
  )
}
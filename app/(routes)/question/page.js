'use client';

import Contentbox from "@/app/_components/(question)/list/Contentbox";
import Naverbtn from "@/app/_components/(question)/list/Naverbtn";
import Naverdropdown from "@/app/_components/(question)/list/Naverdropdown";
import Naverinput from "@/app/_components/(question)/list/Naverinput";
import Specialbtn from "@/app/_components/(question)/list/Specialbtn";
import Textbox from "@/app/_components/Textbox";
import style from '../../../styles/question.module.css';
import { useEffect, useState } from "react";
import getData from "@/pages/api/question/getData";

export default function Question() {
  let [feed, setFeed] = useState([]);

  useEffect(() => {
    let data = getData();
    setFeed(data);
  }, [])

  return(
    <div>
      <Textbox english={"Any Questions about me?"} korean={"무엇이든 물어보세요!"}></Textbox>

      <div className={style.container}>
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
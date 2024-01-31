'use client';

import { faArrowDown, faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import style from '../../../styles/main.module.css';

export default function PageLink({num}) {
  let router = useRouter();
  let [instruction, setInstruction] = useState({});

  useEffect(() => {
    if(num == 1) setInstruction({korean: "제가 궁금하시다면?", english: "Introduce", route: "introduce"});
    else if(num == 2) setInstruction({korean: "저에 대해 물어보실 것들이 있다면?", english: "Question", route: "question"});
    else setInstruction({korean: "제 작품이 궁금하시다면?", english: "Work", route: "work"});
  }, []);

  return(
    <div>
      <p>{instruction.korean}</p>
      <div className={style.pageLink} onClick={() => {router.push(`/${instruction.route}`)}}>
        {
          num == 1 ? <FontAwesomeIcon icon={faArrowLeft} /> :
          num == 2 ? <FontAwesomeIcon icon={faArrowDown} /> :
          <FontAwesomeIcon icon={faArrowRight} />
        }
        <h2>{instruction.english}</h2>
      </div>
    </div>
  )
}
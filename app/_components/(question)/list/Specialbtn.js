'use client'

import { useRouter } from "next/navigation"
import { useEffect, useState } from "react";
import style from '../../../../styles/components.module.css';

export default function Specialbtn(props) {
  let router = useRouter();
  let [content, setContent] = useState({})

  useEffect(() => {
    setContent(props.flag ? {btnContent: "질문 전 안내사항", link: "/question/instruction"} : {btnContent: "질문을 작성하고 싶다면?", link: "/question/write"})
  }, [])
  
  return(
    <div className={style.specialBtn} onClick={() => {router.push(content.link)}}>{content.btnContent}</div>   
  )
}
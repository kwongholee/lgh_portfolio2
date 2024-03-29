'use client';

import { useEffect, useRef, useState } from "react";
import SlideContainer from "./_components/(main)/SlideContainer";
import PageLink from "./_components/(main)/PageLink";
import style from '../styles/main.module.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDoubleDown } from "@fortawesome/free-solid-svg-icons";
import CircleImage from "./_components/(main)/CircleImage";
import Link from "next/link";

export default function Home() {
  let [linkNum, setLinkNum] = useState([1,2,3]);
  const target = useRef(null);

  useEffect(() => {
    let observer;
    if(target) {
      observer = new IntersectionObserver(([e]) => {
        const target = e.target;
        if(e.isIntersecting) target.style.opacity = "1";
        else target.style.opacity = "0";
      }, {threshold: 0.5});
      observer.observe(target.current);
    }
  }, [target]);

  return (
    <div>
      <SlideContainer></SlideContainer>

      <div ref={target} className={style.scrollDownContainer}>
        <h1>Scroll </h1>
        <FontAwesomeIcon icon={faAngleDoubleDown} size="3x" />
        <h1> Down!</h1>
      </div>
      
      <div style={{textAlign: "center"}}>
        <CircleImage></CircleImage>
        <div style={{display: "inline-block", textAlign: "left"}}>
          <div>
            <h1><strong>안녕하세요~!~!</strong></h1>
            <h2>성장이 즐거운 개발자</h2>
            <h1>개발자 이광호입니다!</h1>
          </div>

          <div>
            <p>나를 소개하는 한 마디를 바탕으로</p>
            <p>내 이야기 쭉 전개하고</p>
            <p>관심 분야: 백엔드, 풀스택 개발</p>
            <p>주요 기술 스택: JavaScript, Node.js, MongoDB, Next.js, React</p>
            <p>만들고 싶은거, 관심 있는 분야 이야기하기</p>
          </div>
          
          <div>
            <h3>자세한 이야기는 <Link href="/introduce">Introduce</Link>나 <Link href="/work">Work</Link>에서 확인 가능합니다!</h3>
          </div>
        </div>
      </div>

      <div style={{textAlign: "center", marginBottom: "50px"}}>
        {
          linkNum.map((a,i) => <PageLink num={a} key={i} />)
        }
      </div>
    </div>
  );
}

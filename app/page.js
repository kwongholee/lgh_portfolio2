'use client';

import { useEffect, useRef, useState } from "react";
import SlideContainer from "./_components/(main)/SlideContainer";
import PageLink from "./_components/(main)/PageLink";
import style from '../styles/main.module.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDoubleDown } from "@fortawesome/free-solid-svg-icons";
import CircleImage from "./_components/(main)/CircleImage";

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
      
      <div>
        <CircleImage></CircleImage>
      </div>

      <div>
        {
          linkNum.map((a,i) => <PageLink num={a} key={i} />)
        }
      </div>
    </div>
  );
}

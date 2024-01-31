'use client';

import { useEffect, useState } from "react";
import style from '../../../styles/main.module.css';
import Image from "next/image";

import first from '../../../public/image/main/1.jpg';
import second from '../../../public/image/main/2.jpg';
import third from '../../../public/image/main/3.jpg';
import fourth from '../../../public/image/main/4.jpg';
import fifth from '../../../public/image/main/5.jpg';
import sixth from '../../../public/image/main/6.jpg';
import seventh from '../../../public/image/main/7.jpg';

export default function SlideContainer() {
  let [num, setNum] = useState([first, second, third, fourth, fifth, sixth, seventh]);
  let [viewwidth, setViewwidth] = useState(0);

  useEffect(() => {
    const setVW = setInterval(() => {
      if(viewwidth == -600) setViewwidth(0);
      else setViewwidth(viewwidth - 100);
    }, 1500);
    return () => clearInterval(setVW);
  }, [viewwidth]);

  return(
    <div style={{overflow: 'hidden'}}>
      <div style={{width: '700vw', transform: `translateX(${viewwidth}vw)`}}>
        {
          num.map((a,i) => {
            return(
              <div className={style.slideImg} key={i}>
                <Image src={a} draggable="false" alt={i} />
              </div>
            )
          })
        }
      </div>
    </div>
  )
}
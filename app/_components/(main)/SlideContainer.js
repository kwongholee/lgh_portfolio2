'use client';

import { useState } from "react";
import style from '../../../styles/main.module.css';
import first from '../../../public/image/main/1.jpg';

export default function SlideContainer() {
  let [num, setNum] = useState([1,2,3,4,5,6,7]);

  return(
    <div style={{overflow: 'hidden'}}>
      <div style={{width: '700vw'}}>
        {
          num.map((a,i) => {
            return(
              <div className={style.slideImg}>
                <img src={first} draggable="false" alt={i} />
              </div>
            )
          })
        }
      </div>
    </div>
  )
}
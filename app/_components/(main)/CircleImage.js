'use client';

import style from '../../../styles/main.module.css';

export default function CircleImage() {
  return(
    <svg xmlns="http://www.w3.org/2000/svg" width="350" height="350" viewBox="0 0 350 350" className={style.circleImage}>
      <circle cx="175" cy="175" r="165.5" stroke="black"/>
    </svg>
  )
}
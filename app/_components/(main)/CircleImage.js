'use client';

import style from '../../../styles/main.module.css';
import profileImage from '../../../public/image/main/1.jpg';
import Image from 'next/image';

export default function CircleImage() {
  return(
    <div className={style.circleWrapper}>
      <div className={style.circle}>
        <Image src={profileImage} draggable={false} />
      </div>
    </div>
  )
}
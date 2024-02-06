'use client'

import { useRouter } from "next/navigation";
import style from '../../styles/components.module.css';

export default function Navbar() {
  let router = useRouter();

  return(
    <div style={{width: '100%', backgroundColor: '#D9D9D9', height: '10%', textAlign: 'justify', overflow: 'hidden'}}>
      <div style={{fontFamily: "sans-serif"}} className={style.title} onClick={() => {router.push('/')}}>Gwangholee's Portfolio</div>
      <div className={style.direct} onClick={() => {router.push('/question')}}>Questions</div>
      <div className={style.direct} onClick={() => {router.push('/work')}}>Works</div>
      <div className={style.direct} onClick={() => {router.push('/introduce')}}>Introduce</div>
    </div>
  )
}
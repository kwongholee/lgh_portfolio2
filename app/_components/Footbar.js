'use client'

import { useRouter } from 'next/navigation';
import style from '../../styles/components.module.css';

export default function Footbar() {
  let router = useRouter();

  return(
    <div style={{width: '100%', height: '13%', backgroundColor: 'black', color: 'white', textAlign: 'center', margin: 0}}>
      <div className={style.icon} onClick={() => {router.push('https://www.notion.so/72c070f9f3c94e0b95b54571930f8246')}}>Notion</div>
      <div className={style.icon} onClick={() => {router.push('https://github.com/kwongholee')}}>Github</div>
      <div className={style.icon} onClick={() => {router.push('https://www.instagram.com/i_gogh_03/?hl=ko')}}>Instagram</div>

      <div style={{textAlign: 'center'}}>
        © 2024. Lee Gwang Ho. All rights reserved
      </div>
    </div>
  )
}
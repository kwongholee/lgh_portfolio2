'use client';

import { useState } from 'react';
import style from '../../../styles/work.module.css';
import Link from 'next/link';

export default function ContentTextBox({content}) {
  let [data, setData] = useState(content)

  return(
    <div className={style.contentTextBox}>
      <h1>{data.pagename}</h1>
      <h2>{data.pageInstruction}</h2>
      <h3>{data.techStack}</h3>
      <Link href={data.githubLink}>깃허브 링크 주소</Link>
    </div>
  )
}
'use client';

import { useState } from 'react';
import style from '../../../styles/work.module.css';
import Link from 'next/link';

export default function ContentTextBox({content}) {
  let [data, setData] = useState(content)

  return(
    <div className={style.contentTextBox}>
      <h1 style={{fontSize: "25px", textAlign: "center"}}><strong>{data.pagename}</strong></h1>
      <h2>소개: {data.pageInstruction}</h2>
      <h5>사용한 기술: {data.techStack}</h5>
      <Link href={data.githubLink}>Go to Github Link</Link>
    </div>
  )
}
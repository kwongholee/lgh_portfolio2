'use client';

import style from '../../../../styles/work.module.css';
import ContentImageBox from './ContentImageBox';
import ContentTextBox from './ContentTextBox';
import { useState } from 'react';

export default function Contentbox(props) {
  let [works, setWorks] = useState(props.content);

  return(
    <div className={style.contentBox}>
      <ContentImageBox src={works.image} />
      <ContentTextBox content={works.text} />
    </div>
  )
}
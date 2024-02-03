'use client';

import style from '../../../styles/work.module.css';
import ContentImageBox from './ContentImageBox';
import ContentTextBox from './ContentTextBox';
import data from '../../_utils/work/data';
import { useState } from 'react';

export default function Contentbox() {
  let [works, setWorks] = useState(data);

  return(
    <div className={style.contentBox}>
      <ContentImageBox src={works[0].image} />
      <ContentTextBox content={works[0].text} />
    </div>
  )
}
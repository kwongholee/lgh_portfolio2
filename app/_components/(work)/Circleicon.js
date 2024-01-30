'use client';

import { useEffect, useState } from "react";

export default function Circleicon(props) {
  let [isFill, setIsFill] = useState("none");

  useEffect(() => {
    if(props.flag) setIsFill("#D9D9D9");
  })

  return(
    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25" fill={isFill} style={{cursor: 'pointer'}}>
      <circle cx="12.5" cy="12.5" r="12" stroke="black"/>
    </svg>
  )
}
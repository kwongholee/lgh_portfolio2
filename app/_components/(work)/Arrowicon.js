'use client';

import { useEffect, useState } from "react"

export default function Arrowicon(props) {
  let [direction, setDirection] = useState();

  useEffect(() => {
    setDirection(props.direction)
  }, [])

  return(
    <div>
      {
        direction == "Left" ? <div>left</div> : <div>right</div>
      }
    </div>
  )
}
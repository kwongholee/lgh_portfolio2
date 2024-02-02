'use client';

import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react"

export default function Arrowicon(props) {
  let [direction, setDirection] = useState();

  useEffect(() => {
    setDirection(props.direction)
  }, [])

  return(
    <div>
      {
        direction == "Left" 
        ? <FontAwesomeIcon icon={faArrowLeft} style={{cursor: "pointer"}} size="3x" /> 
        : <FontAwesomeIcon icon={faArrowRight} style={{cursor: "pointer"}} size="3x" />
      }
    </div>
  )
}
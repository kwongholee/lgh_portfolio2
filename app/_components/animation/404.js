import Lottie from "react-lottie-player";
import lottiejson from '../../../public/Lottie/NotFoundAnimation.json';

export default function Animation() {
  return(
    <Lottie
      loop
      animationData={lottiejson}
      play
      style={{width: "100vw", height: "100vh"}}
    />
  )
}
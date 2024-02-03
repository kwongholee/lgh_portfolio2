import style from '../../../styles/work.module.css';
import Image from "next/image";

export default function ContentImageBox(props) {
  return(
    <div className={style.contentImageBox}>
      <Image src={props.src} />
    </div>
  )
}
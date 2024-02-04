import '../globals.css';
import style from '../../styles/components.module.css';

export default function Textbox(props) {
  return(
    <div className="mt-8">
      <div className={style.textEnglish}>{props.english}</div>
      <div className={style.textKorean}>{props.korean}</div>
    </div>
  )
}
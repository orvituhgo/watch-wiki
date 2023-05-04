import { FaCaretLeft, FaCaretRight } from 'react-icons/fa';
import style from '../../styles/atoms/Arrow.module.css';

export default function Arrow({ right, left, elementToChange }) {
  // const leftClasses = `leftArrow ${style.arrow}`
  // const rightClasses = `rightArrow ${style.arrow}`
  function handleClickRight(e) {
    e.preventDefault();
    elementToChange.current.scrollLeft += elementToChange.current.offsetWidth;
  }
  function handleClickLeft(e) {
    e.preventDefault(e);
    elementToChange.current.scrollLeft -= elementToChange.current.offsetWidth;
  }

  return (
    <>
      {
                left && (
                <button onClick={handleClickLeft} type="arrow-left control" className={style.arrowLeft}><FaCaretLeft /></button>
                )
            }
      {
                right && (
                <button onClick={handleClickRight} type="arrow-right control" className={style.arrowRight}><FaCaretRight /></button>
                )
            }
    </>
  );
}

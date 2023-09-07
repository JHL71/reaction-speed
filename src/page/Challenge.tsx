import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

const Challenge = () => {
  const [flag, setFlag] = useState(false);
  const [time, setTime] = useState(0);
  const checkNum = useRef<number[]>([]);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const navigate = useNavigate();

  const onMouseDown = (event: React.MouseEvent<HTMLButtonElement>) => {
    if (flag) {
      checkNum.current.push(new Date().getTime() - time);
      setFlag(false);
    } else {

    }
    if (checkNum.current.length > 9) {
      navigate('/result');
    }
  }

  const onKeyDown = (event: React.KeyboardEvent<HTMLButtonElement>) => {
    const { key } = event;
    if (key === ' ') {
      if (flag) {
        checkNum.current.push(new Date().getTime() - time);
        setFlag(false);
      } else {
        
      }
    }
    if (checkNum.current.length > 9) {
      navigate('/result');
    }
  }

  const randomChange = () => {
    setTimeout(() => {
      setFlag(true);
      setTime(new Date().getTime());
    }, Math.random() * 8000 + 1000);
  }

  return (
    <>
      <div>Challenge</div>
    </>
  )
}

export default Challenge;
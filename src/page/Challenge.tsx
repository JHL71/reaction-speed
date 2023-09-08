import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { styled } from "styled-components";
import { v4 as uuidv4} from "uuid";

const Challenge = ({}: ChallengeProps) => {
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
      navigate('/');
    }
    if (checkNum.current.length > 9) {
      navigate(`/result/${uuidv4().slice(-4)}?time=${100}`);
    }
  }

  const onKeyDown = (event: React.KeyboardEvent<HTMLButtonElement>) => {
    const { key } = event;
    if (key === ' ' || key === 'f' || key === 'd') {
      if (flag) {
        checkNum.current.push(new Date().getTime() - time);
        setFlag(false);
      } else {
        navigate('/');
      }
    }
    if (checkNum.current.length > 9) {
      navigate(`/result/${uuidv4().slice(-4)}?time=${100}`);
    }
  }

  const randomChange = () => {
    buttonRef.current?.focus();
    setTimeout(() => {
      setFlag(true);
      setTime(new Date().getTime());
    }, Math.random() * 8000 + 1000);
  }

  useEffect(() => {
    if (!flag) {
      randomChange();
    }
  }, [flag]);

  return (
    <Wrap>
      <div>
      </div>
      <Button 
        $flag={flag}
        onMouseDown={onMouseDown}
        onKeyDown={onKeyDown}
        ref={buttonRef}
      >
        {checkNum.current[checkNum.current.length - 1]} ms
      </Button>
    </Wrap>
  )
}


const Wrap = styled.div`
  width: 100%;
  height: 100vh;
  display:flex;
  justify-content: center;
  align-items: center;
`

const Button = styled.button<{$flag: boolean}>`
  width: 800px;
  height: 200px;
  background-color: ${props => props.$flag ? 'lime' : 'tomato'}
`


export default Challenge;
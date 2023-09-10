import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { styled } from "styled-components";
import { v4 as uuidv4} from "uuid";

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
      navigate('/');
    }
    if (checkNum.current.length > 9) {
      let time = ~~(checkNum.current.reduce((ac, cv) => ac + cv) / 10);
      navigate(`/result/${uuidv4().slice(-4)}?time=${time}`);
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
      let time = ~~(checkNum.current.reduce((ac, cv) => ac + cv) / 10);
      navigate(`/result/${uuidv4().slice(-4)}?time=${time}`);
    }
  }

  const randomChange = () => {
    buttonRef.current?.focus();
    setTimeout(() => {
      setFlag(true);
      setTime(new Date().getTime());
    }, Math.random() * 4000 + 1000);
  }

  useEffect(() => {
    if (!flag) {
      randomChange();
    }
  }, [flag]);

  return (
    <Wrap>
      <Progress>
        <Bar $len={checkNum.current.length}></Bar>
      </Progress>
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
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const Progress = styled.div`
  width: 800px;
  height: 20px;
  background-color: #aaaaaa;
`

const Bar = styled.div<{$len: number}>`
  width: ${props => props.$len * 80}px;
  height: 20px;
  background-color: yellow;
  transition: all 0.5s ease;
`

const Button = styled.button<{$flag: boolean}>`
  width: 800px;
  height: 200px;
  background-color: ${props => props.$flag ? 'lime' : 'tomato'};
  outline: none;
  border: none;
`


export default Challenge;
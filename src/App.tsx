import { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { v4 as uuidv4 } from 'uuid';

declare global {

}

function App() {
  const [flag, setFlag] = useState(false);
  const [time, setTime] = useState(0);
  const [start, setStart] = useState(false);
  const checkNum = useRef<number[]>([]);
  const buttonRef = useRef<HTMLButtonElement>(null);
  

  const onClick = () => {
    buttonRef.current?.focus();
    setStart(true);
  }

  const randomChange = () => {
    setTimeout(() => {
      setFlag(true);
      setTime(new Date().getTime());
    }, Math.random() * 8000 + 1000);
  }

  const onMouseDown = (event: React.MouseEvent<HTMLButtonElement>) => {
    if (flag) {
      checkNum.current.push(new Date().getTime() - time);
      setFlag(false);
    } else {

    }
    if (checkNum.current.length > 9) {
      setStart(false);
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
      setStart(false);
    }
  }

  useEffect(() => {
    if (!flag && start) {
      randomChange();
    }
  }, [start, flag])

  return (
    <Wrap>
      {start 
        ? <>
            <Button 
              onMouseDown={onMouseDown}
              onKeyDown={onKeyDown}
              ref={buttonRef}
              $flag={flag}
            >
              {checkNum.current[checkNum.current.length - 1]} ms
            </Button>
            <div>
            {checkNum.current.map((num) => {
              return (
                <span key={uuidv4()}>{num} ms</span>
              )
            })}
            </div>
          </>
        : <Start onClick={onClick}>start</Start>
      }
    </Wrap>
  );
}

const Wrap = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: beige;
`

const Start = styled.button`
  background-color: #d0d0d0;
  width: 80%;
  height: 200px;
  font-size: 25px;
  border-radius: 10px;
  &:hover {
    cursor: pointer;
    background-color: #808080;
    color: #eeeeee;
    box-shadow: 10px 5px 5px black;
    transform: translate(-10px, -10px);
    transition: transform 1s, box-shadow 1s;
  }
`

const Button = styled.button<{ $flag: boolean }>`
  background-color: ${(props) => props.$flag ? 'lime' : 'tomato'};
  width: 80%;
  height: 200px;
  &:hover {
    cursor: pointer;
  }
`

export default App;

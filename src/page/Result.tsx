import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const Result = () => {
  const time = window.location.search.split('=')[1];
  const navigate = useNavigate();


  const onClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    const { name } = event.target as HTMLButtonElement;
    if (name === 'retry') {
      navigate('/challenge');
    } else if (name === 'home') {
      navigate('/');
    }
  }

  return (
    <Wrap>
      <Content>
        <TextWrap>
          {/* <div>반응속도</div> */}
          <h2>{time} ms</h2>
        </TextWrap>
        <ButtonWrap>
          <button onClick={onClick} name="retry">
            다시하기
          </button>
          <button onClick={onClick} name="home">
            홈으로
          </button>
        </ButtonWrap>
      </Content>
    </Wrap>
  )
}

const Wrap = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const Content = styled.div`
  width: 600px;
  height: 200px;
  background-color: beige;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
`

const TextWrap = styled.div`
  width: 200px;
  height: 120px;
  display: flex;
  justify-content: center;
  align-items: center;
`

const ButtonWrap = styled.div`
  width: 200px;
  height: 80px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  & button {
    width: 80px;
    height: 30px;
    cursor: pointer;
    background-color: orange;
    border-radius: 5px;
  }
`

export default Result;
import { useNavigate } from "react-router-dom";
import styled from "styled-components";


const Home = ({}: HomeProps) => {
  const navigate = useNavigate();

  const onClick = () => {
    navigate('/challenge');
  }

  return (
    <>
      <Wrap>
        <ContentBox>
          <Title>
            <span>반응 속도 테스트</span>
          </Title>
          <Description>
            <div>버튼이 초록색으로 바뀌면 클릭하거나 키보드를 누르세요.</div>
            <div>총 10회 테스트하며 미리 누를 경우 처음 화면으로 돌아옵니다.</div>
          </Description>
        </ContentBox>
        <Button onClick={onClick}>시작하기</Button>
      </Wrap>
    </>
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

const ContentBox = styled.div`
  width: 800px;
  height: 160px;
  background-color: beige;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const Title = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 780px;
  height: 60px;
  font-size: 20px;
  font-weight: 600;
  padding-top: 5px;
  border-bottom: solid black 1px;
`

const Description = styled.div`
  width: 100%;
  height: 80px;
  padding: 15px 20px;
`

const Button = styled.button`
  width: 800px;
  height: 40px;
  border: none;
  background-color: #bbbbbb;
  &:hover {
    cursor: pointer;
    background-color: #dddddd;
  }
`


export default Home;
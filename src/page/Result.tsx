
const Result = ({}: ResultProps) => {
  const time = window.location.search.split('=')[1];
  return (
    <>
      <div>{time} ms</div>
      <div>result</div>
    </>
  )
}

export default Result;
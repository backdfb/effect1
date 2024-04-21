
import './App.css';
import styled, { keyframes } from 'styled-components';

const App = () => {

  const AppWrapper = styled.div`
  background-color: magenta;
  height: 100vh;
`;
  
  const typing = keyframes`from {width : 0}`;

  const caret = keyframes`50% { border-right-color: transparent; }`;

  const TypeAnimation = styled.div`

    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;

    h1 {
      font: bold 200% Consolas, Monaco, monospace;
      font-size: 65px;
      color: white;
      width: ${(props) => props.length}ch;
      white-space: nowrap;
      overflow: hidden;
      border-right: 0.05em solid;
      animation: ${typing} 4s steps(${(props) => props.length}),
        ${caret} 1s steps(1) infinite;
    }
  `;

  const title = "HyoJoong's Portfolio";

  return (
    <AppWrapper>
      <TypeAnimation length={title.length}>
        <h1>{title}</h1>
      </TypeAnimation>
    </AppWrapper>
  );
}

export default App;

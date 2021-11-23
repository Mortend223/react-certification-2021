import styled from 'styled-components';

const MainContainer = styled.div`
  background-color: ${(props) => (props.isDark ? 'gray' : '#FFFFFF')};
  width: 100vw;
  height: 100vh;
  overflow: auto;
  text-align: center;
`;

export default MainContainer;

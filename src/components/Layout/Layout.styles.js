import styled from 'styled-components';

const MainContainer = styled.div`
  background-color: ${(props) => (props.isDark ? 'gray' : '#FFFFFF')};
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

export default MainContainer;

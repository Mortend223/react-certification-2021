import styled from 'styled-components';

export const HeaderWrapper = styled.div`
  align-items: center;
  background-color: ${(props) => (props.isDark ? 'black' : '#f0575d')};
  border-bottom: 1px solid rgba(0, 0, 0, 0.0975);
  color: '#FFFFFF';
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  padding: 10px 5%;
  width: 100%;

  p {
    color: #ffffff;
  }
`;

export const LogoLink = styled.div`
  margin: 0px 20px;
  width: 40px;
  height: 40px;
  display: flex;
  overflow: hidden;
  position: relative;
  font-size: 1.25rem;
  align-items: center;
  flex-shrink: 0;
  font-family: 'Roboto', 'Helvetica', 'Arial', sans-serif;
  line-height: 1;
  user-select: none;
  border-radius: 50%;
  justify-content: center;
  img {
    color: transparent;
    max-width: 50px;
    height: auto;
  }
`;

export const MenuToggle = styled.a`
  display: block;
  width: 50px;
  padding: 5px;
  margin: 0px 20px;
  cursor: pointer;
  svg {
    height: auto;
    max-width: 100%;
  }
`;

export const ButtonToggle = styled.div`
  display: block;
  margin-left: auto;
  width: 30px;
  margin-right: 10px;
  svg {
    height: auto;
    max-width: 100%;
  }
`;

export const Input = styled.input`
  background: transparent;
  border: none;
  color: #262626;
  cursor: text;
  font-size: 14px;
  font-weight: 300;
  height: 30px;
  outline: none;
  text-align: left;
`;

export const MenuLink = styled.a``;

export const SearchBox = styled.div`
  background: #fafafa;
  border: solid 1px #dbdbdb;
  border-radius: 3px;
  padding: 5px 15px;
`;

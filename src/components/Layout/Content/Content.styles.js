import styled from 'styled-components';

export const ContentWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  margin: 0 auto;
  width: 90%;
  row-gap: 10px;
  column-gap: 2em;
  svg {
    color: white;
    cursor: pointer;
    position: absolute;
    right: 20px;
    top: 20px;
    z-index: 1;
    &:hover {
      color: yellow;
    }
  }
`;

export const LinkWrapper = styled.div`
  position: relative;
`;

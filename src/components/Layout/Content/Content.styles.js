import styled from 'styled-components';

export const ContentWrapper = styled.div`
  margin: 0 auto;
  text-align: left;
  width: 90%;
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
  display: inline-block;
  position: relative;
  vertical-align: top;
`;

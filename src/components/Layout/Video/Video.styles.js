import styled from 'styled-components';

export const BlockElement = styled.div`
  display: inline-block;
  margin: 15px;
  background-color: white;
  box-shadow: 0px 2px 1px -1px rgb(0 0 0 / 20%), 0px 1px 1px 0px rgb(0 0 0 / 14%),
    0px 1px 3px 0px rgb(0 0 0 / 12%);
  border-radius: 4px;
  cursor: pointer;
  overflow: hidden;
  max-width: 345px;
  &:hover {
    opacity: 0.5;
  }
`;

export const BlockElementRelated = styled.div`
  border-radius: 4px;
  box-shadow: 0px 2px 1px -1px rgb(0 0 0 / 20%), 0px 1px 1px 0px rgb(0 0 0 / 14%),
    0px 1px 3px 0px rgb(0 0 0 / 12%);
  display: flex;
  padding: 5px;
`;

export const Description = styled.div`
  color: gray;
  padding: 20px;
  h3 {
    color: #000000;
  }
`;

export const Iframe = styled.iframe`
  width: 100%;
  height: 500px;
`;

export const FullVideo = styled.div`
  background-color: #ffffff;
  height: auto;
  margin: 15px;
  text-align: left;
  width: 60%;
`;

export const RelatedList = styled.div`
  width: 40%;
  height: auto;
  div {
    max-width: 100%;
  }
`;

export const VideoThumbnail = styled.img`
  width: 100%;
`;

export const VideoThumbnailSmall = styled.img`
  flex: 1;
  height: 90px;
  width: 120px;
  max-width: 120px;
`;

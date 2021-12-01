import styled, { keyframes } from 'styled-components';

const loadingE = keyframes`
     0 {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
`;

export const Ball = styled.div`
  position: absolute;
  top: -11px;
  left: 0;
  width: 16px;
  height: 16px;
  border-radius: 100%;
  background: #4282b3;
`;

export const BallHolder = styled.div`
  position: absolute;
  width: 12px;
  height: 45px;
  left: 17px;
  top: 0px;
`;

export const Button = styled.div`
  background-color: #105bd8;
  border-radius: 15px;
  color: #fff;
  cursor: pointer;
  font-size: 16px;
  height: 35px;
  margin: auto;
  max-width: 200px;
  padding: 5px;
`;

export const Column = styled.div`
  width: 50%;
  display: inline-block;
  vertical-align: middle;
  img {
    border-radius: 25px;
    max-width: 50%;
  }
  @media only screen and (max-width: 768px) {
    margin: auto;
    text-align: center;
    width: 90%;
    img {
      max-width: 100%;
    }
  }
`;

export const ColumnContainer = styled.div`
  @media only screen and (max-width: 768px) {
    display: flex;
    flex-direction: column-reverse;
  }
`;
export const ContentWrapper = styled.div`
  background-color: #ffffff;
  font-family: 'Lucida Console', Monaco, monospace;
  height: 100vh;
  margin: auto;
  padding: 2% 5%;
  vertical-align: top;
  width: 100%;
`;

export const DateContainer = styled.div`
  display: block;
  margin: 20px auto 50px;
  position: relative;
  width: 500px;
  @media only screen and (max-width: 768px) {
    width: 90%;
  }
`;

export const Description = styled.div`
  font-size: 1rem;
  @media only screen and (max-width: 768px) {
    font-size: 0.7rem;
  }
`;

export const ErrorMessage = styled.div`
  background-color: #ffbaba;
  border-radius: 3px 3px 3px 3px;
  color: #d8000c;
  margin: 10px 0;
  padding: 10px;
`;

export const LoadingWrapper = styled.div`
  animation: ${loadingE} 1.3s linear infinite;
  left: 0px;
  position: absolute;
  margin: auto;
  right: 0px;
  top: 40%;
`;

export const Ring = styled.div`
  position: relative;
  width: 45px;
  height: 45px;
  margin: 0 auto;
  border: 4px solid #4b9cdb;
  border-radius: 100%;
`;

export const Title = styled.div`
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 20px;
  img {
    position: absolute;
    right: 5px;
    top: 5px;
  }
  @media only screen and (max-width: 768px) {
    font-size: 1rem;
    img {
      display: block;
      margin: 30px auto;
      position: relative;
    }
  }
`;

export const SubTitle = styled.div`
  font-size: 1.2rem;
  font-weight: bold;
  margin-bottom: 20px;
  @media only screen and (max-width: 768px) {
    font-size: 0.8rem;
  }
`;

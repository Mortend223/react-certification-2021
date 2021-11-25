import React from 'react';

// Hooks
import useAPOD from '../../hooks/useAPOD';
import { useDataAstronomy } from '../../providers/DataAstronomy/DataAstronomy.provider';

// Styles
import {
  Ball,
  BallHolder,
  Column,
  ColumnContainer,
  ContentWrapper,
  Description,
  LoadingWrapper,
  Ring,
  SubTitle,
  Title,
} from './Astronomy.styles';
import DateButtonComponent from './DateComponent/DateButton.component';

const formatYmd = (date) => date.toISOString().slice(0, 10);

function AstronomyPage() {
  const { searchDate } = useDataAstronomy();
  const { response, error, loading } = useAPOD(formatYmd(searchDate));

  if (loading) {
    return (
      <ContentWrapper>
        <LoadingWrapper>
          <Ring>
            <BallHolder>
              <Ball />
            </BallHolder>
          </Ring>
        </LoadingWrapper>
      </ContentWrapper>
    );
  }
  return (
    <ContentWrapper>
      <Title>
        <img
          alt="Wizeline"
          src="https://media.glassdoor.com/sqll/868055/wizeline-squarelogo-1473976610815.png"
          width="50px"
          height="auto"
        />
        Astronomy Picture Of The Day!
      </Title>
      <DateButtonComponent errorResponse={error} />
      {response ? (
        <>
          <ColumnContainer>
            <Column>
              <SubTitle>{response.title}</SubTitle>
              <Description>{response.explanation}</Description>
            </Column>
            <Column>
              <img src={response.url} width="900" height="auto" alt={response.title} />
            </Column>
          </ColumnContainer>
        </>
      ) : (
        <>
          <SubTitle>
            There was an error, please try again in some minutes or maybe with another
            date.
          </SubTitle>
          <img
            alt="NASA"
            src="https://api.nasa.gov/assets/img/favicons/favicon-192.png"
            width="200px"
            height="auto"
          />
        </>
      )}
    </ContentWrapper>
  );
}

export default AstronomyPage;

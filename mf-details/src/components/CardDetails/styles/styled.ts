import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  padding: 20px;
`;

export const MovieContainer = styled.div`
  width: 100%;
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  background-color: #f9f9f9;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

  @media (max-width: 768px) {
    padding: 15px;
  }
`;

export const MovieTitle = styled.h1`
  font-size: 2.5rem;
  color: #333;
  margin-bottom: 10px;

  @media (max-width: 768px) {
    font-size: 2rem;
    text-align: center;
  }
`;

export const MovieInfo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  margin-bottom: 20px;

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
  }
`;

export const MovieDescription = styled.p`
  font-size: 1rem;
  color: #555;
  line-height: 1.6;

  @media (max-width: 768px) {
    font-size: 0.9rem;
  }
`;

export const MoviePoster = styled.img`
  width: 100%;
  max-width: 300px;
  height: auto;
  border-radius: 8px;
  margin-right: 20px;

  @media (max-width: 768px) {
    max-width: 200px;
    margin: 0 auto 15px;
  }
`;

export const ContentOverview = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media (max-width: 768px) {
    align-items: center;
    text-align: center;
  }
`;

export const Overview = styled.p`
  color: #000;
  font-size: 18px;
  margin-top: 1rem;
  line-height: 1.5rem;

  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

export const OverviewTitle = styled.h3`
  font-size: 18px;
  margin: 26px 0 5px;

  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

export const GenreList = styled.p`
  font-size: 16px;
  font-weight: bold;

  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

export const Runtime = styled.p`
  font-size: 16px;

  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  min-height: 100vh;
  padding: 40px;
  background-color: #f4f4f4;
`;

export const MovieContainer = styled.div`
  width: 100%;
  max-width: 900px;
  margin: 0 auto;
  padding: 30px;
  background-color: #fff;
  border-radius: 16px;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.05);

  @media (max-width: 768px) {
    padding: 20px;
  }
`;

export const MovieTitle = styled.h1`
  font-size: 2.2rem;
  color: #333;
  margin-bottom: 20px;
  text-align: center;
  font-weight: 700;

  @media (max-width: 768px) {
    font-size: 1.8rem;
  }
`;

export const MovieInfo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  margin-bottom: 20px;
  gap: 20px;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const MoviePoster = styled.img`
  width: 100%;
  max-width: 400px;
  height: auto;
  border-radius: 12px;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.05);

  @media (max-width: 768px) {
    max-width: 250px;
    margin: 0 auto 15px;
  }
`;

export const ContentOverview = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  height: auto;
  justify-content: space-between;
  gap: 5px;

  @media (max-width: 768px) {
    align-items: center;
    text-align: center;
  }
`;

export const OverviewTitle = styled.h3`
  font-size: 1.5rem;
  color: #555;
  margin-top: 10px;
  font-weight: 600;

  @media (max-width: 768px) {
    font-size: 1.3rem;
  }
`;

export const Overview = styled.p`
  color: #444;
  font-size: 1.1rem;
  line-height: 1.7;
  text-align: justify;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

export const GenreList = styled.p`
  font-size: 1.1rem;
  font-weight: 600;
  color: #007bff;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

export const Runtime = styled.p`
  font-size: 1.1rem;
  color: #555;
  font-style: italic;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

export const MovieDescription = styled.p`
  font-size: 1rem;
  color: #666;
  line-height: 1.6;

  @media (max-width: 768px) {
    font-size: 0.95rem;
  }
`;

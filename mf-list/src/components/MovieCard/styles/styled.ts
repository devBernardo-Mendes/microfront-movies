import styled from "styled-components";

export const HidderContent = styled.div`
  color: #fff;
  font-size: 12px;
  margin-top: 0.5rem;
  height: 0px;
  opacity: 0;
  transition: all 0.6s;
`;

export const ImageMovie = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const ItemLi = styled.li`
  width: 100%;
  height: 100%;
  border-radius: 0.5rem;
  overflow: hidden;
  position: relative;

  &:hover {
    cursor: pointer;

    ${ImageMovie} {
      opacity: 0.5;
    }

    ${HidderContent} {
      opacity: 1;
      height: 100px;
    }
  }
`;

export const Item = styled.p``;

export const ItemTitle = styled.p`
  color: #fff;
  font-size: 12px;
  margin-bottom: 8px;
`;

export const MoviePoster = styled.div``;

export const MovieInfos = styled.div`
  position: absolute;
  bottom: 0;
  background: linear-gradient(#00000000, #000000 90%);
  height: 200px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: end;
  padding: 1rem;
`;

export const Button = styled.button`
  background-color: #0b57d0;
  padding: 6px 8px;
  border-radius: 4px;
  margin-top: 10px;
  color: #fff;

  border: none;
  cursor: pointer;

  width: 100%;
`;

export const ReleaseDate = styled.div`
  color: #fff;
  font-size: 12px;
  margin-bottom: 8px;
`;

import styled from "styled-components";

export const Picture = ({url}: PictureProps) => (
  <PictureContainer>
    <ImageContainer src={url} />
  </PictureContainer>
);

const PictureContainer = styled.div`
  width: 200px;
  height: 150px;
  border-radius: 15px;
  cursor: pointer;
`;

const ImageContainer = styled.img`
  object-fit: cover;
  border-radius: 15px;
  height: 100%;
  width: 100%;
`;
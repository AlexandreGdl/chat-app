import styled from "styled-components";

export const Title = ({ title }: ButtonProps) => (
  <TitleContainer className="font-bold text-3xl">
    {title}
  </TitleContainer>
);

const TitleContainer = styled.p`

`;
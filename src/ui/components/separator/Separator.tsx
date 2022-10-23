import styled from "styled-components";

export const Separator = (props: SeparatorProps) => (
  <SeparatorContainer {...props} />
);

const SeparatorContainer = styled.div<SeparatorProps>`
  height: ${props => props.height ?? '2'}px;
  background-color: ${props => props.color ?? props.theme.colors.GRAY_2};
  width: 100%;
`;
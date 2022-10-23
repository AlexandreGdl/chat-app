import styled from "styled-components";

export const Separator = (props: SeparatorProps) => (
  <SeparatorContainer {...props} />
);

const SeparatorContainer = styled.div<SeparatorProps>`
  height: ${props => props.height ?? '2'}px;
  background-color: ${props => props.color ?? '#D7D7D7'};
  width: 100%;
`;
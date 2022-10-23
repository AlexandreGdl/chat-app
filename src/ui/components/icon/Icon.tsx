import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import styled from "styled-components";

export const Icon = (props: IconProps) => {
  const [hover, setHover] = useState(false);

  return (
    <IconContainer
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      {...props}
    >
      <FontAwesomeIcon icon={props.icon} size={props.iconSize ?? "xs"} color={hover ? props.hoverColor ?? "#A7A7A7" :props.color ?? "#A7A7A7"}/>
    </IconContainer>
  );
};

const IconContainer = styled.div<IconProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${props => props.size ? props.size : '30'}px;
  height: ${props => props.size ? props.size : '30'}px;
  border-radius: 4px;
  ${props => !props.noBackground && 'background-color:  #F4F4F6;'}
  cursor: pointer;
`;
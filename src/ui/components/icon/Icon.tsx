import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useContext, useState } from "react";
import styled, { ThemeContext } from "styled-components";

export const Icon = (props: IconProps) => {
  const themeContext = useContext(ThemeContext);
  const [hover, setHover] = useState(false);

  return (
    <IconContainer
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      {...props}
    >
      <FontAwesomeIcon icon={props.icon} size={props.iconSize ?? "xs"} color={hover ? props.hoverColor ?? themeContext.colors.GRAY_3 :props.color ?? themeContext.colors.GRAY_3}/>
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
  ${props => !props.noBackground && `background-color:  ${props.theme.colors.GRAY_3}`}
  cursor: pointer;
`;
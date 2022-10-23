import { faMessage, faColumns, faCompass, faHeart, faBookmark, faInfoCircle, faRightFromBracket, faGear } from '@fortawesome/free-solid-svg-icons';
import { useContext } from 'react';
import styled, { ThemeContext } from "styled-components";
import { Icon } from "../icon/Icon";

export const Menu = (props: MenuProps) => {
  const themeContext = useContext(ThemeContext);
  return (
    <MenuContainer>
      <Icon noBackground hoverColor={themeContext.colors.BLUE_1} className="mt-10" icon={faMessage} />
      <IconContainer className="mb-20 mt-20">
        <Icon noBackground hoverColor={themeContext.colors.BLUE_1} icon={faColumns} />
        <Icon noBackground hoverColor={themeContext.colors.BLUE_1} icon={faCompass} />
        <Icon noBackground hoverColor={themeContext.colors.BLUE_1} icon={faMessage} />
        <Icon noBackground hoverColor={themeContext.colors.BLUE_1} icon={faHeart} />
        <Icon noBackground hoverColor={themeContext.colors.BLUE_1} icon={faBookmark} />
      </IconContainer>
      <IconContainer>
        <Icon noBackground hoverColor={themeContext.colors.BLUE_1} icon={faInfoCircle} />
        <Icon noBackground hoverColor={themeContext.colors.BLUE_1} icon={faRightFromBracket} />
        <Icon noBackground hoverColor={themeContext.colors.BLUE_1} icon={faGear} />
      </IconContainer>
    </MenuContainer>
);
}
const MenuContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 20px;
`;

const IconContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 25px;
`;
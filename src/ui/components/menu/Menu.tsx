import { faMessage, faColumns, faCompass, faHeart, faBookmark, faInfoCircle, faRightFromBracket, faGear } from '@fortawesome/free-solid-svg-icons';
import styled from "styled-components";
import { Icon } from "../icon/Icon";

export const Menu = (props: MenuProps) => (
  <MenuContainer>
    <Icon noBackground hoverColor='#1858F9' className="mt-10" icon={faMessage} />
    <IconContainer className="mb-20 mt-20">
      <Icon noBackground hoverColor='#1858F9' icon={faColumns} />
      <Icon noBackground hoverColor='#1858F9' icon={faCompass} />
      <Icon noBackground hoverColor='#1858F9' icon={faMessage} />
      <Icon noBackground hoverColor='#1858F9' icon={faHeart} />
      <Icon noBackground hoverColor='#1858F9' icon={faBookmark} />
    </IconContainer>
    <IconContainer>
      <Icon noBackground hoverColor='#1858F9' icon={faInfoCircle} />
      <Icon noBackground hoverColor='#1858F9' icon={faRightFromBracket} />
      <Icon noBackground hoverColor='#1858F9' icon={faGear} />
    </IconContainer>
  </MenuContainer>
);

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
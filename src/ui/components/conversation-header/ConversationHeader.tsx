import { faEllipsisVertical, faMagnifyingGlass, faPhone, faTable } from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";
import { Icon } from "../icon/Icon";
import { ProfilePicture } from "../profile-picture/ProfilePicture";

export const ConversationHeader = (props: ConversationHeaderProps) => (
  <HeaderContainer>
    <ProfilePicture size="60" url={props.url} />
    <MiddleContainer>
      <MessageContainer>{props.name}</MessageContainer>
      {props.lastSeen ? <LastSeen>Last seen, {props.lastSeen}</LastSeen> : <Active>Online</Active>}
    </MiddleContainer>
    <IconContainer>
      <Icon icon={faMagnifyingGlass} />
      <Icon className="ml-2" icon={faPhone} />
      <Icon className="ml-2" icon={faTable} />
      <Icon className="ml-2" icon={faEllipsisVertical} />
    </IconContainer>
  </HeaderContainer>
);

const HeaderContainer = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: row;
`;


const MiddleContainer = styled.div`
  height: auto;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  margin-left: 10px;
  padding: 5px;
`;

const MessageContainer = styled.p`
  font-size: 18px;
  font-weight: bold;
  flex-grow: 1;
`;

const LastSeen = styled.p`
  font-size: 14px;
  color: #A7A7A7;
`;

const Active = styled.div`
  font-size: 14px;
  color: #78C772
`;

const IconContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  height: auto;
`;
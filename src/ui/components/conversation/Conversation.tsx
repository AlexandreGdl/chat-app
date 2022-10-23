import { useContext } from "react";
import styled from "styled-components";
import { ThemeContext } from 'styled-components'
import { ProfilePicture } from "../profile-picture/ProfilePicture";

export const Conversation = (props: ConversationProps) => {
  const themeContext = useContext(ThemeContext);
  const showAlert = (): boolean => props.alert && !props.active? props.alert > 0 : false;

  const getColor = (): string => {
    if (!props.active && showAlert()) return '#333';
    if (props.active) return '#fff';
    return themeContext.colors.GRAY_3;
  }

  const handlePress = () => {
    if (props.onPress) props.onPress(props.id);
  };

  return (
    <ConversationContainer onClick={handlePress} className={props.className} active={props.active}>
      <ProfilePicture size="40" url={props.url} />
      <MiddleContainer>
        <MessageContainer active={props.active}>{props.name}</MessageContainer>
        <LastMessage active={props.active}>{props.lastMessage}</LastMessage>
      </MiddleContainer>
      <RightContainer>
        {showAlert() && <Alert>{props.alert}</Alert>}
        <DateContainer color={getColor()} bold={!props.active && showAlert()}>11:24 AM</DateContainer>
      </RightContainer>
    </ConversationContainer>
  );
}

const ConversationContainer = styled.div<{active?: boolean}>`
  display: flex;
  flex-direction: row;
  cursor: pointer;
  border-radius: 12px;
  padding: 10px;
  background-color: ${props => props.active ? props.theme.colors.BLUE_1 : props.theme.colors.GRAY_1};
`;

const MiddleContainer = styled.div`
  height: auto;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  margin-left: 10px;
  padding: 2px;
`;

const MessageContainer = styled.p<{active?: boolean}>`
  font-size: 16px;
  font-weight: bold;
  flex-grow: 1;
  color: ${props => props.active ? '#fff' : '#333'};
`;

const LastMessage = styled.p<{active?: boolean}>`
  font-size: 12px;
  color: ${props => props.active ? '#EEEEEE' : props.theme.colors.GRAY_3};
`;

const RightContainer = styled.div`
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const DateContainer = styled.p<{ bold?: boolean, color: string }>`
  ${props => props.bold && 'font-weight: bold;'}
  font-size: 12px;
  color: ${props => props.color};
`;

const Alert = styled.div`
  padding: 0 6px;
  color: #fff;
  font-size: 12px;
  background-color: ${props => props.theme.colors.BLUE_1};
  border-radius: 50px;
  margin-bottom: 5px;
`;
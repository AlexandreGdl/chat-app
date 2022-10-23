import styled from "styled-components";

export const Message = (props: MessageProps) => (
  <MessageContainer {...props}>
    <TextContainer {...props}>
      {props.text}
    </TextContainer>
    <DateContainer {...props}>{props.date}</DateContainer>
  </MessageContainer>
);

const MessageContainer = styled.div<MessageProps>`
  border-radius: 15px;
  background-color: ${props => props.self ? '#1858F9' : '#F4F4F6'};
  border-top-left-radius: ${props => props.self ? '15px' : '0px'};
  border-top-right-radius: ${props => props.self ? '0px' : '15px'};
  padding: 10px 20px;
  align-items: ${props => props.self ? 'end' : 'start'};
  display: flex;
  flex-direction: column;
  width: fit-content;
  align-self: ${props => props.self ? 'end' : 'start'};
`;

const TextContainer = styled.p<MessageProps>`
  color: ${props => props.self ? '#fff' : '#333'};
  font-size: 16px;
`;

const DateContainer = styled.p<MessageProps>`
  color: ${props => props.self ? '#EEEEEE' : '#A7A7A7'};
  font-size: 12px;
  margin-top: 10px;
`;
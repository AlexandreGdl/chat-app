import { faker } from "@faker-js/faker";
import { useState } from "react";
import styled from "styled-components";
import { ConversationHeader } from "../conversation-header/ConversationHeader";
import { MessageInput } from "../message-input/MessageInput";
import { Message } from "../message/Message";
import { Separator } from "../separator/Separator";

const initialMessages = Array.from(Array(10).keys()).map((index) => ({
  text: faker.lorem.sentence(10),
  date: '09:12 PM',
  self: Math.floor(Math.random() * 2) === 0,
}));

export const Chat = (props: ChatProps) => {
  const [messages, setMessages] = useState(initialMessages)
  const addMessage = (msg: string) => {
    setMessages(prev => [...prev, {
      text: msg,
      date: '09:12 PM',
      self: true,
    }]);
  }

  return (
    <ChatContainer>
      <ConversationHeader {...props} />
      <Separator className="mb-5" height="1"/>
      <MessagesContainer>
        {messages.map((m, index) => <Message key={index} text={m.text} date={m.date} self={m.self} />)}
        <div ref={(r) => r?.scrollIntoView()}></div> {/* Scroll purpose */}
      </MessagesContainer>
      <MessageInput onEnter={addMessage} className="ml-4 mr-4" emojiPosition="top"/>
    </ChatContainer>
  );
}
const ChatContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

const MessagesContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  overflow-x: hidden;
  overflow-y: scroll;
  transition: background .3s ease-out .1s;
  gap: 25px;
  padding: 0px 15px 15px 15px;
`;
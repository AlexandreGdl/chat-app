import EmojiPicker, { EmojiClickData, Theme as EmojiTheme } from "emoji-picker-react";
import { useState } from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';

export const MessageInput = (props: MessageInputProps) => {
  const [visible, setVisible] = useState(false);
  const [message, setMessage] = useState('');

  const onClick = (emoji: EmojiClickData) => {
    setMessage(`${message}${emoji.emoji}`);
    setVisible(false);
  };

  const handleInputClick = () => {
    if (visible) setVisible(false);
  }

  return (
    <InputContainer className={props.className}>
      <EmojiContainer className="flex justify-center items-center">
        <p onClick={() => setVisible(!visible)}>😁</p>
        {visible && <PickerContainer {...props}>
          <EmojiPicker
            onEmojiClick={onClick}
            autoFocusSearch={false}
            theme={EmojiTheme.AUTO}
          />
        </PickerContainer>}
      </EmojiContainer>
      <Input placeholder="Write a message" value={message} onChange={(e) => setMessage(e.currentTarget.value)} onClick={handleInputClick} type="text" />
      <IconContainer>
        <FontAwesomeIcon size="1x" icon={faPaperPlane} color="#1858F9"/>
      </IconContainer>
    </InputContainer>
  );
}

const InputContainer = styled.div`
  display: flex;
  background-color: #F4F4F6;
  border-radius: 50px;
  padding: 10px;
  align-items: center;
  overflow: visible;
  margin-bottom: 15px;
`;

const Input = styled.input`
  background-color: #F4F4F6;
  -webkit-tap-highlight-color: transparent;
  outline: none;
  border-radius: 50px;
  padding-left: 10px;
  padding-right: 10px;
  flex-grow: 1;
  margin-right: 10px;
`;

const EmojiContainer = styled.div`
  cursor: pointer;
  position: relative;
  height: 100%;
  padding: 1px 5px;
  border-radius: 50px;
  &:hover {
    background-color: #D7D7D7;
  }
`;

const PickerContainer = styled.div<MessageInputProps>`
  position: absolute;
  ${props => props.emojiPosition === 'top' ? 'bottom' : 'top'}: 0;
  left: 0;
`;

const IconContainer = styled.div`
  display: flex;
  cursor: pointer;
  justify-content: center;
  align-items: center;
  padding: 8px 8px;  
  border-radius: 50px;
  &:hover {
    background-color: #D7D7D7;
  }
`;
type MessageInputProps = {
  emojiPosition: 'top' | 'bottom';
  className?: string;
  onEnter?(msg: string);
}
type ConversationProps = {
  url?: string; // Picture of user
  name: string; // Name of user
  id: number;
  onPress?(id: number): void;
  lastMessage?: string; // Last message to show
  lastMessageDate?: string; // If date > today, only show yesterday or other
  alert?: number; // If alert && alert > 0 show icon
  state: 'seen' | 'none' | 'sent'; // State to render good icon
  active?: boolean;
  className?: string;
}
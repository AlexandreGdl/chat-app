import { faArchive, faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled, { ThemeContext } from "styled-components";
import { Conversation } from "../conversation/Conversation";
import { faker } from '@faker-js/faker';
import { Separator } from "../separator/Separator";
import { ProfilePicture } from "../profile-picture/ProfilePicture";
import { useContext, useState } from "react";

const friends = Array.from(Array(10).keys()).map((index) => ({
  url: faker.image.avatar(),
  name: faker.name.fullName({ sex: 'female' }),
  lastMessage: faker.lorem.sentence(4),
  alert: Math.floor(Math.random() * 4),
}));

const username = faker.name.fullName({ sex: 'male' });

export const FriendList = (props: FriendListProps) => {
  const themeContext = useContext(ThemeContext);
  const [active, setActive] = useState(0);
  const [search, setSearch] = useState('');

  const shouldDisplay = (id: number) => {
    const friend = friends[id];
    return search ? friend.name.toLowerCase().includes(search.toLowerCase()) : true;
  }

  return (
    <ListContainer>
      <ProfileContainer>
        <ProfilePicture url="https://images.pexels.com/photos/4993292/pexels-photo-4993292.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" />
        <NameContainer>
          <Hello>Good Morning</Hello>
          <Name>{username}</Name>
        </NameContainer>
      </ProfileContainer>
      <Separator height="1" className="mb-6" />
      <AuthorContainer>Made with ❤️ by <a style={{ color: themeContext.colors.BLUE_1 }} rel="noopener noreferrer" target="_blank" href="https://github.com/AlexandreGdl">AlexandreGdl</a></AuthorContainer>
      <InputContainer>
        <FontAwesomeIcon icon={faSearch} size="xs" color="#333" />
        <SearchInput onChange={(e) => setSearch(e.currentTarget.value)} placeholder="Search a conversation" />
      </InputContainer>
      <ArchivedContainer>
        Archived 211 
        <FontAwesomeIcon icon={faArchive} />
      </ArchivedContainer>
      <ConversationContainer>
        {friends.map((friend, index) => shouldDisplay(index) &&  <Conversation key={index} alert={friend.alert} onPress={setActive} id={index} active={index === active} className="mb-2" lastMessage={friend.lastMessage} name={friend.name} state="sent" url={friend.url}/>)}
      </ConversationContainer>
    </ListContainer>
  );
};

const ListContainer = styled.div`
  height: 100%;
  width: 100%;
  background-color: ${props => props.theme.colors.GRAY_1};
  overflow: scroll;
`;

const ConversationContainer = styled.div`
  padding: 0 10px;
`;

const ArchivedContainer = styled.div`
  color: ${props => props.theme.colors.GRAY_3};
  text-align: center;
  display: flex;
  align-items: center;
  gap: 10px;
  justify-content: center;
  margin: 20px 0;
  font-size: 14px;
`;

const InputContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  background-color: #fff;
  width: 90%;
  margin: 0 auto;
  margin-bottom: 10px;
  border-radius: 50px;
  padding: 10px 20px;
`;

const SearchInput = styled.input`
  outline: none;
  -webkit-tap-highlight-color: transparent;
  flex-grow: 1;
`;

const ProfileContainer = styled.div`
  display: flex;
  flex-direction: row;
  padding: 25px 20px;
`;

const NameContainer = styled.div`
  height: auto;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  margin-left: 10px;
  padding: 2px;
`;

const Name = styled.p`
  font-size: 16px;
  font-weight: bold;
  flex-grow: 1;
  color: #333;
`;

const Hello = styled.p`
  font-size: 14px;
  color: ${props => props.theme.colors.GRAY_3};
`;

const AuthorContainer = styled.p`
  margin-bottom: 25px;
  text-align: center;
`;
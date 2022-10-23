import styled from 'styled-components';
import { faker } from '@faker-js/faker';
import './index.css';
import { Chat } from './ui/components/chat/Chat';
import { FriendList } from './ui/components/friend-list/FriendList';
import { Menu } from './ui/components/menu/Menu';

function App() {
  return (
    <Container className="App">
      <Menu />
      <FriendListContainer>
        <FriendList  />
      </FriendListContainer>
      <ContainerChat>
        <Chat url={faker.image.avatar()} name={faker.name.fullName({ sex: 'male' })} />
      </ContainerChat>
    </Container>
  );
}

const Title = styled.h1`
  color: red
`;

const Container = styled.div`
  display: flex;
  flex-direction: row;
  height: 100vh;
`;

const FriendListContainer = styled.div`
  flex-basis: 30%;
`;

const ContainerChat = styled.div`
  flex-grow: 1;
`;

export default App;

import { Profile } from "components/Profile/Profile";
import { Statistics } from "components/Statistics/Statistics";
import { FriendList } from "components/FriendList/FriendList";
import userProfile from '../../user.json'
import statistics from '../../data.json'
import friends from "../../friends.json";
import { MainContainer } from "./App.styled";


export const App = () => {
  return (
    <MainContainer
    style={{
      height: '100vh',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      fontSize: 40,
      color: '#010101'
    }}
    >
      <Profile 
        key={userProfile.tag}
        username={userProfile.username}
        tag={userProfile.tag}
        location={userProfile.location}
        avatar={userProfile.avatar}
        stats={userProfile.stats}
      />

      <Statistics title="Upload stats" stats={statistics}/>
      
      <FriendList friends={friends} />
    </MainContainer>
  );
};

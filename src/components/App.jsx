import {Container} from './Container/Container';
import {Profile} from './Profile/Profile';
import {Statistic} from './Statistics/Statistics';
import {FriendList} from './FriendList/FriendList';
import {TransactionHistory} from './TransactionHistory/TransactionHistory';

import profile from './data/social-profile/user.json';
import statistic from './data/statistics/data.json';
import friends from './data/friend-list/friends.json';
import transaction from './data/transaction/transactions.json'; 


export const App = () => {
  return (
    <Container>

      <Profile
        avatar={profile.avatar}
        tag={profile.tag}
        username={profile.username}
        location={profile.location}
        stats={profile.stats}
      />

      <Statistic title="Upload stats" stats={statistic}/>
      <FriendList friends={friends}/>
      <TransactionHistory transactions={transaction}/>

    </Container>
  );
};

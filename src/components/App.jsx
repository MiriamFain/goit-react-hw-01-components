import Container from './Container/Container';
import TaskList from './TaskList/TaskList';
import TaskItem from './TaskItem/TaskItem';

import Profile from './Profile/Profile';
import user from '../Data/user.json';

import Statistics from './Statistics/Statistics';
import data from '../Data/data.json';

import FriendList from './FriendList/FriendList';
import friends from '../Data/friends.json';

import TransactionHistory from './Transaction/TransactionHistory';
import transactions from '../Data/transactions.json';

export const App = () => {
  return (
    <>
      <Container>
        <TaskList>
          <TaskItem title="TASK 1">
            <Profile
              avatar={user.avatar}
              username={user.username}
              tag={user.tag}
              location={user.location}
              stats={user.stats}
            />
          </TaskItem>
          <TaskItem title="TASK 2">
            <Statistics title="Upload stats" stats={data} />
          </TaskItem>
          <TaskItem title="TASK 3">
            <FriendList friends={friends} />
          </TaskItem>
          <TaskItem title="TASK 4">
            <TransactionHistory items={transactions} />
          </TaskItem>
        </TaskList>
      </Container>
    </>
  );
};

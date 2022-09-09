import Container from './Container/Container';
import TaskList from './TaskList/TaskList';
import TaskItem from './TaskItem/TaskItem';

import Profile from './Profile/Profile';
import user from '../Data/user.json';

import Statistics from './Statistics/Statistics';
import data from '../Data/data.json';

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
            <Statistics
              key={data.id}
              label={data.label}
              percentage={data.percentage}
            />
          </TaskItem>
        </TaskList>
      </Container>
    </>
  );
};

import FriendListItem from './FriendListItem';
import PropTypes from 'prop-types';
import s from '../../Styles/FriendList.module.css';

const FriendList = ({ friends }) => {
  return (
    <ul className={s.friend__list}>
      {friends.map(({ avatar, name, isOnline, id }) => {
        return (
          <FriendListItem
            key={id}
            avatar={avatar}
            name={name}
            isOnline={isOnline}
          />
        );
      })}
    </ul>
  );
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }).isRequired
  ).isRequired,
};

export default FriendList;

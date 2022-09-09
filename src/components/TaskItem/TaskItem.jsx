import React from 'react';
import PropTypes from 'prop-types';
import s from '../../Styles/TaskItem.module.css';

const TaskItem = ({ title, children }) => {
  return (
    <li className={s.item}>
      <h2 className={s.title}>{title}</h2>
      {children}
    </li>
  );
};

TaskItem.propTypes = {
  title: PropTypes.string,
};

export default TaskItem;

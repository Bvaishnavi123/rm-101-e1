import React from "react";
import styles from "./taskHeader.module.css";
import data from '../../data/tasks.json'

const TaskHeader = () => {
  // sample values to be replaced
  let totalTask = data.length;
  let unCompletedTask = 0;

  // NOTE: do not delete `data-testid` key value pair
  return (
    <div data-testid="task-header" className={styles.taskHeader}>
      <b data-testid="header-remaining-task">{unCompletedTask}</b>
      <b data-testid="header-total-task">{`Total Task is ${totalTask}`}</b>
    </div>
  );
};

export default TaskHeader;

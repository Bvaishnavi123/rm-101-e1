import React from "react";
import styles from "./task.module.css";
import {Counter} from '../Counter/index'
import data from '../../data/tasks.json'

const Task = () => {
  // NOTE: do not delete `data-testid` key value pair
  return (
    <>
    {data.map((e)=>{
      return <li data-testid="task" className={styles.task}>
      <input type="checkbox" data-testid="task-checkbox" /> 
      <div data-testid="task-text">{e.text}</div>
     <Counter count={e.count}/>
      <button data-testid="task-remove-button">Remove</button>
    </li>
    })}
    </>
    
   
  );
};

export default Task;

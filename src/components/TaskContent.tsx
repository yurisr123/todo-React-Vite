import styles from "./TaskContent.module.css";
import { BiTrash } from "react-icons/bi";

import { useGlobalCount } from '../context/GlobalContext';

import {toDoProps} from "../App"
import { useState } from "react";


type Props ={
  item : toDoProps;
  onDeleteTask: (taskToDelete: number)=>void;
  
}





export function TaskContent({item,onDeleteTask} : Props ) {
  const [isChecked, setIsChecked] = useState(item.done)
 
  // Count Task Check
  const {taskCheckCount, setTaskCheckCount} = useGlobalCount()

  // Count Task
  const { count, setCount } = useGlobalCount();

// Count check task
function incrementCountCheck(){
  setTaskCheckCount(taskCheckCount + 1)
}

function decrementCountCheck(){
  setTaskCheckCount(taskCheckCount - 1)
}

// Count delete task
function decrementCount(){
    setCount(count -1)
}

function handleDeleteItem(){
  onDeleteTask(item.id)

  // Verify if checkbox is true to decrease taskCheckCount
  if(isChecked){
    decrementCountCheck() 
  }
  
  
  decrementCount()
}

function handleCheck(){
  !isChecked ? incrementCountCheck()  : decrementCountCheck() 



  setIsChecked(!isChecked)
  
  

  
}



  return (
    <div className={styles.divTask}>
      <div>
        <input className={styles.inputCheck}  type="checkbox" id="taskCheck" checked={isChecked} onChange={handleCheck}  />
      </div>

      <div className={styles.content}>
        <p
          className={isChecked ? styles.taskChecked : styles.taskUnchecked}
        >
          {item.name}
        </p>
      </div>
      <button onClick={handleDeleteItem}  className={styles.button}>
        <BiTrash size={20} />
      </button>

      
    </div>
  );
}

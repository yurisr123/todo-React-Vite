import "./globals.css";
import { Header } from "./components/Header";

import styles from "./App.module.css";
import { AddTask } from "./components/AddTask";
import { EmptyTask } from "./components/EmptyTask";
import { TaskContent } from "./components/TaskContent";
import { useState } from "react";

// Para usar o count da task global
import { GlobalProvider } from './context/GlobalContext';

export type toDoProps ={
  id: number;
  name: string;
  done: boolean;
}


function App() {

  const [toDoTasks, setToDoTasks] = useState<toDoProps[]>([
   
  ])
  // console.log(toDoTasks.length === 0 ? 'Não existe valor' : 'Existe valor')
  // console.log(toDoTasks)



  function handleDeleteTask(taskToDelete: number){
    const taskWithoutDeleteOne = toDoTasks.filter((toDoProps)=>{
      return toDoProps.id != taskToDelete; 
    })
   


    setToDoTasks(taskWithoutDeleteOne)
  }


  

  function handleAddTask(taskName : string){
    const newList = [...toDoTasks]
    newList.push({
      id: toDoTasks.length + 1,
      name: taskName,
      done: false
    })
    setToDoTasks(newList)
  }

  return (
    <>
    <GlobalProvider>
      <Header />

      

      <AddTask  onSubmit={handleAddTask} />

      {toDoTasks.length=== 0 ? <EmptyTask/> 
      : <main className={styles.main}>
        {toDoTasks.map((item) => {
          return (
            <TaskContent  onDeleteTask={handleDeleteTask} key={item.id} item={item}/> 
            
          ) 
        })}
      </main>
      }
      </GlobalProvider>
    </>
    
  );

  
}

export default App;



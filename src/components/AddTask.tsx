import styles from "./AddTask.module.css";
import { IoAddCircleOutline } from "react-icons/io5";
import { FormEvent, useEffect, useRef, useState } from "react";


import { useGlobalCount } from '../context/GlobalContext';

 type Props={
  onSubmit: (taskName: string)=>void;
  
}

export function AddTask({onSubmit} : Props) {
  // Count Task Check
  const {taskCheckCount} = useGlobalCount()

  // Count Task
  const {count, setCount} = useGlobalCount();

  // Count Task add
  function incrementCount () {
    setCount(count + 1);
  }

 


  // Referência para o input
  const inputRef = useRef<HTMLInputElement | null>(null);

  // Focus no Input
  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  const [inputText, setInputText] = useState("");
 

  function handleIncludeTask(event: FormEvent) {
    event.preventDefault();

    const inputTask = document.getElementById("inputTask") as HTMLInputElement | null;

    if (inputTask) {
      inputTask.focus();
    }
  
    
    incrementCount()

   

    onSubmit(inputText)

    setInputText("");
  }

  return (
    <aside>
      <form onSubmit={handleIncludeTask}>
        <div className={styles.divAsideTask}>
          <input
            ref={inputRef}
            id="inputTask"
            type="text"
            value={inputText}
            placeholder="Adicione uma nova tarefa"
            onChange={(e) => setInputText(e.target.value)}
          />
          <button type="submit">
            Criar <IoAddCircleOutline size={23} />
          </button>
        </div>
      </form>
      <div className={styles.header}>
        <div className={styles.divHeaderCreated}>
          <p>
            Tarefas Criadas <span>{count}</span>
          </p>
        </div>

        <div className={styles.divHeaderChecked}>
          <p>
            Concluídas <span>{taskCheckCount} de {count}</span>
          </p>

         
        </div>
      </div>
    </aside>
  );
}

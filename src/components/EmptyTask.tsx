import styles from "./EmptyTask.module.css";
import { FaClipboardList } from "react-icons/fa6";

export function EmptyTask() {
  return (
    <main className={styles.main}>
      <div className={styles.divMain}>

        <div className={styles.content}>
          <FaClipboardList size={56} className={styles.icon} />
        
            <p className={styles.p1}>Você ainda não tem tarefas cadastradas</p>
            <p className={styles.p2}>Crie tarefas e organize seus itens a fazer</p>
        </div>
      </div>
    </main>
  );
}

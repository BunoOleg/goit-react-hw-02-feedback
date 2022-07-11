import styles from './Statistics.module.css';

export default function Feedback({good, neutral, bad, total, positivePercentage}) {
  return (
    <ul className={styles.listItem}>
      <li className={styles.item}><span className={styles.field}>Good: </span><span className={styles.value}>{good}</span></li>
      <li className={styles.item}><span className={styles.field}>Neutral: </span><span className={styles.value}>{neutral}</span></li>
      <li className={styles.item}><span className={styles.field}>Bad: </span><span className={styles.value}>{bad}</span></li>
      <li className={styles.item}><span className={styles.field}>Total: </span><span className={styles.value}>{total}</span></li>
      <li className={styles.item}><span className={styles.field}>Positive feedback: </span><span className={styles.value}>% {positivePercentage}</span></li>
    </ul>
  )
};
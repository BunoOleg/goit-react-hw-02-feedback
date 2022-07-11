import styles from './FeedbackOptions.module.css';

export default function FeedbackOptions({buttonsName, onLeaveFeedback}) {
  const btn = Object.keys(buttonsName).map((el, index) => 
    {return (<button  
      className={styles.btn} 
      name={el} 
      key={index} 
      onClick={onLeaveFeedback}>{el.charAt(0).toUpperCase() + el.slice(1)}</button>)})  
  return (<div>{btn}</div>)
}
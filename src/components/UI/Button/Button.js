import styles from './button.module.sass'

function Button({ text, onVisible }) {
  return (
    <button className={styles.btn} onClick={() => onVisible(true)}>{text}</button>
  )
}

export default Button
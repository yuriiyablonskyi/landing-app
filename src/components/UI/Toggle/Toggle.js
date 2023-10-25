import styles from './toggle.module.sass'

function Toggle() {
  return (
    <div className={styles.toggle}>
      <div className={styles.item}></div>
      <div className={styles.item}></div>
      <div className={styles.item}></div>
    </div>
  )
}

export default Toggle
import styles from './Toggle.module.sass'

const Toggle = () => {
  return (
    <div className={styles.toggle}>
      <div className={styles.item}></div>
      <div className={styles.item}></div>
      <div className={styles.item}></div>
    </div>
  )
}

export default Toggle
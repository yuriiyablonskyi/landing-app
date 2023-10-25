import styles from './input.module.sass'

function Input({ type, placeholder }) {
  return (
    <input className={styles.input} type={type} placeholder={placeholder} />
  )
}

export default Input
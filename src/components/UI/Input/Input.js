import styles from './Input.module.sass'

const Input = ({ type, placeholder }) => {
  return (
    <input className={styles.input} type={type} placeholder={placeholder} />
  )
}

export default Input
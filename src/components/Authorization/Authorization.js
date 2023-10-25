import styles from './authorization.module.sass'
import Input from '../UI/Input/Input'
import Button from '../UI/Button/Button'

function Authorization({ onVisible }) {
  return (
    <div className={styles.authorization}>
      <form className={styles.form}>
        <Input type="text" placeholder="username" />
        <Input type="password" placeholder="password" />
        <Button text="SIGN IN" />
      </form>
      <button onClick={() => onVisible(false)} className={styles.btn}>&#10006;</button>
    </div>
  )
}

export default Authorization


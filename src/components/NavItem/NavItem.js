import styles from './navItem.module.sass'

function NavItem({ text }) {
  return (
    <a className={styles.item} href="#">{text}</a>
  )
}

export default NavItem
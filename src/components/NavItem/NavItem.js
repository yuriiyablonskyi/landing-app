import styles from './NavItem.module.sass'

const NavItem = ({ text }) => {
  return (
    <a className={styles.item} href="#">{text}</a>
  )
}

export default NavItem
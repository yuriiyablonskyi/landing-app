import logo from '../../logo.png'
import NavItem from '../NavItem/NavItem'
import Button from '../UI/Button/Button'
import styles from './header.module.sass'

function Header({ onVisible }) {
  return (
    <header className={styles.header}>
      <a href="#">
        <img src={logo} alt="logo" className="img" />
      </a>

      <nav className="nav">
        <NavItem text="Page-1" />
        <NavItem text="Page-2" />
        <NavItem text="Page-3" />
        <NavItem text="Page-4" />
        <NavItem text="Page-5" />
        <Button text="Log in" onVisible={onVisible} />
      </nav>
    </header>
  )
}

export default Header



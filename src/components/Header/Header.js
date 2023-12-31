import styles from './Header.module.sass'
import logo from '../../logo.svg'
import NavItem from '../navItem/NavItem'
import Button from '../UI/button/Button'

const Header = ({ onVisible }) => (
  <header className={styles.header}>
    <a href="#">
      <img src={logo} alt="logo" className={styles.img} />
    </a>

    <nav>
      <NavItem text="Page-1" />
      <NavItem text="Page-2" />
      <NavItem text="Page-3" />
      <NavItem text="Page-4" />
      <NavItem text="Page-5" />
      <Button text="Log in" onVisible={onVisible} />
    </nav>
  </header>
)

export default Header


